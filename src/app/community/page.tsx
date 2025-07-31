'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SEOMeta from '@/components/common/seo-meta'

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
    author: {
      id: string
      username: string
      title: string
    }
  }>
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '' })
  const [currentUser, setCurrentUser] = useState<{
    id: string
    username: string
    title: string
    level: number
  } | null>(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    try {
      const response = await fetch('/api/user/first-user')
      if (response.ok) {
        const user = await response.json()
        setCurrentUser(user)
      }
    } catch (err) {
      console.error('Failed to check user status:', err)
    } finally {
      setUserLoading(false)
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.title.trim() || !newPost.content.trim()) {
      return
    }

    try {
      if (!currentUser) {
        throw new Error('You must be logged in to create a post')
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
          authorId: currentUser.id,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create post')
      }

      setNewPost({ title: '', content: '' })
      setShowNewPostForm(false)
      fetchPosts() // 重新获取帖子列表
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post')
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

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOMeta
        title="Shire Community - Share Your Hobbit Life"
        description="Join the Shire community to share your hobbit life experiences, recipes, and stories. Connect with fellow players and discover new adventures in Middle-earth."
        keywords="Shire community, hobbit life, Tales of the Shire forum, Middle-earth community, gaming community"
        url="/community"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-800">Shire Community</h1>
              <p className="text-green-600">Share your hobbit life</p>
            </div>
            <Link
              href="/profile"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* New Post Button - Only show for logged in users */}
        {currentUser && (
          <div className="mb-8">
            <button
              onClick={() => setShowNewPostForm(!showNewPostForm)}
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
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                position: 'relative',
                zIndex: 1000,
                opacity: 1,
                visibility: 'visible',
                pointerEvents: 'auto'
              }}
            >
              {showNewPostForm ? 'Cancel' : 'Create New Post'}
            </button>
          </div>
        )}

        {/* Login Prompt for non-logged in users */}
        {!currentUser && !userLoading && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-center">
              Please log in to create posts and comments.
            </p>
          </div>
        )}

        {/* New Post Form - Only show for logged in users */}
        {showNewPostForm && currentUser && (
          <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Post</h2>
            <form onSubmit={handleSubmitPost}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter post title..."
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Publish
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        {post.author.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{post.author.username}</h3>
                      <p className="text-sm text-gray-500">{post.author.title} • Level {post.author.level}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
                </div>
                
                <Link href={`/community/post/${post.id}`}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.comments.length} comments</span>
                  </div>
                  <Link
                    href={`/community/post/${post.id}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts yet, be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
} 