# Moderate Admin - Shadcn Next.js

现代化企业级中后台前端解决方案，基于 **Next.js 15+**、**Shadcn UI** 和 **Tailwind CSS 4.x** 构建。

## 技术栈

- **React 19**：最新版本的 React 框架
- **Next.js 15+**：支持 App Router 和 Turbopack，性能优异，SEO 友好
- **Shadcn UI**：基于 Radix UI 的现代化组件库，高度可定制
- **Tailwind CSS 4.x**：原子化 CSS 框架，快速构建美观界面
- **Redux Eazy**：简化的 Redux 状态管理方案
- **TypeScript 5.x**：类型安全的 JavaScript 超集

## 主要特性

- ✨ **App Router + KeepAlive**：支持页面级缓存，切换路由时保持组件状态
- 🚀 **强化路由系统**：支持嵌套路由、动态路由、多标签页、权限控制
- 💪 **高效状态管理**：使用 Redux Eazy 统一管理全局状态
- 🎨 **现代 UI 体验**：Shadcn UI + Tailwind CSS，快速搭建美观界面
- 🌐 **国际化支持**：内置 i18next，支持多语言切换
- 📱 **响应式设计**：完美支持桌面端和移动端

## 项目结构

```
admin-shadcn-nextjs/
├── src/
│   ├── app/              # Next.js App Router 页面与布局
│   ├── components/       # 通用 React 组件
│   ├── service/          # Redux stores & API services
│   ├── router/           # 路由配置和 KeepAlive
│   ├── common/           # 工具函数和 Hooks
│   ├── shadcn/           # Shadcn UI 组件
│   └── i18n/             # 国际化配置
├── public/               # 静态资源
└── README.md
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 启动生产服务器
pnpm run start
```

访问 http://localhost:3002 即可查看应用。

## 开发指南

### 添加新页面

在 `src/app` 目录下创建新的路由文件夹，Next.js 会自动识别并生成路由。

### 添加 Shadcn UI 组件

```bash
# 使用 shadcn-ui CLI 添加组件
npx shadcn-ui@latest add <component-name>
```

### 状态管理

使用 Redux Eazy 进行状态管理，在 `src/service/stores` 目录下创建新的 store。

### 国际化

在 `src/i18n/locales` 目录下添加新的语言文件。

## 技术亮点

- **Shadcn UI**：组件高度可定制，支持 Tailwind CSS，轻松实现个性化主题
- **Next.js**：支持 SSR、SSG、ISR，App Router 提供灵活的路由和布局能力
- **TypeScript**：完整的类型支持，提升开发效率和代码质量
- **响应式设计**：支持无障碍访问，完美适配各种设备
