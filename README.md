# Icons reGospeled — website

The web home for Icons reGospeled, built with [Astro](https://astro.build) and deployed to GitHub Pages at **[iconsrg.org](https://iconsrg.org)**.

## How it's built

- **Astro** — pages in `src/pages/` (`.astro`), shared UI in `src/components/` (`Header`, `Footer`) and `src/layouts/Base.astro`. Change the nav or footer once, and it updates everywhere.
- **Global styles** — `src/styles/global.css`. Flexbox layouts, brand tokens shared with the Book Finder, responsive down to phones with a hamburger menu, and progressive scroll-reveal.
- **`public/`** — served as-is at the site root:
  - `public/reading-finder/` — the **Book Finder** (a self-contained tool; intentionally NOT part of the Astro build so it stays isolated and portable).
  - `public/assets/logo.png` — the brand logo used in every header.
  - `public/CNAME` — the custom domain (`iconsrg.org`).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # preview the built dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo, **Settings → Pages → Source must be set to "GitHub Actions."**

## Editing the Book Finder

The finder is a single self-contained file at `public/reading-finder/index.html` (fonts + covers embedded; book data is pulled live from a published Google Sheet CSV). Edit that file directly; it is not processed by the Astro build.
