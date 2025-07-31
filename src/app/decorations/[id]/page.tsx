import Link from 'next/link';
import { ArrowLeft, MapPin, Package, Star, Palette, Hammer, Users } from 'lucide-react';
import { decorations } from '@/data/decorations';
import FavoriteButton from '@/components/common/favorite-button';
import CommentSection from '@/components/common/comment-section';

interface DecorationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DecorationPage({ params }: DecorationPageProps) {
  const { id } = await params;
  const decoration = decorations.find(d => d.id === id);

  if (!decoration) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Decoration Not Found</h1>
          <p className="text-gray-600 mb-6">The decoration you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/decorations"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Decorations
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
          href="/decorations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Decorations
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{decoration.name}</h1>
        <p className="text-gray-600 text-lg mb-6">{decoration.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {decoration.location}
          </div>
          <div className="flex items-center gap-1">
            <Package className="w-4 h-4" />
            {decoration.materials.length} materials
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            by {decoration.author}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {decoration.rarity}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Decoration Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Materials */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-blue-600" />
              Materials Required
            </h2>
            <div className="space-y-3">
              {decoration.materials.map((material, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">{material.name}</span>
                    <span className="text-gray-500 ml-2">({material.quantity})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {material.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {material.location}
                      </div>
                    )}
                    {material.rarity && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        material.rarity === 'common' ? 'bg-green-100 text-green-800' :
                        material.rarity === 'uncommon' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {material.rarity}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Effects */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-green-600" />
              Effects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {decoration.effects.map((effect, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-gray-900">{effect}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crafting Instructions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Hammer className="w-6 h-6 text-orange-600" />
              Crafting Instructions
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <p className="text-gray-700 leading-relaxed">Gather all required materials from their respective locations</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <p className="text-gray-700 leading-relaxed">Visit the appropriate crafting station or workbench</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <p className="text-gray-700 leading-relaxed">Follow the crafting recipe and assemble the decoration</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <p className="text-gray-700 leading-relaxed">Place the decoration in your hobbit hole or garden</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection itemId={decoration.id} itemType="decoration" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Decoration Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Decoration Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{decoration.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rarity:</span>
                <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                  decoration.rarity === 'common' ? 'bg-green-100 text-green-800' :
                  decoration.rarity === 'uncommon' ? 'bg-blue-100 text-blue-800' :
                  decoration.rarity === 'rare' ? 'bg-purple-100 text-purple-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {decoration.rarity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{decoration.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Materials:</span>
                <span className="font-medium">{decoration.materials.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Effects:</span>
                <span className="font-medium">{decoration.effects.length}</span>
              </div>
              {decoration.unlockCondition && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Unlock:</span>
                  <span className="font-medium text-sm">{decoration.unlockCondition}</span>
                </div>
              )}
            </div>
            
            {/* Favorite Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <FavoriteButton 
                id={decoration.id} 
                type="decoration" 
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Decoration Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Place decorations strategically for maximum effect</li>
              <li>• Consider the room&apos;s theme and color scheme</li>
              <li>• Mix different rarity levels for variety</li>
              <li>• Don&apos;t overcrowd - leave space for movement</li>
              <li>• Use lighting to highlight special pieces</li>
            </ul>
          </div>

          {/* Related Decorations */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Decorations</h3>
            <div className="space-y-3">
              {decorations
                .filter(d => d.id !== decoration.id && d.category === decoration.category)
                .slice(0, 3)
                .map((relatedDecoration) => (
                  <Link 
                    key={relatedDecoration.id}
                    href={`/decorations/${relatedDecoration.id}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{relatedDecoration.name}</div>
                    <div className="text-sm text-gray-500">{relatedDecoration.rarity}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 