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
    // Opt-in YouTube video. When set, the post layout loads the lite-yt-embed
    // assets and emits a VideoObject (plus a Clip per chapter, which is what
    // Google reads for key moments). The player itself is placed in the body
    // markdown wherever it belongs, as <lite-youtube videoid="...">.
    video: z
      .object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        // Full ISO timestamp from the watch page, never invented.
        uploadDate: z.string(),
        // Runtime in seconds, from the watch page's lengthSeconds.
        seconds: z.number(),
        chapters: z
          .array(z.object({ start: z.number(), name: z.string() }))
          .default([]),
      })
      .optional(),
  }),
});

export const collections = { blog };
