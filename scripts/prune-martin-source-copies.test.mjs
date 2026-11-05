import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pruneMartinSourceCopies} from './prune-martin-source-copies.mjs';

test('removes only unreferenced copies of the new source originals', () => {
  const tempRoot = path.resolve(os.tmpdir());
  const fixture = fs.mkdtempSync(path.join(tempRoot, 'jvg-martin-assets-'));
  const dist = path.join(fixture, 'dist');
  const source = path.join(fixture, 'sources');
  const assets = path.join(dist, '_astro');
  fs.mkdirSync(assets, {recursive:true}); fs.mkdirSync(source);
  try {
    for (const name of ['used.jpg', 'unused.jpg']) fs.writeFileSync(path.join(source,name),'original');
    for (const name of ['used.hash.jpg','unused.hash.jpg','unused.hash_640.webp','legacy.hash.jpg']) fs.writeFileSync(path.join(assets,name),'original');
    fs.writeFileSync(path.join(dist,'index.html'),'<script type="application/ld+json">{"image":"/_astro/used.hash.jpg"}</script>');
    assert.deepEqual(pruneMartinSourceCopies(dist,source),['unused.hash.jpg']);
    for (const name of ['used.hash.jpg','unused.hash_640.webp','legacy.hash.jpg']) assert.ok(fs.existsSync(path.join(assets,name)));
    assert.equal(fs.readFileSync(path.join(source,'unused.jpg'),'utf8'),'original');
  } finally {
    assert.equal(path.dirname(path.resolve(fixture)), tempRoot);
    assert.ok(path.basename(fixture).startsWith('jvg-martin-assets-'));
    fs.rmSync(fixture,{recursive:true});
  }
});
