# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**This file is the source of truth for project structure and intent. Update it whenever functional or structural changes are made.**

---

## What This Is

A personal portfolio website for Kendall McRae, an Experience Research Strategist. It showcases her background, philosophy, case studies, and testimonials. The site is intentionally simple: static content, no CMS, no backend.

## Commands

```bash
npm run dev       # Vite dev server on port 5173
npm run build     # production build
npm run lint      # TypeScript check + build
```

## Project Structure

```
src/
  pages/            # Home, About, Work, ProjectDetail, Contact, Process, Fun
  components/       # Navigation, Footer, FernColony, FernMark, LogoStrip
    diagrams/       # bespoke per-project visual diagrams (see Architecture)
  data/projects.ts  # all project content — the only "database"
  index.css         # Tailwind directives + background gradient + fern/emphasis utilities
public/
  logos/            # company logo files for the "worked with" strip (see Architecture)
  *.jpeg/*.jpg      # project images
```

## Architecture

**All content is hardcoded.** Project data (titles, descriptions, methods, impact, image paths) lives in `src/data/projects.ts` as a typed array (14 projects, ordered most-complete → least-complete). To add or edit a project, edit that file. Images go in `public/`.

**Routing:** React Router v6 with a prop-drilling pattern. Pages receive `onNavigate(page: string)` and `onViewProject(projectId: string)` callbacks from `App.tsx` rather than using `<Link>` directly. All routing logic centralizes in `AppContent` in `App.tsx`. `Process` and `Fun` are intentional "coming soon" stubs linked from the nav and footer.

**Navigation:** `Navigation.tsx` follows the Tailwind Studio pattern — wordmark + fern mark on the left, a dark "Contact me" pill and a circular hamburger on the right, opening a full-width dark panel with oversized nav links and contact details. It is a single component (not a sidebar/drawer).

**Fern identity:** The resurrection fern (*Pleopeltis polypodioides*) is the brand's central metaphor — dormant and curled when dry, unfurled and green when revived.
- `FernColony.tsx` generates a radial colony of fronds procedurally: pinnae are placed along a quadratic-bezier rachis and rotated to its tangent, with deterministic jitter so it reads organic but renders identically every time. It cycles dormant ⇄ revived on hover/click/focus. Used at wallpaper scale behind the Home hero, driven via a `FernColonyHandle` ref so the whole hero section triggers it. Transition classes (`.fern-leaflet`, `.fern-rachis`, `.fern-bark`) live in `index.css`.
- `FernMark.tsx` is the static 3-leaf outline logo (one curled, one semi-unfurled, one unfurled) used in the nav and footer.

**Company logo strip:** `LogoStrip.tsx` renders the "worked with" row. Each entry points at a file in `public/logos/`; if the file is missing the component falls back to a typeset wordmark. **To add a real logo, just drop the SVG into `public/logos/` with the filename already listed in the `companies` array — no code change needed.** Only `lastpass.svg` and `deviantart.svg` ship today (sourced from the MIT-licensed simple-icons set); the rest need files from Kendall.

**Testimonials:** Stored in `Home.tsx` as verbatim quotes. Text wrapped in `**double asterisks**` renders bold via the local `EmphasizedQuote` component — edit the markers to change emphasis.

**Bespoke project diagrams:** A few projects have a hand-built visual diagram shown in a "Framework" section on their detail page. Each is its own component under `src/components/diagrams/`, registered by project `id` in the `frameworkDiagrams` map in `src/pages/ProjectDetail.tsx` — kept out of `projects.ts` so that file stays plain data.

## Styling

- Tailwind CSS v3 throughout — no CSS modules; inline styles only for dynamically-computed SVG transforms
- **Typography:** Mona Sans (variable, via `@fontsource-variable/mona-sans`, imported in `main.tsx`) for everything. Headings are weight 500 with `-0.025em` tracking, set as a base rule in `index.css`.
- **Color:** a nature-derived palette in `tailwind.config.js` — greens (`forest`/`canopy`/`sage`/`meadow`/`lichen`), blues (`slate.*`), earth (`bark.*`, `stone.*`), and accents (`terracotta.*`, `gold.*`, `sunset.*`). `basalt` (#2C2825) is the darkest tone — a deep asphalt used for dark panels and buttons, never pure black.
- **Background:** `html` carries a fixed Fibonacci-spiral gradient (radial color pools over a horizon gradient) defined in `index.css`. It sits behind a `rgba(250,249,247,0.72)` scrim so body copy stays readable. Components pull saturation back up locally with the `.emphasis-wash` utility.
- `@` resolves to `src/` (Vite alias)
- Layout pattern: `max-w-6xl` for wide sections, `max-w-4xl` for text; `py-16 lg:py-24` vertical spacing; `px-4 sm:px-6 lg:px-8` horizontal padding

## Deployment

Auto-deploys to Netlify (https://polypodioides.netlify.app/) from `main` on GitHub (`kendallvmcrae/kvm-portfolio-website`). The project was originally scaffolded via Chef (Convex's app builder) and the Vite config still injects a dev-only `chef.convex.dev` message listener for screenshot tooling; the Convex backend itself was removed and there is no server-side code.
