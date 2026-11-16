// Default constrained sizes assume the full viewport; blog photos use a narrower column.
// Most posts render Markdown in the 820px .bpost__inner column (772px of content). A few posts
// wrap their Markdown in a wider layout and get their own slot here; the Firebird guide runs
// photos full-bleed at several widths, so it keeps Astro's default hint.
import { fileURLToPath } from 'node:url';

const BLOG_COLUMN = '(min-width: 820px) 772px, calc(100vw - 48px)';
const WIDE_LAYOUTS = {
  'gibson-es-225-guide': '(min-width: 928px) 880px, calc(100vw - 48px)',
  'vintage-fender-jaguar-guide': '(min-width: 920px) 850px, calc(100vw - 36px)',
  'gibson-firebird-history-authentication-value': null,
};

export function blogImageSizes() {
  return {
    name: 'blog-image-sizes',
    element: {
      filter: ['img'],
      visit(node, ctx) {
        if ('sizes' in (node.properties ?? {}) || !ctx.fileURL) return;
        const file = fileURLToPath(ctx.fileURL).replace(/\\/g, '/');
        const match = file.match(/\/src\/content\/blog\/([^/]+)\.mdx?$/);
        if (!match) return;
        const sizes = match[1] in WIDE_LAYOUTS ? WIDE_LAYOUTS[match[1]] : BLOG_COLUMN;
        if (sizes) ctx.setProperty(node, 'sizes', sizes);
      }
    }
  };
}
