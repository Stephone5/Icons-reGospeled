# Icons reGospeled — website

The web home for Icons reGospeled. This repo is the **start of the full IrG site**; more pages will be added over time.

## Structure

- `index.html` — homepage (currently a simple hub; will grow into the full site).
- `reading-finder/` — the **Book Finder**: a 3-question tool that recommends books from the reGospeled reading path and links out to Bookshop/Amazon. Self-contained single file (fonts + book covers embedded).

## Live URLs (GitHub Pages)

Once Pages is enabled (Settings → Pages → Source: `main` / root):

- Homepage: `https://stephone5.github.io/Icons-reGospeled/`
- Book Finder: `https://stephone5.github.io/Icons-reGospeled/reading-finder/`

A custom domain (e.g. `iconsrg.org`) can be added later in Settings → Pages.

## Updating the Book Finder

For now the finder is a flat file. Two upgrades are planned:
1. Point it at the Google Sheet book database so edits go live without touching code.
2. Wire the email box to MailerLite.

To edit a book by hand today: open `reading-finder/index.html` and edit the `B=[...]` list, then commit.
