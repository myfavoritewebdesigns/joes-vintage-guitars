import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const preview = "C:/Users/joeda/Documents/Codex/2026-09-03/let/work/firebird-site";
const source = await readFile(join(preview, "dist/client/index.html"), "utf8");
const start = source.indexOf('<section class="hero">');
const end = source.indexOf('<section class="preFooter">');
if (start < 0 || end < 0) throw new Error("Firebird article boundaries not found");

let body = source.slice(start, end);
body = body
  .replaceAll('/images/firebird-full.jpg', '/images/blog/gibson-firebird-history-authentication-value/firebird-full.jpg')
  .replaceAll('/images/firebird-body.jpg', '/images/blog/gibson-firebird-history-authentication-value/firebird-body.jpg')
  .replaceAll('/images/firebird-headstock.jpg', '/images/blog/gibson-firebird-history-authentication-value/firebird-headstock.jpg')
  .replaceAll('/images/firebird-drive-detail-1.jpg', '/images/blog/gibson-firebird-history-authentication-value/firebird-drive-detail-1.jpg')
  .replace(/<nav class="articleToc"[\s\S]*?<\/nav>/, "")
  .replace(/<section class="section sources">/, '<section id="sources" class="section sources">');
body = body
  .replace(/\b(19|20)(\d{2})–(\d{2})\b/g, (_, c, y, end) => `${c}${y} to ${c}${end}`)
  .replace(/(\d)–\$(\d)/g, "$1 to $$$2")
  .replace(/(\d)–(\d)/g, "$1 to $2")
  .replace(/Rare–Very rare/g, "Rare to very rare")
  .replace(/1980s–today/g, "1980s to today");

const frontmatter = `---
title: "The Gibson Firebird: History, Authentication, and Value"
pubDate: "2026-09-04T12:00:00-07:00"
modified: "2026-09-04T12:00:00-07:00"
excerpt: "An in-depth guide to Gibson Firebird history, model identification, dating, authentication, custom-color rarity, and market value from 1963 to today."
category: "specific-model-highlights"
categoryName: "Specific Model Highlights"
tags: ["Gibson Firebird", "vintage Gibson", "guitar authentication", "guitar values"]
heroImage: "/images/blog/gibson-firebird-history-authentication-value/firebird-full.jpg"
heroImageAlt: "Reverse Gibson Firebird VII in its case from the Joe's Vintage Guitars archive"
metaDescription: "Gibson Firebird history, models, custom colors, dating and authentication details, production figures, and current vintage values."
ogImage: "/images/blog/gibson-firebird-history-authentication-value/firebird-full.jpg"
author: "Joe Dampt"
draft: false
toc:
  - href: "#history"
    label: "History"
  - href: "#models"
    label: "Models"
  - href: "#colors"
    label: "Custom Colors"
  - href: "#authenticate"
    label: "Authentication and Dating"
  - href: "#value"
    label: "Market Value"
  - href: "#sources"
    label: "Sources"
  - href: "#faq"
    label: "Common Questions"
---
`;

await writeFile("src/content/blog/gibson-firebird-history-authentication-value.md", frontmatter + body + "\n");

const imageDir = "public/images/blog/gibson-firebird-history-authentication-value";
await mkdir(imageDir, { recursive: true });
for (const name of ["firebird-full.jpg", "firebird-body.jpg", "firebird-headstock.jpg", "firebird-drive-detail-1.jpg"]) {
  await copyFile(join(preview, "public/images", name), join(imageDir, name));
}

console.log("Imported Firebird guide and four JVG archive images.");
