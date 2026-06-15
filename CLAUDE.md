# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**This file is the source of truth for project structure and intent. Update it whenever functional or structural changes are made.**

---

## What This Is

A personal portfolio website for Kendall McRae, a UX Researcher. It showcases her background, philosophy, and three case studies from her work in enterprise UX research. The site is intentionally simple: static content, clean navigation, no CMS or dynamic data.

## Commands

```bash
npm run dev       # starts Vite frontend (port 5173) + Convex backend in parallel
npm run build     # production build
npm run lint      # TypeScript check + Convex function check + build
```

`npm run dev` requires an active Convex login (`npx convex login`). On first run it provisions a `.env.local` with `CONVEX_DEPLOYMENT`.

## Project Structure

```
src/
  pages/          # Home, About, Work, ProjectDetail, Contact
  components/     # Navigation only
  data/projects.ts  # all project content — the only "database"
  index.css       # Tailwind directives + scrollbar + font setup
public/           # static images (cactus.jpeg, sky.jpeg, tree.jpeg)
convex/           # backend scaffold — auth tables only, no app logic
```

## Architecture

**All content is hardcoded.** Project data (titles, descriptions, methods, impact, image paths) lives in `src/data/projects.ts` as a typed array. To add or edit a project, edit that file. Images go in `public/`.

**Routing:** React Router v6 with a prop-drilling pattern. Pages receive `onNavigate(page: string)` and `onViewProject(projectId: string)` callbacks from `App.tsx` rather than using `<Link>` directly. All routing logic centralizes in `AppContent` in `App.tsx`.

**Convex backend:** Present but dormant for application data. The schema (`convex/schema.ts`) contains only auth tables from the `@convex-dev/auth` template. No queries, mutations, or application functions exist yet. If backend features are added, they go in `convex/`.

## Styling

- Tailwind CSS v3 throughout — no CSS modules or inline styles
- Two custom color palettes defined in `tailwind.config.js`:
  - `terracotta` — warm orange-brown, used for all primary accents, buttons, links, tags, active nav state
  - `stone` — neutral grays, used for text and backgrounds
- `@` resolves to `src/` (Vite alias)
- Layout pattern: `max-w-6xl` for wide grid sections, `max-w-4xl` for text/content sections; `py-16 lg:py-24` for vertical section spacing; `px-4 sm:px-6 lg:px-8` for horizontal padding

## Deployment

The project was scaffolded via [Chef](https://chef.convex.dev) (Convex's app builder). The Vite config injects a dev-only `chef.convex.dev` message listener for screenshot tooling. The Convex deployment is `chatty-starfish-609` (dashboard: `https://dashboard.convex.dev/d/chatty-starfish-609`). Production hosting setup TBD.
