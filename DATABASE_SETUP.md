# 数据库设置指南

## 🗄️ 数据库连接设置

### 1. 安装依赖
```bash
npm install prisma @prisma/client
```

### 2. 环境变量配置
创建 `.env.local` 文件：
```env
# Database
DATABASE_URL="file:./dev.db"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. 生成Prisma客户端
```bash
npm run db:generate
```

### 4. 推送数据库schema
```bash
npm run db:push
```

### 5. 初始化测试数据
```bash
npm run db:seed
```

## 📊 数据库模型

### 用户模型 (User)
- `id`: 用户唯一标识
- `username`: 用户名
- `email`: 邮箱
- `title`: 用户称号
- `level`: 用户等级
- `joinDate`: 加入日期

### 统计数据 (UserStats)
- `recipesViewed`: 查看的食谱数量
- `charactersMet`: 遇到的角色数量
- `decorationsCrafted`: 制作的装饰数量
- `questsCompleted`: 完成的任务数量

### 收藏数据 (UserFavorites)
- `recipes`: 收藏的食谱数量
- `npcs`: 收藏的角色数量
- `decorations`: 收藏的装饰数量

### 活动记录 (Activity)
- `type`: 活动类型
- `title`: 活动标题
- `description`: 活动描述
- `xpGained`: 获得的经验值

## 🔧 API端点

### 用户数据
- `GET /api/user/[id]` - 获取用户信息
- `PUT /api/user/[id]` - 更新用户信息

### 活动记录
- `GET /api/activities?userId=[id]` - 获取用户活动
- `POST /api/activities` - 创建新活动

## 🚀 启动项目

1. 确保数据库已设置
2. 启动开发服务器：
```bash
npm run dev
```

3. 访问 http://localhost:3000/profile

## 📝 注意事项

- 目前使用SQLite作为开发数据库
- 生产环境建议使用PostgreSQL或MySQL
- 所有API都有错误处理和默认数据回退
- 用户认证系统需要单独实现 