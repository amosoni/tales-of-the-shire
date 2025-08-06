#!/bin/bash

# Cloudflare Pages构建脚本
echo "开始构建..."

# 安装依赖
npm install

# 构建项目
npm run build

# 检查构建结果
if [ -d ".next" ]; then
    echo "构建成功！"
    ls -la .next/
else
    echo "构建失败！"
    exit 1
fi 