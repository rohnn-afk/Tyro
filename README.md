# Tyro Tyres Website

Production-oriented marketing and product-catalogue website for Tyro Tyres, a demo private-label commercial and agricultural tyre manufacturer based in New Delhi.

## Stack

- Next.js 16 App Router with React 19 and TypeScript
- Vinext and Vite for Cloudflare-compatible builds
- Tailwind CSS 4 plus the site-specific design system in `app/globals.css`
- Cloudflare Workers runtime through `worker/index.ts`
- OpenAI Sites deployment through `.openai/hosting.json`

## Commands

```bash
npm install
npm run dev
npm run lint
npm test
```

`npm test` performs a production build and exercises the rendered homepage, a representative product page, the sitemap, and all 50 downloadable datasheets.

## Project structure

- `app/` — routes, SEO metadata, sitemap, robots rules, and global styles
- `components/` — reusable presentation and interaction components
- `config/` — company identity, contact details, navigation, and shared site settings
- `content/` — catalogue source data that is independent of presentation
- `lib/` — typed domain transformations and product lookup functions
- `public/` — optimized brand imagery and generated customer-facing datasheets
- `scripts/` — deterministic asset-generation utilities
- `tests/` — production rendering and catalogue integrity checks
- `worker/` and `build/` — hosting adapter and build integration

## Content safety

This client presentation intentionally uses demo contact details, certificates, customer names, technical values, and performance claims. Replace and verify them before a commercial launch. Shared business details live in `config/site.ts`; product sizes and groups live in `content/product-catalog.ts`.

## Deployment

The project is connected to OpenAI Sites. A validated version should be committed, packaged, saved, and deployed through the Sites workflow so the public URL remains stable across releases.
