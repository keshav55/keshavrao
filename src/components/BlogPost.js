import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Import essays from a separate file for easier management
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[id];

  if (!post) {
    navigate('/');
    return null;
  }

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface text-white"
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-16">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-accent-muted hover:text-accent mb-12 sm:mb-16 text-sm group focus:outline-none"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">Back home</span>
        </button>

        <header className="mb-12 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <time className="text-accent-muted font-mono text-sm">
            {post.date}
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
