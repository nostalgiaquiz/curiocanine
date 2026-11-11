// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// IMPORTANT: change this ONE line to your real website address when you know it.
// It is used for canonical URLs, the sitemap and robots.txt.
// Use https:// and no trailing slash.
// ---------------------------------------------------------------------------
const SITE_URL = 'https://curiocanine.com';

// Pages that should NOT appear in the sitemap (for example, pages marked noindex).
// When you finish the Brain Training for Dogs review and remove "noindex: true"
// from its front matter, delete its line here too.
const SITEMAP_EXCLUDE = ['/product-reviews/brain-training-for-dogs/'];

// This is a fully static site: Astro builds plain HTML into ./dist and
// Cloudflare Workers serves it as static assets (see wrangler.jsonc).
// No Cloudflare adapter is needed for a static site.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.some((path) => page.endsWith(path)),
    }),
  ],
});
