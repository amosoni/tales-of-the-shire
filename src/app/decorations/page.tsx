'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Palette, Star, MapPin, Package } from 'lucide-react';
import { decorations, decorationCategories, rarityLevels } from '@/data/decorations';

export default function DecorationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [displayCount, setDisplayCount] = useState(12);

  const filteredDecorations = useMemo(() => {
    return decorations.filter(decoration => {
      const matchesSearch = decoration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          decoration.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || decoration.category === selectedCategory;
      const matchesRarity = selectedRarity === 'all' || decoration.rarity === selectedRarity;
      
      return matchesSearch && matchesCategory && matchesRarity;
    });
  }, [searchQuery, selectedCategory, selectedRarity]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  const handleShowAll = () => {
    setDisplayCount(filteredDecorations.length);
  };

  const remaining = filteredDecorations.length - displayCount;

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Decorate Your Hobbit Hole
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Transform your cozy hobbit hole with beautiful decorations from the Shire and beyond.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search decorations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
          </div>
          <div className="flex gap-3">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            >
              <option value="all">All Categories</option>
              {decorationCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
            <select 
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            >
              <option value="all">All Rarities</option>
              {rarityLevels.map((rarity) => (
                <option key={rarity.id} value={rarity.id}>
                  {rarity.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Decoration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredDecorations.slice(0, displayCount).map((decoration) => (
          <Link 
            key={decoration.id}
            href={`/decorations/${decoration.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <Palette className="w-16 h-16 text-green-600" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{decoration.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  decoration.rarity === 'common' ? 'bg-green-100 text-green-800' :
                  decoration.rarity === 'uncommon' ? 'bg-blue-100 text-blue-800' :
                  decoration.rarity === 'rare' ? 'bg-purple-100 text-purple-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {decoration.rarity}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{decoration.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Location:</span>
                  {decoration.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Package className="w-4 h-4" />
                  <span className="font-medium">Materials:</span>
                  {decoration.materials.length} items
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium">Author:</span>
                  {decoration.author}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Effects
                </h4>
                <div className="flex flex-wrap gap-1">
                  {decoration.effects.slice(0, 2).map((effect, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {effect}
                    </span>
                  ))}
                  {decoration.effects.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{decoration.effects.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {decoration.unlockCondition && (
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                  <span className="font-medium">Unlock:</span> {decoration.unlockCondition}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {remaining > 0 && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            style={{
              display: 'inline-flex',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '6px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            Load More ({remaining})
          </button>
        </div>
      )}

      {/* Decoration Categories Summary */}
      <div className="mt-12 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-green-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Decoration Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {decorationCategories.map((category) => {
            const count = decorations.filter(d => d.category === category.id).length;
            return (
              <div key={category.id} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-green-600 mb-2">{count}</div>
                <div className="text-lg font-medium text-gray-700">{category.name}</div>
                <div className="text-2xl mt-2">{category.icon}</div>
                <div className="text-sm text-gray-500 mt-2">{category.description}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg">
            Total Decorations: {decorations.length}
          </div>
        </div>
      </div>
    </div>
  );
} 