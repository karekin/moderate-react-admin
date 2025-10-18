# 快速开始指南

## 环境要求

- Node.js >= 18
- pnpm >= 9.0.0

## 安装步骤

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd moderate-react-admin
```

### 2. 安装依赖

```bash
# 在项目根目录执行
cd frontend
pnpm install
```

### 3. 配置后端 API

编辑 `frontend/apps/admin-shadcn-nextjs/next.config.ts` 文件，修改后端 API 地址：

```typescript
async rewrites() {
  return [
    {
      source: "/admin-api/:path*",
      destination: "http://your-backend-url:port/admin-api/:path*",
    },
  ];
}
```

### 4. 启动开发服务器

```bash
# 方式一：在 frontend 目录
pnpm --filter admin-shadcn dev

# 方式二：进入应用目录
cd apps/admin-shadcn-nextjs
pnpm run dev
```

### 5. 访问应用

打开浏览器访问 http://localhost:3002

## 生产构建

```bash
# 构建
cd frontend/apps/admin-shadcn-nextjs
pnpm run build

# 启动生产服务器
pnpm run start
```

## 常见问题

### 依赖安装失败

确保使用 pnpm 而不是 npm 或 yarn：

```bash
npm install -g pnpm@9.0.0
```

### 端口被占用

修改 `package.json` 中的启动脚本，将端口 3002 改为其他端口。

### 构建错误

清理缓存后重新构建：

```bash
rm -rf .next node_modules
pnpm install
pnpm run build
```

## 目录说明

```
moderate-react-admin/
├── frontend/
│   ├── apps/
│   │   └── admin-shadcn-nextjs/     # 主应用
│   │       ├── src/
│   │       │   ├── app/             # Next.js 页面
│   │       │   ├── components/      # 组件
│   │       │   ├── service/         # Redux stores
│   │       │   ├── common/          # 工具函数
│   │       │   └── i18n/            # 国际化
│   │       └── public/              # 静态资源
│   └── packages/
│       ├── eslint-config/           # ESLint 配置
│       ├── typescript-config/       # TypeScript 配置
│       └── ui/                      # 共享组件
└── _assets/                         # 文档资源
```

## 开发建议

1. 使用 TypeScript 进行开发，享受类型提示
2. 遵循 ESLint 规则，保持代码质量
3. 使用 Shadcn UI 组件，保持 UI 一致性
4. 合理使用 Redux Eazy 管理全局状态
5. 利用 Next.js 的 App Router 进行页面开发

## 技术栈

- React 19
- Next.js 15+ (App Router)
- Shadcn UI
- Tailwind CSS 4.x
- Redux Eazy
- TypeScript 5.x

## 获取帮助

- 查看 [README.md](./README.md)
- 查看 [应用文档](./frontend/apps/admin-shadcn-nextjs/README.md)
- 提交 Issue

