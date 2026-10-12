// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const EXCLUDED_FROM_SITEMAP = ['/404', '/thank-you'];

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://morebumsonseats.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED_FROM_SITEMAP.some((path) => page.includes(path)),
    }),
  ],
});
