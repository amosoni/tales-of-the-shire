import Image from 'next/image';
import { RecipeCardProps } from '@/types/recipe';
import { cn } from '@/lib/utils';

export function RecipeCard({ recipe, className }: RecipeCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800',
  };

  const categoryColors = {
    breakfast: 'bg-orange-100 text-orange-800',
    lunch: 'bg-blue-100 text-blue-800',
    dinner: 'bg-purple-100 text-purple-800',
    dessert: 'bg-pink-100 text-pink-800',
  };

  return (
    <div className={cn(
      "border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200",
      className
    )}>
      <div className="relative h-48 bg-gray-100">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {recipe.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "inline-block px-2 py-1 rounded text-xs font-medium",
            difficultyColors[recipe.difficulty]
          )}>
            {recipe.difficulty === 'easy' ? '简单' : 
             recipe.difficulty === 'medium' ? '中等' : '困难'}
          </span>
          
          <span className={cn(
            "inline-block px-2 py-1 rounded text-xs font-medium",
            categoryColors[recipe.category]
          )}>
            {recipe.category === 'breakfast' ? '早餐' :
             recipe.category === 'lunch' ? '午餐' :
             recipe.category === 'dinner' ? '晚餐' : '甜点'}
          </span>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>食材: {recipe.ingredients.length} 种</p>
          <p>步骤: {recipe.steps.length} 步</p>
        </div>
      </div>
    </div>
  );
} 