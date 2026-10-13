import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fingerprint, buildManifest } from './gen-indexnow-manifest.mjs';
import { submitChanges, validateManifest } from './submit-indexnow.mjs';

const { origin, key } = JSON.parse(await readFile(new URL('./indexnow-config.json', import.meta.url)));
const a = `${origin}/a/`;
const b = `${origin}/b/`;
const c = `${origin}/c/`;
const hash = 'a'.repeat(64);
const newer = 'b'.repeat(64);
const manifest = (pages, revision = 'live') => ({ version: 1, origin, revision, pages });
const html = (body = '<p>Guitar guide</p>', head = '<title>Guide</title>') =>
  `<html><head>${head}</head><body><header>Header</header><main>${body}</main><footer>Footer</footer></body></html>`;

function mock(current, { statuses = {}, keyBody = key, postStatus = 200 } = {}) {
  const posts = [];
  const requests = [];
  const fetcher = async (url, options) => {
    requests.push({ url, options });
    if (url.endsWith('/indexnow-manifest.json')) return Response.json(current);
    if (url.endsWith(`/${key}.txt`)) return new Response(keyBody);
    if (url === 'https://api.indexnow.org/indexnow') {
      posts.push(JSON.parse(options.body));
      return new Response('', { status: typeof postStatus === 'function' ? postStatus(posts.length) : postStatus });
    }
    const value = statuses[url];
    if (value instanceof Error) throw value;
    if (value) return new Response(value.body || '', { status: value.status, headers: value.headers });
    throw new Error(`Unexpected request: ${url}`);
  };
  return { fetcher, posts, requests };
}

test('chrome, stylesheet, scope and class changes do not resubmit content', () => {
  const original = html('<p class="old" data-astro-cid-old>Guitar</p><style>p { color:red }</style><section class="jvgct">Old contact form</section>');
  const updated = original.replace('Header', 'New navigation').replace('Footer', 'New footer')
    .replace('class="old"', 'class="new"').replace('data-astro-cid-old', 'data-astro-cid-new')
    .replace('color:red', 'color:blue').replace('Old contact form', 'New contact form');
  assert.equal(fingerprint(original), fingerprint(updated));
});

test('body, image, title, canonical, robots and structured-data edits change the hash', () => {
  const base = html('<p>Guitar</p><img src="/old.jpg" alt="Guitar">', '<title>Guide</title><meta name="robots" content="index,follow"><link rel="canonical" href="/a/"><script type="application/ld+json">{"name":"Guitar"}</script>');
  for (const changed of [base.replace('<p>Guitar', '<p>Bass'), base.replace('/old.jpg', '/new.jpg'),
    base.replace('>Guide<', '>New Guide<'), base.replace('/a/', '/b/'), base.replace('index,follow', 'index,nofollow'),
    base.replace('"name":"Guitar"', '"name":"Bass"')]) assert.notEqual(fingerprint(base), fingerprint(changed));
  assert.equal(fingerprint(base.replace('index,follow', 'noindex,follow')), null);
});

test('existing nested main markup hashes the full Layout slot once', () => {
  const page = '<title>Guide</title><main id="main-content"><p>Intro</p><main><p>Detail</p></main><p>Outro</p></main>';
  const before = fingerprint(page);
  for (const word of ['Intro', 'Detail', 'Outro']) assert.notEqual(before, fingerprint(page.replace(word, 'Changed')));
  assert.throws(() => fingerprint('<title>Missing content</title>'), /main-content/);
  assert.equal(fingerprint('<meta name="robots" content="noindex">'), null);
});

test('manifest follows nested sitemaps, excludes noindex and rejects missing HTML', async () => {
  const dist = await mkdtemp(join(tmpdir(), 'jvg-indexnow-'));
  try {
    await mkdir(join(dist, 'a'));
    await mkdir(join(dist, 'b'));
    await writeFile(join(dist, 'sitemap-index.xml'), `<sitemapindex><sitemap><loc>${origin}/sitemap-0.xml</loc></sitemap></sitemapindex>`);
    await writeFile(join(dist, 'sitemap-0.xml'), `<urlset><url><loc>${a}</loc></url><url><loc>${b}</loc></url></urlset>`);
    await writeFile(join(dist, 'a/index.html'), html());
    await writeFile(join(dist, 'b/index.html'), html('Hidden', '<meta content="noindex" name="robots">'));
    const result = await buildManifest(dist, 'fixture');
    assert.deepEqual(Object.keys(result.pages), [a]);
    assert.equal(result.revision, 'fixture');
    await writeFile(join(dist, 'sitemap-0.xml'), `<urlset><url><loc>${c}</loc></url></urlset>`);
    await assert.rejects(buildManifest(dist), /ENOENT/);
    await writeFile(join(dist, 'sitemap-0.xml'), '<urlset><url><loc>https://preview.pages.dev/a/</loc></url></urlset>');
    await assert.rejects(buildManifest(dist), /Invalid sitemap URL/);
  } finally { await rm(dist, { recursive: true, force: true }); }
});

test('first run submits live URLs once and unchanged runs make no POST', async () => {
  const current = manifest({ [a]: hash, [b]: hash });
  const api = mock(current);
  const first = await submitChanges(api);
  assert.deepEqual(api.posts[0].urlList, [a, b]);
  assert.equal(api.posts[0].host, new URL(origin).host);
  assert.equal(api.posts[0].keyLocation, `${origin}/${key}.txt`);
  const unchanged = mock(current);
  const second = await submitChanges({ ...unchanged, previous: first.state });
  assert.deepEqual(second.urls, []);
  assert.equal(unchanged.requests.length, 1);
});

test('only new or changed pages are submitted', async () => {
  const api = mock(manifest({ [a]: hash, [b]: newer, [c]: hash }));
  await submitChanges({ ...api, previous: manifest({ [a]: hash, [b]: hash }) });
  assert.deepEqual(api.posts[0].urlList, [b, c]);
});

test('removals are confirmed; temporary errors and still-indexable pages remain pending', async () => {
  const deleted = `${origin}/deleted/`;
  const gone = `${origin}/gone/`;
  const redirect = `${origin}/redirect/`;
  const hidden = `${origin}/hidden/`;
  const headerHidden = `${origin}/header-hidden/`;
  const down = `${origin}/down/`;
  const timeout = `${origin}/timeout/`;
  const previous = manifest(Object.fromEntries([a, b, deleted, gone, redirect, hidden, headerHidden, down, timeout].map((url) => [url, hash])));
  const statuses = {
    [b]: { status: 200 }, [deleted]: { status: 404 }, [gone]: { status: 410 },
    [redirect]: { status: 301, headers: { location: a } },
    [hidden]: { status: 200, body: '<meta content="noindex, follow" name="robots">' },
    [headerHidden]: { status: 200, headers: { 'x-robots-tag': 'noindex' } },
    [down]: { status: 503 }, [timeout]: new Error('Timeout'),
  };
  const api = mock(manifest({ [a]: hash }), { statuses });
  const result = await submitChanges({ ...api, previous });
  assert.deepEqual(result.urls, [deleted, gone, redirect, hidden, headerHidden].sort());
  assert.deepEqual(Object.keys(result.state.pages).sort(), [a, b, down, timeout].sort());
  assert.ok(api.requests.every(({ options }) => options.redirect === 'manual'));
  const nextApi = mock(manifest({ [a]: hash }), { statuses: { [b]: { status: 404 }, [down]: { status: 410 }, [timeout]: { status: 404 } } });
  const next = await submitChanges({ ...nextApi, previous: result.state });
  assert.deepEqual(Object.keys(next.state.pages), [a]);
  assert.deepEqual(next.urls, [b, down, timeout].sort());
});

test('failed key validation or rejected submissions never produce replacement state', async () => {
  const current = manifest({ [a]: hash });
  const invalidKey = mock(current, { keyBody: 'wrong' });
  await assert.rejects(submitChanges(invalidKey), /key is missing or does not match/);
  assert.equal(invalidKey.posts.length, 0);
  for (const status of [403, 422, 429, 500]) {
    await assert.rejects(submitChanges(mock(current, { postStatus: status })), new RegExp(`HTTP ${status}`));
  }
  const accepted = await submitChanges(mock(current, { postStatus: 202 }));
  assert.deepEqual(accepted.state.pages, current.pages);
});

test('missing/invalid/empty production data and corrupt saved state fail closed', async () => {
  await assert.rejects(submitChanges({ fetcher: async () => new Response('Missing', { status: 404 }) }), /HTTP 404/);
  await assert.rejects(submitChanges({ fetcher: async () => new Response('<html>Outage</html>') }));
  for (const invalid of [manifest({}), manifest({ 'https://preview.pages.dev/a/': hash }), manifest({ [a]: 'not-a-hash' })]) {
    assert.throws(() => validateManifest(invalid));
  }
  await assert.rejects(submitChanges({ ...mock(manifest({ [a]: hash })), previous: { version: 0 } }), /Invalid IndexNow manifest/);
});

test('preview/stale deployment check and manual dry run make no submissions', async () => {
  const api = mock(manifest({ [a]: hash }, 'production'));
  assert.equal(await submitChanges({ ...api, expectedRevision: 'preview' }), null);
  assert.equal(api.posts.length, 0);
  const result = await submitChanges({ ...api, dryRun: true });
  assert.deepEqual(result.urls, [a]);
  assert.equal(result.state, null);
  assert.equal(api.posts.length, 0);
});

test('10,000-URL batching and failure of a later batch do not advance state', async () => {
  const pages = Object.fromEntries(Array.from({ length: 10001 }, (_, index) => [`${origin}/page-${index}/`, hash]));
  const api = mock(manifest(pages));
  await submitChanges(api);
  assert.deepEqual(api.posts.map((post) => post.urlList.length), [10000, 1]);
  const rejected = mock(manifest(pages), { postStatus: (batch) => batch === 2 ? 429 : 200 });
  await assert.rejects(submitChanges(rejected), /HTTP 429/);
});
