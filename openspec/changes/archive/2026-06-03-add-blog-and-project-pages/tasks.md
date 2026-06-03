## 1. Setup

- [ ] 1.1 Install dependencies: gray-matter, react-markdown, remark-gfm
- [ ] 1.2 Create content/blog/ directory with sample blog posts

## 2. Data Layer

- [ ] 2.1 Extend Project interface with slug, details, challenges in data/projects.ts
- [ ] 2.2 Create lib/posts.ts utility to read and parse markdown blog files
- [ ] 2.3 Create data/posts.ts or keep as markdown files read by fs

## 3. Blog Pages

- [ ] 3.1 Create app/blog/page.tsx listing all blog posts
- [ ] 3.2 Create app/blog/[slug]/page.tsx for individual posts with markdown rendering

## 4. Project Detail Pages

- [ ] 4.1 Create app/projects/[slug]/page.tsx with detailed project content
- [ ] 4.2 Update data/projects.ts with detailed content for each project

## 5. Navigation & Links

- [ ] 5.1 Add Blog link to components/Header.tsx
- [ ] 5.2 Update components/Projects.tsx to link cards to /projects/[slug]
- [ ] 5.3 Update components/ProjectCard.tsx to use the link
