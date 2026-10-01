# Sibin Jacob — Portfolio

A responsive single-page profile for Sibin Jacob, combining reliability engineering, cloud, automation, web technology, and visual design capabilities. Built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons.

The site is presented as one coherent public profile at `/`.

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
