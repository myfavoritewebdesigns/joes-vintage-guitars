import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

// Check rendered image areas, not just successful downloads: a loaded image can
// still disappear when a flex item has zero height in an unsized container.
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const origin = option('--origin', 'http://127.0.0.1:4328');
const out = option('--out', 'reports/guide-photos/layout.json');
const routes = [];
async function discover(dir = 'dist') {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await discover(file);
    else if (entry.name === 'index.html' && /class="[^"]*\bmg-guide\b/.test(await fs.readFile(file, 'utf8'))) {
      routes.push('/' + path.relative('dist', dir).replaceAll('\\', '/') + '/');
    }
  }
}
await discover();
if (!routes.length) throw new Error('No built model guides found. Run the production build first.');
const channel = option('--channel', undefined);
const browser = await chromium.launch(channel ? { channel } : {});
const jobs = routes.sort().flatMap(route => [1440, 390].map(width => ({ route, width })));
const results = [];
try {
  await Promise.all(Array.from({ length: 4 }, async () => {
    const page = await browser.newPage();
    // Keep audits local to their chosen site and avoid triggering analytics.
    await page.route('**/*', request => new URL(request.request().url()).origin === new URL(origin).origin ? request.continue() : request.abort());
    for (let job; (job = jobs.shift());) {
      await page.setViewportSize({ width: job.width, height: 1000 });
      await page.goto(origin + job.route, { waitUntil: 'load' });
      const result = await page.evaluate(async () => {
        const images = [...document.querySelectorAll('.mg-guide img')];
        await Promise.all(images.map(async image => {
          image.loading = 'eager';
          await Promise.race([image.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 15000))]);
        }));
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          images: images.map(image => {
            const rect = image.getBoundingClientRect();
            const figure = image.closest('figure');
            const figureRect = figure?.getBoundingClientRect();
            const caption = figure?.querySelector('figcaption');
            const style = getComputedStyle(image);
            return {
              alt: image.alt, src: image.getAttribute('src'),
              section: image.closest('section[id]')?.id || null,
              grid: !!image.closest('.mg-photo-grid'),
              captionBelow: !!figure?.classList.contains('mg-caption-below'),
              width: rect.width, height: rect.height,
              figureHeight: figureRect?.height,
              loaded: image.complete && image.naturalWidth > 0,
              visible: rect.width >= 40 && rect.height >= 40 && style.visibility === 'visible' && style.display !== 'none' && Number(style.opacity) > 0,
              captionOverlap: !!caption && figure.classList.contains('mg-caption-below') && caption.getBoundingClientRect().top < rect.bottom - 1,
            };
          }),
        };
      });
      results.push({ ...job, ...result });
    }
    await page.close();
  }));
} finally { await browser.close(); }
results.sort((a, b) => a.route.localeCompare(b.route) || a.width - b.width);
const failures = results.flatMap(page => page.images.filter(image => !image.loaded || !image.visible || image.captionOverlap).map(image => ({ route: page.route, viewport: page.width, ...image })));
const summary = {
  origin, checkedAt: new Date().toISOString(), pages: routes.length,
  viewportCases: results.length, imageChecks: results.reduce((count, page) => count + page.images.length, 0),
  affectedPages: [...new Set(failures.map(failure => failure.route))],
  failures: failures.length, overflowCases: results.filter(page => page.overflow).length,
};
await fs.mkdir(path.dirname(out), { recursive: true });
await fs.writeFile(out, JSON.stringify({ summary, failures, results }, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));
if (failures.length || summary.overflowCases) process.exitCode = 1;
