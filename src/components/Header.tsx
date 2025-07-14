import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import logo from '../assets/logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-white">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          <span className="text-xl font-bold text-gray-900">Apple Vacations</span>
        </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Destinations
            </a>
            <a href="#packages" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Packages
            </a>
            <a href="#about" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Contact
            </a>
            <button className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all">
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#destinations" className="text-gray-700 hover:text-sky-600 font-medium">
                Destinations
              </a>
              <a href="#packages" className="text-gray-700 hover:text-sky-600 font-medium">
                Packages
              </a>
              <a href="#about" className="text-gray-700 hover:text-sky-600 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-sky-600 font-medium">
                Contact
              </a>
              <button className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;