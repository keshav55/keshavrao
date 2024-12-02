import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
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
  }
];

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="space-y-12 sm:space-y-16">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="group"
            >
              <Link 
                to={`/blog/post-${post.id}`} 
                className="block space-y-1"
              >
                <time className="block font-mono text-sm text-accent-muted">
                  {post.date}
                </time>
                <h2 className="font-display text-2xl sm:text-3xl text-white group-hover:text-accent-muted transition-colors duration-300">
                  {post.title}
                </h2>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

export default Blog;
