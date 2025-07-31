'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Settings, Heart, BookOpen, Palette, LogOut, Edit, Camera, TrendingUp, Clock, Star, Crown, Trophy, Award } from 'lucide-react';

interface UserData {
  id: string;
  username: string;
  email: string;
  title: string;
  level: number;
  joinDate: string;
  stats?: {
    recipesViewed: number;
    charactersMet: number;
    decorationsCrafted: number;
    questsCompleted: number;
  };
  favorites?: {
    recipes: number;
    npcs: number;
    decorations: number;
  };
  activities?: Array<{
    id: string;
    type: string;
    title: string;
    description?: string;
    xpGained: number;
    createdAt: string;
  }>;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 这里应该从认证系统获取用户ID
    // 暂时使用测试用户ID
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // 这里应该根据实际用户ID获取数据
        // 先尝试获取数据库中的第一个用户
        const response = await fetch('/api/user/first-user');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // 如果API失败，使用默认数据
        setUser({
          id: 'test-user-id',
          username: 'Hobbit',
    email: 'hobbit@shire.com',
          title: 'Master Chef',
          level: 42,
    joinDate: '2024-01-15',
          stats: {
            recipesViewed: 25,
            charactersMet: 22,
            decorationsCrafted: 10,
            questsCompleted: 15
          },
    favorites: {
      recipes: 8,
      npcs: 5,
      decorations: 12
    },
          activities: [
            {
              id: '1',
              type: 'recipe_view',
              title: 'Viewed Hobbit Breakfast Pie recipe',
              xpGained: 5,
              createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
            },
            {
              id: '2',
              type: 'character_meet',
              title: 'Met Bilbo Baggins in Bywater',
              xpGained: 10,
              createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
            },
            {
              id: '3',
              type: 'decoration_craft',
              title: 'Crafted Hobbit Armchair',
              xpGained: 15,
              createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'favorites', name: 'Favorites', icon: Heart },
    { id: 'progress', name: 'Progress', icon: BookOpen },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load profile data</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-green-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-3 shadow-lg border border-white/20 mb-6">
            <Crown className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-700">Hobbit Life Guide</span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Profile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Manage your Tales of the Shire account and track your progress through the Shire
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="xl:col-span-1 min-w-[300px]">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-6 sticky top-8">
              {/* Profile Card */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-emerald-400/50"></div>
                    <span className="relative z-10">🍃</span>
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-4 border-white">
                    <Camera className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  {user.username}
                  <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-medium">
                    {user.title}
                  </span>
                </h2>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-500 text-xs font-medium">Level {user.level}</span>
                </div>
                <p className="text-gray-500 text-xs bg-gray-50/80 px-4 py-2 rounded-xl inline-block border border-gray-200/50">
                  Member since {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>

              {/* Navigation */}
              <nav className="flex gap-2 mb-4 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-center transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900 hover:shadow-md'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-semibold text-xs">{tab.name}</span>
                    </button>
                  );
                })}

                {/* Logout button in the same row */}
                <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50/80 rounded-lg transition-all duration-300 font-semibold hover:shadow-md text-xs whitespace-nowrap">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-4">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Row */}
                <div className="flex flex-wrap gap-6 justify-between">
                  <div className="group bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex-1 min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{user.stats?.recipesViewed || 0}</div>
                      <div className="text-gray-600 font-semibold">Recipes Viewed</div>
                    </div>
                  </div>
                  
                  <div className="group bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex-1 min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{user.stats?.charactersMet || 0}</div>
                      <div className="text-gray-600 font-semibold">Characters Met</div>
                    </div>
                  </div>
                  
                  <div className="group bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex-1 min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Palette className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{user.stats?.decorationsCrafted || 0}</div>
                      <div className="text-gray-600 font-semibold">Decorations Crafted</div>
                    </div>
                  </div>
                  
                  <div className="group bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex-1 min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{user.stats?.questsCompleted || 0}</div>
                      <div className="text-gray-600 font-semibold">Quests Completed</div>
                    </div>
                  </div>
                </div>

                {/* Achievements Row */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Trophy className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Recent Achievements</h3>
                  </div>
                  <div className="flex flex-wrap gap-6 justify-between">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300 flex-1 min-w-[200px]">
                      <div className="text-3xl font-bold text-green-600 mb-2">{user.favorites?.recipes || 0}</div>
                      <div className="text-gray-700 font-semibold">Favorite Recipes</div>
                      <div className="text-sm text-gray-500 mt-1">Master Chef Collection</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 flex-1 min-w-[200px]">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{user.favorites?.npcs || 0}</div>
                      <div className="text-gray-700 font-semibold">Favorite Characters</div>
                      <div className="text-sm text-gray-500 mt-1">Social Butterfly</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 flex-1 min-w-[200px]">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{user.favorites?.decorations || 0}</div>
                      <div className="text-gray-700 font-semibold">Favorite Decorations</div>
                      <div className="text-sm text-gray-500 mt-1">Interior Designer</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Recent Activity</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl border border-green-200/50 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg mb-1">Viewed Hobbit Breakfast Pie recipe</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          2 hours ago
                        </div>
                      </div>
                      <div className="text-green-600 font-semibold">+5 XP</div>
                    </div>
                    
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-100 rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg mb-1">Met Bilbo Baggins in Bywater</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          1 day ago
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold">+10 XP</div>
                    </div>
                    
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg mb-1">Crafted Hobbit Armchair</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          3 days ago
                        </div>
                      </div>
                      <div className="text-purple-600 font-semibold">+15 XP</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Your Favorites</h3>
                </div>
                <div className="flex flex-wrap gap-6 justify-between">
                  <div className="border border-gray-200/50 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl transition-all duration-300 group flex-1 min-w-[250px]">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      Favorite Recipes
                    </h4>
                    <div className="space-y-3">
                      <Link href="/recipes/hobbit-breakfast-pie" className="block text-gray-700 hover:text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Hobbit Breakfast Pie
                      </Link>
                      <Link href="/recipes/second-breakfast-special" className="block text-gray-700 hover:text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Second Breakfast Special
                      </Link>
                      <Link href="/recipes/shire-honey-cake" className="block text-gray-700 hover:text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Shire Honey Cake
                      </Link>
                    </div>
                  </div>

                  <div className="border border-gray-200/50 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-cyan-100 hover:shadow-xl transition-all duration-300 group flex-1 min-w-[250px]">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      Favorite Characters
                    </h4>
                    <div className="space-y-3">
                      <Link href="/npcs/bilbo-baggins" className="block text-gray-700 hover:text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Bilbo Baggins
                      </Link>
                      <Link href="/npcs/samwise-gamgee" className="block text-gray-700 hover:text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Samwise Gamgee
                      </Link>
                      <Link href="/npcs/rosie-cotton" className="block text-gray-700 hover:text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Rosie Cotton
                      </Link>
                    </div>
                  </div>

                  <div className="border border-gray-200/50 rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-xl transition-all duration-300 group flex-1 min-w-[250px]">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                        <Palette className="w-5 h-5 text-white" />
                      </div>
                      Favorite Decorations
                    </h4>
                    <div className="space-y-3">
                      <Link href="/decorations/hobbit-armchair" className="block text-gray-700 hover:text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Hobbit Armchair
                      </Link>
                      <Link href="/decorations/elven-lamp" className="block text-gray-700 hover:text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Elven Lamp
                      </Link>
                      <Link href="/decorations/garden-bench" className="block text-gray-700 hover:text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        • Garden Bench
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Game Progress</h3>
                </div>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900 text-lg">Recipes Mastered</span>
                      <span className="text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full font-semibold">15/25</span>
                    </div>
                    <div className="w-full bg-white/80 rounded-full h-6 shadow-inner">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-6 rounded-full shadow-lg transition-all duration-1000" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-2xl p-8 border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900 text-lg">Characters Befriended</span>
                      <span className="text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full font-semibold">8/22</span>
                    </div>
                    <div className="w-full bg-white/80 rounded-full h-6 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-6 rounded-full shadow-lg transition-all duration-1000" style={{ width: '36%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900 text-lg">Decorations Crafted</span>
                      <span className="text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full font-semibold">10/10</span>
                    </div>
                    <div className="w-full bg-white/80 rounded-full h-6 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-violet-600 h-6 rounded-full shadow-lg transition-all duration-1000" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-100 rounded-2xl p-8 border border-red-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900 text-lg">Quests Completed</span>
                      <span className="text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full font-semibold">15/30</span>
                    </div>
                    <div className="w-full bg-white/80 rounded-full h-6 shadow-inner">
                      <div className="bg-gradient-to-r from-red-500 to-pink-600 h-6 rounded-full shadow-lg transition-all duration-1000" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Account Settings</h3>
                </div>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50">
                    <h4 className="font-bold text-gray-900 mb-6 text-xl">Profile Information</h4>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Username</label>
                        <div className="flex gap-4">
                          <input
                            type="text"
                            value={user.username}
                            className="flex-1 px-6 py-4 border border-gray-300/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-lg"
                            readOnly
                          />
                          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
                            <Edit className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full px-6 py-4 border border-gray-300/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-lg"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-2xl p-8 border border-blue-200/50">
                    <h4 className="font-bold text-gray-900 mb-6 text-xl">Notification Settings</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-6 bg-white/80 rounded-2xl shadow-lg">
                        <span className="text-gray-700 font-semibold text-lg">Email notifications</span>
                        <input type="checkbox" defaultChecked className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex items-center justify-between p-6 bg-white/80 rounded-2xl shadow-lg">
                        <span className="text-gray-700 font-semibold text-lg">New recipe alerts</span>
                        <input type="checkbox" defaultChecked className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex items-center justify-between p-6 bg-white/80 rounded-2xl shadow-lg">
                        <span className="text-gray-700 font-semibold text-lg">Character updates</span>
                        <input type="checkbox" className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200/50">
                    <h4 className="font-bold text-gray-900 mb-6 text-xl">Privacy Settings</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-6 bg-white/80 rounded-2xl shadow-lg">
                        <span className="text-gray-700 font-semibold text-lg">Public profile</span>
                        <input type="checkbox" className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded-lg" />
                      </div>
                      <div className="flex items-center justify-between p-6 bg-white/80 rounded-2xl shadow-lg">
                        <span className="text-gray-700 font-semibold text-lg">Show favorites</span>
                        <input type="checkbox" defaultChecked className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 