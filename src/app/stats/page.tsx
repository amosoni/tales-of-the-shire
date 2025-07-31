import { recipes } from '@/data/recipes';
import { npcs } from '@/data/npcs';
import { decorations } from '@/data/decorations';
import { BookOpen, Users, Palette, TrendingUp, Clock, Star } from 'lucide-react';

export default function StatsPage() {
  // Calculate statistics
  const totalRecipes = recipes.length;
  const totalNPCs = npcs.length;
  const totalDecorations = decorations.length;
  
  const recipeCategories = recipes.reduce((acc, recipe) => {
    acc[recipe.category] = (acc[recipe.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const difficultyStats = recipes.reduce((acc, recipe) => {
    acc[recipe.difficulty] = (acc[recipe.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const npcLocations = npcs.reduce((acc, npc) => {
    const location = npc.location.split(',')[1]?.trim() || 'Unknown';
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const decorationCategories = decorations.reduce((acc, decoration) => {
    acc[decoration.category] = (acc[decoration.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topAuthors = recipes.reduce((acc, recipe) => {
    acc[recipe.author] = (acc[recipe.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topAuthorsList = Object.entries(topAuthors)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Game Statistics</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive statistics and insights about The Lord of the Rings: Tales of the Shire
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">{totalRecipes}</div>
          <div className="text-gray-600">Total Recipes</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">{totalNPCs}</div>
          <div className="text-gray-600">NPC Characters</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">{totalDecorations}</div>
          <div className="text-gray-600">Decoration Designs</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">{totalRecipes + totalNPCs + totalDecorations}</div>
          <div className="text-gray-600">Total Items</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recipe Statistics */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe Categories</h2>
            <div className="space-y-3">
              {Object.entries(recipeCategories).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="capitalize text-gray-700">{category}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(count / totalRecipes) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe Difficulty</h2>
            <div className="space-y-3">
              {Object.entries(difficultyStats).map(([difficulty, count]) => (
                <div key={difficulty} className="flex items-center justify-between">
                  <span className="capitalize text-gray-700">{difficulty}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          difficulty === 'easy' ? 'bg-green-600' :
                          difficulty === 'medium' ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${(count / totalRecipes) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NPC and Decoration Statistics */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">NPC Locations</h2>
            <div className="space-y-3">
              {Object.entries(npcLocations).map(([location, count]) => (
                <div key={location} className="flex items-center justify-between">
                  <span className="text-gray-700">{location}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(count / totalNPCs) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Decoration Categories</h2>
            <div className="space-y-3">
              {Object.entries(decorationCategories).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-gray-700">{category}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${(count / totalDecorations) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Authors */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Recipe Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topAuthorsList.map(([author, count], index) => (
            <div key={author} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{author}</div>
                  <div className="text-sm text-gray-500">{count} recipes</div>
                </div>
              </div>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Game Insights */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Game Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Recipe Insights</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Most recipes are categorized as {Object.entries(recipeCategories).sort(([,a], [,b]) => b - a)[0]?.[0]}</li>
              <li>• Average cooking time: {Math.round(recipes.reduce((acc, r) => acc + parseInt(r.cookingTime), 0) / totalRecipes)} minutes</li>
              <li>• {Math.round((difficultyStats.easy || 0) / totalRecipes * 100)}% of recipes are easy to make</li>
              <li>• {topAuthorsList[0]?.[0]} is the most prolific recipe author</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">NPC Insights</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• NPCs are spread across {Object.keys(npcLocations).length} different locations</li>
              <li>• Most NPCs are located in {Object.entries(npcLocations).sort(([,a], [,b]) => b - a)[0]?.[0]}</li>
              <li>• Each NPC has an average of {Math.round(npcs.reduce((acc, n) => acc + n.favoriteGifts.length, 0) / totalNPCs)} favorite gifts</li>
              <li>• {Math.round((npcs.filter(n => n.relationship === 'Friend').length / totalNPCs) * 100)}% of NPCs are friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 