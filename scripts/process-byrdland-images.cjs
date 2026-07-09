// One-off: optimize the 1957 Byrdland photos for the blog post.
// Resizes to max 2000px on the long edge, q80, into public/images/blog/one-owner-1957-gibson-byrdland/.
// Run from the repo root with sharp resolvable:
//   NODE_PATH=node_modules/.pnpm/node_modules node scripts/process-byrdland-images.cjs
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = "C:/Users/joeda/OneDrive/Desktop/1957 Gibson Byrdland";
const OUT = path.join(__dirname, "..", "public", "images", "blog", "one-owner-1957-gibson-byrdland");

// source file -> published filename
const MAP = {
  "1957-gibson-byrdland-sunburst-1.jpg": "1957-gibson-byrdland-front-body.jpg",
  "1957-gibson-byrdland-sunburst-2.jpg": "1957-gibson-byrdland-full-front.jpg",
  "original-owner-photograph.jpeg": "don-majure-with-1957-gibson-byrdland.jpg",
  "1957-gibson-byrdland-3.jpg": "1957-gibson-byrdland-flowerpot-headstock.jpg",
  "1957-gibson-byrdland-sunburst-4.jpg": "1957-gibson-byrdland-alnico-staple-pickup.jpg",
  "1957-gibson-byrdland-6.jpg": "1957-gibson-byrdland-orange-label-a25589.jpg",
  "1957-gibson-byrdland-10.jpg": "1957-gibson-byrdland-flame-maple-back.jpg",
  "1957-gibson-byrdland-13.jpg": "1957-gibson-byrdland-thinline-profile.jpg",
  "1957-gibson-byrdland-8.jpg": "1957-gibson-byrdland-engraved-tailpiece.jpg",
  "1957-gibson-byrdland-19.jpg": "1957-gibson-byrdland-hang-tag.jpg",
  "1957-gibson-byrdland-18.jpg": "1957-gibson-byrdland-original-case.jpg",
};

fs.mkdirSync(OUT, { recursive: true });

(async () => {
  for (const [src, dest] of Object.entries(MAP)) {
    const srcPath = path.join(SRC, src);
    const outPath = path.join(OUT, dest);
    if (!fs.existsSync(srcPath)) {
      console.error("MISSING SOURCE:", srcPath);
      continue;
    }
    const img = sharp(srcPath).rotate(); // respect EXIF orientation
    const meta = await img.metadata();
    await img
      .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(outPath);
    const outMeta = await sharp(outPath).metadata();
    const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`${dest}  ${outMeta.width}x${outMeta.height}  ${kb}KB  (src ${meta.width}x${meta.height})`);
  }
  console.log("done");
})();
