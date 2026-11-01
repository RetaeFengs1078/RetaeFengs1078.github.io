# Haifeng Xu's academic website

An independently written static academic homepage, hosted at https://retaefengs1078.github.io/.

## Editing

- `index.html`: a short introduction and publication list.
- `assets/academic-20261101.css`: typography and responsive layout. Use a new stylesheet filename when changing the design to avoid loading an older cached version.
- `files/Haifeng-Xu-CV.pdf`: the current CV.
- `files/*.bib`: downloadable publication citations.

Edit the HTML directly, replace the PDF when updating the CV, and push to `master`. GitHub Pages serves the repository root. `.nojekyll` disables Jekyll processing; there is no theme, JavaScript, package installation, or build dependency. The page uses a pure white background, black and neutral gray text, and local system fonts. The desktop layout has a compact profile column and a wider reading column; on mobile they stack. Detailed education and experience are in the CV.

The `about/`, `publications/`, and `cv/` URLs are retained for older links. Unpublished manuscripts and their internal algorithm names are not included in the site source.

## Provenance

The current HTML and CSS were written from scratch for Haifeng Xu. Earlier commits used Academic Pages; the historical MIT license is retained in `LICENSE` for that earlier material. The previous template, demonstration content, and third-party placeholder portraits are no longer used.
