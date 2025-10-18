# 迁移指南

本指南帮助你完成从旧版本到新版本的迁移，以及如何配置你的 Java 后端。

## 从旧版本迁移

如果你之前使用的是包含 Ant Design 版本的项目，请按以下步骤迁移：

### 1. 备份当前项目

```bash
# 创建备份
cp -r moderate-react-admin moderate-react-admin-backup
```

### 2. 拉取最新代码

```bash
cd moderate-react-admin
git pull origin main
```

### 3. 清理旧依赖

```bash
cd frontend
rm -rf node_modules pnpm-lock.yaml
rm -rf apps/admin-shadcn-nextjs/.next
```

### 4. 重新安装依赖

```bash
pnpm install
```

### 5. 迁移配置文件

如果你有自定义配置，需要手动迁移：

#### 环境变量
将旧的环境变量迁移到 `frontend/apps/admin-shadcn-nextjs/.env.local`：

```env
# API 配置
NEXT_PUBLIC_API_BASE_URL=http://your-api-url

# 应用配置
NEXT_PUBLIC_APP_NAME=Your App Name
NEXT_PUBLIC_APP_VERSION=1.0.0
```

#### API 地址配置
编辑 `frontend/apps/admin-shadcn-nextjs/next.config.ts`：

```typescript
async rewrites() {
  return [
    {
      source: "/admin-api/:path*",
      destination: "http://your-java-backend:port/admin-api/:path*",
    },
  ];
}
```

## Java 后端对接

### 1. API 接口规范

项目默认期望后端提供以下接口：

#### 认证接口
```
POST /admin-api/system/auth/login          # 用户登录
POST /admin-api/system/auth/logout         # 用户登出
POST /admin-api/system/auth/refresh-token  # 刷新 token
GET  /admin-api/system/auth/get-permission-info  # 获取用户权限信息
```

#### 用户管理
```
GET    /admin-api/system/user/page         # 获取用户列表
POST   /admin-api/system/user/create       # 创建用户
PUT    /admin-api/system/user/update       # 更新用户
DELETE /admin-api/system/user/delete       # 删除用户
```

#### 角色管理
```
GET    /admin-api/system/role/page         # 获取角色列表
POST   /admin-api/system/role/create       # 创建角色
PUT    /admin-api/system/role/update       # 更新角色
DELETE /admin-api/system/role/delete       # 删除角色
```

#### 菜单管理
```
GET    /admin-api/system/menu/list         # 获取菜单列表
POST   /admin-api/system/menu/create       # 创建菜单
PUT    /admin-api/system/menu/update       # 更新菜单
DELETE /admin-api/system/menu/delete       # 删除菜单
```

### 2. 响应格式

后端 API 应该返回统一的响应格式：

```typescript
{
  "code": 0,           // 0 表示成功，其他表示错误码
  "data": any,         // 响应数据
  "msg": "string"      // 响应消息
}
```

### 3. 认证方式

项目使用双 token 机制：

1. **Access Token**：短期令牌，用于 API 请求
2. **Refresh Token**：长期令牌，用于刷新 Access Token

后端需要在响应头中返回：
```
Authorization: Bearer <access-token>
```

### 4. 错误码定义

建议使用以下错误码规范：

```typescript
// 成功
SUCCESS = 0

// 客户端错误
BAD_REQUEST = 400
UNAUTHORIZED = 401
FORBIDDEN = 403
NOT_FOUND = 404

// 服务端错误
INTERNAL_ERROR = 500
SERVICE_UNAVAILABLE = 503
```

## 修改前端 API 配置

### 1. 修改 HTTP 配置

编辑 `frontend/apps/admin-shadcn-nextjs/src/common/http/config.ts`：

```typescript
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/admin-api',
  timeout: 30000,
  withCredentials: true,
}
```

### 2. 修改 API 服务

如果你的 API 接口路径不同，需要修改对应的 API 服务文件：

- 认证相关：`src/service/stores/authStore/api.ts`
- 用户管理：`src/service/stores/sysStore/api.ts`

### 3. 自定义拦截器

编辑 `src/common/http/service.ts` 添加自定义请求/响应拦截器。

## 开发环境配置

### 1. 本地开发代理

如果后端在本地运行，编辑 `next.config.ts`：

```typescript
async rewrites() {
  return [
    {
      source: "/admin-api/:path*",
      destination: "http://localhost:8080/admin-api/:path*",
    },
  ];
}
```

### 2. 跨域配置

如果遇到跨域问题，需要在 Java 后端配置 CORS：

```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:3002");
        config.setAllowCredentials(true);
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        
        return new CorsFilter(source);
    }
}
```

## 生产环境配置

### 1. 环境变量

创建 `.env.production`：

```env
NEXT_PUBLIC_API_BASE_URL=https://your-production-api.com
NEXT_PUBLIC_APP_NAME=Your App
```

### 2. 构建配置

```bash
# 构建
cd frontend/apps/admin-shadcn-nextjs
pnpm run build

# 部署
# 方式一：使用 PM2
pnpm run prod

# 方式二：使用 Docker
docker build -t admin-app .
docker run -p 3002:3002 admin-app
```

### 3. Nginx 反向代理

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /admin-api {
        proxy_pass http://your-java-backend:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 常见问题

### 1. Token 失效问题

如果遇到频繁需要重新登录：

- 检查后端 token 过期时间配置
- 检查前端 refresh token 逻辑
- 查看 `src/common/http/service.ts` 中的 token 刷新逻辑

### 2. API 404 错误

- 检查 `next.config.ts` 中的 rewrites 配置
- 确认后端 API 路径是否正确
- 查看浏览器 Network 面板确认请求 URL

### 3. CORS 跨域错误

- 在后端配置 CORS
- 或使用 Next.js 的 rewrites 代理请求

### 4. 构建错误

如果遇到构建错误：

```bash
# 清理缓存
rm -rf .next
rm -rf node_modules
pnpm install
pnpm run build
```

## 测试清单

迁移完成后，请测试以下功能：

- [ ] 用户登录/登出
- [ ] Token 自动刷新
- [ ] 用户列表查询
- [ ] 用户创建/编辑/删除
- [ ] 角色管理
- [ ] 菜单管理
- [ ] 权限控制
- [ ] 国际化切换
- [ ] 响应式布局

## 获取帮助

如果遇到问题：

1. 查看 [QUICK_START.md](./QUICK_START.md)
2. 查看 [README.md](./README.md)
3. 查看浏览器控制台错误信息
4. 提交 GitHub Issue

## 相关文档

- [若依（ruoyi-pro）后端项目](https://gitee.com/zhijiantianya/ruoyi-vue-pro)
- [Next.js 文档](https://nextjs.org/docs)
- [Shadcn UI 文档](https://ui.shadcn.com/)
- [Redux Eazy 文档](https://github.com/easy-redux/redux-eazy)

