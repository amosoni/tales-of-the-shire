"use client";

import { recipes } from '@/data/recipes';

export default function TestRecipesPage() {
  // 添加调试信息
  console.log('Total recipes:', recipes.length);
  console.log('Recipes array:', recipes);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Recipe Count Test</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{recipes.length}</div>
            <div className="text-sm text-gray-600">Total Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {recipes.filter(r => r.category === 'breakfast').length}
            </div>
            <div className="text-sm text-gray-600">Breakfast</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {recipes.filter(r => r.category === 'dinner').length}
            </div>
            <div className="text-sm text-gray-600">Dinner</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {recipes.filter(r => r.category === 'dessert').length}
            </div>
            <div className="text-sm text-gray-600">Dessert</div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>All recipes should be visible in the main recipes page.</p>
          <p>If you only see 25 recipes, check the &quot;Load More&quot; or &quot;Show All Recipes&quot; buttons.</p>
          <p>Debug: Check browser console for recipe data details.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">All Recipes List ({recipes.length} total)</h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="flex items-center justify-between p-2 border-b border-gray-100">
              <div>
                <span className="font-medium">{index + 1}.</span>
                <span className="ml-2">{recipe.title}</span>
                <span className="ml-2 text-sm text-gray-500">({recipe.category})</span>
              </div>
              <div className="text-sm text-gray-500">
                {recipe.difficulty} • {recipe.cookingTime}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Showing {recipes.length} recipes out of {recipes.length} total
        </div>
      </div>
    </div>
  );
} 