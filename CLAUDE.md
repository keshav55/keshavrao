# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm install` - Install dependencies
- `npm start` - Start development server on http://localhost:3002
- `npm build` - Create production build
- `npm test` - Run tests with Jest and React Testing Library

### Icon Generation
- `npm run generate-icons` - Generate all favicon and logo variants from source images

## Architecture Overview

This is a personal blog/portfolio website built with React 18 and Create React App. The site features a minimalist black and white design with blog posts, daily journal entries, and personal projects.

### Content Management
The site uses a hybrid content approach:
- Some posts are hardcoded in `src/data/posts.js` for quick updates
- Markdown posts are stored in `/content/posts/` with YAML frontmatter
- Posts are processed with a 5-minute cache TTL for performance
- Content is rendered using react-markdown with syntax highlighting support

### Key Technologies
- **Routing**: React Router v7 for client-side navigation
- **Styling**: TailwindCSS with custom configuration, SF Pro fonts, and typography plugin
- **SEO**: react-helmet-async for meta tags management
- **Animation**: Framer Motion for smooth transitions
- **Icons**: Heroicons and React Icons libraries

### Project Structure
- `/src/components/` - Reusable UI components (BlogPost, Navbar, Footer, SEO, etc.)
- `/src/pages/` - Route-level page components (Home, Blog, Daily, About)
- `/src/data/` - Static data files and post definitions
- `/src/utils/` - Utility functions for post processing and sitemap generation
- `/src/context/` - React context providers (currently ThemeContext)
- `/content/` - Markdown content files organized by type

### Important Notes
- The project is transitioning from hardcoded posts to markdown-based content
- No TypeScript yet (planned in roadmap)
- No external API dependencies - purely static content
- Simple state management without Redux/Zustand
- Production site: https://keshavrao.com

### Working Style
- Keep responses to 2-3 bullets max
- Create hyperspecific tasks to avoid knowledge gaps
- Apply 80/20 rule - focus on what matters most