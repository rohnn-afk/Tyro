import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { PageHero } from "@/components/ui/PageHero";
import { products, type ProductCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Commercial & Agricultural Tyre Catalogue",
  description: "Browse 50 Tyro Tyres sizes for truck, bus, light commercial, tractor and farm implement applications.",
  alternates: { canonical: "/products" },
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

function isProductCategory(value: string | undefined): value is ProductCategory {
  return value === "tbr" || value === "agriculture";
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const initialCategory = isProductCategory(category) ? category : "all";

  return (
    <>
      <PageHero
        className="catalog-hero"
        eyebrow="Product catalogue"
        title={<>Find your<br /><em>working edge.</em></>}
        description="Search 50 commercial and agricultural tyre sizes by category, series or fitment. Every product is quotation-led—no cart, no compromise."
      />
      <section className="section catalog-section">
        <div className="shell">
          <ProductGrid products={products} initialCategory={initialCategory} />
        </div>
      </section>
    </>
  );
}
