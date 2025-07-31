import { recipes } from '@/data/recipes';
import { npcs } from '@/data/npcs';
import { decorations } from '@/data/decorations';
import { BookOpen, Users, Palette, Star, MapPin, Gift } from 'lucide-react';

export default function DataCoveragePage() {
  // Calculate statistics
  const totalRecipes = recipes.length;
  const totalNPCs = npcs.length;
  const totalDecorations = decorations.length;
  
  // Recipe statistics
  const recipeCategories = recipes.reduce((acc, recipe) => {
    acc[recipe.category] = (acc[recipe.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const recipeAuthors = recipes.reduce((acc, recipe) => {
    acc[recipe.author] = (acc[recipe.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const recipeDifficulties = recipes.reduce((acc, recipe) => {
    acc[recipe.difficulty] = (acc[recipe.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // NPC statistics
  const npcLocations = npcs.reduce((acc, npc) => {
    const location = npc.location.split(',')[1]?.trim() || 'Various';
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const npcRelationships = npcs.reduce((acc, npc) => {
    acc[npc.relationship] = (acc[npc.relationship] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Decoration statistics
  const decorationCategories = decorations.reduce((acc, decoration) => {
    acc[decoration.category] = (acc[decoration.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const decorationAuthors = decorations.reduce((acc, decoration) => {
    acc[decoration.author] = (acc[decoration.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Game Data Coverage</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive overview of all game data included in the Hobbit Life Guide
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recipe Data */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-600" />
              Recipe Data Coverage
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Categories ({Object.keys(recipeCategories).length})</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(recipeCategories).map(([category, count]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="capitalize">{category}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Authors ({Object.keys(recipeAuthors).length})</h3>
                <div className="space-y-1">
                  {Object.entries(recipeAuthors).map(([author, count]) => (
                    <div key={author} className="flex justify-between text-sm">
                      <span>{author}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Difficulty Distribution</h3>
                <div className="space-y-1">
                  {Object.entries(recipeDifficulties).map(([difficulty, count]) => (
                    <div key={difficulty} className="flex justify-between text-sm">
                      <span className="capitalize">{difficulty}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NPC Data */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              NPC Data Coverage
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Locations ({Object.keys(npcLocations).length})</h3>
                <div className="space-y-1">
                  {Object.entries(npcLocations).map(([location, count]) => (
                    <div key={location} className="flex justify-between text-sm">
                      <span>{location}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Relationship Levels</h3>
                <div className="space-y-1">
                  {Object.entries(npcRelationships).map(([relationship, count]) => (
                    <div key={relationship} className="flex justify-between text-sm">
                      <span>{relationship}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Character Types</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Hobbits: 6</div>
                  <div>Wizards: 1</div>
                  <div>Elves: 3</div>
                  <div>Dwarves: 1</div>
                  <div>Men: 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoration Data */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Palette className="w-6 h-6 text-purple-600" />
          Decoration Data Coverage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Categories ({Object.keys(decorationCategories).length})</h3>
            <div className="space-y-1">
              {Object.entries(decorationCategories).map(([category, count]) => (
                <div key={category} className="flex justify-between text-sm">
                  <span>{category}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Authors ({Object.keys(decorationAuthors).length})</h3>
            <div className="space-y-1">
              {Object.entries(decorationAuthors).map(([author, count]) => (
                <div key={author} className="flex justify-between text-sm">
                  <span>{author}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Completeness */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Completeness Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Recipe System</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
          <li>✅ 42 unique recipes across 6 categories</li>
              <li>✅ 8 different authors with unique recipes</li>
              <li>✅ Complete ingredient lists with locations</li>
              <li>✅ Detailed cooking instructions</li>
              <li>✅ Game effects and unlock conditions</li>
              <li>✅ Difficulty levels and cooking times</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">NPC System</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ 12 major characters from the lore</li>
              <li>✅ 5 different races (Hobbits, Elves, Dwarves, Men, Wizards)</li>
              <li>✅ Favorite gifts and quest information</li>
              <li>✅ Relationship levels and personalities</li>
              <li>✅ Location-based character distribution</li>
              <li>✅ Complete character backgrounds</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Decoration System</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ 10 unique decoration designs</li>
              <li>✅ 4 categories (Interior, Outdoor, Garden)</li>
              <li>✅ Material lists and difficulty levels</li>
              <li>✅ Author attribution and unlock conditions</li>
              <li>✅ Like/download statistics</li>
              <li>✅ Tag-based categorization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Game Integration</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ Cross-referenced unlock conditions</li>
              <li>✅ Character-specific recipes and decorations</li>
              <li>✅ Location-based ingredient sourcing</li>
              <li>✅ Quest-based progression system</li>
              <li>✅ Friendship level requirements</li>
              <li>✅ Lore-accurate character relationships</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coverage Summary */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Coverage Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">42</div>
            <div className="text-sm text-gray-600">Recipes</div>
            <div className="text-xs text-gray-500 mt-1">Complete with ingredients & instructions</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">NPCs</div>
            <div className="text-xs text-gray-500 mt-1">Major characters with full details</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">10</div>
            <div className="text-sm text-gray-600">Decorations</div>
            <div className="text-xs text-gray-500 mt-1">Designs with materials & guides</div>
          </div>
        </div>
      </div>
    </div>
  );
} 