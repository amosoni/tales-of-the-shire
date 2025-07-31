import Link from 'next/link';
import { ArrowLeft, Clock, Users, ChefHat, MapPin, Star } from 'lucide-react';
import { recipes } from '@/data/recipes';
import FavoriteButton from '@/components/common/favorite-button';
import CommentSection from '@/components/common/comment-section';

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">The recipe you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/recipes"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/recipes"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {recipe.cookingTime}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {recipe.servings} servings
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            by {recipe.author}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {recipe.difficulty}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Ingredients */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
            <div className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">{ingredient.name}</span>
                    <span className="text-gray-500 ml-2">({ingredient.quantity})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {ingredient.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {ingredient.location}
                      </div>
                    )}
                    {ingredient.rarity && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ingredient.rarity === 'common' ? 'bg-green-100 text-green-800' :
                        ingredient.rarity === 'uncommon' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {ingredient.rarity}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
            <div className="space-y-4">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Effects */}
          {recipe.effects && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Effects</h2>
              <div className="flex flex-wrap gap-2">
                {recipe.effects.map((effect, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {effect}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <CommentSection itemId={recipe.id} itemType="recipe" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recipe Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recipe Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{recipe.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Difficulty:</span>
                <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                  recipe.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cooking Time:</span>
                <span className="font-medium">{recipe.cookingTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Servings:</span>
                <span className="font-medium">{recipe.servings}</span>
              </div>
              {recipe.unlockCondition && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Unlock:</span>
                  <span className="font-medium text-sm">{recipe.unlockCondition}</span>
                </div>
              )}
            </div>
            
            {/* Favorite Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <FavoriteButton 
                id={recipe.id} 
                type="recipe" 
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cooking Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use fresh ingredients for the best results</li>
              <li>• Follow the steps in order for best results</li>
              <li>• Don&apos;t rush the cooking process</li>
              <li>• Taste as you go and adjust seasoning</li>
              <li>• Let the dish rest before serving</li>
            </ul>
          </div>

          {/* Related Recipes */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Recipes</h3>
            <div className="space-y-3">
              {recipes
                .filter(r => r.id !== recipe.id && r.category === recipe.category)
                .slice(0, 3)
                .map((relatedRecipe) => (
                  <Link 
                    key={relatedRecipe.id}
                    href={`/recipes/${relatedRecipe.id}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{relatedRecipe.title}</div>
                    <div className="text-sm text-gray-500">{relatedRecipe.cookingTime}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 