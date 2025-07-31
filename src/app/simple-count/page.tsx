"use client";

import { recipes } from '@/data/recipes';

export default function SimpleCountPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Simple Recipe Count</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Count: {recipes.length}</h2>
        
        <div className="space-y-2">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="p-2 border border-gray-200 rounded">
              <strong>{index + 1}. {recipe.title}</strong>
              <br />
              <span className="text-sm text-gray-500">
                Category: {recipe.category} | Difficulty: {recipe.difficulty}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          Total recipes displayed: {recipes.length}
        </div>
      </div>
    </div>
  );
} 