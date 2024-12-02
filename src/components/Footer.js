import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-black border-t border-neutral-900">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-16">
        <div>
          <h2 className="font-display text-xl mb-6">Digital Garden</h2>
          <p className="font-mono text-sm text-neutral-400 leading-relaxed mb-6">
            A curated space for thoughts on digital minimalism, future thinking, and structured chaos.
          </p>
          <div className="font-mono text-xs text-neutral-500">
            {year} Digital Garden. All rights reserved.
          </div>
        </div>
        
        <div>
          <h3 className="font-mono text-sm mb-6">Navigation</h3>
          <nav className="space-y-4">
            <Link to="/" className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/blog" className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors">
              Archive
            </Link>
            <Link to="/about" className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>
        
        <div>
          <h3 className="font-mono text-sm mb-6">Connect</h3>
          <nav className="space-y-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:hello@digitalgarden.com"
              className="block font-mono text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
