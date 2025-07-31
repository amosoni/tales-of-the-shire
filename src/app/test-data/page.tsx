import { recipes } from '@/data/recipes';

export default function TestDataPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Data Test Page</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe Data</h2>
        <div className="space-y-2">
          <p><strong>Total Recipes:</strong> {recipes.length}</p>
          <p><strong>Recipe IDs:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {recipes.map((recipe, index) => (
              <li key={recipe.id}>
                {index + 1}. {recipe.id} - {recipe.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Category Counts</h2>
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