import type { ProductCategory } from "@/lib/products";

export type ProductGroupDefinition = {
  category: ProductCategory;
  group: string;
  sizes: readonly string[];
};

export const PRODUCT_GROUPS: readonly ProductGroupDefinition[] = [
  { category: "tbr", group: "20 Inch Series", sizes: ["8.25R20", "9.00R20", "10.00R20", "11.00R20", "12.00R20", "12R20", "295/90R20"] },
  { category: "tbr", group: "22.5 Inch Series", sizes: ["255/70R22.5", "275/70R22.5", "275/80R22.5", "295/80R22.5", "315/80R22.5", "385/65R22.5", "385/55R22.5", "425/65R22.5"] },
  { category: "tbr", group: "Regional & Export Sizes", sizes: ["9R22.5", "10R22.5", "11R22.5", "12R22.5", "13R22.5"] },
  { category: "tbr", group: "Light Truck & Commercial", sizes: ["7.50R16", "8.25R16", "215/75R17.5", "235/75R17.5", "245/70R19.5"] },
  { category: "agriculture", group: "Front Tractor Tyres", sizes: ["5.00-15", "5.50-16", "6.00-16", "6.50-16", "7.50-16"] },
  { category: "agriculture", group: "Rear Tractor Tyres", sizes: ["8.3-20", "9.5-20", "11.2-20", "11.2-24", "12.4-24", "13.6-24", "13.6-28", "14.9-24", "14.9-28", "16.9-28", "16.9-30", "18.4-30", "18.4-34", "18.4-38", "20.8-38"] },
  { category: "agriculture", group: "Implement & Trailer Tyres", sizes: ["10.0/75-15.3", "11L-15", "12.5/80-18", "400/60-15.5", "500/50-17"] },
] as const;

export const PRIORITY_PRODUCT_SIZES = new Set([
  "10.00R20",
  "11.00R20",
  "295/90R20",
  "14.9-28",
  "16.9-28",
]);
