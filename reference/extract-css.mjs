import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const html = readFileSync('reference/index.html', 'utf8');
mkdirSync('reference/css', { recursive: true });

const re = /<style([^>]*)>([\s\S]*?)<\/style>/g;
let m, i = 0;
const summary = [];
while ((m = re.exec(html)) !== null) {
  const attrs = m[1] || '';
  const body = m[2] || '';
  const idMatch = attrs.match(/id="([^"]+)"/);
  const id = idMatch ? idMatch[1] : `inline-${i}`;
  const file = `reference/css/${String(i).padStart(2, '0')}-${id}.css`;
  writeFileSync(file, body);
  summary.push({ file, bytes: body.length, id });
  i++;
}
console.log(JSON.stringify(summary, null, 2));
