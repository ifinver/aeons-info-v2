# 永恒的信息 v2 (Aeons Info v2)

基于 Astro 构建的现代化知识库网站，专注于意识探索、灵性修行、出体体验等领域的经典文献和实践指导。

## 特性

- ✨ 基于 Astro 的现代化静态站点生成
- 🚀 配置 Cloudflare Workers 部署
- 🎨 使用 Tailwind CSS 的响应式设计
- 📚 左侧导航，右侧内容的清晰布局
- 📝 支持 Markdown 内容管理
- 🔍 按目录分级展示文章

## 项目结构

```
src/
├── components/          # 组件
│   ├── Navigation.astro # 左侧导航组件
│   └── MainContent.astro# 主内容区组件
├── content/            # 内容集合
│   ├── posts/          # 文章内容
│   └── practice/       # 修行指导
├── layouts/            # 布局模板
│   └── Layout.astro    # 主布局
└── pages/              # 页面路由
    ├── index.astro     # 首页
    ├── practice.astro  # 修行指导页
    └── posts/          # 文章页面
        └── [...slug].astro # 动态路由
```

## 内容分类

### 主要文章
- 30天学会灵魂出体
- 星体投射论文
- 出体技术手册

### 瑜伽经典
- 多个译本的帕坦伽利瑜伽经
- 不同学者的注释和解读

### 修行指导
- 系统的灵性修行方法
- 实践建议和技巧

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 部署

项目已配置 Cloudflare Workers 适配器，可以直接部署到 Cloudflare Pages。

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Cloudflare Workers](https://workers.cloudflare.com/) - 部署平台
- TypeScript - 类型安全

## 从 Hugo 迁移

本项目是从原有的 Hugo 项目 (aeons-info) 迁移而来，保留了所有原始内容，并优化了用户体验和现代化的技术栈。

## 许可证

内容遵循原始许可证，代码部分采用 MIT 许可证。