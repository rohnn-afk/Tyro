import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { products } from "@/lib/products";

const staticPaths = ["", "/products", "/about", "/manufacturing", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: product.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...productPages];
}
