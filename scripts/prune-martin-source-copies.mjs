import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

// Astro also emits original copies for imported images. Keep every source original
// in Git and every referenced output. Only this batch's unused output copies qualify.
export function pruneMartinSourceCopies(distRoot, sourceRoot) {
  const root = path.resolve(distRoot);
  const assets = path.join(root, '_astro');
  if (!fs.existsSync(assets) || !fs.existsSync(sourceRoot)) return [];
  const sourceNames = fs.readdirSync(sourceRoot).filter(name => /\.(jpe?g|png)$/i.test(name));
  const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  const sourceParts = sourceNames.map(name => ({stem:path.parse(name).name, ext:path.extname(name).toLowerCase(), sha:hash(path.join(sourceRoot,name))}));
  const candidates = fs.readdirSync(assets).filter(name => sourceParts.some(({stem,ext}) =>
    name.startsWith(stem + '.') && path.extname(name).toLowerCase() === ext));
  const texts = [];
  function readReferences(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) readReferences(file);
      else if (/\.(html|css|js|mjs|json|xml|txt|svg)$/i.test(entry.name)) texts.push(fs.readFileSync(file, 'utf8'));
    }
  }
  readReferences(root);
  const removed = [];
  for (const name of candidates) {
    if (texts.some(text => text.includes(name) || text.includes(encodeURIComponent(name)))) continue;
    const file = path.resolve(assets, name);
    if (path.dirname(file) !== assets) throw Error('Refusing output outside the asset directory');
    if (!sourceParts.some(({stem,ext,sha}) => name.startsWith(stem + '.') && path.extname(name).toLowerCase() === ext && hash(file) === sha)) continue;
    fs.unlinkSync(file);
    removed.push(name);
  }
  return removed;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const removed = pruneMartinSourceCopies('dist', 'src/assets/images/martin-small-body');
  console.log(`[martin-assets] Removed ${removed.length} unreferenced output copies; all source originals retained.`);
}
