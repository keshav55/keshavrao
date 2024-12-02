import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About | Digital Garden</title>
        <meta name="description" content="A passionate explorer at the intersection of technology and creativity." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white pt-32 pb-24"
      >
        <main className="max-w-screen-md mx-auto px-6">
          <header className="mb-32">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-display text-7xl mb-16"
            >
              About Me
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-lg text-neutral-400 leading-relaxed"
            >
              Hello! I'm a passionate explorer at the intersection of technology and 
              creativity. This space is my digital garden where I cultivate ideas, share 
              insights, and document my journey through the ever-evolving landscape of 
              tech and design.
            </motion.p>
          </header>

          <section className="mb-32">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl mb-8"
            >
              My Philosophy
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-neutral-400 leading-relaxed"
            >
              I believe in the power of minimalism, both in design and in life. To me, 
              true elegance lies in simplicity, and the most impactful solutions are 
              often the most straightforward ones. This philosophy guides my approach 
              to problem-solving and creation.
            </motion.p>
          </section>

          <section>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-display text-4xl mb-8"
            >
              What I Do
            </motion.h2>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-8"
            >
              <p className="font-mono text-neutral-400 leading-relaxed">
                My work spans across various domains of technology and design. 
                I'm particularly interested in:
              </p>
              
              <ul className="space-y-4 font-mono text-neutral-400">
                <li className="flex items-center space-x-4">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
                  <span>Creating intuitive and beautiful user experiences</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
                  <span>Exploring the intersection of AI and design</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
                  <span>Building tools that empower creators</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
                  <span>Writing about technology, design, and the future</span>
                </li>
              </ul>
            </motion.div>
          </section>
        </main>
      </motion.div>
    </>
  );
}

export default About;
