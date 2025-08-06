import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// 检查是否有数据库 URL
const hasDatabaseUrl = process.env.DATABASE_URL && process.env.DATABASE_URL !== ''

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: hasDatabaseUrl ? undefined : {
    db: {
      url: 'file:./dev.db' // 使用本地 SQLite 作为后备
    }
  }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 