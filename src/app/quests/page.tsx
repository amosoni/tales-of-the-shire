"use client";

import { BookOpen, Star, Users, MapPin, Clock, Trophy } from 'lucide-react';

export default function QuestsPage() {
  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Quest Guide</h1>
        <p className="text-gray-600 text-lg">
          Complete quests to unlock new recipes, decorations, and friendships in the Shire
        </p>
      </div>

      {/* Quest Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Main Quests</h3>
          <p className="text-gray-600 mb-4">Essential story quests that advance the main narrative</p>
          <div className="text-sm text-gray-500">
            <div>• The Unexpected Party</div>
            <div>• The Fellowship</div>
            <div>• The Mirror of Galadriel</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-pink-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Friendship Quests</h3>
          <p className="text-gray-600 mb-4">Build relationships with NPCs and unlock special content</p>
          <div className="text-sm text-gray-500">
            <div>• Gardening Help (Sam)</div>
            <div>• Ranger Training (Aragorn)</div>
            <div>• Dwarven Crafts (Gimli)</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Seasonal Quests</h3>
          <p className="text-gray-600 mb-4">Special quests that appear during different seasons</p>
          <div className="text-sm text-gray-500">
            <div>• Spring Festival Preparation</div>
            <div>• Harvest Celebration</div>
            <div>• Winter Warmth</div>
          </div>
        </div>
      </div>

      {/* Quest Guide */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quest Completion Guide</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Complete basic cooking tutorials to unlock your first recipes</li>
              <li>• Visit NPCs in Hobbiton to start friendship quests</li>
              <li>• Participate in seasonal events to unlock special content</li>
              <li>• Build your home and garden to attract more NPCs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quest Rewards</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• <strong>Recipes:</strong> Unlock new cooking recipes and techniques</li>
              <li>• <strong>Decorations:</strong> Get special items to decorate your home</li>
              <li>• <strong>Friendship:</strong> Build relationships with NPCs</li>
              <li>• <strong>Materials:</strong> Receive rare ingredients and crafting materials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tips for Success</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Always check quest requirements before starting</li>
              <li>• Prepare the required materials and recipes in advance</li>
              <li>• Visit NPCs regularly to maintain friendships</li>
              <li>• Participate in community events for bonus rewards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 