# Icons reGospeled — website

The web home for Icons reGospeled — a StoryBrand-structured static site on GitHub Pages, one cohesive brand with the Book Finder.

## Structure

- `index.html` — homepage (full StoryBrand homepage).
- `about/` — About: the What & Why (theological vision, mission).
- `community/` — Wings/Whiskey/Word, Movies for Humans, retreats, "Restoring the Icon" gift, PRC support.
- `podcast/` — *Less Heresy Than Expected* + *Strengthened by Grace* Substack.
- `course/` — *The Gospel You Were Never Told* ($20 Kajabi course).
- `give/` — Givebutter giving + meal fee.
- `shop/` — Printful merch.
- `contact/` — email, phone, socials.
- `reading-finder/` — the **Book Finder** (self-contained, sheet-driven; do not rebuild).
- `assets/site.css` — shared design system (tokens match the Book Finder).
- `assets/signup.js` — email signup → Kit (ConvertKit) form 9754678 (same list the finder uses).

Links between pages are **relative** so the site works both at the project-pages base path (`/Icons-reGospeled/`) and later at a custom apex domain.

## Design system

Palette: ground `#ECEEF2`, ink `#39342C`, muted `#867F73`, gold link `#8A6413`, gold-fill `#C69430`, card `#F6F8FB`. Fonts: Playfair Display (headings) + Epilogue (body), loaded via Google Fonts.

## Live URLs (GitHub Pages)

- Homepage: `https://stephone5.github.io/Icons-reGospeled/`
- Book Finder: `https://stephone5.github.io/Icons-reGospeled/reading-finder/`

A custom domain can be added later in Settings → Pages.

## Local preview

```
python -m http.server 8848
```
Then open `http://localhost:8848/`.

## Wiring still to do

- **Course link:** all "Enroll" buttons point to `linktr.ee/iconsrg`. Swap in the direct Kajabi course URL when handy (`course/index.html`, two links).
- **Podcast:** the Listen page links out to YouTube via a poster card. Optional upgrade: embed a specific playlist/video ID for an inline player.
- **Kit welcome sequence:** Kit's free plan does not auto-send welcome sequences. Decide: upgrade Kit (~$33/mo) or move to MailerLite/Brevo. Signups currently POST to the Kit form regardless.
- **Custom domain:** point the owned domain at GitHub Pages when ready.
