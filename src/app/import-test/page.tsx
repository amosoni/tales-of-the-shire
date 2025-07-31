"use client";

import { recipes } from '@/data/recipes';

export default function ImportTestPage() {
  // 直接检查导入的食谱
  const recipeCount = recipes.length;
  const recipeIds = recipes.map(r => r.id);
  const recipeTitles = recipes.map(r => r.title);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Import Test</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Import Analysis</h2>
        <div className="space-y-4">
          <div>
            <strong>Total Recipes Imported:</strong> {recipeCount}
          </div>
          <div>
            <strong>First 5 Recipe IDs:</strong>
            <ul className="list-disc list-inside ml-4">
              {recipeIds.slice(0, 5).map((id, index) => (
                <li key={index}>{id}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Last 5 Recipe IDs:</strong>
            <ul className="list-disc list-inside ml-4">
              {recipeIds.slice(-5).map((id, index) => (
                <li key={index}>{id}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>First 5 Recipe Titles:</strong>
            <ul className="list-disc list-inside ml-4">
              {recipeTitles.slice(0, 5).map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Last 5 Recipe Titles:</strong>
            <ul className="list-disc list-inside ml-4">
              {recipeTitles.slice(-5).map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">All Recipe IDs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          {recipeIds.map((id, index) => (
            <div key={index} className="p-2 border border-gray-200 rounded">
              {index + 1}. {id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 