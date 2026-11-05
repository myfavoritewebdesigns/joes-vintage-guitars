// Remove only unreferenced Astro-generated WebP variants from the build output.
// Imported originals, public files and every referenced image remain untouched.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const TEXT_FILE = /\.(?:html|css|js|mjs|json|xml|txt|svg|map)$/i;
// Vite's original asset hash is eight characters. The underscore must come
// AFTER that hash, so an original WebP whose hash contains '_' is retained.
const GENERATED_VARIANT = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]{8}_[A-Za-z0-9_-]+\.webp$/;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.isSymbolicLink()) throw new Error(`Refusing symlink in build output: ${entry.name}`);
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function normalizeReferences(text) {
  return text
    .replace(/\\u([\da-f]{4})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\\x([\da-f]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/%([\da-f]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (match, hex, decimal) => {
      const code = parseInt(hex || decimal, hex ? 16 : 10);
      return code <= 127 ? String.fromCharCode(code) : match;
    });
}

export function pruneUnusedImageVariants(dist = 'dist', { dryRun = false } = {}) {
  const root = fs.realpathSync(dist);
  const assetDir = path.join(root, '_astro');
  if (!fs.existsSync(assetDir)) return { before: walk(root).length, removed: [], bytes: 0 };
  if (fs.lstatSync(assetDir).isSymbolicLink()) throw new Error('Refusing linked _astro directory');
  const files = walk(root);
  // Searching complete rendered text also protects srcset entries, CSS URLs,
  // JSON-LD, sitemap images, relative JS imports and escaped URL spellings.
  const text = normalizeReferences(files.filter(file => TEXT_FILE.test(file))
    .map(file => fs.readFileSync(file, 'utf8')).join('\n'));
  const referenced = new Set(text.match(/[A-Za-z0-9_.+-]+\.webp/g) || []);
  const tokens = [...referenced];
  const removed = [];
  let bytes = 0;
  for (const file of files) {
    const name = path.basename(file);
    if (path.dirname(file) !== assetDir || !GENERATED_VARIANT.test(name)) continue;
    // A generated name uses only the token alphabet above. Checking token
    // substrings preserves incidental/embedded mentions conservatively, too,
    // without repeatedly scanning the site's entire HTML for every file.
    if (referenced.has(name) || tokens.some(token => token.includes(name))) continue;
    // Only single generated files in the resolved output directory are removed.
    const resolved = fs.realpathSync(file);
    if (path.dirname(resolved) !== assetDir) throw new Error('Asset escaped build output');
    bytes += fs.statSync(resolved).size;
    if (!dryRun) fs.unlinkSync(resolved);
    removed.push(name);
  }
  return { before: files.length, after: files.length - removed.length, removed, bytes, dryRun };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const result = pruneUnusedImageVariants('dist', { dryRun: process.argv.includes('--dry-run') });
  console.log(`[image-variants] ${result.dryRun ? 'Would remove' : 'Removed'} ${result.removed.length} unused generated variants; ${result.after ?? result.before} files remain`);
}
