# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint (flat config, TS/TSX files)
npm run test         # Run tests once (vitest)
npm run test:watch   # Run tests in watch mode
```

## What This Project Is

A Russian-language single-page landing site for "Грибная инспекция" (@ip.chaser) — a gastro-content project that films mushroom dish investigations at restaurants. The site is a marketing/lead-gen page with a contact form. All user-facing text is in Russian.

## Architecture

**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn/ui + Framer Motion

**Routing:** React Router v6 with two routes: `/` (Index) and `*` (NotFound). The Index page is composed of sequential section components rendered in order:

`HeroSection → ConceptSection → BenefitsSection → ConditionsSection → ContactSection → FooterSection`

**App shell (`App.tsx`):** Wraps everything in ErrorBoundary → QueryClientProvider → TooltipProvider → BrowserRouter. Includes both Radix toast (`Toaster`) and Sonner toast providers.

## Key Patterns

- **Path alias:** `@/` maps to `./src/` (configured in tsconfig, vite, and vitest configs)
- **shadcn/ui:** "default" style, no RSC, CSS variables enabled. Components live in `src/components/ui/`. Add new components via `npx shadcn-ui@latest add <component>`
- **Theming:** Dark-only theme using HSL CSS variables defined in `src/index.css`. No light mode — all color values are dark. Colors referenced via `hsl(var(--name))` in Tailwind config
- **Animations:** Framer Motion throughout — sections use `useInView` with `once: true` for scroll-triggered entrance animations. Custom `fade-up` keyframe in Tailwind config
- **Custom utilities:** `text-gradient` and `image-card` classes in `src/index.css`
- **`cn()` helper:** `src/lib/utils.ts` — standard clsx + tailwind-merge pattern

## Testing

Vitest with jsdom environment, `@testing-library/react` and `@testing-library/jest-dom`. Setup file at `src/test/setup.ts` includes a `matchMedia` polyfill. Tests go in `src/**/*.{test,spec}.{ts,tsx}`.

## TypeScript Config

Relaxed strictness: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`, `noUnusedParameters: false`.
