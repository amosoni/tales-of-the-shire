import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  
  // 暂时返回模拟数据
  return NextResponse.json({
    id: id,
    username: 'MockHobbit',
    email: 'mock@shire.com',
    title: 'Hobbit',
    level: 1,
    joinDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stats: {
      id: 'mock-stats-1',
      userId: id,
      recipesViewed: 5,
      charactersMet: 3,
      decorationsCrafted: 2,
      questsCompleted: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    favorites: {
      id: 'mock-favorites-1',
      userId: id,
      recipes: 2,
      npcs: 1,
      decorations: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    activities: []
  })
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const body = await request.json()
  
  // 暂时返回模拟数据
  return NextResponse.json({
    id: id,
    username: body.username || 'MockHobbit',
    email: body.email || 'mock@shire.com',
    title: body.title || 'Hobbit',
    level: body.level || 1,
    joinDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stats: {
      id: 'mock-stats-1',
      userId: id,
      recipesViewed: 5,
      charactersMet: 3,
      decorationsCrafted: 2,
      questsCompleted: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    favorites: {
      id: 'mock-favorites-1',
      userId: id,
      recipes: 2,
      npcs: 1,
      decorations: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  })
} 