## Why

The portfolio has several rough edges and missing SEO fundamentals: placeholder domain in metadata, missing OG image, unused resume PDF, particle animation that ignores accessibility preferences, no sitemap, and no inline validation on the contact form. Fixing these in one pass polishes the site for production.

## What Changes

- Update metadata domain from placeholder to `jetagatep.dev`
- Generate a dynamic OG image via `next/og` ImageResponse
- Uncomment and restore the resume download button in About section
- Add `prefers-reduced-motion` check to ParticleBackground to disable canvas animation
- Generate `sitemap.xml` and `robots.txt` dynamically
- Add inline validation messages to ContactForm (email format, min lengths)

## Capabilities

### New Capabilities
- `seo-foundations`: Sitemap, robots.txt, and dynamic OG image generation
- `inline-validation`: Client-side validation feedback for the contact form

### Modified Capabilities
- *(none — no existing specs defined)*

## Impact

- `app/layout.tsx` — update metadataBase domain
- `app/og-image/route.tsx` — new OG image generation endpoint
- `app/sitemap.ts` — new sitemap generation
- `app/robots.ts` — new robots.txt generation
- `components/ParticleBackground.tsx` — add reduced motion check
- `components/About.tsx` — uncomment resume download button
- `components/ContactForm.tsx` — add inline validation messages
- `data/projects.ts` — add OG images for project detail pages (optional)
