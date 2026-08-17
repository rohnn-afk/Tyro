"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/products";

export function QuickFinder() {
  const router = useRouter();
  const [category, setCategory] = useState<"tbr" | "agriculture">("tbr");
  const options = products.filter((product) => product.category === category);
  const [slug, setSlug] = useState("tbr-10-00r20");
  function changeCategory(value: "tbr" | "agriculture") {
    setCategory(value);
    setSlug(products.find((product) => product.category === value)?.slug || "");
  }
  return (
    <aside className="quick-finder" aria-label="Quick tyre finder">
      <div className="finder-title"><span>01</span><div><b>Quick tyre finder</b><small>Jump straight to specifications</small></div></div>
      <div className="finder-fields">
        <label>Category<select value={category} onChange={(event) => changeCategory(event.target.value as "tbr" | "agriculture")}><option value="tbr">Truck & Bus Radial</option><option value="agriculture">Agricultural</option></select></label>
        <label>Tyre size<select value={slug} onChange={(event) => setSlug(event.target.value)}>{options.map((product) => <option key={product.slug} value={product.slug}>{product.size} · {product.pattern.replace("TYRO ", "")}</option>)}</select></label>
        <button type="button" onClick={() => router.push(`/products/${slug}`)} aria-label="Open selected tyre">View tyre <span>↗</span></button>
      </div>
    </aside>
  );
}
