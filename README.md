# Hizen — Landing Page

Marketing landing page for Hizen, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Stack

- **Next.js** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- No external UI/animation libraries — all product UI mockups are custom components

## Project structure

- `app/` — routes, layout, global styles
- `components/` — page sections (`Hero`, `Problem`, `HowItWorks`, `FinalCta`)
- `components/product/` — the reusable "browser + Hizen panel" product visuals
- `lib/` — shared config (site copy, contact email)

## Contact email

The "Get in touch" / "Show us a workflow" buttons point at the address in `lib/site.ts` (`CONTACT_EMAIL`) — update it there.
