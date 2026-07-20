# Divyanshu Aggarwal

Personal research website built with [Astro](https://astro.build/) and deployed as a
static site on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

Run `npm run check` for Astro and TypeScript diagnostics, and `npm run build` to
generate the production site in `dist/`.

## Content

Publications, experience, profile updates, and open-source contributions live in
`src/data/`. Shared page components are in `src/components/`, and the site routes are
defined in `src/pages/`.

Pushes to `master` deploy through `.github/workflows/deploy.yml` once GitHub Pages is
configured to use GitHub Actions as its source.
