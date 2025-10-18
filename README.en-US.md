<p align="center">
 <img alt="antd-admin" height="268" src="./_assets/info.png">
</p>

<h1 align="center">Moderate Admin</h1>


<div align="center">

A modern enterprise-level frontend solution for admin panels, built with Next.js + Shadcn UI + Tailwind CSS for an ultimate development experience.
<br />
Supports React 19, Next.js 15+, Shadcn UI, Tailwind CSS 4.x, multi-platform adaptation, and embraces the latest ecosystem.

[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?style=flat-square)](https://nextjs.org/)
[![Shadcn%20UI](https://img.shields.io/badge/Shadcn--UI-%F0%9F%92%96-lightgrey?style=flat-square)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat-square)](https://redux-toolkit.js.org/)
[![License](https://img.shields.io/github/license/DLand-Team/moderate-react-admin?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/DLand-Team/moderate-react-admin/pulls)

</div>

---

[中文版 (Switch to Chinese)](./README.md)

---

## Resources

- [Online Preview](http://111.229.110.163/)
- [Documentation](https://dland-team.github.io/moderate-react-admin/)

## Core Features

- 🍎 **Seamless ruoyi-pro Integration**  
  Built-in dual token mechanism, user/role/menu management and other core features are integrated out of the box, no configuration required.

- 🍇 **True Business Layering**  
  Clear code separation, business logic decoupled from UI, easy to maintain and extend.

- 🥥 **Perfect NextJS Adaptation**  
  Supports keepalive in App mode, built-in Tab window for better multitasking experience.

- 🥕 **Business Plugin Architecture**  
  Business capabilities are pluggable, supporting component, Provider, router, i18n and more, enabling true reuse and accumulation.

- 🍞 **Enhanced Routing System**  
  Supports KeepAlive and multi-tab, with useActive hook for reliable state listening.

- 🥑 **Ultimate State Management**  
  Deep Redux integration, simple syntax, zero learning curve, friendly type hints, easy to maintain.

## Tech Stack

- React 19
- Next.js 15+
- Shadcn UI
- Tailwind CSS 4.x
- Redux Eazy
- TypeScript 5.x

### UI Preview

| ![](_assets/shadcn-nextjs-2.png) | ![](_assets/shadcn-nexts-1.png) |
| :------------------------------: | :-----------------------------: |

## ruoyi-pro Core Features

### User Management

![User](./_assets/user.png)

### Role Management

![Role](./_assets/role.png)

### Menu Management

![Menu](./_assets/menu.png)

### Code Generation

![Code](./_assets/code.png)

## Quick Start

### Frontend

```bash
# Install dependencies
pnpm i

# Start dev server
cd frontend/apps/admin-shadcn-nextjs
pnpm run dev
```

Visit http://localhost:3002 to see the app.

### Backend

Backend APIs need to be implemented or integrated separately. The project is configured to work with ruoyi-pro backend by default. You can modify the API address based on your needs.

## Project Structure

This project uses turborepo to manage a monorepo, with a clear structure for easy extension and maintenance:

```
moderate-react-admin/
├── frontend/
│   ├── apps/
│   │   └── admin-shadcn-nextjs/  # Main app
│   └── packages/
│       ├── eslint-config/         # ESLint config
│       ├── typescript-config/     # TypeScript config
│       └── ui/                    # Shared UI components
└── _assets/                       # Documentation assets
```

### Local Development

1. Install dependencies (in project root):
   ```bash
   pnpm install
   ```
2. Start the frontend project:
   ```bash
   pnpm --filter admin-shadcn dev
   ```
   Or enter `frontend/apps/admin-shadcn-nextjs` and run:
   ```bash
   pnpm run dev
   ```

---

## Community

Welcome to join the "Idle D Island 🏝️" tech group! Here you'll find engineers from top companies, indie developers, outsourcing teams, and friendly folks. The atmosphere is pure, tech discussions are active, and you're warmly invited!

- **Idle D Island Group 1** (500+ members): 551406017
- **Idle D Island Group 2**: 1002504812

---
