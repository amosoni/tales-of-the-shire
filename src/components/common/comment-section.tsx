'use client';

import { useState } from 'react';
import { MessageCircle, Send, User, ThumbsUp, Reply } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  itemId: string;
  itemType: 'recipe' | 'npc' | 'decoration';
  initialComments?: Comment[];
}

export default function CommentSection({ itemId, itemType, initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    
    // TODO: Implement actual comment submission
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'HobbitLover',
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: []
      };
      
      setComments([comment, ...comments]);
      setNewComment('');
      setIsSubmitting(false);
    }, 500);
  };

  const handleLike = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-green-600" />
        Comments
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-6">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            H
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              rows={3}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                {newComment.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={isSubmitting || !newComment.trim()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Posting...' : 'Post Comment'}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {comment.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      {comment.likes}
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 