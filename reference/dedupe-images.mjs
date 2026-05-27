import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync('reference/body-stripped.html', 'utf8');
const re = /https:\/\/www\.joesvintageguitarsaz\.com\/wp-content\/uploads\/[^"' )]+\.(jpg|jpeg|png|webp|svg)/gi;

// For each base path (ignoring size suffix and .webp), keep the highest-resolution source jpg/png
const groups = new Map(); // base -> { url, area }

for (const m of html.matchAll(re)) {
  let u = m[0];
  // skip .webp derived variants — we want raw jpg/png
  if (u.toLowerCase().endsWith('.webp')) continue;

  // figure out base name (strip -WxH and -scaled)
  const fname = u.split('/').pop();
  const base = fname
    .replace(/-\d+x\d+(?=\.[a-z]+$)/i, '')
    .replace(/-scaled(?=\.[a-z]+$)/i, '');
  const dir = u.substring(0, u.lastIndexOf('/'));
  const key = dir + '/' + base.toLowerCase();

  // estimate area from size suffix; -scaled treats as huge
  let area = 0;
  const dim = fname.match(/-(\d+)x(\d+)(?=\.[a-z]+$)/i);
  if (dim) area = parseInt(dim[1]) * parseInt(dim[2]);
  else if (/-scaled\./i.test(fname)) area = 99999999;
  else area = 1; // no suffix, original

  const prev = groups.get(key);
  if (!prev || area > prev.area) groups.set(key, { url: u, area });
}

const urls = [...groups.values()].map(v => v.url).sort();
writeFileSync('reference/image-urls.txt', urls.join('\n'));
console.log('Unique base images:', urls.length);
