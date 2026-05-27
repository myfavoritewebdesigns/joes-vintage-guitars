// One-shot extractor: reads fender-sn-main-stripped.html, writes fender-sn-content.md.
// No deps. Hand-rolled mini-parser tuned to this specific Avada/Fusion page.

const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'fender-sn-main-stripped.html');
const OUTPUT = path.join(__dirname, 'fender-sn-content.md');

let html = fs.readFileSync(INPUT, 'utf8');

// ---------- helpers ----------

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&hellip;/g, '…')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

// Strip all HTML tags, keep text. Used inside table cells & headings.
function stripTags(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

// Inline conversion: keep <a href> as markdown link, <strong>/<b> as **, <em>/<i> as *.
function inline(s) {
  let out = s;
  // <a href="...">text</a>  → [text](href)
  out = out.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, href, text) => {
      const t = stripTags(text);
      return t ? `[${t}](${href})` : '';
    });
  // <strong> / <b>
  out = out.replace(/<(strong|b)\s*[^>]*>([\s\S]*?)<\/\1>/gi,
    (_, _tag, text) => {
      const t = stripTags(text);
      return t ? `**${t}**` : '';
    });
  // <em> / <i>
  out = out.replace(/<(em|i)\s*[^>]*>([\s\S]*?)<\/\1>/gi,
    (_, _tag, text) => {
      const t = stripTags(text);
      return t ? `*${t}*` : '';
    });
  // <br> → newline -> we'll convert to space in paragraphs, line break in lists
  out = out.replace(/<br\s*\/?>/gi, '\n');
  // Drop any remaining tags
  out = out.replace(/<[^>]+>/g, '');
  return decodeEntities(out).replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').trim();
}

// Extract the most relevant <img> src/alt from a <picture> or <img> block.
// Returns { src, alt } or null.
function extractImg(block) {
  // Prefer the explicit <img src="...">
  const imgMatch = block.match(/<img\s+([^>]*)\/?>/i);
  if (!imgMatch) return null;
  const attrs = imgMatch[1];
  const srcM = attrs.match(/\bsrc=["']([^"']+)["']/i);
  const altM = attrs.match(/\balt=["']([^"']*)["']/i);
  if (!srcM) return null;
  return { src: srcM[1], alt: altM ? altM[1] : '' };
}

// Find the matching closing tag for a tag at position `start` (start = index of '<tag').
// Handles nested tags of the same name.
function findMatch(html, start, tag) {
  const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
  const closeRe = new RegExp(`<\\/${tag}\\s*>`, 'gi');
  openRe.lastIndex = start + 1;
  closeRe.lastIndex = start + 1;
  let depth = 1;
  while (depth > 0) {
    closeRe.lastIndex = Math.max(closeRe.lastIndex, openRe.lastIndex);
    const nextOpen = openRe.exec(html);
    const nextClose = closeRe.exec(html);
    if (!nextClose) return -1;
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth++;
      closeRe.lastIndex = nextOpen.index + 1;
    } else {
      depth--;
      if (depth === 0) return nextClose.index + nextClose[0].length;
      openRe.lastIndex = nextClose.index + 1;
    }
  }
  return -1;
}

// ---------- isolate the article body ----------
// Article starts at the H1 on line 312 (id is unique enough — find by full text).
// Article ends at the closing </section> of the "resources" section (line ~1681).
const h1Idx = html.indexOf('Fender Serial Number Lookup: Free Decoder Tool and Dating Guide');
if (h1Idx < 0) throw new Error('H1 not found');
// Back up to the start of its containing <div class="fsn-tool" ... > or the <h1> itself.
const articleStart = html.lastIndexOf('<div class="fsn-tool"', h1Idx);

// End: the resources section closes the article. Find <section ... id="resources" then its </section>.
const resStart = html.indexOf('id="resources"');
const resSecOpen = html.lastIndexOf('<section', resStart);
const resSecEnd = findMatch(html, resSecOpen, 'section');
const articleEnd = resSecEnd > 0 ? resSecEnd : html.length;

const article = html.slice(articleStart, articleEnd);

// ---------- block-level walker ----------
// We walk the article looking for known top-level blocks in order:
//   h1, h2, h3, h4, h5, p, picture/img, table, ul, ol, div (recurse)
//
// For "div" we handle a few specific class patterns (info-box, tip, warn,
// faq-item, loc-card, model-card, res-card, related-card, era-timeline, etc.)
// and otherwise recurse into the div's children.

const out = [];

function pushBlock(s) {
  if (!s) return;
  s = s.replace(/\n{3,}/g, '\n\n').trimEnd();
  if (s) out.push(s);
}

function convertTable(tableHtml) {
  // Parse <tr><th>...</th></tr> for header, then <tr><td>...</td></tr> for rows.
  // Handle <thead>/<tbody> wrappers.
  const rows = [];
  const trRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = trRe.exec(tableHtml)) !== null) {
    const cellRe = /<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi;
    const cells = [];
    let cm;
    while ((cm = cellRe.exec(m[1])) !== null) {
      let cellText = stripTags(cm[2]);
      // Markdown table cells can't contain raw pipes
      cellText = cellText.replace(/\|/g, '\\|');
      cells.push(cellText);
    }
    if (cells.length) rows.push({ isHeader: /<th\b/i.test(m[1]), cells });
  }
  if (!rows.length) return '';

  // Figure out header row(s)
  let headerCells = null;
  let bodyRows = rows;
  if (rows[0].isHeader) {
    headerCells = rows[0].cells;
    bodyRows = rows.slice(1);
  } else {
    // Synthesize a blank header so GFM tables parse
    headerCells = rows[0].cells.map(() => ' ');
  }

  const colCount = Math.max(headerCells.length, ...bodyRows.map(r => r.cells.length));
  const pad = (arr) => {
    const c = arr.slice();
    while (c.length < colCount) c.push('');
    return c;
  };
  const lines = [];
  lines.push('| ' + pad(headerCells).join(' | ') + ' |');
  lines.push('| ' + Array(colCount).fill('---').join(' | ') + ' |');
  for (const r of bodyRows) {
    lines.push('| ' + pad(r.cells).join(' | ') + ' |');
  }
  return lines.join('\n');
}

function convertList(listHtml, ordered) {
  const items = [];
  // Find <li>...</li> at the top level of listHtml
  const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
  let m;
  while ((m = liRe.exec(listHtml)) !== null) {
    const t = inline(m[1]).replace(/\n+/g, ' ').trim();
    if (t) items.push(t);
  }
  if (!items.length) return '';
  return items.map((t, i) => (ordered ? `${i + 1}. ${t}` : `- ${t}`)).join('\n');
}

// Walk children of a chunk: emit each block in order.
function walk(chunk) {
  // We scan for the next top-level interesting tag start, emit it, advance, repeat.
  // "Top-level" here means: the next tag we encounter going forward through `chunk`.
  let i = 0;
  const n = chunk.length;

  while (i < n) {
    // Find next '<'
    const lt = chunk.indexOf('<', i);
    if (lt < 0) break;

    // Skip HTML comments
    if (chunk.substr(lt, 4) === '<!--') {
      const end = chunk.indexOf('-->', lt + 4);
      i = end < 0 ? n : end + 3;
      continue;
    }

    // Identify the tag name
    const tagMatch = chunk.slice(lt).match(/^<\/?([a-zA-Z][a-zA-Z0-9]*)\b/);
    if (!tagMatch) { i = lt + 1; continue; }
    const tag = tagMatch[1].toLowerCase();
    const isClose = chunk[lt + 1] === '/';

    if (isClose) {
      // Unmatched close tag at this level — skip it
      const gt = chunk.indexOf('>', lt);
      i = gt < 0 ? n : gt + 1;
      continue;
    }

    // Self-closing void tags we don't render at block level
    const voidTags = new Set(['source', 'br', 'meta', 'link', 'input', 'col']);
    if (voidTags.has(tag)) {
      const gt = chunk.indexOf('>', lt);
      i = gt < 0 ? n : gt + 1;
      continue;
    }

    // Find end of this tag's content
    const matchEnd = findMatch(chunk, lt, tag);
    if (matchEnd < 0) {
      // Unbalanced — treat as void and skip
      const gt = chunk.indexOf('>', lt);
      i = gt < 0 ? n : gt + 1;
      continue;
    }
    const block = chunk.slice(lt, matchEnd);
    // Inner = content between opening and closing
    const openGt = chunk.indexOf('>', lt) + 1;
    const closeStart = block.lastIndexOf('<');
    const inner = chunk.slice(openGt, lt + closeStart);

    // Attributes string of opening tag
    const openTag = chunk.slice(lt, openGt);
    const cls = (openTag.match(/\bclass=["']([^"']+)["']/i) || [, ''])[1];

    let handled = false;

    if (/^h[1-6]$/.test(tag)) {
      const level = parseInt(tag[1], 10);
      const text = stripTags(inner);
      if (text) pushBlock('#'.repeat(level) + ' ' + text);
      handled = true;
    } else if (tag === 'p') {
      const text = inline(inner);
      if (text) pushBlock(text);
      handled = true;
    } else if (tag === 'table') {
      const md = convertTable(inner);
      if (md) pushBlock(md);
      handled = true;
    } else if (tag === 'ul' || tag === 'ol') {
      const md = convertList(inner, tag === 'ol');
      if (md) pushBlock(md);
      handled = true;
    } else if (tag === 'picture' || tag === 'img') {
      const img = extractImg(block);
      if (img) pushBlock(`![${img.alt}](${img.src})`);
      handled = true;
    } else if (tag === 'figure') {
      // figure: extract img then any figcaption
      const img = extractImg(block);
      if (img) pushBlock(`![${img.alt}](${img.src})`);
      const fc = block.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i);
      if (fc) {
        const cap = inline(fc[1]);
        if (cap) pushBlock(`*${cap}*`);
      }
      handled = true;
    } else if (tag === 'a') {
      // <a> can wrap block content (loc-card, model-card, related-card, res-card).
      const hrefM = openTag.match(/\bhref=["']([^"']+)["']/i);
      const href = hrefM ? hrefM[1] : '';
      if (/<(picture|img|h[1-6]|p|div|ul|ol|table)\b/i.test(inner)) {
        // For related-card / model-card / res-card style wrappers where the
        // heading is the link target, rewrite the first heading to be a link.
        if (href && /related-card|model-card/i.test(cls)) {
          // Find the first heading and wrap its text in a markdown link
          const hM = inner.match(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/i);
          if (hM) {
            const lvl = parseInt(hM[1], 10);
            const ht = stripTags(hM[2]);
            if (ht) {
              pushBlock('#'.repeat(lvl) + ' [' + ht + '](' + href + ')');
              // Recurse the rest (after the heading)
              const after = inner.slice(hM.index + hM[0].length);
              walk(after);
              handled = true;
            }
          }
        }
        if (!handled) {
          walk(inner);
          handled = true;
        }
      } else {
        const txt = inline(block); // includes the <a> itself
        if (txt) pushBlock(txt);
        handled = true;
      }
    } else if (tag === 'aside' || tag === 'nav') {
      // Skip TOC sidebars and navigation
      if (/toc-sidebar|toc-list|toc-box/i.test(openTag) || /toc-sidebar|toc-list/i.test(cls)) {
        handled = true; // skip entirely
      } else {
        walk(inner);
        handled = true;
      }
    } else if (tag === 'section' || tag === 'div' || tag === 'article' || tag === 'main') {
      // Special-case some div classes
      const classes = cls.split(/\s+/);

      if (classes.includes('info-box') || classes.includes('tip')) {
        // Pull paragraphs inside; render as blockquote
        const ps = [];
        const pRe = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
        let pm;
        while ((pm = pRe.exec(inner)) !== null) {
          const t = inline(pm[1]);
          if (t) ps.push(t);
        }
        // If no <p>, just take the raw inline of the inner
        if (!ps.length) {
          const t = inline(inner);
          if (t) ps.push(t);
        }
        if (ps.length) pushBlock(ps.map(p => '> ' + p).join('\n> \n'));
        handled = true;
      } else if (classes.includes('warn')) {
        const t = inline(inner);
        if (t) pushBlock('> **Warning:** ' + t);
        handled = true;
      } else if (classes.includes('faq-item')) {
        // Q / A pattern
        const q = inner.match(/<div\s+class=["']faq-q["'][^>]*>([\s\S]*?)<\/div>/i);
        const a = inner.match(/<div\s+class=["']faq-ans["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
        const qt = q ? stripTags(q[1].replace(/<span\s+class=["']faq-chev["'][^>]*>[\s\S]*?<\/span>/i, '')) : '';
        const at = a ? inline(a[1].replace(/<div\s+class=["']faq-ans-inner["'][^>]*>([\s\S]*?)<\/div>/i, '$1')) : '';
        if (qt) pushBlock('**Q: ' + qt + '**');
        if (at) pushBlock(at);
        handled = true;
      } else if (classes.includes('era-timeline')) {
        // Render as a small list of era / years
        const items = [];
        const itRe = /<div\s+class=["']era-item[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;
        let im;
        while ((im = itRe.exec(inner)) !== null) {
          const raw = im[1];
          // Split label and <small>years</small>
          const sm = raw.match(/<small\b[^>]*>([\s\S]*?)<\/small>/i);
          const label = stripTags(raw.replace(/<small\b[\s\S]*?<\/small>/i, ''));
          const yrs = sm ? stripTags(sm[1]) : '';
          if (label || yrs) items.push(`- **${label}**${yrs ? ' — ' + yrs : ''}`);
        }
        if (items.length) pushBlock(items.join('\n'));
        handled = true;
      } else if (classes.includes('jump-row')) {
        // navigational jump badges — drop
        handled = true;
      } else if (classes.includes('updated-badge')) {
        const t = stripTags(inner);
        if (t) pushBlock('*' + t + '*');
        handled = true;
      } else if (classes.includes('loc-cap') || classes.includes('cap')) {
        const t = inline(inner);
        if (t) pushBlock('*' + t + '*');
        handled = true;
      } else if (classes.includes('yrs')) {
        const t = stripTags(inner);
        if (t) pushBlock('**' + t + '**');
        handled = true;
      } else if (classes.includes('loc-card') || classes.includes('model-card') || classes.includes('res-card') || classes.includes('related-card') || classes.includes('loc-body') || classes.includes('imgwc') || classes.includes('img2') || classes.includes('tbl-wrap') || classes.includes('loc-grid') || classes.includes('res-grid') || classes.includes('related-grid') || classes.includes('model-grid') || classes.includes('faq-list') || classes.includes('section') || classes.includes('content-layout') || classes.includes('main-content') || classes.includes('fsn-tool') || classes.includes('cta-strip')) {
        walk(inner);
        handled = true;
      } else if (tag === 'section' || tag === 'div' || tag === 'main' || tag === 'article') {
        // Default: recurse
        walk(inner);
        handled = true;
      }
    }

    if (!handled) {
      // Unhandled: just skip
    }

    i = matchEnd;
  }
}

walk(article);

// Cleanup: collapse multiple blank lines, ensure single trailing newline
let md = out.join('\n\n');
md = md.replace(/\n{3,}/g, '\n\n');
md = md.replace(/[ \t]+\n/g, '\n');
md = md.trimEnd() + '\n';

fs.writeFileSync(OUTPUT, md, 'utf8');

const bytes = Buffer.byteLength(md, 'utf8');
const headings = (md.match(/^#{1,6} /gm) || []).length;
const tables = (md.match(/^\|/gm) || []).length; // total table lines — divide later
const tableHeaderSeparators = (md.match(/^\|[ \t-]+\|$/gm) || []).length;
const images = (md.match(/^!\[/gm) || []).length;

console.log(JSON.stringify({
  output: OUTPUT,
  bytes,
  headings,
  tables: tableHeaderSeparators,
  images,
}, null, 2));
