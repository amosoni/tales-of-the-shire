"use client";

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import LoginModal from '@/components/common/login-modal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  // Check for existing user session on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('tales-of-shire-user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = (userData: { username: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    // Save user data to localStorage
    localStorage.setItem('tales-of-shire-user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // Remove user data from localStorage
    localStorage.removeItem('tales-of-shire-user');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Characters', href: '/npcs' },
    { name: 'Decorations', href: '/decorations' },
    { name: 'Search', href: '/search' },
    { name: 'Community', href: '/community' },
    { name: 'Guide', href: '/stats' },
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-3xl">🍃</span>
              </div>
              <span className="text-6xl font-bold text-green-800">Tales of the Shire</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-1 justify-center ml-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-green-600 transition-colors duration-200 text-sm font-medium whitespace-nowrap px-4 py-2 ${
                    index > 0 ? 'ml-8' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search recipes, characters..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm w-48"
                />
              </div>
              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                {!isLoggedIn ? (
                  <>
                    <button 
                      onClick={handleLoginClick}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Login
                    </button>
                    <Link 
                      href="/register"
                      className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-700">
                        Welcome, {user?.username || 'Hobbit'}!
                      </span>
                      <Link 
                        href="/profile"
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Profile
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  {!isLoggedIn ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mb-2"
                        onClick={() => {
                          setIsMenuOpen(false);
                          handleLoginClick();
                        }}
                      >
                        Login
                      </Button>
                      <Button size="sm" className="w-full">
                        Register
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="text-sm text-gray-700 mb-2">
                        Welcome, {user?.username || 'Hobbit'}!
                      </div>
                      <Button variant="outline" size="sm" className="w-full mb-2">
                        Profile
                      </Button>
                      <Button size="sm" className="w-full" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
} 