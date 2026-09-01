# Portfolio — Ali El Adnani

Personal portfolio site. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

**Live:** _add the Vercel URL once deployed_

## Motion

All animation is hand-rolled — no `framer-motion`, no GSAP, no animation dependency of any kind:

- **Scroll reveals** via `IntersectionObserver` ([components/ui/Reveal.tsx](components/ui/Reveal.tsx)), with the transitions themselves in CSS
- **Scroll-linked effects** (hero parallax, the stacking project deck, the timeline rail, the word-by-word lit statement) share a single rAF-throttled scroll listener in [lib/useScroll.ts](lib/useScroll.ts) that writes straight to the DOM, so React never re-renders while scrolling
- **Entrance animations** are pure CSS keyframes with staggered delays, so they fire before hydration

Everything respects `prefers-reduced-motion`, and a `<noscript>` block reveals all content if JavaScript is unavailable.

## Editing content

All copy — name, links, projects, skills, timeline — lives in one file: **[lib/content.ts](lib/content.ts)**. The components read from it, so changing text never means touching a component.

## Running locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

```bash
pnpm build    # production build
pnpm lint
```
