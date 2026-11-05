import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pruneUnusedImageVariants } from './prune-unused-image-variants.mjs';

test('keeps every referenced variant and all originals/public files', t => {
  const tempRoot = fs.realpathSync(os.tmpdir());
  const root = fs.mkdtempSync(path.join(tempRoot, 'jvg-variants-'));
  t.after(() => {
    assert.equal(path.dirname(fs.realpathSync(root)), tempRoot);
    assert.ok(path.basename(root).startsWith('jvg-variants-'));
    fs.rmSync(root, { recursive: true, force: true });
  });
  fs.mkdirSync(path.join(root, '_astro'));
  const keep = ['src.hash_a.webp', 'set.hash_b.webp', 'css.hash_c.webp', 'schema.hash_d.webp', 'xml.hash_e.webp', 'escaped.hash_f.webp', 'encoded.hash_g.webp', 'embedded.hash_h.webp', 'original.hash.webp', 'original.hash.jpg'];
  for (const name of [...keep, 'unused.hash_z.webp']) fs.writeFileSync(path.join(root, '_astro', name), 'photo');
  fs.writeFileSync(path.join(root, 'public.hash_z.webp'), 'public photo');
  fs.writeFileSync(path.join(root, 'index.html'), '<img src="/_astro/src.hash_a.webp" srcset="/_astro/set.hash_b.webp 800w"><script type="application/ld+json">{"contentUrl":"/_astro/schema.hash_d.webp"}</script>');
  fs.writeFileSync(path.join(root, 'style.css'), 'body{background:url(_astro/css.hash_c.webp)}');
  fs.writeFileSync(path.join(root, 'image-sitemap.xml'), '<image>/_astro/xml.hash_e.webp</image>');
  fs.writeFileSync(path.join(root, 'script.js'), 'const image="\\u002F_astro\\u002Fescaped.hash_f.webp";const other="/_astro/encoded%2Ehash_g%2Ewebp";const conservative="prefix-embedded.hash_h.webp-suffix";');
  const before = fs.readFileSync(path.join(root, 'index.html'));
  const preview = pruneUnusedImageVariants(root, { dryRun: true });
  assert.deepEqual(preview.removed, ['unused.hash_z.webp']);
  assert.ok(fs.existsSync(path.join(root, '_astro', 'unused.hash_z.webp')));
  const result = pruneUnusedImageVariants(root);
  assert.deepEqual(result.removed, preview.removed);
  for (const name of keep) assert.ok(fs.existsSync(path.join(root, '_astro', name)), name);
  assert.ok(fs.existsSync(path.join(root, 'public.hash_z.webp')));
  assert.deepEqual(fs.readFileSync(path.join(root, 'index.html')), before);
  assert.equal(pruneUnusedImageVariants(root).removed.length, 0);
});
