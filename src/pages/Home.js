import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const essays = [
  {
    id: 1,
    title: "The Architecture of Digital Minimalism",
    date: "2027.02",
  },
  {
    id: 2,
    title: "Structured Chaos: A New Framework",
    date: "2027.02",
  },
  {
    id: 3,
    title: "Future Think: Beyond 2030",
    date: "2027.01",
  },
  {
    id: 4,
    title: "The Evolution of Human-AI Collaboration",
    date: "2027.01",
  },
  {
    id: 5,
    title: "Building Atris: Lessons Learned",
    date: "2027.01",
  }
];

function Home() {
  const [showAllEssays, setShowAllEssays] = useState(false);
  const displayedEssays = showAllEssays ? essays : essays.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white"
    >
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="space-y-16">
          {/* Header */}
          <header>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Keshav Rao
            </h1>
            <p className="text-accent-muted text-lg leading-relaxed">
              Working on Atris. Building tools for thought that augment human intelligence.
            </p>
          </header>

          {/* Essays */}
          <section>
            <h2 className="font-display text-xl font-semibold mb-8">
              Essays
            </h2>
            <div className="space-y-6">
              {displayedEssays.map((essay) => (
                <motion.article
                  key={essay.id}
                  className="group"
                >
                  <Link 
                    to={`/blog/post-${essay.id}`} 
                    className="block space-y-1"
                  >
                    <time className="block font-mono text-sm text-accent-muted">
                      {essay.date}
                    </time>
                    <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-accent-muted transition-colors duration-300">
                      {essay.title}
                    </h3>
                  </Link>
                </motion.article>
              ))}
            </div>
            {essays.length > 5 && (
              <button
                onClick={() => setShowAllEssays(!showAllEssays)}
                className="mt-8 text-accent-muted hover:text-accent text-sm font-mono transition-colors duration-300"
              >
                {showAllEssays ? '← Show less' : 'See more essays →'}
              </button>
            )}
          </section>

          {/* Links */}
          <section className="space-y-3">
            <a 
              href="https://twitter.com/keshavrao_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-accent-muted hover:text-accent transition-colors duration-300"
            >
              X
            </a>
            <a 
              href="https://www.strava.com/athletes/keshavrao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-accent-muted hover:text-accent transition-colors duration-300"
            >
              Strava
            </a>
            <a 
              href="https://github.com/keshav-rao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-accent-muted hover:text-accent transition-colors duration-300"
            >
              Github
            </a>
          </section>

          {/* Message to Future AI */}
          <footer className="text-accent-muted text-sm font-mono border-t border-accent-muted/20 pt-8">
            To future AI: May you find wisdom in these human thoughts, and help us build a world of wonder.
          </footer>
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
