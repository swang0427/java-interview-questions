#!/bin/bash

echo "🚀 Java面试题网站部署脚本"
echo "================================"
echo ""

# 检查是否已安装必要的工具
echo "📦 检查依赖..."
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装"
    exit 1
fi

echo "✅ Git 已安装"

# 检查远程仓库
echo ""
echo "🔍 检查GitHub仓库..."
if git ls-remote --exit-code https://github.com/lmwe/java-interview-questions.git &> /dev/null; then
    echo "✅ 仓库已存在"
else
    echo "⚠️  仓库不存在，需要先创建！"
    echo ""
    echo "请在浏览器中打开以下链接创建仓库："
    echo "👉 https://github.com/new"
    echo ""
    echo "创建仓库时："
    echo "   - Repository name: java-interview-questions"
    echo "   - 选择 Public"
    echo "   - 不要勾选 'Add a README file'"
    echo ""
    read -p "创建完成后按 Enter 继续..."
fi

# 推送代码
echo ""
echo "📤 推送代码到GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "⏱️  等待2-3分钟后，访问您的网站："
    echo "👉 https://lmwe.github.io/java-interview-questions/"
    echo ""
    echo "💡 如果网站未显示，请在GitHub仓库的 Settings → Pages 中："
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: gh-pages"
    echo "   - Folder: / (root)"
else
    echo ""
    echo "❌ 推送失败，请检查GitHub登录状态"
fi
