# Task Contexts — Auto-extracted from MAP.md

## Task Template
- **Task ID:** T-[AUTO]
- **Name:** [Feature/Fix Name]
- **Complexity:** [Trivial|Simple|Moderate|Complex|Epic]
  - Trivial: Single-line fix, typo, comment
  - Simple: 1-2 files, <50 lines, no cross-module deps
  - Moderate: 3-5 files, <200 lines, some deps
  - Complex: 5+ files, >200 lines, multiple systems
  - Epic: Architectural change, multi-system refactor
- **Scope:**
  - Files touched: [count]
  - Lines affected: ~[estimate]
  - Dependencies: [count of related files/modules]
- **Context Files:** [file:line_start-line_end] (from MAP critical files)
- **Execution Plan:**
  1. [Step 1 with file:line reference]
  2. [Step 2 with file:line reference]
  3. [Step 3 with file:line reference]
- **Success Criteria:** [Measurable, testable]
- **Dependencies:** [Task IDs or external dependencies]
- **Risk Level:** [Low/Medium/High]
  - Blast radius: [how many systems/endpoints affected]
  - Test coverage: [existing tests? new tests needed?]
  - Rollback: [Easy|Moderate|Difficult]

---

## Tasks

### T-001: Fix Blog Page Route Mismatch
- **Task ID:** T-001
- **Name:** Fix Blog page route mismatch with unified posts data
- **Complexity:** Simple
- **Scope:**
  - Files touched: 3
  - Lines affected: ~30
  - Dependencies: 2 (BlogPost component, posts data sources)
- **Context Files:**
  - `src/pages/Blog.js:5-21` (Hardcoded blogPosts array)
  - `src/components/BlogPost.js:12` (Post lookup logic)
  - `src/data/posts.js:2-36` (Primary posts data structure)
  - `src/data/blogPosts.js:1-53` (Alternative posts structure)
- **Execution Plan:**
  1. Update Blog.js to use posts from `src/data/posts.js` instead of hardcoded array (line 5-21)
  2. Fix Link routing to use correct post IDs from posts data (line 38)
  3. Update BlogPost component to handle both hardcoded and markdown posts (line 12)
- **Success Criteria:** Blog page displays actual posts, routing works for all post types
- **Dependencies:** None
- **Risk Level:** Low
  - Blast radius: Blog listing and individual post pages only
  - Test coverage: No existing tests, manual verification needed
  - Rollback: Easy (revert to hardcoded array)

### T-002: Consolidate Multiple Content Sources
- **Task ID:** T-002
- **Name:** Merge three blog posts data sources into unified system
- **Complexity:** Moderate
- **Scope:**
  - Files touched: 5
  - Lines affected: ~100
  - Dependencies: 4 (posts utils, BlogPost, Home, Blog components)
- **Context Files:**
  - `src/data/posts.js:1-47` (Primary hardcoded posts)
  - `src/data/blogPosts.js:1-53` (Alternative blog posts object)
  - `src/utils/posts.js:12-56` (Markdown parsing logic)
  - `src/components/BlogPost.js:4-12` (Post data source)
  - `src/pages/Home.js:5-9` (Posts display)
  - `src/pages/Blog.js:5-21` (Blog listing)
- **Execution Plan:**
  1. Choose primary data source (recommend posts.js structure)
  2. Move blogPosts.js content to posts.js or markdown files
  3. Update Blog.js to use unified posts data instead of hardcoded array
  4. Modify BlogPost to use getPostBySlug for all posts
  5. Update Home component to use unified post source
  6. Remove redundant blogPosts.js file
- **Success Criteria:** Single content source, all posts render correctly, no duplicate data
- **Dependencies:** T-001 (route fix)
- **Risk Level:** Medium
  - Blast radius: All blog-related functionality
  - Test coverage: No existing tests, comprehensive manual testing needed
  - Rollback: Moderate (need to restore multiple data sources)

### T-003: Add About Page Route
- **Task ID:** T-003
- **Name:** Add About page route to navigation system
- **Complexity:** Trivial
- **Scope:**
  - Files touched: 2
  - Lines affected: ~5
  - Dependencies: 1 (App.js routing)
- **Context Files:**
  - `src/pages/About.js:1-114` (About page component exists)
  - `src/App.js:16-18` (Current route definitions)
- **Execution Plan:**
  1. Import About component in App.js (line 7)
  2. Add About route to Routes component (line 18)
  3. Add About link to navigation if needed
- **Success Criteria:** About page accessible at /about route
- **Dependencies:** None
- **Risk Level:** Low
  - Blast radius: Routing only
  - Test coverage: Manual navigation test
  - Rollback: Easy (remove route)

### T-004: Add Error Handling for Missing Posts
- **Task ID:** T-004
- **Name:** Add 404 handling for non-existent blog posts
- **Complexity:** Simple
- **Scope:**
  - Files touched: 2
  - Lines affected: ~15
  - Dependencies: 1 (BlogPost component)
- **Context Files:**
  - `src/components/BlogPost.js:14-17` (Current navigate on missing post)
  - `src/App.js:16-18` (Route definitions)
- **Execution Plan:**
  1. Create NotFound component in src/components/
  2. Update BlogPost to show 404 instead of redirect (line 14-17)
  3. Add NotFound route to App.js
- **Success Criteria:** Graceful 404 page for invalid post URLs
- **Dependencies:** None
- **Risk Level:** Low
  - Blast radius: Error handling only
  - Test coverage: Manual testing with invalid URLs
  - Rollback: Easy (remove NotFound route)

### T-005: Implement Draft Publishing Workflow
- **Task ID:** T-005
- **Name:** Build automated draft publishing system
- **Complexity:** Moderate
- **Scope:**
  - Files touched: 3
  - Lines affected: ~100
  - Dependencies: 2 (file system, content structure)
- **Context Files:**
  - `docs/drafts/interactive-writer-guide.md:54-60` (Publishing process)
  - `src/utils/posts.js:5-11` (File system operations)
  - `content/drafts/` (Draft files location)
- **Execution Plan:**
  1. Create publish script in scripts/ directory
  2. Add date prefix and move draft to posts/ directory
  3. Update posts cache invalidation for new content
  4. Add npm script for publishing
- **Success Criteria:** One-command draft publishing with proper formatting
- **Dependencies:** None
- **Risk Level:** Medium
  - Blast radius: Content management system
  - Test coverage: Manual testing with sample drafts
  - Rollback: Moderate (file moves required)

### T-006: Integrate Sitemap Generation
- **Task ID:** T-006
- **Name:** Add automated sitemap generation to build process
- **Complexity:** Simple
- **Scope:**
  - Files touched: 2
  - Lines affected: ~10
  - Dependencies: 1 (build process)
- **Context Files:**
  - `src/utils/sitemap.js:1-27` (Sitemap generation utility exists)
  - `package.json:28-32` (Build scripts)
- **Execution Plan:**
  1. Add sitemap generation to build script in package.json
  2. Ensure sitemap.js runs after content processing
  3. Test sitemap.xml generation in public/ directory
- **Success Criteria:** sitemap.xml automatically generated on build
- **Dependencies:** T-002 (unified content source)
- **Risk Level:** Low
  - Blast radius: Build process only
  - Test coverage: Verify sitemap.xml contains all posts
  - Rollback: Easy (remove from build script)

### T-007: Optimize Posts Cache Invalidation
- **Task ID:** T-007
- **Name:** Add cache invalidation for content changes
- **Complexity:** Simple
- **Scope:**
  - Files touched: 1
  - Lines affected: ~20
  - Dependencies: 1 (posts utils)
- **Context Files:**
  - `src/utils/posts.js:7-17` (Current cache implementation)
  - `src/utils/posts.js:52-56` (Cache update logic)
- **Execution Plan:**
  1. Add file watching for content/posts/ directory
  2. Trigger cache refresh on file changes
  3. Add manual cache clear function
- **Success Criteria:** Content updates reflect without browser refresh
- **Dependencies:** None
- **Risk Level:** Low
  - Blast radius: Performance optimization only
  - Test coverage: Manual testing with content updates
  - Rollback: Easy (remove file watching)

### T-008: Add Blog Post Search Functionality
- **Task ID:** T-008
- **Name:** Implement search across blog post content and metadata
- **Complexity:** Moderate
- **Scope:**
  - Files touched: 3
  - Lines affected: ~60
  - Dependencies: 2 (Blog page, posts data)
- **Context Files:**
  - `src/pages/Blog.js:23-53` (Blog listing component)
  - `src/utils/posts.js:33-41` (Post data processing)
- **Execution Plan:**
  1. Add search input to Blog page component
  2. Implement search function in posts utils
  3. Filter posts based on title, content, and tags
  4. Add search state management
- **Success Criteria:** Real-time search across all blog posts
- **Dependencies:** T-002 (unified content source)
- **Risk Level:** Low
  - Blast radius: Blog page only
  - Test coverage: Manual testing with various search terms
  - Rollback: Easy (remove search component)

### T-009: Enhance SEO for Dynamic Content
- **Task ID:** T-009
- **Name:** Improve SEO metadata for markdown posts
- **Complexity:** Simple
- **Scope:**
  - Files touched: 2
  - Lines affected: ~25
  - Dependencies: 2 (SEO component, BlogPost)
- **Context Files:**
  - `src/components/SEO.js` (Current SEO implementation)
  - `src/components/BlogPost.js:24-47` (Blog post structured data)
- **Execution Plan:**
  1. Extract description from frontmatter or content excerpt
  2. Update SEO component to accept dynamic metadata
  3. Add Open Graph tags for social sharing
  4. Generate automatic excerpts for posts without descriptions
- **Success Criteria:** Better search visibility and social sharing previews
- **Dependencies:** T-002 (unified content source)
- **Risk Level:** Low
  - Blast radius: SEO metadata only
  - Test coverage: Manual testing with social media previews
  - Rollback: Easy (revert SEO component changes)

---

## Quick Wins (Low Risk, High Impact)
1. **T-003**: Add About page route (immediate navigation improvement)
2. **T-001**: Fix blog routing (immediate user experience improvement)
3. **T-004**: Add 404 handling (professional error handling)
4. **T-006**: Integrate sitemap generation (SEO improvement)
5. **T-007**: Cache optimization (performance win)

## Strategic Work (High Impact, Medium Risk)
1. **T-002**: Content consolidation (architectural improvement)
2. **T-005**: Publishing workflow (content management automation)

## Future Enhancements (Lower Priority)
1. **T-008**: Search functionality (user feature)
2. **T-009**: Enhanced SEO (marketing improvement)
