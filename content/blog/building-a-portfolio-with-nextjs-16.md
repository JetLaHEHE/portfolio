---
title: "Building a Portfolio with Next.js 16"
date: "2026-05-15"
tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
excerpt: "A walkthrough of building this portfolio site using the latest Next.js 16 features including Turbopack, React 19, and Tailwind CSS v4."
---

## Why Next.js 16

Next.js 16 introduces Turbopack as the default build system, bringing significantly faster local development and production builds. Combined with React 19's improved server components, it's an excellent choice for portfolio sites.

## Project Structure

The app uses the App Router with a single-page layout:

```
app/
├── layout.tsx       # Root layout with providers
├── page.tsx          # Home page (hero, projects, about, contact)
└── globals.css       # Tailwind v4 + custom styles
```

## Key Features

### Tailwind CSS v4

Tailwind v4 uses `@import "tailwindcss"` instead of the old `@tailwind` directives. Dark mode is implemented with a custom variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

### Dark/Light Theme

Theme persistence uses `localStorage` with a fallback to `prefers-color-scheme`. The `.dark` class is toggled on the `<html>` element.

### Animations

Framer Motion handles entry animations, hover effects, and the mobile menu slide-in. The particle background is a canvas-based effect with 60 particles and connection lines.
