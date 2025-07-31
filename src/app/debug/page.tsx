"use client";

import { recipes } from '@/data/recipes';
import { useState } from 'react';

export default function DebugPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Debug Page</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Data Analysis</h2>
        <div className="space-y-4">
          <div>
            <p><strong>Total Recipes Loaded:</strong> {recipes.length}</p>
            <p><strong>Expected:</strong> 42</p>
            <p><strong>Status:</strong> {recipes.length === 42 ? '✅ Correct' : '❌ Incorrect'}</p>
          </div>
          
          <div>
            <p><strong>First 5 Recipes:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {recipes.slice(0, 5).map((recipe, index) => (
                <li key={recipe.id}>
                  {index + 1}. {recipe.id} - {recipe.title}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p><strong>Last 5 Recipes:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {recipes.slice(-5).map((recipe, index) => (
                <li key={recipe.id}>
                  {recipes.length - 4 + index}. {recipe.id} - {recipe.title}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {showDetails ? 'Hide' : 'Show'} All Recipe IDs
          </button>
          
          {showDetails && (
            <div className="mt-4">
              <p><strong>All Recipe IDs:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm max-h-96 overflow-y-auto">
                {recipes.map((recipe, index) => (
                  <li key={recipe.id}>
                    {index + 1}. {recipe.id} - {recipe.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Category Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          {['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'drink'].map(category => {
            const count = recipes.filter(r => r.category === category).length;
            return (
              <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{count}</div>
                <div className="text-sm text-gray-600 capitalize">{category}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <div className="text-xl font-bold text-green-600">
            Total: {recipes.length} recipes
          </div>
        </div>
      </div>
    </div>
  );
} 