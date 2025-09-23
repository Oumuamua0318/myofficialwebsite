# 灵犀智能体工作室官网

> 助力汽车行业AI智能化转型，为车企和经销商提供专业AI解决方案

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + Shadcn UI
- **动画**: Framer Motion
- **图标**: Lucide React
- **构建工具**: Vite (已迁移到 Next.js)

## 📦 项目特性

- ✅ **现代化技术栈**: Next.js App Router + TypeScript
- ✅ **组件化设计**: Shadcn UI + Radix UI 组件库
- ✅ **响应式设计**: 移动端优先的响应式布局
- ✅ **性能优化**: React Server Components + 图片优化
- ✅ **SEO友好**: 完整的 metadata 配置
- ✅ **动画效果**: Framer Motion 流畅动画
- ✅ **主题支持**: 明暗主题切换
- ✅ **类型安全**: 完整的 TypeScript 类型定义

## 🛠️ 开发指南

### 环境要求

- Node.js 18+ 
- pnpm (推荐) 或 npm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── [路由]/            # 各页面路由
├── components/            # React 组件
│   ├── ui/               # Shadcn UI 基础组件
│   ├── navbar.tsx        # 导航栏
│   ├── hero-section.tsx  # 首页英雄区
│   └── ...               # 其他页面组件
├── lib/                  # 工具函数
│   ├── utils.ts          # 通用工具
│   └── constants.ts      # 常量定义
├── hooks/                # 自定义 Hooks
├── types/                # TypeScript 类型定义
└── ...
```

## 🎨 组件规范

### 命名约定
- 组件文件使用 kebab-case: `hero-section.tsx`
- 组件函数使用 PascalCase: `HeroSection`
- 目录使用 kebab-case: `user-voice/`

### 代码风格
- 使用函数式组件 + TypeScript
- 优先使用 React Server Components
- 最小化 `'use client'` 使用
- 使用 Tailwind CSS 进行样式设计

## 🔧 配置说明

### Tailwind CSS
- 配置文件: `tailwind.config.ts`
- 支持自定义主题和动画
- 集成了 Shadcn UI 的设计系统

### Next.js
- 配置文件: `next.config.js`
- 支持图片优化和远程图片
- 启用了实验性功能优化

## 📱 响应式设计

- **移动端**: < 768px
- **平板**: 768px - 1024px  
- **桌面端**: > 1024px

## 🚀 部署

### Vercel (推荐)
```bash
npx vercel
```

### 其他平台
```bash
pnpm build
# 部署 /out 目录
```

## 📄 许可证

© 2024 灵犀智能体工作室. 保留所有权利.

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

---

**联系我们**: guanyq01@insightmc.com.cn | 18652076653