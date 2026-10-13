import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const config = JSON.parse(await readFile(new URL('./indexnow-config.json', import.meta.url), 'utf8'));
const origin = config.origin;
const endpoint = 'https://api.indexnow.org/indexnow';

export function validateManifest(manifest, allowEmpty = false) {
  if (manifest?.version !== 1 || manifest.origin !== origin || !manifest.pages ||
      typeof manifest.pages !== 'object' || Array.isArray(manifest.pages)) {
    throw new Error('Invalid IndexNow manifest or production origin');
  }
  const entries = Object.entries(manifest.pages);
  if (!allowEmpty && !entries.length) throw new Error('Empty live manifest; refusing mass removals');
  for (const [url, hash] of entries) {
    const parsed = new URL(url);
    if (parsed.origin !== origin || parsed.username || parsed.password || parsed.hash || parsed.search ||
        !/^[a-f0-9]{64}$/.test(hash)) throw new Error(`Invalid manifest entry: ${url}`);
  }
  return manifest;
}

async function request(fetcher, url, options = {}) {
  return fetcher(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(30000),
    ...options,
    headers: { 'User-Agent': 'JVG-IndexNow/1.0', 'Cache-Control': 'no-cache', ...options.headers },
  });
}

function isNoindex(html, headers) {
  if (/\b(noindex|none)\b/i.test(headers.get('x-robots-tag') || '')) return true;
  // Parse only the small meta tags. Attribute order and quote style may vary.
  return [...html.matchAll(/<meta\b[^>]*>/gi)].some(([tag]) => {
    const attrs = Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
      .map((m) => [m[1].toLowerCase(), m[2] ?? m[3] ?? m[4]]));
    return /^(robots|bingbot)$/i.test(attrs.name || '') && /\b(noindex|none)\b/i.test(attrs.content || '');
  });
}

// Inject fetch only for deterministic tests; production URLs and endpoint are
// fixed in config, never supplied by a webhook or a branch preview.
export async function submitChanges({ previous, fetcher = fetch, expectedRevision = '', dryRun = false }) {
  const response = await request(fetcher, `${origin}/indexnow-manifest.json`);
  if (response.status !== 200) throw new Error(`Live manifest returned HTTP ${response.status}`);
  const current = validateManifest(await response.json());
  if (expectedRevision && current.revision !== expectedRevision) {
    console.log('[indexnow] Deployment check is not the currently live revision; scheduled run will reconcile.');
    return null;
  }
  if (previous) validateManifest(previous, true);
  const oldPages = previous?.pages || {};
  const next = { version: 1, origin, revision: current.revision, pages: { ...current.pages } };
  const changed = Object.keys(current.pages).filter((url) => current.pages[url] !== oldPages[url]);
  const removed = [];
  const deferred = [];
  for (const url of Object.keys(oldPages).filter((url) => !(url in current.pages))) {
    let confirmed = false;
    try {
      const check = await request(fetcher, url);
      confirmed = [404, 410].includes(check.status) ||
        ([301, 302, 303, 307, 308].includes(check.status) && Boolean(check.headers.get('location'))) ||
        (check.status === 200 && isNoindex(await check.text(), check.headers));
    } catch {
      // A transient outage is not evidence that a page was removed.
    }
    if (confirmed) removed.push(url);
    else {
      deferred.push(url);
      next.pages[url] = oldPages[url]; // Retry on the next run, including HTTP 200/500/timeouts.
    }
  }
  const urls = [...changed, ...removed].sort();
  console.log(`[indexnow] ${changed.length} new/changed, ${removed.length} removed/noindex, ${deferred.length} deferred`);
  if (dryRun) {
    console.log('[indexnow] Dry run: no notifications or state writes.');
    return { urls, deferred, state: null };
  }
  if (urls.length) {
    const keyLocation = `${origin}/${config.key}.txt`;
    const keyResponse = await request(fetcher, keyLocation);
    if (keyResponse.status !== 200 || (await keyResponse.text()).trim() !== config.key) {
      throw new Error('Production IndexNow key is missing or does not match; state was not advanced');
    }
    for (let offset = 0; offset < urls.length; offset += 10000) {
      const submitted = await request(fetcher, endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: new URL(origin).host, key: config.key, keyLocation, urlList: urls.slice(offset, offset + 10000) }),
      });
      if (![200, 202].includes(submitted.status)) {
        throw new Error(`IndexNow HTTP ${submitted.status}; state was not advanced. Retry on the next run.`);
      }
      console.log(`[indexnow] HTTP ${submitted.status}${submitted.status === 202 ? ' (key validation pending)' : ''}`);
    }
  }
  return { urls, deferred, state: next };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const statePath = process.env.INDEXNOW_STATE_PATH || '.indexnow-state/state.json';
  let previous;
  try { previous = JSON.parse(await readFile(statePath, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const result = await submitChanges({ previous, expectedRevision: process.env.INDEXNOW_EXPECTED_REVISION || '', dryRun: process.argv.includes('--dry-run') });
  if (result?.state) {
    await mkdir(dirname(statePath), { recursive: true });
    await writeFile(statePath, JSON.stringify(result.state) + '\n');
    if (process.env.GITHUB_OUTPUT) await writeFile(process.env.GITHUB_OUTPUT, 'save_state=true\n', { flag: 'a' });
  }
}
