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
        keywords={post.tags || []}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <header className="max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4" itemProp="headline">{post.title}</h1>
        <div className="text-gray-400 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              {(post.author || 'Keshav Rao').split(' ').map(n => n[0]).join('')}
            </span>
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{post.author || 'Keshav Rao'}</span>
            </span>
          </div>
          <span className="text-gray-500">•</span>
          <time dateTime={post.date} itemProp="datePublished" className="text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span aria-label="Reading time" className="text-sm">
            {readingTime} min read
          </span>
          {post.tags && (
            <div className="flex gap-2 flex-wrap">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-gray-800 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-invert max-w-2xl mx-auto" itemProp="articleBody">
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <img 
                {...props} 
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg"
                alt={props.alt || 'Blog post image'}
              />
            ),
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            )
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPost;
