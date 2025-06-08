import React, { useState } from 'react';
import { Menu, X, Bus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">BusBees</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-black hover:bg-white px-3 py-2 rounded transition-all duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-black hover:bg-white px-3 py-2 rounded transition-all duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-black hover:bg-white px-3 py-2 rounded transition-all duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-white hover:text-black hover:bg-white px-3 py-2 rounded transition-all duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white border-2 border-white transition-all duration-200"
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium w-full text-left rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium w-full text-left rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium w-full text-left rounded"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="block px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium w-full text-left rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium w-full text-left rounded"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;