#!/bin/bash

# Cloudflare Pages构建脚本
echo "开始构建Tales of the Shire项目..."

# 安装依赖
echo "安装依赖..."
npm install

# 检查依赖安装
if [ $? -ne 0 ]; then
    echo "依赖安装失败！"
    exit 1
fi

# 构建项目
echo "开始构建..."
npm run build

# 检查构建结果
if [ $? -ne 0 ]; then
    echo "构建失败！"
    exit 1
fi

# 检查构建目录
if [ -d ".next" ]; then
    echo "构建成功！"
    echo "构建目录内容："
    ls -la .next/
    
    # 检查静态文件
    if [ -d ".next/static" ]; then
        echo "静态文件："
        ls -la .next/static/
    else
        echo "静态文件目录不存在"
    fi
    
    # 检查输出目录
    if [ -d "out" ]; then
        echo "静态导出目录："
        ls -la out/
    fi
    
    echo "构建完成！"
else
    echo "构建失败！未找到.next目录"
    exit 1
fi 