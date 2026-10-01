# Sibin Jacob — Portfolio

A responsive portfolio with separate visitor journeys for Sibin Jacob’s technical skills profile and independent web and creative services. Built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons.

## Portfolio paths

- `/` — neutral gateway that asks visitors which portfolio they need
- `/professional` — SRE profile, technical skills, and LinkedIn contact
- `/freelance` — independent services, process, approach, and LinkedIn contact

Each path has its own hero, navigation, metadata, contact intent, and footer content. The small switch control allows intentional movement between paths without blending their content.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Before publishing, verify everything with:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Project structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
├── src/
│   ├── components/       Reusable layout and UI components
│   ├── context/          Light/dark theme state
│   ├── data/             All editable portfolio content
│   ├── pages/            Homepage composition
│   ├── types/            Shared TypeScript data types
│   ├── App.tsx           Router setup
│   ├── index.css         Tailwind entry and visual system
│   └── main.tsx          React entry point
├── index.html            SEO and structured metadata
├── vite.config.ts
└── vercel.json           Vercel fallback configuration
```

## Where to update content

All regular content lives in `src/data/`. Each file begins with a short update note.

- `personalInformation.ts` — profile titles, summaries, roles, location, and technical statistics
- `technicalSkills.ts` — skill categories and experience labels
- `freelanceServices.ts` — service copy and deliverables
- `education.ts` — degrees and institutions
- `certifications.ts` — certifications and training
- `achievements.ts` — verified achievements only
- `socialLinks.ts` — published social profiles

## SEO checklist

- Keep the canonical URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml` aligned with the deployed GitHub Pages URL.
- Add a real 1200 × 630 social image and its metadata when one is available.
- Update descriptions and social profiles after final content is approved.

## Deploy

### Vercel

Push the repository to GitHub, import it in Vercel, and keep the detected Vite settings: build command `npm run build` and output directory `dist`.

### Netlify

Import the repository in Netlify and use `npm run build` with publish directory `dist`.

### Firebase Hosting

Install and authenticate the Firebase CLI, then run `firebase init hosting`. Select `dist` as the public directory, configure it as a single-page app, and do not overwrite `index.html`. Build and deploy with:

```bash
npm run build
firebase deploy
```
