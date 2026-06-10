// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/site';

// Routes that must stay out of the XML sitemap: noindex hand-out pages, the
// form thank-you page, and the 404 route. Keep in sync with any future noindex page.
const SITEMAP_EXCLUDE = [
  '/thank-you/',
  '/jvg-shipping-process/',
  '/jvg-shipping-process-2/',
  '/404/',
];

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Hide the floating Astro dev toolbar so the preview matches what end users see.
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.some((path) => page === `${SITE_URL}${path}`),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
