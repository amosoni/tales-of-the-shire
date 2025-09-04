import Link from 'next/link';
import { ArrowLeft, MapPin, Heart, Gift, MessageCircle, Users, Star } from 'lucide-react';
import { npcs } from '@/data/npcs';
import FavoriteButton from '@/components/common/favorite-button';
import CommentSection from '@/components/common/comment-section';
import NpcAvatar from '@/components/npcs/NpcAvatar';

interface NPCPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NPCPage({ params }: NPCPageProps) {
  const { id } = await params;
  const npc = npcs.find(n => n.id === id);

  if (!npc) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Character Not Found</h1>
          <p className="text-gray-600 mb-6">The character you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/npcs"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/npcs"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Characters
        </Link>
        
        <div className="flex items-center gap-6">
          <NpcAvatar id={npc.id} name={npc.name} className="w-20 h-20" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{npc.name}</h1>
            <p className="text-gray-600 text-lg">{npc.description}</p>
          </div>
        </div>
          
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {npc.location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {npc.personality}
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            {npc.relationship}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Character Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Character Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Character Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <span className="font-medium text-gray-900">Location:</span>
                  <span className="text-gray-600 ml-2">{npc.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-900">Personality:</span>
                  <span className="text-gray-600 ml-2">{npc.personality}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Heart className="w-5 h-5 text-red-600" />
                <div>
                  <span className="font-medium text-gray-900">Relationship:</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    npc.relationship === 'Friend' ? 'bg-green-100 text-green-800' :
                    npc.relationship === 'Good Friend' ? 'bg-blue-100 text-blue-800' :
                    npc.relationship === 'Respectful' ? 'bg-yellow-100 text-yellow-800' :
                    npc.relationship === 'Courting' ? 'bg-pink-100 text-pink-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {npc.relationship}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Gifts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-green-600" />
              Favorite Gifts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {npc.favoriteGifts.map((gift, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-gray-900">{gift}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Quests */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              Available Quests
            </h2>
            <div className="space-y-3">
              {npc.quests.map((quest, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{quest}</div>
                    <div className="text-sm text-gray-500">Complete this quest to improve your relationship</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection itemId={npc.id} itemType="npc" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Character Stats */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Character Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{npc.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Personality:</span>
                <span className="font-medium">{npc.personality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Relationship:</span>
                <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                  npc.relationship === 'Friend' ? 'bg-green-100 text-green-800' :
                  npc.relationship === 'Good Friend' ? 'bg-blue-100 text-blue-800' :
                  npc.relationship === 'Respectful' ? 'bg-yellow-100 text-yellow-800' :
                  npc.relationship === 'Courting' ? 'bg-pink-100 text-pink-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {npc.relationship}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Favorite Gifts:</span>
                <span className="font-medium">{npc.favoriteGifts.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available Quests:</span>
                <span className="font-medium">{npc.quests.length}</span>
              </div>
            </div>
            
            {/* Favorite Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <FavoriteButton 
                id={npc.id} 
                type="npc" 
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Interaction Tips */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interaction Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Give gifts regularly to improve relationship</li>
              <li>• Complete quests to unlock new dialogue</li>
              <li>• Visit frequently to maintain friendship</li>
              <li>• Learn their backstory for better understanding</li>
              <li>• Respect their personality and preferences</li>
            </ul>
          </div>

          {/* Related Characters */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Characters</h3>
            <div className="space-y-3">
              {npcs
                .filter(n => n.id !== npc.id && n.location === npc.location)
                .slice(0, 3)
                .map((relatedNPC) => (
                  <Link 
                    key={relatedNPC.id}
                    href={`/npcs/${relatedNPC.id}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{relatedNPC.name}</div>
                    <div className="text-sm text-gray-500">{relatedNPC.personality}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 