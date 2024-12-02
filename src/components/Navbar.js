import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-surface/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-display text-xl text-white hover:text-accent transition-colors duration-300"
          >
            Digital Garden
          </Link>

          <ul className="flex items-center space-x-8">
            {[
              { path: '/blog', label: 'Archive' },
              { path: '/about', label: 'About' },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="relative font-sans text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
                >
                  {label}
                  <AnimatePresence>
                    {location.pathname === path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}

            <li>
              <button 
                onClick={() => {}} 
                className="w-10 h-10 rounded-full bg-surface-100 hover:bg-surface-200 flex items-center justify-center transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5 text-neutral-400"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
