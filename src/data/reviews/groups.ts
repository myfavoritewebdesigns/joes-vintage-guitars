export const groups = [
  { slug: "fender", label: "Fender", expertPage: "/fender-vintage-guitar-expert/" },
  { slug: "gibson", label: "Gibson And Epiphone", expertPage: null },
  { slug: "martin", label: "Martin", expertPage: null },
  { slug: "gretsch", label: "Gretsch", expertPage: null },
  { slug: "guild", label: "Guild", expertPage: null },
  { slug: "rickenbacker", label: "Rickenbacker", expertPage: null },
  { slug: "prs", label: "PRS", expertPage: null },
  { slug: "other", label: "Amps, Parts And Other Makes", expertPage: null },
] as const;

export type ReviewGroup = (typeof groups)[number];

export function groupUrl(group: ReviewGroup): string {
  return group.expertPage ?? `/reverb-reviews/${group.slug}/`;
}
