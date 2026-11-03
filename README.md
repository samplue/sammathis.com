# sammathis.com

Portfolio site of Sam, assistant and VFX editor. Static site built with [Eleventy](https://www.11ty.dev/), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Add or edit a credit

- **In the browser:** open [app.pagescms.org](https://app.pagescms.org), sign in with GitHub, pick this repository, open **Credits**. Save, and the site updates about a minute later.
- **In the file:** edit `src/_data/projects.yaml`. The order in the list is the order on the site.

Posters are optional (portrait, 2:3). They live in `src/posters/` and are converted to AVIF/WebP/JPEG in several sizes during the build.

## Local preview

```bash
npm install
npm start
```

Then open http://localhost:8080.

## Notes

- The contact address is split in `src/_data/site.js` and joined in the browser by `src/assets/js/mail.js`, so it never appears verbatim in the HTML.
- Fonts (Archivo) are served from this site, not from Google Fonts.
- `PATH_PREFIX` (repository variable) is `/sammathis.com/` while the site runs under `samplue.github.io`; set it to `/` once the custom domain is live.
