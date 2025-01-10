import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Cache for storing parsed posts to avoid repeated disk reads
let postsCache = null;
let lastCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

export function getAllPosts() {
  const now = Date.now();
  
  // Return cached posts if they're still fresh
  if (postsCache && (now - lastCacheTime) < CACHE_TTL) {
    return postsCache;
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        content,
        ...data
      };
    });

  // Sort posts by date in descending order (newest first)
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // Update cache
  postsCache = sortedPosts;
  lastCacheTime = now;

  return sortedPosts;
}

// Get a single post by its slug
// This doesn't use caching since it's a single file read
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data
  };
}
