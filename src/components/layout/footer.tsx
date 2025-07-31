import Link from 'next/link';
import { Heart, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-green-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-green-800">Hobbit Life Guide</span>
            </div>
            <p className="text-gray-600 mb-4">
              Complete guide for The Lord of the Rings: Tales of the Shire players.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes" className="text-gray-600 hover:text-green-600 transition-colors">
                  Recipe Encyclopedia
                </Link>
              </li>
              <li>
                <Link href="/npcs" className="text-gray-600 hover:text-green-600 transition-colors">
                  NPC Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Hobbit Life Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 