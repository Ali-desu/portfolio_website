# Portfolio, Ali El Adnani

Personal portfolio site. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

**Live:** [portfoliowebsite-chi-bay.vercel.app](https://portfoliowebsite-chi-bay.vercel.app/)

## Structure

Multi-page rather than one long scroll:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/work` | Project index |
| `/work/[slug]` | One page per project, prerendered at build time |
| `/about` | Background, experience, education, tools |
| `/contact` | Contact details |

## Theming

Light and dark palettes are plain CSS custom properties on `:root` and
`:root[data-theme="dark"]`. Tailwind reads them through `@theme inline`, so
every utility follows the active theme without duplicated classes.

An inline script in `<head>` (see `lib/theme.ts`) sets `data-theme` before
first paint from `localStorage`, falling back to the OS setting, so the page
never flashes the wrong palette. The toggle itself holds no React state: both
icons render and CSS shows the one matching the active theme.

## Logo

The mark is an A whose crossbar runs past both legs, matching the hairline
rules used across the site. It exists in two places that must stay in sync:

- `app/icon.svg` is the source of truth, and Next serves it as the tab icon
- `components/ui/Logo.tsx` is the same paths inline, for the header and footer

`app/favicon.ico` and `app/apple-icon.png` were rasterised from `app/icon.svg`,
so regenerate them if the mark changes.

## Motion

No animation dependency. Everything is CSS plus one `IntersectionObserver`:

- Scroll reveals in `components/ui/Reveal.tsx`
- Headline lines that rise out of a clipping box, pure CSS with staggered delays so they play before hydration
- Page transitions in `components/layout/PageTransition.tsx`, keyed on the pathname so the animation replays on every navigation
- `lib/useScroll.ts` shares one rAF-throttled scroll listener

Everything respects `prefers-reduced-motion`, and a `<noscript>` block reveals
all content when JavaScript is unavailable.

## Editing content

All copy and project data live in **`lib/content.ts`**. Adding a project means
adding one object to the `projects` array; its page, its index row and its
metadata are generated from that.

## Running locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

```bash
pnpm build
pnpm start
pnpm lint
```

## Versions

`v1.0.0` is tagged at the previous single-page scroll design, if it is ever
needed: `git checkout v1.0.0`.
