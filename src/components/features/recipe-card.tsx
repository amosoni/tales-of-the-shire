import Image from 'next/image';
import Link from 'next/link';
import { RecipeCardProps } from '@/types/recipe';
import { cn } from '@/lib/utils';
import { Heart, Clock, Users, ChefHat } from 'lucide-react';
import { useState } from 'react';

export function RecipeCard({ recipe, className }: RecipeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "breakfast":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "lunch":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "dinner":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "dessert":
        return "bg-pink-100 text-pink-800 border-pink-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const imageSrc = recipe.imageUrl || "/images/recipes/placeholder.jpg";

  return (
    <div className={cn(
      "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300 group",
      className
    )}>
      {/* 图片头部 */}
      <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
        <Image
          src={imageSrc}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={handleFavorite}
            className={cn(
              "p-2 rounded-full shadow-sm transition-all duration-200",
              isFavorited 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
            )}
          >
            <Heart className={cn("w-4 h-4", isFavorited && "fill-current")} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {/* 标题和标签 */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
            {recipe.description}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <span className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
              getDifficultyColor(recipe.difficulty)
            )}>
              {recipe.difficulty === 'easy' ? '简单' : 
               recipe.difficulty === 'medium' ? '中等' : '困难'}
            </span>
            
            <span className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
              getCategoryColor(recipe.category)
            )}>
              {recipe.category === 'breakfast' ? '早餐' :
               recipe.category === 'lunch' ? '午餐' :
               recipe.category === 'dinner' ? '晚餐' : '甜点'}
            </span>
          </div>
        </div>

        {/* 基本信息 */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings ?? '-'} 份</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime ?? '-'} </span>
          </div>
        </div>

        {/* 配料列表 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            配料
          </h4>
          <div className="space-y-2">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <div key={index} className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  {ingredient.name}
                </span>
                {ingredient.quantity && (
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">
                    {ingredient.quantity}
                  </span>
                )}
              </div>
            ))}
            {recipe.ingredients.length > 3 && (
              <div className="text-center py-2">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full border">
                  +{recipe.ingredients.length - 3} 更多配料
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 效果列表 */}
        {recipe.effects && recipe.effects.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              效果
            </h4>
            <div className="space-y-2">
              {recipe.effects.slice(0, 2).map((effect, index) => (
                <div key={index} className="flex items-center gap-2 py-1.5 px-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-xs text-green-600 font-medium">+</span>
                  <span className="text-sm font-medium text-green-800">
                    {effect}
                  </span>
                </div>
              ))}
              {recipe.effects.length > 2 && (
                <div className="text-center py-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full border">
                    +{recipe.effects.length - 2} 更多效果
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 底部信息 */}
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{recipe.ingredients.length}</span> 配料 • 
            <span className="font-medium"> {recipe.steps.length}</span> 步骤
          </div>
          <Link 
            href={`/recipes/${recipe.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <ChefHat className="w-4 h-4" />
            查看食谱
          </Link>
        </div>
      </div>
    </div>
  );
}
