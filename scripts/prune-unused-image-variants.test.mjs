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
  const keep = ['src.1234ABCD_a.webp', 'set.1234ABCD_b.webp', 'css.1234ABCD_c.webp', 'schema.1234ABCD_d.webp', 'xml.1234ABCD_e.webp', 'escaped.1234ABCD_f.webp', 'encoded.1234ABCD_g.webp', 'embedded.1234ABCD_h.webp', 'original.hash.webp', 'original.aBc_DeFG.webp', 'original.hash.jpg'];
  for (const name of [...keep, 'unused.1234ABCD_z.webp']) fs.writeFileSync(path.join(root, '_astro', name), 'photo');
  fs.writeFileSync(path.join(root, 'public.1234ABCD_z.webp'), 'public photo');
  fs.writeFileSync(path.join(root, 'index.html'), '<img src="/_astro/src.1234ABCD_a.webp" srcset="/_astro/set.1234ABCD_b.webp 800w"><script type="application/ld+json">{"contentUrl":"/_astro/schema.1234ABCD_d.webp"}</script>');
  fs.writeFileSync(path.join(root, 'style.css'), 'body{background:url(_astro/css.1234ABCD_c.webp)}');
  fs.writeFileSync(path.join(root, 'image-sitemap.xml'), '<image>/_astro/xml.1234ABCD_e.webp</image>');
  fs.writeFileSync(path.join(root, 'script.js'), 'const image="\\u002F_astro\\u002Fescaped.1234ABCD_f.webp";const other="/_astro/encoded%2E1234ABCD_g%2Ewebp";const conservative="prefix-embedded.1234ABCD_h.webp-suffix";');
  const before = fs.readFileSync(path.join(root, 'index.html'));
  const preview = pruneUnusedImageVariants(root, { dryRun: true });
  assert.deepEqual(preview.removed, ['unused.1234ABCD_z.webp']);
  assert.ok(fs.existsSync(path.join(root, '_astro', 'unused.1234ABCD_z.webp')));
  const result = pruneUnusedImageVariants(root);
  assert.deepEqual(result.removed, preview.removed);
  for (const name of keep) assert.ok(fs.existsSync(path.join(root, '_astro', name)), name);
  assert.ok(fs.existsSync(path.join(root, 'public.1234ABCD_z.webp')));
  assert.deepEqual(fs.readFileSync(path.join(root, 'index.html')), before);
  assert.equal(pruneUnusedImageVariants(root).removed.length, 0);
});
