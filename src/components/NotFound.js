import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-2xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold mb-6"
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl mb-4 text-gray-300"
        >
          Post not found
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          The blog post you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-x-4"
        >
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            to="/blog"
            className="inline-block px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition-colors"
          >
            All Posts
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NotFound;
