# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio site using the App Router, React 19, and Tailwind CSS v4.

### Data Layer

All content is centralized in `app/lib/`:
- `types.ts` - TypeScript interfaces for Project, Category, Interest, SiteConfig
- `data.ts` - All site content (projects, categories, interests, about content) and helper functions

To add/edit content, modify `data.ts`. The site generates static pages from this data.

### Design System

**Fonts:** Syne (headings), Space Grotesk (body) - loaded via `next/font` in `layout.tsx`

**Colors:** Dark-mode-first with chartreuse accent (#D4F934). All colors defined as CSS custom properties in `globals.css` and exposed to Tailwind via `@theme inline`.

**Typography classes:** `text-display`, `text-headline`, `text-title`, `text-body`, `text-caption` defined in `globals.css`

### Pages

- `/` - Home with hero, category overview, project sections (snap scroll)
- `/about` - Bio, values (2x2 grid), interests (snap scroll)
- `/contact` - 40/60 split with interactive left panel
- `/projects/[slug]` - Dynamic project detail pages
- `/interests/[slug]` - Dynamic interest detail pages

### Shared Components

`app/components/ui.tsx` exports: ScrollIndicator, ReturnToTop, PageFooter, ArrowIcon, ImagePlaceholder

`app/components/Nav.tsx` - Fixed nav with scroll progress bar, dropdown menus, mobile hamburger

### Patterns

- Full-bleed, edge-to-edge layouts with no rounded corners
- Snap scrolling on home and about pages (`snap-y snap-proximity`)
- Sections account for nav height with `pt-16`
- Signature elements: accent dots, accent lines, oversized numbers
