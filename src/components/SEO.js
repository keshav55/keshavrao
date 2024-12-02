import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, image, article }) {
  const siteTitle = 'Keshav Rao';
  const siteDescription = 'Thoughts on engineering, blockchain, and product development.';
  const siteUrl = 'https://keshavrao.vercel.app';
  const defaultImage = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@keshavrao_" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}

export default SEO;
