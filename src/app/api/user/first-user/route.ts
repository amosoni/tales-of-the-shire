import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json({
    id: 'mock-user-1',
    username: 'MockHobbit',
    email: 'mock@shire.com',
    title: 'Hobbit',
    level: 1,
    joinDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stats: {
      id: 'mock-stats-1',
      userId: 'mock-user-1',
      recipesViewed: 5,
      charactersMet: 3,
      decorationsCrafted: 2,
      questsCompleted: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    favorites: {
      id: 'mock-favorites-1',
      userId: 'mock-user-1',
      recipes: 2,
      npcs: 1,
      decorations: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    activities: []
  })
} 