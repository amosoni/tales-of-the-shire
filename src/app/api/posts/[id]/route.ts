import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  
  // 暂时返回模拟数据
  return NextResponse.json({
    id: id,
    title: 'Mock Post',
    content: 'This is a mock post content for deployment',
    authorId: 'mock-user-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      id: 'mock-user-1',
      username: 'MockHobbit',
      title: 'Hobbit',
      level: 1
    },
    comments: [
      {
        id: 'mock-comment-1',
        content: 'This is a mock comment',
        authorId: 'mock-user-1',
        postId: id,
        createdAt: new Date().toISOString(),
        author: {
          id: 'mock-user-1',
          username: 'MockHobbit',
          title: 'Hobbit'
        }
      }
    ]
  })
} 