# MAP.md — System Navigation Guide

## Quick Reference Index

**Core App Structure**
- APP:MAIN -> `src/App.js:1-28` (Router setup, route definitions)
- APP:HOME -> `src/pages/Home.js:1-52` (Landing page, recent posts)
- APP:BLOG -> `src/pages/Blog.js:1-57` (Blog listing page)
- APP:BLOG_POST -> `src/components/BlogPost.js:1-154` (Individual post view)
- APP:DAILY -> `src/pages/Daily.js` (Daily thoughts page)
- APP:ABOUT -> `src/pages/About.js:1-114` (About page with motion animations)

**Data & Content**
- POSTS:DATA -> `src/data/posts.js:1-47` (Hardcoded blog posts)
- POSTS:BLOG_DATA -> `src/data/blogPosts.js:1-53` (Alternative blog posts object)
- POSTS:UTILS -> `src/utils/posts.js:1-72` (Markdown post parsing, caching)
- SITEMAP:UTIL -> `src/utils/sitemap.js:1-27` (Sitemap generation utility)
- DAILY:DATA -> `src/data/dailyThoughts.js:1-15` (Daily thoughts array)
- CONTENT:POSTS -> `content/posts/` (Markdown blog posts)
- CONTENT:DRAFTS -> `content/drafts/` (Work in progress drafts)

**Components**
- NAV:BAR -> `src/components/Navbar.js` (Site navigation)
- SEO:COMP -> `src/components/SEO.js` (Meta tags, structured data)
- FOOTER -> `src/components/Footer.js` (Site footer)
- SOCIAL:LINKS -> `src/components/SocialLinks.js` (Social media links)

**Configuration**
- PKG:CONFIG -> `package.json:1-57` (Dependencies, scripts)
- TAILWIND:CONFIG -> `tailwind.config.js` (Styling configuration)
- POSTCSS:CONFIG -> `postcss.config.js` (CSS processing)

**Search Accelerators**
- Components: `rg "export default" src/components/`
- Pages: `rg "export default" src/pages/`
- Data exports: `rg "export.*=" src/data/`
- Utility functions: `rg "export function" src/utils/`
- Route definitions: `rg -n "path=" src/App.js`
- Blog posts data: `rg -n "const.*posts" src/data/`

## By-Feature

### Blog System
- **Post listing**: `src/pages/Blog.js:1-57` - Displays hardcoded blog posts (TODO: use unified data)
- **Post rendering**: `src/components/BlogPost.js:1-154` - Individual post with markdown, sharing, SEO
- **Hardcoded posts**: `src/data/posts.js:1-47` - Static blog posts array (used by Home page)
- **Blog posts object**: `src/data/blogPosts.js:1-53` - Alternative blog posts structure
- **Markdown posts**: `src/utils/posts.js:1-72` - File-based markdown parsing with caching
- **Content location**: `content/posts/` - Markdown files with frontmatter
- **Sitemap generation**: `src/utils/sitemap.js:1-27` - Generates sitemap.xml for SEO

### Navigation & Routing
- **Router setup**: `src/App.js:2-24` - React Router configuration
- **Routes defined**: `/` (Home), `/blog/:id` (Blog post), `/daily` (Daily thoughts), `/about` (About page)
- **Navbar component**: `src/components/Navbar.js` - Site navigation menu
- **About page**: `src/pages/About.js:1-114` - Standalone about page with animations

### Content Management
- **Daily thoughts**: `src/data/dailyThoughts.js:1-15` - Simple array of thoughts
- **Draft system**: `/docs/drafts/` and `/content/drafts/` - Two-tier draft organization
- **Interactive writer guide**: `/docs/drafts/interactive-writer-guide.md` - Writing workflow documentation

### Styling & UI
- **Theme context**: `src/context/ThemeContext.js` - Dark/light theme management
- **Tailwind CSS**: Configured for black theme with gray accents
- **Framer Motion**: Page transitions and animations
- **Responsive design**: Mobile-first approach

### SEO & Meta
- **SEO component**: `src/components/SEO.js` - Dynamic meta tags, structured data
- **Blog post SEO**: `src/components/BlogPost.js:24-47` - JSON-LD structured data for posts
- **Social sharing**: `src/components/BlogPost.js:50+` - Twitter, LinkedIn sharing

## By-Concern

### State Management
- **React state**: Local component state (useState hooks)
- **Data fetching**: File system reads in `src/utils/posts.js`
- **Caching**: In-memory posts cache with 5-minute TTL
- **No global state**: Simple prop-based data flow

### API Layer
- **No backend**: Static site with client-side routing
- **File system**: Content loaded from local markdown files
- **Build-time**: Content processed at build/runtime via Node.js fs

### UI System
- **Component structure**: Atomic design (components, pages, data, utils)
- **Styling**: TailwindCSS utility classes
- **Animations**: Framer Motion for page transitions
- **Icons**: React-icons library (FaTwitter, FaLinkedin, etc.)

### Content Architecture
- **Multiple content sources**: Hardcoded posts (posts.js), blog posts object (blogPosts.js), and markdown files
- **Frontmatter parsing**: gray-matter for metadata extraction
- **Draft workflow**: Separate drafts directory with publishing process
- **SEO optimization**: Structured data, meta tags, social sharing, sitemap generation

### Performance
- **Caching strategy**: Posts cached in memory with TTL
- **Bundle size**: Standard React create-react-app setup
- **Loading**: Client-side rendering, no server-side optimization

## Critical Files

⭐ **src/App.js:1-28** - Application entry point, routing configuration
⭐ **src/components/BlogPost.js:1-154** - Core blog functionality, SEO, sharing
⭐ **src/utils/posts.js:1-72** - Content parsing, caching, file system operations
⭐ **src/data/posts.js:1-47** - Primary blog posts data (used by Home)
⭐ **src/data/blogPosts.js:1-53** - Alternative blog posts structure
⭐ **package.json:1-57** - Dependencies, build configuration, port 3002
⭐ **tailwind.config.js** - Styling foundation, theme configuration

## Entry Points

### Primary Entry Points
1. **src/index.js** - React DOM mounting point
2. **src/App.js:1-28** - Router setup, route definitions
3. **src/pages/Home.js:1-52** - Landing page, recent posts display
4. **src/pages/About.js:1-114** - About page with motion animations
5. **public/index.html** - HTML template, meta configuration

### Content Entry Points
1. **content/posts/** - Published blog posts (markdown with frontmatter)
2. **src/data/posts.js:1-47** - Primary hardcoded blog posts
3. **src/data/blogPosts.js:1-53** - Alternative blog posts object
4. **src/data/dailyThoughts.js:1-15** - Daily thoughts data

### Development Entry Points
1. **package.json:29** - `npm start` runs on port 3002
2. **src/setupTests.js** - Testing configuration
3. **src/reportWebVitals.js** - Performance monitoring

### ATRIS Agent System
- **atris/** - AI agent team configuration directory
- **atris/MAP.md** - This navigation guide (AI-generated and maintained)
- **atris/TASK_CONTEXTS.md** - Auto-extracted tasks with file:line context
- **atris/agent_team/** - Pre-built agent templates
  - **navigator.md** - System navigation expert
  - **executor.md** - Task execution specialist  
  - **validator.md** - Quality assurance gatekeeper
  - **brainstormer.md** - Idea development facilitator
  - **launcher.md** - Session orchestration coordinator
