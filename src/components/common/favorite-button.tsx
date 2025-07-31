'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  id: string;
  type: 'recipe' | 'npc' | 'decoration';
  initialFavorited?: boolean;
  className?: string;
}

export default function FavoriteButton({ id, type, initialFavorited = false, className = '' }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = async () => {
    setIsLoading(true);
    
    // TODO: Implement actual favorite toggle logic
    setTimeout(() => {
      setIsFavorited(!isFavorited);
      setIsLoading(false);
    }, 300);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isLoading}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
        isFavorited
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      } ${className}`}
    >
      <Heart 
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-current' : ''
        }`} 
      />
      <span className="text-sm font-medium">
        {isFavorited ? 'Favorited' : 'Favorite'}
      </span>
    </button>
  );
} 