import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts migrated from the live WordPress site via scripts/migrate-blog.mjs.
// One Markdown file per post in src/content/blog/, filename === live URL slug.
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    modified: z.coerce.date(),
    excerpt: z.string().default(""),
    category: z.string(),
    categoryName: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().default(""),
    heroImageAlt: z.string().default(""),
    metaDescription: z.string().default(""),
    ogImage: z.string().default(""),
    author: z.string().default("Joe Dampt"),
    draft: z.boolean().default(false),
    wpId: z.number().optional(),
    // Opt-in floating table of contents. When non-empty, the post layout renders
    // a fixed sidebar (desktop) + "Sections" button/sheet (mobile). Each entry
    // points at an in-page anchor; set sub:true for an indented (H3-level) item.
    toc: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
          sub: z.boolean().default(false),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
