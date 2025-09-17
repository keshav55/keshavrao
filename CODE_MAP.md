# CODE_MAP.md

Quick reference for AI agents and developers to understand the codebase structure.

## 🚀 Quick Start
```bash
npm install          # Install dependencies
npm start           # Dev server on http://localhost:3002
npm build          # Production build
npm test           # Run tests
```

## 📁 Directory Structure
```
keshavrao-web/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── BlogPost.js     # Blog post display component
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── Footer.js       # Site footer
│   │   ├── SEO.js          # SEO meta tags component
│   │   └── ProjectCard.js  # Project showcase cards
│   ├── pages/          # Route-level pages
│   │   ├── Home.js         # Landing page
│   │   ├── Blog.js         # Blog listing page
│   │   ├── BlogPostPage.js # Individual blog post view
│   │   ├── Daily.js        # Daily journal entries
│   │   ├── About.js        # About page
│   │   └── Projects.js     # Projects showcase
│   ├── data/           # Static data
│   │   └── posts.js        # Hardcoded blog posts (legacy)
│   ├── utils/          # Utility functions
│   │   ├── postProcessor.js    # Markdown processing & caching
│   │   └── generateSitemap.js  # Sitemap generation
│   ├── context/        # React contexts
│   │   └── ThemeContext.js # Theme management (future dark mode)
│   ├── App.js          # Main app component & routing
│   └── index.js        # App entry point
├── content/            # Markdown content
│   ├── posts/          # Blog posts (*.md with YAML frontmatter)
│   └── drafts/         # Draft posts (not published)
├── public/             # Static assets
│   ├── index.html      # HTML template
│   └── icons/          # Favicon & app icons
└── package.json        # Dependencies & scripts
```

## 🔑 Key Files

### Core Application
- `src/App.js` - Main routing logic using React Router v7
- `src/index.js` - Application entry point with React 18 root

### Content System
- `src/utils/postProcessor.js` - Handles markdown parsing, caching (5min TTL), and post metadata
- `src/data/posts.js` - Legacy hardcoded posts, being migrated to markdown
- `content/posts/*.md` - New markdown-based blog posts with YAML frontmatter

### Styling
- `src/index.css` - Global styles with Tailwind directives
- `tailwind.config.js` - Tailwind configuration with typography plugin

### Configuration
- `CLAUDE.md` - AI agent instructions and project context
- `.env` - Environment variables (if needed)
- `package.json` - Project dependencies and scripts

## 🎨 Design System
- **Colors**: Minimalist black (#000) and white (#fff) only
- **Typography**: SF Pro Display/Text fonts with fallbacks
- **Spacing**: Tailwind default scale
- **Components**: Clean, minimal design with subtle animations (Framer Motion)

## 📦 Key Dependencies
- **React 18** - UI framework
- **React Router v7** - Client-side routing
- **TailwindCSS** - Utility-first styling
- **react-markdown** - Markdown rendering
- **react-helmet-async** - SEO meta tags
- **Framer Motion** - Animations
- **Prism.js** - Syntax highlighting

## 🔄 Content Flow
1. Posts can be in `src/data/posts.js` (legacy) or `content/posts/*.md` (preferred)
2. `postProcessor.js` reads and caches markdown files with 5-minute TTL
3. Posts are rendered with `react-markdown` and syntax highlighting
4. SEO component manages meta tags for each page

## 🚧 Current State
- Transitioning from hardcoded to markdown posts
- No TypeScript (planned in roadmap)
- No external APIs - purely static content
- Simple state management (no Redux/Zustand)
- Production: https://keshavrao.com

## 💡 For AI Agents
- Keep responses concise (2-3 bullets max)
- Prefer editing existing files over creating new ones
- Focus on 80/20 rule - what matters most
- Never create docs unless explicitly asked
- Check CLAUDE.md for specific project guidelines