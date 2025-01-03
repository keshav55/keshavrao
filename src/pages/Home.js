import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialLinks from '../components/SocialLinks';
import CurrentProjects from '../components/CurrentProjects';
import { getSortedPostsData } from '../data/posts';

function getPreviewContent(content) {
  // Get first paragraph or first 200 characters
  const firstParagraph = content.split('\n\n')[0];
  return firstParagraph.length > 200 
    ? firstParagraph.slice(0, 200) + '...'
    : firstParagraph;
}

function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <SEO />
      <div className="max-w-2xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Keshav Rao</h1>
          <p className="text-xl text-gray-400 mb-4">Thoughts and ideas.</p>
          <CurrentProjects />
        </header>

        <div className="space-y-12 mb-16">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-800 pb-8">
              <Link to={`/blog/${post.id}`} className="block group">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-300">
                  {post.title}
                </h2>
                <div className="text-gray-500 mb-4">{post.date}</div>
                <p className="text-gray-400 whitespace-pre-line">
                  {getPreviewContent(post.content)}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <footer className="py-8 border-t border-gray-800">
          <SocialLinks />
        </footer>
      </div>
    </div>
  );
}

export default Home;
