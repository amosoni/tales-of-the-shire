import Link from 'next/link';
import { Search, Users, Heart, Gift, MessageCircle } from 'lucide-react';
import { npcs } from '@/data/npcs';

const locations = ['All', 'Hobbiton', 'Buckland', 'Tuckborough', 'Bywater', 'Bree', 'Old Forest', 'Bamfurlong Farm'];
const relationships = ['All', 'Friendly', 'Very Friendly', 'Respectful', 'Courting'];

export default function NPCsPage() {
  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Characters of the Shire</h1>
        <p className="text-gray-600 text-lg">
          Meet the friendly Hobbits and familiar faces awaiting your arrival in Tales of the Shire: A The Lord of the Rings™ Game
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Total Characters: {npcs.length}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search NPCs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              {locations.map((location) => (
                <option key={location} value={location.toLowerCase()}>
                  {location}
                </option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              {relationships.map((relationship) => (
                <option key={relationship} value={relationship.toLowerCase()}>
                  {relationship}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* NPC Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {npcs.map((npc) => (
          <Link 
            key={npc.id} 
            href={`/npcs/${npc.id}`}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{npc.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{npc.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="font-medium">Location:</span>
                  {npc.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="font-medium">Personality:</span>
                  {npc.personality}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium">Relationship:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    npc.relationship === 'Good Friend' ? 'bg-green-100 text-green-800' :
                    npc.relationship === 'Friend' ? 'bg-blue-100 text-blue-800' :
                    npc.relationship === 'Respectful' ? 'bg-yellow-100 text-yellow-800' :
                    npc.relationship === 'Courting' ? 'bg-pink-100 text-pink-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {npc.relationship}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-1">
                  <Gift className="w-4 h-4" />
                  Favorite Gifts
                </h4>
                <div className="flex flex-wrap gap-1">
                  {npc.favoriteGifts.slice(0, 3).map((gift, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {gift}
                    </span>
                  ))}
                  {npc.favoriteGifts.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{npc.favoriteGifts.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Available Quests
                </h4>
                <div className="flex flex-wrap gap-1">
                  {npc.quests.slice(0, 2).map((quest, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {quest}
                    </span>
                  ))}
                  {npc.quests.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{npc.quests.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Interaction Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Building Relationships</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Give gifts that match their preferences</li>
              <li>• Complete their quests to increase friendship</li>
              <li>• Visit them regularly to maintain relationships</li>
              <li>• Learn about their backstory and interests</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Gift Giving</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Pay attention to their favorite items</li>
              <li>• Quality gifts provide better relationship boosts</li>
              <li>• Some NPCs prefer homemade items</li>
              <li>• Timing can affect gift reception</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 