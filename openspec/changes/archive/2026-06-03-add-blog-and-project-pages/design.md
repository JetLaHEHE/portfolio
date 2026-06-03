## Context

The portfolio currently has 3 projects displayed as cards on the homepage and no blog. Visitors can't explore projects in depth or read technical articles. Adding these pages increases content depth and improves SEO with unique, indexable pages. The existing `data/projects.ts` has minimal data (title, description, image, tags, links) — enough for cards, not enough for a dedicated page.

## Goals / Non-Goals

**Goals:**
- Add `/blog` listing and `/blog/[slug]` pages with markdown content
- Add `/projects/[slug]` pages with detailed project content
- Extend project data model for detail pages
- Link project cards from homepage to detail pages
- Add Blog link to header navigation

**Non-Goals:**
- CMS integration or admin panel
- Comments system or social sharing
- RSS feed (future enhancement)
- Category taxonomy or tag-based filtering for blog

## Decisions

1. **Markdown files over CMS** — Static markdown in `content/blog/` keeps things simple, version-controlled, and requires no database. Matches the portfolio's existing static approach.
2. **gray-matter + react-markdown** — `gray-matter` for frontmatter parsing, `react-markdown` with `remark-gfm` for rendering. Both are lightweight and standard in the Next.js ecosystem.
3. **Extend Project interface over separate content files** — Add `details` (markdown string) and `challenges` (string array) to the Project interface. Simpler than managing parallel content files for 3 projects.
4. **Server Components for pages** — Blog listing and project detail pages are server-rendered for SEO. Blog post content is read at request time via `fs`.

## Risks / Trade-offs

- [Markdown files require redeployment for new posts] → Acceptable for a personal portfolio; can add a headless CMS layer later
- [Project detail content is in code, not content files] → Fine for 3 projects; if projects grow beyond 10+, migrate to markdown files
