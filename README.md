# Yunsoo Ha — Academic Portfolio

A custom, responsive Hugo portfolio. The redesign uses local templates and
system fonts; it does not require the previous Wowchemy modules, a Node
build, or a running database. Existing publication URLs and the CV path remain
available.

## Build and preview

The existing Netlify configuration pins Hugo **0.111.3**, which is the version
used to verify this redesign. The standard Hugo binary is sufficient.

```sh
hugo server --disableFastRender
```

Production build and local checks:

```sh
hugo --gc --minify --cleanDestinationDir --baseURL https://ysha.netlify.app/
python3 scripts/check_site.py public
node --check assets/js/portfolio.js
```

Netlify continues to build with `hugo --gc --minify --cleanDestinationDir -b $URL` and publish `public/`.
To apply the redesign, copy the contents of the supplied update archive into
the root of the existing `ys-ha/ys-ha` checkout, review the changes, then commit
and push to the branch connected to Netlify.

## Update content

| Content | Source |
| --- | --- |
| Intro, news, experience, and awards | `data/portfolio.yaml` |
| Publication metadata and abstracts | `content/publication/<paper>/index.md` |
| Homepage, research interests, and teaching text | `layouts/index.html` |
| Header links | `layouts/partials/header.html` |
| Colors, typography, responsive layout, print style | `assets/css/portfolio.css` |
| Menu, publication filters/search, copy-email action | `assets/js/portfolio.js` |
| Profile photograph | `static/images/yunsoo-ha.jpg` |
| Curriculum vitae | `static/uploads/resume.pdf` |

For a new paper, add its page under `content/publication/`, set
`publication_year`, and add its topic to `publication_topics` in the portfolio
data. Add its folder name to `selected_publications` to feature it on the homepage.
The complete archive sorts by publication year. Use publication types `1` for
conference papers, `2` for journal articles, and `3` for preprints.

## Content notes

- Original publications, abstracts, external links, and CV are retained.
- Journal publication years are stored separately from the original `date`
  values: MPC (2026), IJOC and IISE Transactions (2025), and Quantum (2023).
  Publisher references: https://doi.org/10.1007/s12532-026-00332-3,
  https://doi.org/10.1287/ijoc.2024.0575,
  https://doi.org/10.1080/24725854.2024.2335513,
  https://doi.org/10.22331/q-2023-03-16-949.
- The Reg-ASTRO paper is labeled as a preprint; the redesign does not assert
  a journal review status.
- Example posts, projects, talks, slides, CMS pages, and sample employment
  biographies are retained in source and excluded from the build in
  `config/_default/config.yaml`.
- Contact uses a direct email link and copy action. There is no form that
  appears to submit without a configured delivery service.

## Assets

The portrait is the existing site photograph. The interface uses system sans-serif
fonts with Georgia headings. Earlier font assets remain in `static/fonts/` with
their original licenses and are not loaded by the interface.
KaTeX 0.16.11 is self-hosted with its MIT license in `static/vendor/katex/` and
loads only on individual publication pages to render existing abstract math.
