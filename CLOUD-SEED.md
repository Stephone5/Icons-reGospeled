# Icons reGospeled website — session seed

Read this first. It is everything a fresh chat needs to work on iconsrg.org without re-discovering it. You are Stephen's creative director and operator for this site: advise honestly, then build, wire, and verify. He is **Stephen** (never "Sasha").

## What this is
The public website for **Icons reGospeled**, a 501(c)(3) ministry. A gospel that heals: honest theology, psychology, and real community. Design direction is StoryBrand structure, Raymond Loewy's MAYA ("most advanced yet acceptable"), accented with subtle ancient Christian iconography. Restrained, not shiny.

## Where everything is
- **Repo:** https://github.com/Stephone5/Icons-reGospeled  (branch `main`)
- **Local path (desktop machine):** `C:\Users\sbart\Documents\Claude\regospeled`
- **Live domain:** https://iconsrg.org  (GitHub Pages; `public/CNAME` holds the domain)
- **Framework:** Astro 7.2.0, static output. Node 22+ required (Astro 7 needs ≥22.12).
- **Scripts:** `npm run dev`, `npm run build` (outputs to `dist/`), `npm run preview`.

### Layout
- `src/pages/` — `index`, `about`, `community`, `podcast` (nav label is **Content**), `course`, `give`, `shop`, `contact`.
- `src/layouts/Base.astro` — head, aurora background markup, and the one site `<script>` (reveal, slider, Trinity parallax, GSAP pin scrollytelling, Kit signup, external-only-new-tab).
- `src/components/Header.astro` — nav links array. `Footer.astro` — footer (nonprofit details + mission live in the left column).
- `src/styles/global.css` — layout and components.
- `public/assets/brand.css` — **shared brand layer (tokens, `.stitle` title style, aurora clouds). Linked by BOTH the Astro site and the standalone Book Finder, so a change here flows to both.**
- `public/assets/photos/` — `jeremy.jpg`, `stephen-thor.jpg`, `stephen-barton.jpg`, `gathering-1..4.jpg`.
- `public/assets/` — `logo.png`, `logo-white.png` (footer), `logo-mark.png`, `favicon.png`.
- `public/reading-finder/index.html` — the **Book Finder**: self-contained quiz, its own logic, but it links `brand.css` so it stays visually in sync. Keep its logic isolated; only touch its shared look.

## Deploy
Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with `withastro/action@v3` (node 22) and deploys to Pages. Also rebuilds daily on cron `0 13 * * *`. **"Done" means verified live on iconsrg.org, not just built.** Build first, confirm, then push.

### Verify loop (no local server needed to prove content)
`npm run build`, then grep `dist/<page>/index.html` for the exact change. The desktop Browser pane has not reliably rendered localhost/screenshots here, so verification has been structural (build + grep) plus Stephen eyeballing the live site. In a clean cloud box the dev server/preview may work; try it, but structural checks are the dependable floor.

## Live integrations (all fetched at BUILD time, refreshed by the daily cron)
- **Shop / Printful:** products are pulled live from `https://iconsrg.printful.me`. It is an Inertia app; all products sit in the page's `data-page` attribute (decode the HTML entities, `JSON.parse`, read `props.products`: `name`, `min_price`, `imageUrl`, `slug`). Each card links to `https://iconsrg.printful.me/product/<slug>`. So add/remove/reprice on Printful and the site follows within a day. No manual product editing. Falls back to a single "Browse the shop" button if the fetch fails.
- **Content/podcast:** latest **non-Short** video via YouTube RSS, channel `UCvNaXQd1dsCEpZyagTL9URQ` (handle `LessHeresyThanExpected`), cross-referenced against `/shorts` to exclude Shorts.
- **Email:** Kit (ConvertKit) signup form, handled in Base.astro's script.
- **Give:** Givebutter — `givebutter.com/icons-regospeled` (general) and `givebutter.com/GpWqP1` (meal fee).
- **Forms:** Theology Commons and the "Restoring the Icon" gift use Google Forms links on the Community page.

## Do's and Don'ts

### Hard don'ts (he has been angry about these)
- **No doubled titles.** One title per section. Section/hero titles use `h1.stitle`/`h2.stitle` (gold Epilogue sans). No eyebrow kicker stacked over a heading. A small label over a photo row or list is fine; a label over another heading is not.
- **No em dashes anywhere.** Use commas or rewrite. Check before shipping.
- **No AI-tells in any copy.** Banned: the negation flip in every form ("not X, it's Y", "isn't just X, it's Y", "less X, more Y") — say what a thing is, once. Also banned: "worth sitting with", "sit with it", "let it land/breathe".
- **Never create imagery.** No generated graphics, SVG/HTML/Canva mockups handed over as art. Use real photos he provides or public-domain/stock sources. Plain burned-in text only, never designed art.
- **Don't design blind, don't claim unread as read.** Do the work (build/grep/read) before saying it's done. If something fails, say so plainly and fix the root cause; never paper over with a silent fallback.
- **Never leave a dead button.** If you remove a link's destination, give it a real one or flag it in one line.
- **Keep the cross.** It is meaningful. Ancient iconography stays subtle/blurred/ambient, never in the nav.

### Do's
- **Simplify above all.** Plain words. Implement the simple spec exactly; don't invent a fancier method. Pick sensible defaults, commit, verify once, ship.
- **A clear instruction is the decision.** Do it literally, no option menus or picker widgets. Note any limit in one line after.
- **Don't re-ask confirmed steps.** If he says a manual step is done, it's done.
- **Internal links stay same-tab; external links open a new tab** (Base.astro script already enforces this). Keep it that way.
- **Reveal pattern is "armed":** content is visible by default; JS adds `.armed` then `.in`. Never ship a page that is blank until JS runs.
- **Edit `brand.css` for anything the Book Finder should also get.** That is the single source of truth for brand look.
- **End commits with:** `Co-Authored-By: Claude <noreply@anthropic.com>` (or the attribution the running session specifies).

## Known open items
- **Course enrollment** buttons currently open an email (`mailto:jdkrider@iconsrg.org`) as a stopgap. Swap to the real course checkout/Kajabi URL when Stephen provides it.
- **Stephen Barton's board photo** is still the older headshot; swap when he sends a new one.
- Four HEIC candid photos never converted (no local HEIC decoder at the time); re-export to JPEG if they are still wanted.

## People
- **Jeremy Krider** — founder; pastor, theologian. Photo `jeremy.jpg`.
- **Stephen Thor** — board; coach in listening prayer and emotional awareness. Photo `stephen-thor.jpg`.
- **Stephen Barton** — board; producer and designer of Icons reGospeled and Less Heresy Than Expected. Photo `stephen-barton.jpg`.
- Board profiles live at the bottom of `/about/` with anchor IDs `#jeremy-krider` and `#stephen-barton`; the Content page host tabs link to them.
