import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Comment API - Received body:', body)
    
    const { content, postId, authorId } = body

    if (!content || !postId || !authorId) {
      console.log('Comment API - Missing fields:', { content, postId, authorId })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Comment API - Creating comment with:', { content, postId, authorId })

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            title: true,
          },
        },
      },
    })

    console.log('Comment API - Comment created successfully:', comment)
    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    )
  }
} 