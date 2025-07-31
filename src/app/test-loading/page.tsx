import { recipes } from '@/data/recipes';

export default function TestLoadingPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Data Loading Test</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Data Analysis</h2>
        <div className="space-y-4">
          <p><strong>Total Recipes Loaded:</strong> {recipes.length}</p>
          <p><strong>Expected:</strong> 42</p>
          <p><strong>Status:</strong> {recipes.length === 42 ? '✅ Correct' : '❌ Incorrect'}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">First 5 Recipes</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipes.slice(0, 5).map((recipe, index) => (
            <li key={recipe.id}>
              {index + 1}. {recipe.id} - {recipe.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Last 5 Recipes</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipes.slice(-5).map((recipe, index) => (
            <li key={recipe.id}>
              {recipes.length - 4 + index}. {recipe.id} - {recipe.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">All Recipe IDs</h2>
        <div className="max-h-96 overflow-y-auto">
          <ul className="list-disc list-inside space-y-1 text-sm">
            {recipes.map((recipe, index) => (
              <li key={recipe.id}>
                {index + 1}. {recipe.id} - {recipe.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 