import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HydraLogo from "../assets/hydra.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', hasDropdown: true },
    { name: 'Portfolio', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
    { name: 'About', hasDropdown: false },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mr-4">
            <img src={HydraLogo} alt="Hydra Tech Logo" className="h-12 w-auto" />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="text-2xl font-bold text-black">LandingCraft</div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-800 hover:text-black transition-colors duration-200">
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
            >
              Contact
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-black transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-black font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100 space-y-3">
                  <button className="block w-full text-left text-gray-800 hover:text-black font-medium transition-colors duration-200">
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    Contact
                  </button>
                  <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;