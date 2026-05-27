import { mkdirSync, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const SRC = 'https://www.joesvintageguitarsaz.com/';

const images = [
  'wp-content/uploads/2022/05/favicon.png',
  'wp-content/uploads/2022/06/joes-vintage-guitars-logo.jpg',
  'wp-content/uploads/2024/01/buy-background-02.jpg',
  'wp-content/uploads/2024/01/lady-guitar-01.jpg',
  'wp-content/uploads/2024/01/more-guitar-02.jpg',
  'wp-content/uploads/2024/09/njw3skvdov5hr4crdk1e.jpg',
  'wp-content/uploads/2024/09/om2ob5ra1i1x7wbklaug.jpg',
  'wp-content/uploads/2024/11/reverb-icon.svg',
  'wp-content/uploads/2024/12/1950s-guild-x175-sunburst-2-scaled.jpg',
  'wp-content/uploads/2024/12/99123263_3422411747786529_8426677821312598016_n.jpg',
  'wp-content/uploads/2024/12/Dont-Laugh-scaled.jpg',
  'wp-content/uploads/2024/12/Photo-1--scaled.jpg',
  'wp-content/uploads/2024/12/Photo-7-scaled.jpg',
  'wp-content/uploads/2024/12/Photo-9-scaled.jpg',
  'wp-content/uploads/2024/12/Photo_10-scaled.jpg',
  'wp-content/uploads/2024/12/guitar-icon-01.svg',
  'wp-content/uploads/2024/12/guitar-icon-02.svg',
  'wp-content/uploads/2024/12/guitar-icon-03.svg',
  'wp-content/uploads/2024/12/homer-02.jpg',
  'wp-content/uploads/2024/12/homer-pearl-horns-and-instruments-small.jpg',
  'wp-content/uploads/2024/12/jesus-is-coming-large-group.jpg',
  'wp-content/uploads/2025/01/national-style-2-tenor-guitar-1-scaled.jpg',
  'wp-content/uploads/2025/02/chat-icon.png',
  'wp-content/uploads/2025/02/email-icon.png',
  'wp-content/uploads/2025/02/phone-icon.png',
  'wp-content/uploads/2025/06/logo-joe-2.png',
  'wp-content/uploads/2025/06/Logo-Footer-1-1-300x300.png',
  'wp-content/uploads/2025/07/Joes-Vintage-Guitars-logo-100x60-1.jpg',
  'wp-content/uploads/2025/07/homepage-featured-image.jpg',
  'wp-content/uploads/2025/08/Logo-Principal.png',
  'wp-content/uploads/2026/02/1956-gibson-les-paul-standard-1-scaled.jpg',
  'wp-content/uploads/2026/02/gretsch-6120-market-value-scaled.jpg',
  'wp-content/uploads/2026/03/1950s-gibson-f-5-mandolin.jpg',
  'wp-content/uploads/2026/03/1959-martin-D-28-scaled.jpg',
  'wp-content/uploads/2026/03/1960-fender-stratocaster-hardtail-front-scaled.jpg',
  'wp-content/uploads/2026/03/1960-fender-twin-amp-blonde.jpg',
  'wp-content/uploads/2026/03/1964-fender-jazz-bass-original-owner-scaled.jpg',
  'wp-content/uploads/2026/03/1966-fender-jazz-bass-lake-placid-blue-1-scaled.jpg',
  'wp-content/uploads/2026/03/1968-rickenbacker-4005-azureglo-scaled.jpg',
  'wp-content/uploads/2026/03/1980s-jackson-soloist-with-custom-finish-scaled.jpeg',
  'wp-content/uploads/2026/03/bill-with-1966-fender-jaguar-lake-placid-blue-scaled.jpeg',
  'wp-content/uploads/2026/03/charvel-model-5-lava-crackle.jpg',
  'wp-content/uploads/2026/03/emmons-d-10-push-pull-pedal-steel.jpg',
  'wp-content/uploads/2026/03/epiphone-concert-banjo-1920s.jpg',
  'wp-content/uploads/2026/03/fender-champion-lap-steel-guitar.jpg',
  'wp-content/uploads/2026/03/jim-with-1972-fender-jazz-bass-scaled.jpeg',
  'wp-content/uploads/2026/03/joshua-with-1952-fender-telecaster.jpeg',
  'wp-content/uploads/2026/03/prs-dweezil-zappa-signature-guitar.jpg',
];

const fonts = [
  'wp-content/uploads/2022/11/Margin-DEMO.woff2',
  'wp-content/uploads/2024/08/Oswald-SemiBold.woff2',
];

mkdirSync('src/assets/images', { recursive: true });
mkdirSync('src/assets/fonts', { recursive: true });

async function download(url, dest) {
  const r = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0' }
  });
  if (!r.ok) {
    console.error('FAIL', r.status, url);
    return false;
  }
  await pipeline(r.body, createWriteStream(dest));
  return true;
}

let ok = 0, fail = 0;
const tasks = [];
for (const p of images) {
  const name = p.split('/').pop();
  tasks.push(download(SRC + p, 'src/assets/images/' + name).then(s => s ? ok++ : fail++));
}
for (const p of fonts) {
  const name = p.split('/').pop();
  tasks.push(download(SRC + p, 'src/assets/fonts/' + name).then(s => s ? ok++ : fail++));
}
await Promise.all(tasks);
console.log(`Done. ok=${ok} fail=${fail}`);
