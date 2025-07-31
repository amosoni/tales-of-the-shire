import { recipes } from '@/data/recipes';

export default function SimpleTestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Simple Test</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Count</h2>
        <div className="space-y-4">
          <p><strong>Total Recipes:</strong> {recipes.length}</p>
          <p><strong>Expected:</strong> 42</p>
          <p><strong>Status:</strong> {recipes.length === 42 ? '✅ Correct' : '❌ Incorrect'}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">First 10 Recipe IDs</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipes.slice(0, 10).map((recipe, index) => (
            <li key={recipe.id}>
              {index + 1}. {recipe.id} - {recipe.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Last 10 Recipe IDs</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipes.slice(-10).map((recipe, index) => (
            <li key={recipe.id}>
              {recipes.length - 9 + index}. {recipe.id} - {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 