import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE, SITE_URL } from "@/config/site";
import {
  categoryNames,
  getProduct,
  productImageByCategory,
  products,
  type Product,
} from "@/lib/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  return {
    title: `${product.size} ${product.category === "tbr" ? "TBR" : "Agricultural"} Tyre`,
    description: `${product.size} ${product.pattern}: ${product.summary} View demo specifications and request a quotation from Tyro Tyres India.`,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.size} ${product.pattern}`,
    brand: { "@type": "Brand", name: SITE.name },
    category: categoryNames[product.category],
    description: product.summary,
    image: `${SITE_URL}${productImageByCategory[product.category]}`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Tyre size", value: product.size },
      { "@type": "PropertyValue", name: "Ply rating", value: product.plyRating },
      { "@type": "PropertyValue", name: "Load index", value: product.loadIndex },
      { "@type": "PropertyValue", name: "Application", value: product.application },
    ],
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
  const productImage = productImageByCategory[product.category];

  return (
    <>
      <section className="product-hero">
        <div className="shell breadcrumbs">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <b>{product.size}</b>
        </div>
        <div className="shell product-hero-grid">
          <div className="product-showcase">
            <Image src={productImage} alt={`${product.size} ${product.pattern} tyre`} fill priority sizes="(max-width: 760px) 100vw, 55vw" />
            <span className="photo-caption">Concept product visual</span>
          </div>
          <div className="product-summary">
            <Eyebrow accent>{categoryNames[product.category]}</Eyebrow>
            {product.featured && <div className="feature-pill">★ Priority size</div>}
            <h1>{product.size}</h1>
            <h2>{product.pattern}</h2>
            <p>{product.summary}</p>
            <div className="quick-specs">
              <div><small>Application</small><strong>{product.position}</strong></div>
              <div><small>Load index</small><strong>{product.loadIndex}</strong></div>
              <div><small>Ply rating</small><strong>{product.plyRating}</strong></div>
            </div>
            <div className="product-actions">
              <a className="button button-red" href="#product-enquiry">Request quotation <span>↗</span></a>
              <a className="button button-dark" href={`/datasheets/${product.slug}.pdf`} download>Technical PDF ↓</a>
            </div>
            <small className="draft-warning">Demo technical values — final engineering approval required.</small>
          </div>
        </div>
      </section>

      <section className="section spec-section">
        <div className="shell spec-grid">
          <div>
            <Eyebrow accent>Technical specification</Eyebrow>
            <h2>Built around the job.</h2>
            <p>{product.application}. The pattern concept balances reliable traction, casing stability and service-focused durability.</p>
            <ul className="feature-list">
              <li><b>Optimised tread geometry</b><span>Promotes even contact pressure and predictable wear.</span></li>
              <li><b>Reinforced casing concept</b><span>Designed for load stability and retread potential.</span></li>
              <li><b>Heat-managed compound</b><span>Supports consistent operation across longer duty cycles.</span></li>
            </ul>
          </div>
          <div className="spec-table">
            <div><span>Tyre size</span><b>{product.size}</b></div>
            <div><span>Pattern</span><b>{product.pattern}</b></div>
            <div><span>Recommended rim</span><b>{product.rim}</b></div>
            <div><span>Ply rating</span><b>{product.plyRating}</b></div>
            <div><span>Load / speed index</span><b>{product.loadIndex}</b></div>
            <div><span>Position</span><b>{product.position}</b></div>
            <div><span>Construction</span><b>{product.category === "tbr" ? "Radial · Tubeless / Tube type" : "Bias · Tube type"}</b></div>
            <div><span>Status</span><b>Demo specification</b></div>
          </div>
        </div>
      </section>

      <section id="product-enquiry" className="enquiry-section">
        <div className="shell enquiry-grid">
          <div>
            <Eyebrow>Commercial enquiry</Eyebrow>
            <h2>Quote {product.size}</h2>
            <p>Share your monthly volume, destination and application. Our demo export desk will respond with availability and program options.</p>
            <div className="contact-mini">
              <span>Call</span><b>{SITE.phone}</b>
              <span>Email</span><b>{SITE.email.exports}</b>
            </div>
          </div>
          <InquiryForm product={`${product.size} · ${product.pattern}`} />
        </div>
      </section>

      <section className="section related">
        <div className="shell">
          <div className="section-head light">
            <div><Eyebrow accent>Continue exploring</Eyebrow><h2>Related sizes</h2></div>
            <Link className="text-link" href={`/products?category=${product.category}`}>View full range ↗</Link>
          </div>
          <div className="product-grid">
            {relatedProducts.map((item) => <ProductCard key={item.slug} product={item} />)}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductSchema(product)) }} />
    </>
  );
}
