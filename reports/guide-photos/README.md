# Guide Photo Visibility Fix

Joe reported caption bars with no visible photos in the Bassman authentication guide and corresponding sections of other draft and published guides.

The images were downloaded successfully, but the shared caption-below rule set their height and flex basis to zero. Photo grids do not give their figures a fixed height, so these images collapsed. The fix gives only caption-below photo-grid images the existing grid heights of 420px on desktop and 360px on mobile, with no flex shrinking. Captions retain their own space below each image.

The baseline found 14 collapsed placements on six pages: Fender Bassman, Champ, Super Reverb and Vibrolux authentication guides, the Fender amp eras article, and the Epiphone Olympic authentication guide. The first four are in draft PR 308; the latter two are already published. Original photo files, captions, image licenses, article text, prices and metadata are unchanged by this fix.

The new `scripts/audit-guide-photos.mjs` discovers every built page using the shared guide layout. It checks rendered image dimensions, successful image loading, caption overlap and horizontal overflow at 1440px and 390px. It aborts third-party requests. Run after a production build and start the local preview:

```sh
node scripts/audit-guide-photos.mjs --channel chrome --origin http://127.0.0.1:4328 --out reports/guide-photos/layout.json
```

Omit `--channel chrome` to use Playwright's installed Chromium. A regression run against the original CSS failed for all 28 affected viewport placements. The corrected PR 308 build passed 830 image checks across 45 guides and 90 viewport cases. Only those 28 previously collapsed image rectangles changed; other photo dimensions and all image sources and alt texts were preserved. Details are in `regression-summary.json` on the amp branch. Production-only and hosted verification are attached to the relevant pull request.

The three static comparisons against the published amp eras and Olympic articles and the previous Bassman preview returned zero must-fix findings. The existing Reverb icon dimension warning is unrelated. The rendered copy audit passed with zero hard failures and 782 existing advisory warnings. Astro check passed with zero errors and zero warnings. Qualitative review additionally checks normal lazy loading and fresh direct-anchor navigation; loaded-image counts alone are insufficient evidence of visibility.

These changes are prepared for preview review. The published-page fix is isolated from the new PR 308 pages.
