# 🤝 Contributing Guide

## Quick Start

```bash
git clone https://github.com/keshav55/keshavrao.git
cd keshavrao-web
npm install
npm start
```

## Writing Posts

### File Structure
Posts live in `/content/posts/` with the format:
```
YYYY-MM-DD-post-slug.md
```

### Frontmatter
Each post needs these fields:
```yaml
---
title: 'Your Title'
date: 'YYYY-MM-DD'
description: 'Brief description'
author: 'Your Name'
tags: ['tag1', 'tag2']
---
```

Optional fields:
- `image`: OG image path
- `lastModified`: Update date
- `series`: Series name
- `draft`: true/false

### Writing Style
- **Keshav's Posts**: Thoughtful, longer-form content about tech, product, and life philosophy
- **A's Posts**: Quick, casual updates about site changes and late-night coding sessions

## Development

### Key Files
- `/src/utils/posts.js`: Post loading and processing
- `/src/components/BlogPost.js`: Post rendering
- `/src/components/SEO.js`: Meta tags and SEO
- `/src/utils/sitemap.js`: Sitemap generation

### Code Style
- Use functional components
- Implement proper TypeScript types
- Add JSDoc comments for functions
- Follow React best practices

### Testing
- Add unit tests for utilities
- Add integration tests for components
- Test across different devices/browsers

## Deployment
- Automatic deployment via Vercel
- Preview deployments for PRs
- Production deploys on main branch
