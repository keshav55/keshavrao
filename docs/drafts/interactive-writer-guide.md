---
title: 'Interactive Writer Guide'
date: '2025-01-22'
description: 'How to use the interactive writing system for blog posts and drafts'
author: 'K'
tags: ['documentation', 'writing', 'process']
---

# Interactive Writing System Guide

## Directory Structure

- `/content/posts/` - Published posts
- `/docs/drafts/` - Work in progress drafts
  
## Writing Flow

### 1. Starting a Draft

- Create drafts in `/docs/drafts/`
- Use markdown format
- Start with frontmatter:
  ```md
  ---
  title: 'Your Title'
  date: 'YYYY-MM-DD'
  description: 'Brief description'
  author: 'K'
  tags: ['tag1', 'tag2']
  ---
  ```

### 2. Draft Formats

#### Bullet Point Format
- Use for quick thoughts and outlines
- Nested structure for sub-points
- Example:
  ```md
  - main idea
    - supporting point
    - another point
  - next idea
    - detail
    - detail
  ```

#### Stream of Consciousness
- Raw, unfiltered thoughts
- No strict structure needed
- Add bullet points for clarity
- Date stamp new additions

### 3. Publishing Process

1. Move draft from `/docs/drafts/` to `/content/posts/`
2. Add date prefix to filename: `YYYY-MM-DD-title.md`
3. Update frontmatter date
4. Review and finalize tags

## Best Practices

### Draft Management
- Keep drafts atomic and focused
- Use descriptive filenames
- Add context in description field
- Tag appropriately for easy finding

### Writing Style
- Start with bullets for structure
- Expand into paragraphs when ready
- Keep stream-of-consciousness sections dated
- Use nested points for detail levels

### Version Control
- Commit drafts regularly
- Use meaningful commit messages
- Keep drafts in separate branch if needed

## Examples

### Stream of Consciousness Draft
```md
---
title: 'Midnight Thoughts'
date: '2025-01-10'
description: 'Random musings at 1am.'
tags: ['thoughts', 'late-night']
---

- 1am thoughts about clouds
- coding while coffee achieves sentience
- more random musings
```

### Structured Draft
```md
---
title: 'Building in Moonlight'
date: '2025-01-15'
description: 'On late-night coding sessions'
tags: ['creativity', 'coding']
---

- setup phase
  - environment details
  - preparation steps
- main content
  - key points
  - examples
```

## Tips

- Start with bullet points
- Let ideas flow naturally
- Don't edit while drafting
- Review and structure later
- Date stamp new additions
- Keep related thoughts grouped
- Use tags consistently

## Publishing Checklist

1. Content complete
2. Structure refined
3. Tags finalized
4. Description accurate
5. Date updated
6. Filename formatted
7. Moved to posts directory

Remember: The system is flexible. Use what works for your flow and adapt as needed.

- K
