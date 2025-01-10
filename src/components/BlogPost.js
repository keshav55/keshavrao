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

  // Structured data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'author': {
      '@type': 'Person',
      'name': post.author || 'Keshav Rao'
    },
    'datePublished': post.date,
    'dateModified': post.lastModified || post.date,
    'wordCount': wordCount,
    'url': `https://keshavrao.vercel.app/blog/${id}`,
    'image': post.image || 'https://keshavrao.vercel.app/og-image.png',
    'publisher': {
      '@type': 'Organization',
      'name': 'Keshav Rao',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://keshavrao.vercel.app/logo.png'
      }
    }
  };

  return (
    <article className="min-h-screen bg-black text-white p-8" itemScope itemType="https://schema.org/BlogPosting">
      <SEO 
        title={post.title}
        description={post.description}
        article={true}
        canonical={`https://keshavrao.vercel.app/blog/${id}`}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <div className="max-w-2xl mx-auto">
        <nav aria-label="Back navigation">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white mb-12 flex items-center"
            aria-label="Back to home"
          >
            <span className="mr-2" aria-hidden="true">←</span>
            Back home
          </button>
        </nav>
        
        <header>
          <h1 className="text-4xl font-bold mb-4" itemProp="headline">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-2">
            <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
            {post.author && (
              <span className="mx-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                by <span itemProp="name">{post.author}</span>
              </span>
            )}
          </div>
          <div className="text-gray-400 mb-8">{readingTime} min read</div>
        </header>
        
        <div className="prose prose-invert prose-lg max-w-none" itemProp="articleBody">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        
        {post.tags && (
          <footer className="mt-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        )}
      </div>
    </article>
  );
}

export default BlogPost;
