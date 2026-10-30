import type { ImageMetadata } from 'astro';

export type GuideBrand = 'Fender' | 'Gibson' | 'Gretsch' | 'Guild' | 'National' | 'Epiphone' | 'Rickenbacker';
export interface GuidePhoto {
  src: ImageMetadata;
  alt: string;
  caption: string;
  captionBelow?: boolean;
  position?: string;
  fit?: 'cover' | 'contain';
}
export interface GuideCard { label?: string; title: string; html: string }
export type GuideBlock =
  | { type: 'prose'; html: string }
  | { type: 'table'; caption: string; columns: string[]; rows: string[][]; note?: string; valueChart?: boolean }
  | { type: 'columns'; items: GuideCard[] }
  | { type: 'timeline'; items: { date: string; title: string; html: string }[] }
  | { type: 'photos'; photos: GuidePhoto[] }
  | { type: 'cards'; variant: 'models' | 'condition' | 'rank'; items: GuideCard[] }
  | { type: 'archive'; items: { label: string; title: string; html: string; photos: GuidePhoto[] }[] }
  | { type: 'serials'; items: { serial: string; title: string; html: string; photo?: GuidePhoto }[] }
  | { type: 'checklist'; items: { title: string; html: string }[] }
  | { type: 'callout'; title: string; html: string }
  | { type: 'cta'; title: string; html: string; appraisalLabel: string; sellLabel: string; sellHref: string }
  | { type: 'sources'; items: { title: string; href: string; note: string }[] };

export type GuideSection =
  | { type: 'section'; id: string; title: string; eyebrow: string; nav?: string; tone?: 'light' | 'dark' | 'archive'; blocks: GuideBlock[] }
  | { type: 'photo-band'; photos: [GuidePhoto, GuidePhoto]; quote: string; attribution?: string }
  | { type: 'stat'; figure: string; title: string; html: string; source: { label: string; href: string } };

export interface ModelGuideData {
  slug: string;
  brand: GuideBrand;
  kind: 'authentication' | 'value';
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  dek: string;
  date: string;
  hero: GuidePhoto;
  glanceTitle: string;
  glance: [string, string][];
  secondaryActions: [{ label: string; href: string }, { label: string; href: string }];
  intro: { html: string; calloutTitle: string; callout: string };
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  closing: string;
  authorBio: string;
  sellLabel?: string;
  sellHref?: string;
}
