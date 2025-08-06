import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // 暂时返回模拟数据
  return NextResponse.json({
    id: 'mock-comment-1',
    content: 'This is a mock comment',
    authorId: 'mock-user-1',
    postId: 'mock-post-1',
    createdAt: new Date().toISOString(),
    author: {
      id: 'mock-user-1',
      username: 'MockHobbit',
      title: 'Hobbit'
    }
  })
} 