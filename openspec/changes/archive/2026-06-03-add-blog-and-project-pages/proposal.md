## Why

The portfolio is currently a single-page site with limited depth. Adding a blog and project detail pages gives visitors more content to explore, improves SEO, and showcases work in greater detail — making the portfolio more compelling to potential employers and clients.

## What Changes

- Add a `/blog` page listing blog posts sorted by date
- Add `/blog/[slug]` dynamic routes for individual blog posts
- Add `/projects/[slug]` dynamic routes for detailed project pages
- Store blog posts as markdown files in `content/blog/`
- Extend project data with detailed content for dedicated pages
- Add navigation links to blog in the header

## Capabilities

### New Capabilities
- `blog`: Browseable blog section with list view and individual post pages, posts stored as markdown with frontmatter
- `project-details`: Dedicated project detail pages with full description, challenges, and links beyond what fits on the homepage card

### Modified Capabilities
- *(none — no existing specs defined)*

## Impact

- `content/blog/` — new directory with markdown post files
- `app/blog/page.tsx` — new blog listing page
- `app/blog/[slug]/page.tsx` — new blog post page
- `app/projects/[slug]/page.tsx` — new project detail page
- `data/projects.ts` — extend Project interface with detail fields
- `components/Header.tsx` — add Blog nav link
- `components/Projects.tsx` — link project cards to detail pages
- `package.json` — add dependencies for markdown processing
