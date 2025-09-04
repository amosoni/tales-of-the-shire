"use client";

import Image from "next/image";
import Link from "next/link";
import { RecipeCardProps } from "@/types/recipe";
import { cn } from "@/lib/utils";
import { Heart, Clock, Users, ChefHat, Star, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export function RecipeCard({ recipe, className }: RecipeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "medium": return "bg-amber-100 text-amber-700 border-amber-200";
      case "hard": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "breakfast": return "bg-orange-100 text-orange-700 border-orange-200";
      case "lunch": return "bg-blue-100 text-blue-700 border-blue-200";
      case "dinner": return "bg-purple-100 text-purple-700 border-purple-200";
      case "dessert": return "bg-pink-100 text-pink-700 border-pink-200";
      case "snack": return "bg-green-100 text-green-700 border-green-200";
      case "drink": return "bg-cyan-100 text-cyan-700 border-cyan-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <Link href={`/recipes/${recipe.id}`} className="group">
      <div className={cn(
        "bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100",
        className
      )}>
        <div className="relative h-64 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          {recipe.imageUrl ? (
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
                <ChefHat className="w-12 h-12 text-white" />
              </div>
            </div>
          )}
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-sm shadow-lg ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-sm shadow-lg ${getCategoryColor(recipe.category)}`}>
              {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorited(!isFavorited);
            }}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
              {recipe.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
              {recipe.description}
            </p>
          </div>

          <div className="flex items-center gap-8 text-base text-gray-500 mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold">{recipe.servings || 4} servings</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">{recipe.cookingTime || '-'} min</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="font-semibold">{recipe.author}</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Ingredients</h4>
            </div>
            <div className="space-y-4">
              {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                <div key={index} className="group/ingredient flex items-center justify-between p-5 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-2xl border-2 border-green-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-green-300">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-green-600 text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-gray-800 mb-1">
                        {typeof ingredient === "string" ? ingredient : ingredient.name}
                      </span>
                      {typeof ingredient === "object" && ingredient.location && (
                        <span className="text-sm text-green-600 bg-white px-3 py-1 rounded-xl border border-green-200 font-medium">
                          {ingredient.location}
                        </span>
                      )}
                    </div>
                  </div>
                  {typeof ingredient === "object" && ingredient.quantity && (
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-green-700 bg-white px-5 py-3 rounded-2xl border-2 border-green-300 shadow-lg">
                        {ingredient.quantity}
                      </span>
                      {ingredient.rarity && (
                        <span className="text-sm px-4 py-2 rounded-full font-bold">
                          {ingredient.rarity}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {recipe.ingredients.length > 3 && (
                <div className="text-center py-4">
                  <span className="inline-flex items-center gap-3 text-base text-green-600 bg-green-100 px-6 py-3 rounded-full border-2 border-green-200 font-bold hover:bg-green-200 transition-colors">
                    <span>+{recipe.ingredients.length - 3} more ingredients</span>
                  </span>
                </div>
              )}
            </div>
          </div>

          {recipe.effects && recipe.effects.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Effects</h4>
              </div>
              <div className="space-y-4">
                {recipe.effects.slice(0, 2).map((effect, index) => (
                  <div key={index} className="group/effect flex items-center gap-5 p-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl border-2 border-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-blue-300">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-blue-600 text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-blue-600">+</span>
                      <span className="text-base font-bold text-blue-800">
                        {effect}
                      </span>
                    </div>
                  </div>
                ))}
                {recipe.effects.length > 2 && (
                  <div className="text-center py-4">
                    <span className="inline-flex items-center gap-3 text-base text-blue-600 bg-blue-100 px-6 py-3 rounded-full border-2 border-blue-200 font-bold hover:bg-blue-200 transition-colors">
                      <span>+{recipe.effects.length - 2} more effects</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-base text-gray-500 pt-6 border-t-2 border-gray-100">
            <span className="font-semibold">{recipe.ingredients.length} ingredients • {recipe.steps.length} steps</span>
            {recipe.unlockCondition && (
              <span className="text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-full border-2 border-amber-200 font-bold">
                {recipe.unlockCondition}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
