## Context

The portfolio has accumulated several small gaps: placeholder metadata, no OG image, hidden resume, particle animation ignoring accessibility, missing SEO files, and no inline form validation. Each is a quick fix on its own; grouping them avoids context-switching.

## Goals / Non-Goals

**Goals:**
- Fix all known polish issues and SEO gaps in one pass
- Use Next.js built-in APIs (sitemap, robots.txt via config, ImageResponse for OG)
- Add client-side validation that matches server-side expectations

**Non-Goals:**
- Full accessibility audit (focus on reduced motion only)
- Analytics integration (separate feature)
- Server-side validation overhaul (already exists)

## Decisions

1. **ImageResponse for OG image** — Next.js provides `@vercel/og` / `next/og` for runtime OG image generation. No static PNG to maintain; text stays current automatically.
2. **Dynamic sitemap via `app/sitemap.ts`** — Next.js App Router supports `sitemap.ts` that returns a `Sitemap` object. Lists all blog posts and project pages dynamically.
3. **`app/robots.ts` for robots.txt** — Same pattern as sitemap; simple generated file.
4. **Inline validation as local state** — No form library needed. A `errors` object in state, validated on submit with regex for email and length checks for name/message.
5. **Media query for reduced motion** — `window.matchMedia("(prefers-reduced-motion: reduce)")` check at initialization; skip animation setup if matched.

## Risks / Trade-offs

- [OG image uses runtime API] → Acceptable for a portfolio; adds negligible server load
- [Resume PDF exists but may be outdated] → Already present in `public/`; uncommenting just makes it accessible
