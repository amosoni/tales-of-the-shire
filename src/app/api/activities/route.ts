import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json({
    id: 'mock-activity-1',
    userId: 'mock-user',
    type: 'recipe_view',
    title: 'Mock Activity',
    description: 'This is a mock activity for deployment',
    xpGained: 10,
    createdAt: new Date().toISOString()
  })
}

export async function GET(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json([
    {
      id: 'mock-activity-1',
      userId: 'mock-user',
      type: 'recipe_view',
      title: 'Mock Activity',
      description: 'This is a mock activity for deployment',
      xpGained: 10,
      createdAt: new Date().toISOString()
    }
  ])
} 