# 🏗️ Architecture

## Overview
A modern, fast, and SEO-optimized blog built with React and markdown.

```
keshavrao-web/
├── content/           # Content files
│   └── posts/        # Blog posts in markdown
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── utils/        # Utility functions
│   └── data/         # Data files
└── docs/             # Documentation
```

## Key Features

### Content Management
- Markdown-based content
- Frontmatter metadata
- File-system organization
- Draft system

### Performance
- Static generation
- Image optimization
- 5-minute cache TTL
- Lazy loading

### SEO
- Meta tags
- JSON-LD
- Sitemap
- Semantic HTML
- Social media cards

### Development
- Hot reloading
- TypeScript support
- Component library
- Utility functions

## Data Flow
1. Markdown files processed at build time
2. Content cached with 5-min TTL
3. React components render content
4. SEO metadata injected
5. Static files served via CDN

## Technology Stack
- React
- React Router
- TailwindCSS
- gray-matter
- react-markdown
- react-helmet-async

## Future Considerations
- Move to Next.js for better SSG
- Add TypeScript
- Implement image CDN
- Add search functionality
- Add analytics
