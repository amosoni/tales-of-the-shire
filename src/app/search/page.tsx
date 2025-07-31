'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, BookOpen, User, Palette, Star, MapPin, Clock } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { npcs } from '@/data/npcs';
import { decorations } from '@/data/decorations';

interface SearchResult {
  id: string;
  type: 'recipe' | 'npc' | 'decoration';
  title: string;
  description: string;
  category?: string;
  location?: string;
  difficulty?: string;
  rarity?: string;
  author?: string;
  url: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['recipe', 'npc', 'decoration']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allResults: SearchResult[] = useMemo(() => {
    const results: SearchResult[] = [];

    // Add recipes
    if (selectedTypes.includes('recipe')) {
      recipes.forEach(recipe => {
        results.push({
          id: recipe.id,
          type: 'recipe',
          title: recipe.title,
          description: recipe.description,
          category: recipe.category,
          difficulty: recipe.difficulty,
          author: recipe.author,
          url: `/recipes/${recipe.id}`
        });
      });
    }

    // Add NPCs
    if (selectedTypes.includes('npc')) {
      npcs.forEach(npc => {
        results.push({
          id: npc.id,
          type: 'npc',
          title: npc.name,
          description: npc.description,
          location: npc.location,
          category: npc.personality,
          url: `/npcs/${npc.id}`
        });
      });
    }

    // Add decorations
    if (selectedTypes.includes('decoration')) {
      decorations.forEach(decoration => {
        results.push({
          id: decoration.id,
          type: 'decoration',
          title: decoration.name,
          description: decoration.description,
          category: decoration.category,
          rarity: decoration.rarity,
          author: decoration.author,
          url: `/decorations/${decoration.id}`
        });
      });
    }

    return results;
  }, [selectedTypes]);

  const filteredResults = useMemo(() => {
    let filtered = allResults;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(result =>
        result.title.toLowerCase().includes(query) ||
        result.description.toLowerCase().includes(query) ||
        result.category?.toLowerCase().includes(query) ||
        result.location?.toLowerCase().includes(query) ||
        result.author?.toLowerCase().includes(query)
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(result =>
        selectedCategories.some(category =>
          result.category?.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    return filtered;
  }, [allResults, searchQuery, selectedCategories]);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'recipe': return <BookOpen className="w-4 h-4 text-green-600" />;
      case 'npc': return <User className="w-4 h-4 text-blue-600" />;
      case 'decoration': return <Palette className="w-4 h-4 text-purple-600" />;
      default: return <Star className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'recipe': return 'bg-green-100 text-green-800';
      case 'npc': return 'bg-blue-100 text-blue-800';
      case 'decoration': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Advanced Search
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Search across all recipes, characters, and decorations in Tales of the Shire
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl mb-8">
        <div className="flex flex-col gap-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for recipes, characters, decorations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Type Filters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Content Types
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'recipe', name: 'Recipes', icon: BookOpen, count: recipes.length },
                { id: 'npc', name: 'Characters', icon: User, count: npcs.length },
                { id: 'decoration', name: 'Decorations', icon: Palette, count: decorations.length }
              ].map(({ id, name, icon: Icon, count }) => (
                <button
                  key={id}
                  onClick={() => handleTypeToggle(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedTypes.includes(id)
                      ? 'bg-green-100 border-green-300 text-green-800'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'breakfast', 'lunch', 'dinner', 'dessert',
                'furniture', 'wall', 'garden', 'lighting',
                'hobbiton', 'bywater', 'buckland'
              ].map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategories.includes(category)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Search Results ({filteredResults.length})
          </h2>
          {searchQuery && (
            <p className="text-gray-600">
              Results for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>

        {filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result) => (
              <Link
                key={`${result.type}-${result.id}`}
                href={result.url}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  {getTypeIcon(result.type)}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {result.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {result.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    {result.category && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Category:</span>
                        {result.category}
                      </div>
                    )}
                    {result.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {result.location}
                      </div>
                    )}
                    {result.difficulty && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Difficulty:</span>
                        {result.difficulty}
                      </div>
                    )}
                    {result.rarity && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {result.rarity}
                      </div>
                    )}
                    {result.author && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">By:</span>
                        {result.author}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Search Tips */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Search by:</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Recipe names and ingredients</li>
              <li>• Character names and locations</li>
              <li>• Decoration types and materials</li>
              <li>• Author names and categories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Filter by:</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Content type (recipes, characters, decorations)</li>
              <li>• Categories and locations</li>
              <li>• Difficulty and rarity levels</li>
              <li>• Multiple filters at once</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 