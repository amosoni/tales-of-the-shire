import SEOMeta from '@/components/common/seo-meta';
import Link from 'next/link';
import { BookOpen, Users, Palette, Star, Heart, Search, TrendingUp } from 'lucide-react';

export default function GuidePage() {
  return (
    <>
      <SEOMeta
        title="Complete Tales of the Shire Game Guide - Master Hobbit Life"
        description="Master The Lord of the Rings: Tales of the Shire with our comprehensive guide. Learn cooking recipes, meet characters, decorate your hobbit hole, and join the community. Your ultimate companion for Middle-earth life simulation."
        keywords="Tales of the Shire guide, hobbit life simulation, Middle-earth game, cooking recipes, character guides, decoration tips, gaming walkthrough"
        url="/guide"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Complete Tales of the Shire Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your ultimate companion for mastering The Lord of the Rings: Tales of the Shire. 
              Discover authentic recipes, meet beloved characters, and create the perfect hobbit life.
            </p>
          </div>

          {/* Guide Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Cooking & Recipes</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Master the art of hobbit cooking with authentic Middle-earth recipes. 
                From breakfast pies to elven bread, discover the secrets of Shire cuisine.
              </p>
              <Link href="/recipes" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
                Explore Recipes →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Character Guides</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Meet the beloved characters of the Shire. Learn their stories, 
                preferences, and how to build meaningful relationships.
              </p>
              <Link href="/npcs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                Meet Characters →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Decoration & Crafting</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Transform your hobbit hole into a cozy home. Get inspiration for 
                decorations, furniture, and creating the perfect Middle-earth atmosphere.
              </p>
              <Link href="/decorations" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">
                Decoration Ideas →
              </Link>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Tips for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Getting Started
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Focus on cooking recipes first - they provide essential resources</li>
                  <li>• Build relationships with NPCs to unlock new content</li>
                  <li>• Decorate your home to increase happiness and productivity</li>
                  <li>• Join the community to share tips and discoveries</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Advanced Strategies
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Master complex recipes for better rewards</li>
                  <li>• Complete character quests for unique items</li>
                  <li>• Optimize your decoration layout for efficiency</li>
                  <li>• Participate in community events for bonuses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with fellow hobbit enthusiasts, share your discoveries, 
              and get help from experienced players in our vibrant community.
            </p>
            <Link href="/community" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold">
              <Heart className="w-5 h-5" />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 