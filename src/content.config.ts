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
    heroImageLicensed: z.boolean().default(true),
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

// Selected sold instruments are kept separate from the editorial blog. Each
// record is a researched archive entry, not a copy of its former marketplace
// listing. Eligibility is decided before a file is created: sold, made no later
// than 1989, and above the private asking-price threshold. Price is deliberately
// absent from this public schema so it cannot leak into HTML or JSON-LD.
const soldGallery = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/sold-gallery" }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.number().int().max(1989),
    serialNumber: z.string().optional(),
    instrumentType: z.string(),
    bodyStyle: z.string(),
    country: z.string(),
    handedness: z.string(),
    stringCount: z.number().int().positive(),
    condition: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    excerpt: z.string(),
    metaDescription: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      })
    ).min(1),
    overview: z.array(z.string()).min(1),
    modelContext: z.array(z.string()).min(1),
    exampleNotes: z.array(z.string()).min(1),
    measurements: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    conditionNotes: z.array(z.object({ label: z.string(), detail: z.string() })).min(1),
    datingNote: z.string(),
    soundNote: z.string().optional(),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
        note: z.string(),
      })
    ).min(1),
    relatedGuides: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    sourceListingId: z.string(),
  }),
});

export const collections = { blog, soldGallery };
