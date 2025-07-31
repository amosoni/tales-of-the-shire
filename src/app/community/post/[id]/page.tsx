'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Post {
  id: string
  title: string
  content: string
  createdAt: string
  author: {
    id: string
    username: string
    title: string
    level: number
  }
  comments: Array<{
    id: string
    content: string
    createdAt: string
    author: {
      id: string
      username: string
      title: string
    }
  }>
}

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id as string
  
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newComment, setNewComment] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (postId) {
      fetchPost()
    }
  }, [postId])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      const data = await response.json()
      setPost(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch post')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !post) {
      return
    }

    setSubmitting(true)
    try {
      // 获取第一个用户作为评论作者
      const userResponse = await fetch('/api/user/first-user')
      if (!userResponse.ok) {
        throw new Error('Failed to get user')
      }
      const user = await userResponse.json()

      const commentData = {
        content: newComment,
        postId: post.id,
        authorId: user.id,
      }

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error('Failed to create comment')
      }

      const result = await response.json()

      setNewComment('')
      fetchPost() // 重新获取帖子以显示新评论
    } catch (err) {
      console.error('Comment submission - Error:', err)
      setError(err instanceof Error ? err.message : 'Failed to create comment')
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Post not found'}</p>
          <Link
            href="/community"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Back to Community
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/community"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Community
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">
                    {post.author.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{post.author.username}</h3>
                  <p className="text-sm text-gray-500">{post.author.title} • Level {post.author.level}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Comments ({post.comments.length})
            </h2>

            {/* New Comment Form */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Add a Comment</h3>
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={3}
                  placeholder="Share your thoughts..."
                  required
                />
                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={submitting || !newComment.trim()}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#059669',
                      color: 'white',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'block',
                      width: '200px',
                      margin: '10px 0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      position: 'relative',
                      zIndex: 1000,
                      opacity: 1,
                      visibility: 'visible',
                      pointerEvents: 'auto'
                    }}
                  >
                    {submitting ? 'Publishing...' : 'Publish Comment'}
                  </button>
                </div>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {post.comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-semibold text-sm">
                        {comment.author.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.author.username}</h4>
                        <span className="text-sm text-gray-500">{comment.author.title}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {post.comments.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No comments yet, be the first to comment!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 