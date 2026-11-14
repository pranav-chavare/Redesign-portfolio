# Pranav Chaware — Portfolio

A personal portfolio built with Next.js 14 (App Router), React, TypeScript and Tailwind CSS,
exported as a static site for GitHub Pages.

## Run locally

Requires Node.js 18.17 or newer (Node 20 is used in CI).

```bash
npm install
npm run dev
```

Open <http://localhost:3000/premium-portfolio> (the site is served under its GitHub Pages path).

## Build

```bash
npm run build   # static export written to ./out
npm run lint    # ESLint (the build script skips linting, so run this separately)
```

To preview the exported site locally, serve the `out` folder so that it appears under
`/premium-portfolio/`, for example:

```bash
mkdir -p /tmp/preview && ln -sfn "$PWD/out" /tmp/preview/premium-portfolio
npx serve /tmp/preview   # then open /premium-portfolio/
```

## Deploy to GitHub Pages

1. Push this project to the `main` branch of `pranav-chavare/premium-portfolio`.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` installs, builds and publishes `out/`.

The `basePath` is set in `next.config.js`. If you move to a custom domain or a
`<username>.github.io` repository, set it to `""` and update `SITE_URL` in `app/layout.tsx`.

## Editing content

All text lives in `lib/data.ts`:

- `SITE`: name, role, tagline, email, GitHub and LinkedIn links, optional `photo`.
- `INTRO` and `FOCUS_AREAS`: the bullets and chips in the opening section.
- `EXPERIENCE`: work and education. `summary` and `details` are optional and hidden when empty.
- `PROJECTS`: add a `links` array (for example `{ label: "Source", href: "https://github.com/..." }`)
  and the card shows the links and becomes interactive.
- `SKILL_GROUPS` and `CERTIFICATIONS`.

**Profile photo:** put an image in `public/` (for example `public/pranav.jpg`) and set
`photo: "pranav.jpg"` in `SITE`. Until then the portrait shows your initials.

## Structure

```
app/            layout, page, global styles, favicon
components/     profile, experience, projects, skills, connect, site-nav, section
lib/data.ts     all content
tailwind.config.ts   colors, fonts and other design tokens
```

Fonts (Bricolage Grotesque and Newsreader) are self-hosted through Fontsource, so the
site makes no requests to Google Fonts.
