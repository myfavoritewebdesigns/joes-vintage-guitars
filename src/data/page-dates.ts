/**
 * Published and updated dates for stand-alone pages whose schema had none (2026-11-16 sweep:
 * blog posts carry their own dates; these 31 pages carried no datePublished, dateModified or
 * page-level author). Layout.astro reads this map and fills ONLY the fields a page leaves out.
 *
 * published: the original WordPress date where a saved copy of the old page exists in
 *   reference/ (source "wordpress"), else the day the page first appeared in this repo ("repo").
 * modified: the last commit that touched the page source. Update it when the page content changes.
 * A page that passes publishedTime/modifiedTime to Layout keeps those (they also feed its og tags).
 */
export interface PageDates { published: string; modified: string; source: "wordpress" | "repo" }

export const pageDates: Record<string, PageDates> = {
  "/": { published: "2022-05-06", modified: "2026-10-23", source: "wordpress" },
  "/about-me/": { published: "2026-02-04", modified: "2026-09-15", source: "wordpress" },
  "/consignment/": { published: "2026-06-09", modified: "2026-11-10", source: "repo" },
  "/contact-me/": { published: "2022-05-11", modified: "2026-10-02", source: "wordpress" },
  "/free-appraisal/": { published: "2022-05-11", modified: "2026-10-30", source: "wordpress" },
  "/free-appraisal/fender/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/free-appraisal/gibson/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/free-appraisal/gretsch/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/free-appraisal/guild/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/free-appraisal/martin/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/free-appraisal/rickenbacker/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/gibson-sg-dating-guide/": { published: "2026-09-10", modified: "2026-09-15", source: "repo" },
  "/how-to-spot-a-fake-fender/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/how-to-spot-a-fake-gibson/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/how-to-spot-a-fake-martin/": { published: "2026-09-28", modified: "2026-09-28", source: "repo" },
  "/repair/": { published: "2026-06-09", modified: "2026-10-26", source: "repo" },
  "/reverb-reviews/": { published: "2026-06-09", modified: "2026-09-15", source: "repo" },
  "/sell-a-guitar-collection/": { published: "2022-05-11", modified: "2026-11-05", source: "wordpress" },
  "/sell-an-amplifier-or-effect/": { published: "2022-05-11", modified: "2026-11-04", source: "wordpress" },
  "/sell-my-epiphone-guitar/": { published: "2026-10-30", modified: "2026-11-02", source: "repo" },
  "/sell-my-fender-guitar/": { published: "2022-05-11", modified: "2026-11-06", source: "wordpress" },
  "/sell-my-gibson-guitar/": { published: "2022-05-11", modified: "2026-10-30", source: "wordpress" },
  "/sell-my-gretsch-guitar/": { published: "2023-01-02", modified: "2026-11-05", source: "wordpress" },
  "/sell-my-guild-guitar/": { published: "2022-05-11", modified: "2026-11-05", source: "wordpress" },
  "/sell-my-martin-guitar/": { published: "2022-05-11", modified: "2026-09-15", source: "wordpress" },
  "/sell-my-national-guitar/": { published: "2023-03-16", modified: "2026-11-05", source: "wordpress" },
  "/sell-my-rickenbacker-guitar/": { published: "2022-05-11", modified: "2026-10-29", source: "wordpress" },
  "/sell-your-levin-or-goya-guitar/": { published: "2026-10-26", modified: "2026-10-26", source: "repo" },
  "/sell-your-vintage-dangelico-guitar-in-the-us/": { published: "2023-07-14", modified: "2026-11-05", source: "wordpress" },
  "/vintage-fender-esquire-value-guide/": { published: "2026-09-21", modified: "2026-11-05", source: "repo" },
  "/vintage-fender-telecaster-value-guide/": { published: "2026-06-09", modified: "2026-10-30", source: "repo" },
};
