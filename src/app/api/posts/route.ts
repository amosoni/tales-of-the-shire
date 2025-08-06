import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json([
    {
      id: 'mock-post-1',
      title: 'Mock Post',
      content: 'This is a mock post for deployment',
      authorId: 'mock-user-1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        id: 'mock-user-1',
        username: 'MockHobbit',
        title: 'Hobbit',
        level: 1
      },
      comments: []
    }
  ])
}

export async function POST(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json({
    id: 'mock-post-2',
    title: 'Mock Created Post',
    content: 'This is a mock created post',
    authorId: 'mock-user-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
} 