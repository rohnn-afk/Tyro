import { PRIORITY_PRODUCT_SIZES, PRODUCT_GROUPS } from "@/content/product-catalog";

export type ProductCategory = "tbr" | "agriculture";

export type Product = Readonly<{
  slug: string;
  size: string;
  category: ProductCategory;
  group: string;
  pattern: string;
  loadIndex: string;
  plyRating: string;
  application: string;
  position: string;
  rim: string;
  featured: boolean;
  summary: string;
}>;

export const categoryNames: Record<ProductCategory, string> = {
  tbr: "Truck & Bus Radial Tyres",
  agriculture: "Agricultural Tyres",
};

export const productImageByCategory: Record<ProductCategory, string> = {
  tbr: "/images/tbr-hero.png",
  agriculture: "/images/agriculture-hero.png",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[./]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createTbrProduct(size: string, group: string, groupIndex: number, index: number): Product {
  const light = group === "Light Truck & Commercial";
  const wide = size.startsWith("385") || size.startsWith("425");
  const patterns = ["TYRO ROADMASTER R1", "TYRO HAULMAX D2", "TYRO ROUTEPRO M3"] as const;

  return {
    slug: `tbr-${slugify(size)}`,
    size,
    category: "tbr",
    group,
    pattern: patterns[(index + groupIndex) % patterns.length],
    loadIndex: light ? "135/133" : wide ? "160K" : index % 2 ? "152/148J" : "154/150J",
    plyRating: light ? "14 PR" : "18 PR",
    application: light
      ? "Light commercial, regional delivery and last-mile fleet use"
      : wide
        ? "Trailer, steer axle and long-haul fleet operation"
        : "Highway, regional haul and mixed-load commercial operation",
    position: wide ? "Steer / Trailer" : index % 2 ? "Drive" : "All Position",
    rim: light ? "6.00G" : wide ? "11.75" : "7.50",
    featured: PRIORITY_PRODUCT_SIZES.has(size),
    summary: "A durable commercial radial engineered for stable handling, controlled heat build-up and dependable casing life.",
  };
}

function createAgricultureProduct(size: string, group: string, index: number): Product {
  const front = group === "Front Tractor Tyres";
  const implement = group === "Implement & Trailer Tyres";

  return {
    slug: `agri-${slugify(size)}`,
    size,
    category: "agriculture",
    group,
    pattern: front ? "TYRO FIELDRIB F2" : implement ? "TYRO FLOATPRO I4" : "TYRO TRACTIONKING R1",
    loadIndex: front ? "94A6" : implement ? "145A8" : index > 9 ? "151A8" : "139A8",
    plyRating: front ? "8 PR" : implement ? "14 PR" : "12 PR",
    application: front
      ? "Tractor front axle, steering and cultivation"
      : implement
        ? "Farm implement, trailer and flotation service"
        : "Tractor rear axle, tillage and field transport",
    position: front ? "Front" : implement ? "Implement / Trailer" : "Rear / Drive",
    rim: front ? "4.00E" : implement ? "W9" : "W12",
    featured: PRIORITY_PRODUCT_SIZES.has(size),
    summary: "Purpose-built agricultural traction with confident self-cleaning, soil care and rugged field durability.",
  };
}

export const products: readonly Product[] = PRODUCT_GROUPS.flatMap((definition, groupIndex) =>
  definition.sizes.map((size, index) =>
    definition.category === "tbr"
      ? createTbrProduct(size, definition.group, groupIndex, index)
      : createAgricultureProduct(size, definition.group, index),
  ),
);

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
