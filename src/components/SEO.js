import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, image, article, canonical, keywords = [] }) {
  const siteTitle = 'Keshav Rao';
  const siteDescription = 'Thoughts on engineering, blockchain, and product development.';
  const siteUrl = 'https://keshavrao.vercel.app';
  const defaultImage = `${siteUrl}/og-image.png`;
  const defaultKeywords = ['engineering', 'blockchain', 'product development', 'tech', 'programming'];

  const metaKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Language and locale */}
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@keshavrao_" />
      <meta name="twitter:site" content="@keshavrao_" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Mobile viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Keshav Rao" />
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  );
}

export default SEO;
