import { getCollection, type CollectionEntry } from "astro:content";

export type SoldGalleryEntry = CollectionEntry<"soldGallery">;

export async function getSoldGalleryEntries(): Promise<SoldGalleryEntry[]> {
  const entries = await getCollection("soldGallery");
  return entries.sort((a, b) => {
    if (a.data.year !== b.data.year) return b.data.year - a.data.year;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function soldGalleryHref(entry: SoldGalleryEntry): string {
  return `/sold-gallery/${entry.id}/`;
}
