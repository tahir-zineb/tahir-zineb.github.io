# Zineb TAHIR — Portfolio

Live: **<https://tahir-zineb.github.io/>**

Bilingual (EN / FR) portfolio of Zineb TAHIR — Junior DevOps & Systems Engineer.

## How it is built

- **No build step, no framework, no external JavaScript.** Plain HTML + CSS + vanilla JS served by GitHub Pages.
- **Content lives in data files**, one per language, with identical structure:
  - [`js/content-en.js`](js/content-en.js)
  - [`js/content-fr.js`](js/content-fr.js)
- [`js/app.js`](js/app.js) renders the page from the active language and drives the EN/FR and dark/light toggles (the page always opens in dark + English; a toggle lasts for the current visit, `?lang=fr` opens French directly), the loading screen, the typing effect, the counters, the skill bars, the reveal-on-scroll, the mobile menu, the scroll-spy, the career grid and the project filters.
- [`css/style.css`](css/style.css) holds the design tokens (dark and light palettes), Inter typography and layout.
- [`assets/cv/`](assets/cv/) contains the downloadable CV (PDF).

## Local preview

```bash
python -m http.server 3000
# open http://127.0.0.1:3000/
```

## Author

**Zineb TAHIR** — [LinkedIn](https://www.linkedin.com/in/z-tahir) · [GitHub](https://github.com/tahir-zineb) · <zineb.tahirr@hotmail.com>
