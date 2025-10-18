<p align="center">
 <img alt="antd-admin" height="268" src="./_assets/info.png">
</p>

<h1 align="center">Moderate Admin</h1>



<div align="center">

现代化企业级中后台前端解决方案，基于 Next.js + Shadcn UI + Tailwind CSS，极致开发体验。
<br />
支持 React 19，Next.js 15+，Shadcn UI，Tailwind CSS 4.x，多端适配，拥抱最新生态。

[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?style=flat-square)](https://nextjs.org/)
[![Shadcn%20UI](https://img.shields.io/badge/Shadcn--UI-%F0%9F%92%96-lightgrey?style=flat-square)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat-square)](https://redux-toolkit.js.org/)
[![License](https://img.shields.io/github/license/DLand-Team/moderate-react-admin?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/DLand-Team/moderate-react-admin/pulls)

</div>

---

[English Version (Switch to English)](./README.en-US.md)

---

## 资源链接

- [在线预览](http://111.229.110.163/)
- [文档地址](https://dland-team.github.io/moderate-react-admin/)

## 核心特性

- 🍎 **无缝对接 ruoyi-pro**  
  内置双 token 机制，用户管理、角色管理、菜单管理等核心功能已对接，无需配置，开箱即用。

- 🍇 **真正的业务分层**  
  代码分层明确，业务与 UI 解耦，结构清晰，易于维护与扩展。

- 🥥 **NextJS 完美适配**  
  支持 App 模式下的 keepalive，配套 Tab 窗口，提升多任务场景体验。

- 🥕 **业务插件化**  
  业务能力可插拔，支持组件、Provider、路由、i18n 等插件式接入，实现真正的复用和沉淀。

- 🍞 **增强路由系统**  
  支持 KeepAlive 和多标签页，具备 useActive 监听 hook，可靠性更强。


- 🥑 **极致状态管理**  
  深度整合 Redux 生态，语法简洁，上手无门槛，类型提示友好，易于维护。

## 技术选型

- React 19
- Next.js 15+
- Shadcn UI
- Tailwind CSS 4.x
- Redux Eazy
- TypeScript 5.x

### 界面预览

| ![](_assets/shadcn-nextjs-2.png) | ![](_assets/shadcn-nexts-1.png) |
| :------------------------------: | :-----------------------------: |

## ruoyi-pro 核心功能对接

### 用户管理

![图片描述](./_assets/user.png)

### 角色管理

![图片描述](./_assets/role.png)

### 菜单管理

![图片描述](./_assets/menu.png)

### 代码生成

![图片描述](./_assets/code.png)

## 快速开始

### 前端启动

```bash
# 安装依赖
pnpm i

# 启动开发服务器
cd frontend/apps/admin-shadcn-nextjs
pnpm run dev
```

访问 http://localhost:3002 即可查看应用。

### 后端说明

后端接口需要自行实现或对接。项目默认对接若依（ruoyi-pro）后端系统，你可以根据实际情况修改 API 地址。

## 项目结构说明

本项目采用 turborepo 管理 monorepo，结构清晰，易于扩展和维护：

```
moderate-react-admin/
├── frontend/
│   ├── apps/
│   │   └── admin-shadcn-nextjs/  # 主应用
│   └── packages/
│       ├── eslint-config/         # ESLint 配置
│       ├── typescript-config/     # TypeScript 配置
│       └── ui/                    # 共享 UI 组件库
└── _assets/                       # 项目文档图片资源
```

### 本地运行

1. 安装依赖（在项目根目录）：
   ```bash
   pnpm install
   ```
2. 启动前端项目：
   ```bash
   pnpm --filter admin-shadcn dev
   ```
   或进入 `frontend/apps/admin-shadcn-nextjs` 目录后运行：
   ```bash
   pnpm run dev
   ```

---

## 社区交流

欢迎加入「闲 D 岛 🏝️」技术交流群，这里有大厂工程师、独立开发者、外包团队和热心小伙伴，氛围纯净，技术交流活跃，期待你的加入！

- **闲 D 岛 1 群**（500+ 人）：551406017
- **闲 D 岛 2 群**：1002504812

---
