# Java Interview Questions Website

一个精心整理的Java面试题网站，帮助开发者准备Java技术面试。

## 功能特性

- 📚 **六大知识分类**：Java基础、面向对象、集合框架、并发编程、JVM原理、高级特性
- 🎯 **10道精选面试题**：包含详细解答和代码示例
- 💡 **交互式学习**：点击查看答案，支持展开/收起
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🎨 **美观界面**：现代化UI设计，良好的用户体验

## 技术栈

- **前端**：React 18 + TypeScript
- **构建工具**：Vite
- **样式**：Tailwind CSS
- **路由**：React Router DOM

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 GitHub Pages

以下是完整的部署步骤：

### 1. 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 创建一个新仓库（建议仓库名：`java-interview-questions`）
3. 不要初始化 README、.gitignore 或 LICENSE（我们已经有了）
4. 点击 "Create repository"

### 2. 更新项目配置

首先，更新 `package.json`，添加 homepage 字段（替换为您的实际信息）：

```json
{
  "name": "workspace",
  "homepage": "https://[您的GitHub用户名].github.io/[仓库名称]",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint .",
    "preview": "vite preview",
    "check": "tsc -b --noEmit"
  }
}
```

然后更新 `vite.config.ts`，设置 base 路径：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

export default defineConfig({
  base: '/[仓库名称]/',  // 添加这一行，替换为您的仓库名称
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }), 
    tsconfigPaths()
  ],
})
```

### 3. 关联远程仓库并推送

```bash
# 关联远程仓库（替换为您的实际仓库地址）
git remote add origin https://github.com/[您的GitHub用户名]/[仓库名称].git

# 重命名分支为 main（如果需要）
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 4. 部署到 GitHub Pages

```bash
# 构建并部署
npm run deploy
```

### 5. 启用 GitHub Pages

1. 访问您的 GitHub 仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"（位于 "Code and automation" 部分）
4. 在 "Build and deployment" 部分：
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `gh-pages`，文件夹选择 `/ (root)`
5. 点击 "Save"

### 6. 访问您的网站

几分钟后，您的网站将可通过以下地址访问：

```
https://[您的GitHub用户名].github.io/[仓库名称]/
```

## 项目结构

```
/workspace
├── src/
│   ├── components/       # React 组件
│   ├── pages/           # 页面组件
│   ├── data/            # 面试题和分类数据
│   ├── types/           # TypeScript 类型定义
│   └── App.tsx          # 主应用组件
├── public/              # 静态资源
├── dist/                # 构建输出目录
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 内容说明

### 面试题分类

- **Java基础**：语法、类型系统、异常处理等
- **面向对象**：封装、继承、多态等
- **集合框架**：List、Map、Set 等集合类
- **并发编程**：多线程、线程安全、并发工具等
- **JVM原理**：内存模型、GC、类加载等
- **高级特性**：反射、注解、泛型、Lambda 等

### 难度等级

- 🟢 简单
- 🟡 中等
- 🔴 困难

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
