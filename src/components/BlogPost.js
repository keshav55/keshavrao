import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import SEO from './SEO';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  if (!post) {
    navigate('/');
    return null;
  }

  // Calculate estimated reading time
  const wordsPerMinute = 200;
  const wordCount = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <article className="min-h-screen bg-black text-white p-8">
      <SEO 
        title={post.title}
        description={post.description}
        article={true}
      />
      
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-white mb-12 flex items-center"
        >
          <span className="mr-2">←</span>
          Back home
        </button>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-2">{post.date}</div>
        <div className="text-gray-400 mb-8">{readingTime} min read</div>
        
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
