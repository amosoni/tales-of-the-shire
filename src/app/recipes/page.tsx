"use client";

import { Search, BookOpen, ChevronDown } from 'lucide-react';
import { recipes, recipeCategories } from '@/data/recipes';
import { useState, useMemo, useEffect } from 'react';
import { RecipeCard } from '@/components/recipes/recipe-card';
import SEOMeta from '@/components/common/seo-meta';

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [displayCount, setDisplayCount] = useState(12); // Show 12 recipes initially

  // Filter recipes based on search and filters
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(12);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <>
      <SEOMeta
        title="Hobbit Recipes - Complete Cooking Guide"
        description="Master the art of hobbit cooking with our complete recipe collection. From breakfast pies to elven bread, discover authentic Middle-earth recipes with step-by-step instructions."
        keywords="hobbit recipes, Tales of the Shire recipes, Middle-earth cooking, hobbit food, Shire recipes, cooking guide"
        url="/recipes"
      />
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Food Is Love
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            No Hobbit&apos;s day is complete without food. Fish, garden, and forage to stock up the pantry with the fruits of your labour.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex gap-3">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty.toLowerCase()}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600 text-center">
            Showing {Math.min(displayCount, filteredRecipes.length)} of {filteredRecipes.length} recipes
            {filteredRecipes.length !== recipes.length && (
              <span className="ml-2 text-gray-500">(filtered from {recipes.length} total)</span>
            )}
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.slice(0, displayCount).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            
            {/* Load More Button - Always show if there are more recipes */}
            {displayCount < filteredRecipes.length && (
              <div className="text-center mt-6">
                <button 
                  onClick={() => {
                    setDisplayCount(prev => {
                      const newCount = Math.min(prev + 12, filteredRecipes.length);
                      return newCount;
                    });
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm font-medium transform hover:scale-105"
                  style={{
                    display: 'inline-flex',
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>Load More</span>
                  <span className="text-xs opacity-90">({filteredRecipes.length - displayCount})</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setDisplayCount(12);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Recipe Categories Summary */}
        <div className="mt-12 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Culinary Delights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {recipeCategories.map((category) => {
              const count = recipes.filter(r => r.category === category.id).length;
              return (
                <div key={category.id} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl font-bold text-green-600 mb-2">{count}</div>
                  <div className="text-lg font-medium text-gray-700">{category.name}</div>
                  <div className="text-2xl mt-2">{category.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg">
              Total Recipes: {recipes.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 