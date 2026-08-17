# Sibin Jacob — Portfolio

A responsive portfolio with intentionally separate visitor journeys for Sibin Jacob’s professional Site Reliability Engineering career and independent web and creative services. Built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons. Project case studies open in an accessible modal, so the site does not need a routing dependency.

## Portfolio paths

- `/` — neutral gateway that asks visitors which portfolio they need
- `/professional` — employment history, SRE profile, technical skills, resume, and professional contact only
- `/freelance` — independent services, sample work, process, testimonials, and project enquiry only

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
│   ├── profile-placeholder.svg
│   ├── sibin-jacob-resume.pdf
│   ├── og-placeholder.svg
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

- `personalInformation.ts` — shared contact details plus separately named professional and independent-work titles, summaries, roles, and statistics
- `professionalExperience.ts` — companies, roles, dates, responsibilities, achievements, and technologies
- `technicalSkills.ts` — skill categories and experience labels
- `freelanceServices.ts` — service copy and deliverables
- `portfolioProjects.ts` — filters, project cards, links, and complete case-study content
- `education.ts` — degrees and institutions
- `certifications.ts` — certifications and training
- `achievements.ts` — verified achievements only
- `testimonials.ts` — approved client testimonials
- `socialLinks.ts` — LinkedIn, GitHub, Instagram, email, and WhatsApp links

Search the project for `Placeholder`, `placeholder`, and `yourdomain.com` before launch. Do not publish sample testimonials or outcomes as real content.

## Replace the photograph

1. Add the new image to `public/`, ideally as an optimised WebP or AVIF file (for example `sibin-jacob.webp`).
2. In `src/data/personalInformation.ts`, change `profileImage` to `/sibin-jacob.webp`.
3. Keep the crop portrait-oriented; an image around 1000 × 1250 pixels works well.
4. Update the hero image alt text in `src/pages/HomePage.tsx` if a more descriptive alternative is appropriate.

## Replace the resume

The supplied resume has already been copied to `public/sibin-jacob-resume.pdf`. To update it later, overwrite that file with the same name. If the filename changes, also update `resumePath` in `src/data/personalInformation.ts`.

## Add a portfolio project

1. Open `src/data/portfolioProjects.ts`.
2. Copy an existing project object and give it a unique, URL-safe `slug`.
3. Choose one of the defined categories, replace every placeholder case-study field, and set `isPlaceholder: false`.
4. Add verified `liveUrl` and `githubUrl` values only when they are public.
5. The current visual is a built-in placeholder. To use real images, add an optional image field to the `Project` interface in `src/types/portfolio.ts`, store optimised images in `public/projects/`, and render them in `ProjectVisual.tsx` or `ProjectCard.tsx`.

## SEO checklist

- Replace every `https://www.yourdomain.com/` value in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- Replace `public/og-placeholder.svg` with a 1200 × 630 social image, preferably JPG or PNG, and update the image metadata if its filename changes.
- Add any future published project pages to `public/sitemap.xml`.
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
