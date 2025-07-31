# 开源模板推荐

## 推荐的Next.js模板

### 1. Next.js Blog Template (推荐)
**GitHub**: https://github.com/vercel/next.js/tree/canary/examples/blog-starter

**特点**:
- ✅ 官方维护，稳定可靠
- ✅ 内置MDX支持
- ✅ SEO优化
- ✅ 响应式设计
- ✅ 易于定制

**适用场景**: 内容型网站，如食谱、攻略等

### 2. Next.js E-commerce Template
**GitHub**: https://github.com/vercel/commerce

**特点**:
- ✅ 完整的电商功能
- ✅ 支付集成
- ✅ 购物车功能
- ✅ 用户管理

**适用场景**: 如果需要销售游戏周边

### 3. Next.js Dashboard Template
**GitHub**: https://github.com/tremorlabs/tremor

**特点**:
- ✅ 现代化UI组件
- ✅ 数据可视化
- ✅ 响应式设计
- ✅ TypeScript支持

**适用场景**: 用户中心、数据展示

## 快速启动模板

### 选择Next.js Blog Template的原因

1. **内容管理友好**: 适合食谱、攻略等内容的展示
2. **SEO优化**: 内置SEO功能，利于搜索引擎收录
3. **性能优秀**: 静态生成，加载速度快
4. **易于定制**: 基于Tailwind CSS，样式定制简单

### 使用步骤

```bash
# 1. 克隆模板
git clone https://github.com/vercel/next.js.git
cd next.js/examples/blog-starter

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 访问 http://localhost:3000
```

### 定制建议

#### 1. 修改主题色彩
```css
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        },
      },
    },
  },
}
```

#### 2. 添加新页面
```typescript
// app/recipes/page.tsx
export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">食谱大全</h1>
      {/* 食谱列表 */}
    </div>
  );
}
```

#### 3. 自定义组件
```typescript
// components/recipe-card.tsx
interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export function RecipeCard({ title, description, image, difficulty }: RecipeCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
      <span className={`inline-block px-2 py-1 rounded text-sm mt-2 ${
        difficulty === 'easy' ? 'bg-green-100 text-green-800' :
        difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {difficulty}
      </span>
    </div>
  );
}
```

## 其他推荐模板

### 4. Astro Blog Template
**特点**: 更轻量级，适合静态内容
**适用**: 如果追求极致性能

### 5. Remix Blog Template
**特点**: 全栈框架，功能强大
**适用**: 如果需要复杂的服务端逻辑

### 6. SvelteKit Template
**特点**: 现代化，性能优秀
**适用**: 如果团队熟悉Svelte

## 模板选择建议

### 基于项目需求的选择

| 需求 | 推荐模板 | 理由 |
|------|----------|------|
| 内容展示 | Next.js Blog | SEO友好，内容管理简单 |
| 用户交互 | Next.js Dashboard | 用户中心功能完整 |
| 电商功能 | Next.js Commerce | 完整的电商解决方案 |
| 极致性能 | Astro Blog | 静态生成，加载最快 |

### 快速决策流程

1. **确定核心功能**: 内容展示 vs 用户交互 vs 电商
2. **评估技术栈**: 团队熟悉度
3. **考虑性能需求**: SEO vs 交互性
4. **选择对应模板**: 根据需求选择最适合的模板

## 模板定制指南

### 1. 品牌定制
- 修改Logo和色彩方案
- 调整字体和排版
- 添加品牌元素

### 2. 功能扩展
- 添加用户认证
- 集成数据库
- 添加搜索功能

### 3. 性能优化
- 图片优化
- 代码分割
- 缓存策略

### 4. SEO优化
- 元标签优化
- 结构化数据
- 站点地图

## 部署建议

### Cloudflare Pages部署
```bash
# 构建项目
pnpm build

# 部署到Cloudflare Pages
# 通过Cloudflare Dashboard连接GitHub仓库
# 设置构建命令: pnpm build
# 设置输出目录: .next
```

### 环境变量配置
```env
# 数据库
DATABASE_URL="file:./dev.db"

# 认证
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="https://your-domain.pages.dev"

# 第三方服务
GOOGLE_ANALYTICS_ID="your-ga-id"
```

## 总结

**推荐使用Next.js Blog Template**，原因如下：

1. **功能完整**: 包含博客、搜索、分类等核心功能
2. **易于定制**: 基于Tailwind CSS，样式修改简单
3. **SEO友好**: 内置SEO优化，利于搜索引擎收录
4. **性能优秀**: 静态生成，加载速度快
5. **社区支持**: 官方维护，文档完善

这个模板可以快速搭建一个功能完整的攻略网站，然后根据具体需求进行定制和扩展。 