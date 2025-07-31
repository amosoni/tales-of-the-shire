# 开发流程文档

## 快速开始

### 1. 环境准备
```bash
# 安装Node.js 18+
node --version

# 安装pnpm
npm install -g pnpm

# 安装Git
git --version
```

### 2. 项目初始化
```bash
# 创建Next.js项目
npx create-next-app@latest hobbit-guide --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 进入项目目录
cd hobbit-guide

# 安装依赖
pnpm install
```

### 3. 开发服务器
```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

## 开发规范

### 代码规范
- 使用TypeScript严格模式
- ESLint + Prettier代码格式化
- 组件命名使用PascalCase
- 文件命名使用kebab-case

### Git规范
- 主分支：main
- 功能分支：feature/功能名
- 提交格式：`type: description`

### 组件开发
```typescript
// 组件模板
interface ComponentProps {
  title: string;
  description?: string;
}

export function Component({ title, description }: ComponentProps) {
  return (
    <div className="component">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

## 部署流程

### 1. 构建项目
```bash
pnpm build
```

### 2. 部署到Cloudflare Pages
- 连接GitHub仓库
- 设置构建命令: `pnpm build`
- 设置输出目录: `.next`
- 配置环境变量

### 3. 域名配置
- 购买域名
- 在Cloudflare添加DNS记录
- 配置SSL证书

## 测试策略

### 单元测试
```bash
# 运行测试
pnpm test

# 测试覆盖率
pnpm test:coverage
```

### E2E测试
```bash
# 运行E2E测试
pnpm test:e2e
```

## 性能优化

### 图片优化
```typescript
import Image from 'next/image';

<Image
  src="/recipe.jpg"
  alt="Recipe"
  width={400}
  height={300}
  priority
/>
```

### 代码分割
```typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>
});
```

## 监控和分析

### 性能监控
- Core Web Vitals
- 页面加载时间
- 用户交互响应

### 错误监控
- 错误边界
- 错误日志
- 用户反馈

## 发布流程

### 1. 代码审查
- 创建Pull Request
- 代码审查
- 自动化测试

### 2. 合并发布
- 合并到main分支
- 自动部署到Cloudflare Pages
- 验证部署结果

### 3. 监控验证
- 检查网站功能
- 监控错误日志
- 用户反馈收集 