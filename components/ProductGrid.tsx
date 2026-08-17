"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/lib/products";

export function ProductGrid({ products, initialCategory = "all" }: { products: Product[]; initialCategory?: ProductCategory | "all" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">(initialCategory);
  const [group, setGroup] = useState("all");
  const groups = useMemo(() => [...new Set(products.filter(p => category === "all" || p.category === category).map(p => p.group))], [products, category]);
  const filtered = products.filter(p => (category === "all" || p.category === category) && (group === "all" || p.group === group) && (`${p.size} ${p.pattern} ${p.application}`.toLowerCase().includes(query.toLowerCase())));
  function changeCategory(next: ProductCategory | "all") { setCategory(next); setGroup("all"); }
  return (
    <>
      <div className="catalog-tools">
        <div className="tabs" role="tablist" aria-label="Product category">
          <button className={category === "all" ? "active" : ""} onClick={() => changeCategory("all")}>All <b>50</b></button>
          <button className={category === "tbr" ? "active" : ""} onClick={() => changeCategory("tbr")}>TBR <b>25</b></button>
          <button className={category === "agriculture" ? "active" : ""} onClick={() => changeCategory("agriculture")}>Agriculture <b>25</b></button>
        </div>
        <div className="filters"><label><span className="sr-only">Search tyre size</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search size or pattern…"/></label><label><span className="sr-only">Filter by series</span><select value={group} onChange={e => setGroup(e.target.value)}><option value="all">All series</option>{groups.map(item => <option key={item}>{item}</option>)}</select></label></div>
      </div>
      <div className="result-count">Showing <strong>{filtered.length}</strong> tyre sizes</div>
      <div className="product-grid">
        {filtered.map(product => <ProductCard key={product.slug} product={product}/>) }
      </div>
      {!filtered.length && <div className="empty-state"><h3>No exact size found</h3><p>Our private-label program can support custom-market requirements.</p><Link className="button button-red" href="/contact#quote">Ask our export team</Link></div>}
    </>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card ${product.featured ? "priority" : ""}`}>
      {product.featured && <span className="priority-tag">★ Priority size</span>}
      <Link href={`/products/${product.slug}`} className="product-visual" aria-label={`View ${product.size}`}>
        <Image src={product.category === "tbr" ? "/images/tbr-hero.png" : "/images/agriculture-hero.png"} alt={`${product.size} ${product.category === "tbr" ? "commercial truck" : "agricultural"} tyre`} fill sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 33vw"/>
        <span>{product.category === "tbr" ? "TBR" : "AGRI"}</span>
      </Link>
      <div className="product-info"><small>{product.group}</small><h3><Link href={`/products/${product.slug}`}>{product.size}</Link></h3><p>{product.pattern}</p><div className="product-meta"><span>{product.position}</span><span>{product.plyRating}</span></div><Link className="card-link" href={`/products/${product.slug}`}>View specifications <span>↗</span></Link></div>
    </article>
  );
}
