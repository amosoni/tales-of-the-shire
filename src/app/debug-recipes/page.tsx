"use client";

import { recipes } from '@/data/recipes';

export default function DebugRecipesPage() {
  const totalRecipes = recipes.length;
  const categories = {
    breakfast: recipes.filter(r => r.category === 'breakfast').length,
    lunch: recipes.filter(r => r.category === 'lunch').length,
    dinner: recipes.filter(r => r.category === 'dinner').length,
    dessert: recipes.filter(r => r.category === 'dessert').length,
    snack: recipes.filter(r => r.category === 'snack').length,
    drink: recipes.filter(r => r.category === 'drink').length,
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Debug Recipes</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Count Analysis</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{totalRecipes}</div>
            <div className="text-sm text-gray-600">Total Recipes</div>
          </div>
          {Object.entries(categories).map(([category, count]) => (
            <div key={category} className="text-center">
              <div className="text-2xl font-bold text-blue-600">{count}</div>
              <div className="text-sm text-gray-600">{category}</div>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-gray-600">
          <p>Sum of categories: {Object.values(categories).reduce((a, b) => a + b, 0)}</p>
          <p>This should equal {totalRecipes}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">All Recipes (Detailed)</h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
              <div className="flex-1">
                <div className="font-medium">
                  {index + 1}. {recipe.title}
                </div>
                <div className="text-sm text-gray-500">
                  Category: {recipe.category} | Difficulty: {recipe.difficulty} | Time: {recipe.cookingTime}
                </div>
                <div className="text-xs text-gray-400">
                  ID: {recipe.id} | Author: {recipe.author}
                </div>
              </div>
              <div className="text-right text-sm text-gray-500">
                {recipe.ingredients.length} ingredients<br/>
                {recipe.steps.length} steps
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 