# ErpX Website

A static marketing website for the ErpX product. The site is built with plain HTML, CSS and JavaScript and designed to be modular and easy to edit.

## Quick Start
- Preview locally: open `index.html` in your browser.
- Start a simple HTTP server from the project root:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

- Or use VS Code Live Server for live reload while editing.

## What’s Included
- Main pages: `index.html`, `products.html`, `pricing.html`, `contact.html`, `about-us.html`, `privacy-policy.html`, `terms-conditions.html`.
- Shared fragments: `includes/header.html`, `includes/footer.html`.
- Styles: files under `css/` (e.g., `app.css`, `pricing.css`, `mobile-responsive.css`).
- Scripts: files under `js/` (e.g., `main.js`, `pricing-logic.js`, `modal-handler.js`).
- Assets: images and media in `assets/` (organized by page/feature).

## Project Structure (high level)
- `index.html` — Home page
- `css/` — Stylesheets and component CSS
- `js/` — Client-side scripts
- `includes/` — Reusable HTML fragments (header/footer)
- `assets/` — Images, logos, illustrations
- `_archive/` — Older/prior assets and experimental pricing calculator resources

## Development Notes
- Edit header/footer in `includes/` to update site-wide navigation or footer content.
- Keep component-specific styles in separate CSS files under `css/` to limit regressions.
- JavaScript modules are small and page-scoped; inspect `js/` to find related logic (e.g., `pricing-logic.js`).

## Deployment
This is a static site and can be deployed to any static host (GitHub Pages, Netlify, Vercel, S3, etc.). For a quick test deploy with GitHub Pages, push this repo and enable Pages on the main branch.

## Contributing
- Open issues or PRs describing the change.
- Keep changes focused and include screenshots for UI updates.

## Contact
For questions or updates open an issue in this repository or contact the project owner.

---
Updated README for the ErpX Website project.
