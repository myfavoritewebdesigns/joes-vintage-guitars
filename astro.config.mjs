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
  '/fender-serial-tool-v2/', // internal test page for the v2 serial tool (noIndex)
  '/fender-serial-hub-preview/', // condensed serial-page rebuild preview (noIndex)
  '/fender-pot-codes/', // Fender serial guide spoke, pot codes (preview, noIndex)
  '/fender-neck-dates/', // Fender serial guide spoke, neck dates (preview, noIndex)
  '/fender-body-dates/', // Fender serial guide spoke, body dates (preview, noIndex)
];

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Prefetch internal links on hover for near-instant navigation across the
  // high-impression serial-guide and value-guide cluster. Built in, no import.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Responsive image pipeline (SEO v2 Prompt 5): every <Image> and markdown
  // image gets breakpoint srcsets, WebP, and intrinsic dimensions. Pre-existing
  // <Image> uses with hand-tuned widths/sizes are pinned with layout="none" so
  // their rendered markup does not change. Verified against Astro 6.3.2: a
  // global layout makes Astro IGNORE widths/densities/sizes props, and
  // responsiveStyles defaults to false so it must be opted in.
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
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
