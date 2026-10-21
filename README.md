# gustavocassel.com

Personal website of Gustavo Cassel: custom software development, integrations, process automation and IT consulting.

Built with [Astro](https://astro.build) as a static site, in Portuguese (`/`) and English (`/en`), with light and dark themes.

## Running locally

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev
```

Open <http://localhost:4321>. The page reloads on every saved change.

To build and check the production version:

```bash
npm run build
npm run preview
```

`build` runs `astro check` first, so type errors stop the build.

## Where to edit

| What | File |
| --- | --- |
| Portuguese copy | `src/data/pt.ts` |
| English copy | `src/data/en.ts` |
| Copy structure (types) | `src/data/types.ts` |
| Name and social links | `src/data/site.ts` |
| Page sections | `src/components/Home.astro` |
| Header and footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| Code window in the hero | `src/components/CodeWindow.astro` |
| Icons | `src/components/icons.ts` |
| Colors, fonts and layout | `src/styles/global.css` |
| SEO, metadata and theme | `src/layouts/BaseLayout.astro` |
| Social sharing image | `public/og-cover.svg` |

Fields marked as `html` in `types.ts` accept `<em>` and `<br />`. The `<em>` becomes the purple italic highlight in headings.

After editing `public/og-cover.svg`, render the PNG again:

```bash
node -e "require('sharp')('public/og-cover.svg').png().toFile('public/og-cover.png')"
```

## Deployment

Hosted on Cloudflare Workers, with automatic deploys on every `git push` to `main`. The configuration lives in `wrangler.jsonc`: the Worker only serves the static files in `dist/`.

To test the configuration without publishing:

```bash
npm run build
npx wrangler deploy --dry-run
```

One-time setup:

1. In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, connect GitHub and select this repository. Private repositories work.
2. Project name: `gustavocassel-com` (it must match `name` in `wrangler.jsonc`). Build command `npm run build`, deploy command `npx wrangler deploy`.
3. In the new Worker: **Settings → Domains & Routes → Add → Custom domain**. Add `gustavocassel.com` and `www.gustavocassel.com`.
4. In the domain dashboard: **Rules → Redirect Rules**, template **"Redirect from WWW to root"**, so the main address is `https://gustavocassel.com`.

If a build fails, the site stays up with the last successful version.

## To do

- [ ] Create `contato@gustavocassel.com` in Cloudflare Email Routing and add it to the site
- [ ] Publish on Cloudflare (steps above)
- [ ] Projects section, once there are public projects

## License

All rights reserved. The text, images and other content may not be reused.

Parts of the initial structure (base layout, theme script) came from the [LatentFolio Free](https://github.com/Dharani-Eswaramurthi/latentfolio) template, under the MIT License:

<details>
<summary>MIT License, LatentFolio Free</summary>

```
MIT License

Copyright (c) 2026 Dharani Eswaramurthi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

Fonts (Instrument Sans, Newsreader and JetBrains Mono) under the SIL Open Font License, via Fontsource. Icons based on [Lucide](https://lucide.dev), under the ISC License.
