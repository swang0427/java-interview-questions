# 🚀 快速部署指南

您的Java面试题网站已经配置完成！请按照以下简单步骤完成部署：

## 第一步：创建GitHub仓库

1. 打开浏览器访问：https://github.com/new
2. **Repository name** 输入：`java-interview-questions`
3. 选择 **Public**（公开仓库）
4. ⚠️ **重要**：不要勾选 "Add a README file"（因为我们已经有了）
5. 点击 **"Create repository"**

## 第二步：推送代码到GitHub

在终端中运行以下命令（您已经在 /workspace 目录）：

```bash
# 重命名分支为 main
git branch -M main

# 推送代码（会要求登录GitHub）
git push -u origin main
```

## 第三步：启用GitHub Pages

1. 在浏览器中打开：https://github.com/lmwe/java-interview-questions
2. 点击绿色的 **"Code"** 按钮旁边的 **"Settings"** 标签
3. 在左侧菜单中找到 **"Pages"**（向下滚动）
4. 在 **"Build and deployment"** 部分：
   - **Source** 选择：**Deploy from a branch**
   - **Branch** 选择：**gh-pages**（如果没有，稍等几分钟后刷新）
   - **folder** 选择：/(root)
5. 点击 **"Save"**

## 第四步：访问您的网站

⏱️ **等待约2-3分钟**，然后访问：

👉 **https://lmwe.github.io/java-interview-questions/**

## 🎉 完成！

您的Java面试题网站现在已经上线！

### 后续更新

如果以后要更新内容：
```bash
# 1. 修改代码后，提交更改
git add .
git commit -m "更新内容"

# 2. 推送到GitHub
git push

# 3. 自动部署
npm run deploy
```

## 📝 项目信息

- **仓库地址**：https://github.com/lmwe/java-interview-questions
- **网站地址**：https://lmwe.github.io/java-interview-questions/
- **包含内容**：10道精选Java面试题，涵盖6大知识分类
