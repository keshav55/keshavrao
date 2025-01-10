import fs from 'fs';
import { getAllPosts } from './posts';

function generateSitemap() {
  const baseUrl = 'https://keshavrao.vercel.app';
  const posts = getAllPosts();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${post.lastModified || post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}
