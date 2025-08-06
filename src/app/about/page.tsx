import SEOMeta from '@/components/common/seo-meta';
import { Heart, Users, BookOpen, Star, Globe, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SEOMeta
        title="About Tales of the Shire Guide - Your Middle-earth Companion"
        description="Learn about our mission to provide the most comprehensive guide for The Lord of the Rings: Tales of the Shire. Discover our community-driven approach to helping players master hobbit life in Middle-earth."
        keywords="about Tales of the Shire guide, Middle-earth gaming community, hobbit life simulation, gaming guide mission"
        url="/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              About Our Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re passionate about helping players master the art of hobbit life in 
              The Lord of the Rings: Tales of the Shire. Our comprehensive guide is 
              your ultimate companion for Middle-earth adventures.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Community-Driven
                </h3>
                <p className="text-gray-600">
                  We believe in the power of community. Our guide is built with input from 
                  passionate players who share their discoveries, tips, and strategies to help 
                  everyone succeed in their hobbit life journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-600">
                  From cooking recipes to character relationships, decoration tips to community 
                  features, we cover every aspect of Tales of the Shire to ensure you have 
                  everything you need to thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600">
                Detailed walkthroughs and strategies from experienced players who have 
                mastered every aspect of hobbit life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Content</h3>
              <p className="text-gray-600">
                Carefully researched and tested content that provides accurate, 
                helpful information for all skill levels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Community</h3>
              <p className="text-gray-600">
                Connect with players from around the world, share experiences, 
                and learn from diverse perspectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                We continuously update our content to reflect the latest game 
                features, community discoveries, and player feedback.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion-Driven</h3>
              <p className="text-gray-600">
                Created by fans, for fans. Our love for Middle-earth and 
                gaming drives everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive</h3>
              <p className="text-gray-600">
                From beginner tips to advanced strategies, we cover every 
                aspect of the game to help you succeed.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start your hobbit life journey? Join our community of passionate 
              players and discover everything Tales of the Shire has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/community" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold">
                <Users className="w-5 h-5" />
                Join Community
              </a>
              <a href="/guide" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                <BookOpen className="w-5 h-5" />
                Start Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 