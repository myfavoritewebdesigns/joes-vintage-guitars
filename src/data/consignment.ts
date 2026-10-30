/** One rate applies to each instrument's entire final sale price. */
export const consignmentTiers = [
  { maximum: 3000, rate: 18.5, label: "Under $3,000", keep: "81.5%" },
  { maximum: 50000, rate: 15, label: "$3,000 to $49,999.99", keep: "85%" },
  { maximum: 100000, rate: 12, label: "$50,000 to $99,999.99", keep: "88%" },
  { maximum: Infinity, rate: 10, label: "$100,000 and Up", keep: "90%" },
] as const;
export function estimateConsignment(salePrice: number) {
  if (!Number.isFinite(salePrice) || salePrice <= 0 || salePrice > 100000000) return null;
  const cents = Math.round(salePrice * 100);
  const tier = consignmentTiers.find((item) => cents / 100 < item.maximum)!;
  const feeCents = Math.round(cents * tier.rate / 100);
  return { rate: tier.rate, commission: feeCents / 100, proceeds: (cents - feeCents) / 100 };
}

