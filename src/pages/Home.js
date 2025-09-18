import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialLinks from '../components/SocialLinks';
import { getSortedPostsData } from '../data/posts';

function Home() {
  const posts = getSortedPostsData();
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <SEO />
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-6">Keshav Rao</h1>
          <p className="text-gray-400 mb-8">
            Building AI systems at{' '}
            <a href="https://atrislabs.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:underline">
              Atris Labs
            </a>.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Essays</h2>
          <ul className="space-y-2">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`} className="text-gray-300 hover:text-white hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          {posts.length > 5 && (
            <Link to="/blog" className="text-gray-300 hover:text-white hover:underline text-sm mt-4 inline-block">
              See all posts →
            </Link>
          )}
        </section>

        <footer className="py-8 border-t border-gray-800">
          <SocialLinks />
        </footer>
      </div>
    </div>
  );
}

export default Home;
