import { BookOpen, Users, Palette, Star, Trophy, TrendingUp } from 'lucide-react';

export default function ProgressPage() {
  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Game Progress Tracker</h1>
        <p className="text-gray-600 text-lg">
          Track your progress through the Shire and unlock achievements
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">15/25</div>
          <div className="text-gray-600">Recipes Mastered</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">8/12</div>
          <div className="text-gray-600">NPC Friendships</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">6/10</div>
          <div className="text-gray-600">Decorations Unlocked</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">12/20</div>
          <div className="text-gray-600">Quests Completed</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Achievement Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recipe Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Recipe Achievements
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">First Recipe</h3>
                <p className="text-sm text-gray-600">Cook your first recipe</p>
              </div>
              <Star className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Master Chef</h3>
                <p className="text-sm text-gray-600">Master 10 different recipes</p>
              </div>
              <Star className="w-5 h-5 text-green-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Recipe Collector</h3>
                <p className="text-sm text-gray-600">Unlock all 25 recipes</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Elvish Chef</h3>
                <p className="text-sm text-gray-600">Master all Elvish recipes</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Friendship Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            Friendship Achievements
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">First Friend</h3>
                <p className="text-sm text-gray-600">Become friends with an NPC</p>
              </div>
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Social Butterfly</h3>
                <p className="text-sm text-gray-600">Reach max friendship with 5 NPCs</p>
              </div>
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Community Leader</h3>
                <p className="text-sm text-gray-600">Befriend all NPCs in the Shire</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Cross-Cultural</h3>
                <p className="text-sm text-gray-600">Befriend NPCs from all races</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Decoration Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6 text-purple-600" />
            Decoration Achievements
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Home Sweet Home</h3>
                <p className="text-sm text-gray-600">Decorate your first room</p>
              </div>
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Garden Designer</h3>
                <p className="text-sm text-gray-600">Create a beautiful garden</p>
              </div>
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Interior Designer</h3>
                <p className="text-sm text-gray-600">Unlock all decoration categories</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Elvish Elegance</h3>
                <p className="text-sm text-gray-600">Create an Elvish-inspired home</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Quest Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            Quest Achievements
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">First Quest</h3>
                <p className="text-sm text-gray-600">Complete your first quest</p>
              </div>
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Seasonal Explorer</h3>
                <p className="text-sm text-gray-600">Complete all seasonal quests</p>
              </div>
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Quest Master</h3>
                <p className="text-sm text-gray-600">Complete all main story quests</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Community Hero</h3>
                <p className="text-sm text-gray-600">Complete all community quests</p>
              </div>
              <Star className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Tips */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Progress Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Progress</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cook recipes daily to master them faster</li>
              <li>• Visit NPCs regularly to build friendships</li>
              <li>• Participate in seasonal events</li>
              <li>• Complete quests to unlock new content</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Long-term Goals</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Aim to master all 25 recipes</li>
              <li>• Build friendships with all 12 NPCs</li>
              <li>• Unlock all decoration categories</li>
              <li>• Complete the main story questline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 