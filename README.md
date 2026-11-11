# CurioCanine

An English-language website about positive dog training, brain games and dog enrichment.
Built with [Astro](https://astro.build) as a **static site** and served by **Cloudflare Workers** (static assets).

## What is in this project

| Path | What it is |
|---|---|
| `astro.config.mjs` | Astro settings. **Edit `SITE_URL` here** when you know your real domain. |
| `wrangler.jsonc` | Cloudflare Workers settings (serves the `dist` folder). |
| `package.json` | List of tools the project needs. |
| `src/config/site.ts` | Site name, menus, **contact email** and **affiliate link** settings. |
| `src/pages/` | One file per page. |
| `src/content/articles/` | Your future original articles (Markdown files). |
| `src/content/reviews/` | Product reviews (Markdown files). |
| `src/data/enrichment-activities.ts` | The activity list used by the Dog Enrichment Planner. |
| `src/styles/global.css` | All styling. |

## Settings you must fill in yourself

1. **Domain**: open `astro.config.mjs` and change `SITE_URL` to your real address (for example `https://curiocanine.com`).
2. **Contact email**: open `src/config/site.ts` and put your email in `contactEmail`. Until then the Contact page says details are being set up.
3. **Affiliate link**: open `src/config/site.ts` and paste your real ClickBank hoplink in `affiliateUrl` (it must start with `https://`). Until you do, no buy/visit button appears. Never paste a made-up link.

## Cloudflare Workers Builds settings

In Cloudflare, connect the `curiocanine` GitHub repository as a Worker with these settings:

- **Worker name:** `curiocanine` (must match `"name"` in `wrangler.jsonc`)
- **Build command:** `npx astro build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** leave empty (the repository root)
- **Environment variable (recommended):** `NODE_VERSION` = `22`

Astro 6 needs Node 22.12 or newer. The `.nvmrc` file also asks for Node 22.

## Adding a new article

1. In GitHub, open `src/content/articles/_TEMPLATE.md` and copy its contents.
2. Create a new file in the same folder, named like `my-first-guide.md` (lowercase, hyphens, no leading underscore).
3. Paste, fill in the top section (title, description, category, date), set `draft: false`, and write your article under it.
4. Commit. Cloudflare rebuilds the site, and the article appears at `/guides/my-first-guide/` and on its category page.

Only publish claims you can support, and do not invent credentials, testimonials or results.

## Finishing the Brain Training for Dogs review

The review file is `src/content/reviews/brain-training-for-dogs.md`. It is marked `noindex: true` because it is unfinished. When you have genuinely evaluated the product and rewritten the page, delete the `noindex: true` line, and remove its path from `SITEMAP_EXCLUDE` in `astro.config.mjs`.

## Policies

The Privacy Policy and Affiliate Disclosure are plain-English drafts that match the site as built (no analytics, no cookies). They are not legal advice. Have them reviewed, and update them if you add analytics, advertising or forms.
