"use client";

import Link from 'next/link';
import { Heart, Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { useState } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  showAuthor?: boolean;
}

export function RecipeCard({ recipe, showAuthor = true }: RecipeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center relative">
        <ChefHat className="w-10 h-10 text-green-600" />
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
          />
        </button>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            recipe.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {recipe.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {recipe.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {recipe.servings} servings
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {recipe.cookingTime}
          </div>
          {showAuthor && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {recipe.author}
            </div>
          )}
        </div>

        {/* Quick Ingredients Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-1">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {ingredient.name}
              </span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Quick Effects Preview */}
        {recipe.effects && recipe.effects.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Effects:</h4>
            <div className="flex flex-wrap gap-1">
              {recipe.effects.slice(0, 2).map((effect, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                  {effect}
                </span>
              ))}
              {recipe.effects.length > 2 && (
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                  +{recipe.effects.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            {recipe.ingredients.length} ingredients • {recipe.steps.length} steps
          </div>
          <Link 
            href={`/recipes/${recipe.id}`}
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg no-underline"
            style={{display: 'inline-block', backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
} 