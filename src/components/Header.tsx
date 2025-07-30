'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg py-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
                             <div className="text-2xl font-bold text-pink-600 text-center">
                     motetalk
                   </div>
          <div className="hidden md:flex space-x-8">
            <a href="#problems" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">こんな悩み</a>
            <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">機能</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">料金</a>
            <a href="#faq" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">FAQ</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-pink-600 transition-colors p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#problems" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">こんな悩み</a>
              <a href="#features" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">機能</a>
              <a href="#pricing" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">料金</a>
              <a href="#faq" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">FAQ</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 