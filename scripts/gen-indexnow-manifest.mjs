import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { load } from 'cheerio';

const config = JSON.parse(await readFile(new URL('./indexnow-config.json', import.meta.url), 'utf8'));

// Hash content and search metadata, not the header/footer, styles or Astro's
// generated scope IDs. A stylesheet-only rebuild must not notify every URL.
export function fingerprint(html) {
  const $ = load(html);
  if ($('main').length !== 1) throw new Error('Expected exactly one main element');
  const robots = $('meta[name]').toArray()
    .filter((node) => /^(robots|googlebot|bingbot)$/i.test($(node).attr('name')))
    .map((node) => $(node).attr('content') || '').join(' ');
  if (/\b(noindex|none)\b/i.test(robots)) return null;
  const metadata = {
    title: $('title').text(),
    canonical: $('link[rel="canonical"]').attr('href') || '',
    meta: $('meta[name], meta[property]').toArray().flatMap((node) => {
      const name = ($(node).attr('name') || $(node).attr('property')).toLowerCase();
      return /^(description|robots|googlebot|bingbot|og:.*|twitter:.*)$/.test(name)
        ? [[name, $(node).attr('content') || '']] : [];
    }).sort((a, b) => a[0].localeCompare(b[0])),
    schema: $('script[type="application/ld+json"]').toArray()
      .map((node) => JSON.parse($(node).text())),
  };
  const main = $('main').clone();
  // The shared contact form is chrome, even though pages put it inside main.
  main.find('script, style, .jvgct').remove();
  main.find('*').addBack().each((_, node) => {
    for (const name of Object.keys(node.attribs || {})) {
      if (name === 'class' || name === 'style' || name.startsWith('data-astro-')) {
        $(node).removeAttr(name);
      }
    }
  });
  return createHash('sha256').update(JSON.stringify(metadata) + '\n' + main.html()).digest('hex');
}

function localPath(dist, url, origin) {
  const parsed = new URL(url);
  if (parsed.origin !== origin || parsed.search || parsed.hash) throw new Error(`Invalid sitemap URL: ${url}`);
  const target = resolve(dist, '.' + decodeURIComponent(parsed.pathname));
  if (target !== dist && !target.startsWith(dist + sep)) throw new Error(`Path outside dist: ${url}`);
  return target;
}

export async function buildManifest(dist = resolve('dist'), revision = '') {
  dist = resolve(dist);
  const origin = config.origin;
  const seen = new Set();
  const urls = new Set();
  async function readSitemap(url) {
    if (seen.has(url)) return;
    seen.add(url);
    const $ = load(await readFile(localPath(dist, url, origin), 'utf8'), { xmlMode: true });
    if ($('sitemapindex').length) {
      for (const node of $('sitemap > loc').toArray()) await readSitemap($(node).text());
    } else if ($('urlset').length) {
      for (const node of $('url > loc').toArray()) urls.add($(node).text());
    } else throw new Error(`Invalid sitemap: ${url}`);
  }
  await readSitemap(`${origin}/sitemap-index.xml`);
  const pages = {};
  for (const url of [...urls].sort()) {
    const path = localPath(dist, url, origin);
    const html = await readFile(url.endsWith('/') ? resolve(path, 'index.html') : path, 'utf8');
    const hash = fingerprint(html);
    if (hash) pages[url] = hash;
  }
  if (!Object.keys(pages).length) throw new Error('Refusing to generate an empty IndexNow manifest');
  return { version: 1, origin, revision, pages };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const revision = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA ||
    execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const manifest = await buildManifest(resolve('dist'), revision);
  await writeFile('dist/indexnow-manifest.json', JSON.stringify(manifest) + '\n');
  console.log(`[indexnow] ${Object.keys(manifest.pages).length} production URLs in manifest (${revision.slice(0, 7)})`);
}
