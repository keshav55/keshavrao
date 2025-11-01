const fs = require('fs');

// Hardcoded posts data (matching src/data/posts.js)
const posts = [
  {
    id: 'craft-work-invisible-work',
    date: '2025-08',
  },
  {
    id: '2am-flow',
    date: '2025-06',
  }
];

function generateSitemap() {
  const baseUrl = 'https://keshavrao.vercel.app';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/daily</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  ${posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully!');
  console.log('📍 Location: public/sitemap.xml');
}

generateSitemap();
