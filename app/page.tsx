import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { QuickFinder } from "@/components/QuickFinder";
import { CERTIFICATIONS, DEMO_CLIENTS } from "@/config/site";
import { featuredProducts } from "@/lib/products";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image className="hero-bg" src="/images/tbr-hero.png" alt="Premium Tyro truck and bus radial tyre" fill priority sizes="100vw"/>
        <div className="hero-shade"/><div className="hero-lines"/>
        <div className="shell hero-inner">
          <div className="hero-copy"><p className="eyebrow"><span/> Private-label tyre manufacturer · India</p><h1>ENGINEERED<br/>TO GO <em>FURTHER.</em></h1><p className="hero-lead">Commercial and agricultural tyres made for punishing roads, demanding fields and markets that expect more.</p><div className="hero-actions"><Link className="button button-red" href="/products">Explore our range <span>↗</span></Link><Link className="button button-ghost" href="/contact#factory-visit">Visit our factory <span>→</span></Link></div><div className="hero-proof"><div><strong>2011</strong><span>Founded in India</span></div><div><strong>50</strong><span>Core tyre sizes</span></div><div><strong>2</strong><span>Focused segments</span></div></div></div>
          <div className="hero-badge"><span>TYRO</span><b>Tyres without compromise</b><small>Private-label manufacturing</small></div>
        </div>
        <div className="shell finder-wrap"><QuickFinder/></div>
        <div className="scroll-cue"><span/> Scroll to discover</div>
      </section>

      <section className="trust-band"><div className="shell trust-row"><span>Built for the businesses that move India</span>{DEMO_CLIENTS.map(name => <div key={name}>{name}<small>DEMO</small></div>)}</div></section>

      <section className="section intro-section"><div className="shell split-heading"><Reveal><p className="eyebrow red"><span/> Tyro Tyres since 2011</p><h2>India engineered.<br/>World ready.</h2></Reveal><Reveal><p className="large-copy">Tyro is a New Delhi-based private-label manufacturer focused on reliable commercial mobility and productive agriculture. We develop market-fit tyres, support flexible brand programs and invite customers to see how every casing is built.</p><Link className="text-link" href="/about">Discover our company <span>↗</span></Link></Reveal></div></section>

      <section className="section dark-section"><div className="shell"><Reveal className="section-head"><div><p className="eyebrow"><span/> Product range</p><h2>Right tyre.<br/>Right application.</h2></div><p>Explore 50 core sizes across highway fleets, regional transport, tractors and farm implements.</p></Reveal><div className="category-grid"><Reveal><Link href="/products?category=tbr" className="category-card tbr"><Image src="/images/tbr-hero.png" alt="Truck and bus radial tyre range" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="category-overlay"><span>01 / Commercial</span><h3>Truck & Bus<br/>Radial Tyres</h3><p>25 sizes · Highway · Regional · Mixed service</p><b>Explore TBR range ↗</b></div></Link></Reveal><Reveal><Link href="/products?category=agriculture" className="category-card agri"><Image src="/images/agriculture-hero.png" alt="Agricultural tractor tyre range" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="category-overlay"><span>02 / Agriculture</span><h3>Agricultural<br/>Tyres</h3><p>25 sizes · Front · Rear · Implement</p><b>Explore agri range ↗</b></div></Link></Reveal></div></div></section>

      <section className="section priority-section"><div className="shell"><Reveal className="section-head light"><div><p className="eyebrow red"><span/> Fast-moving portfolio</p><h2>Priority sizes</h2></div><p>Our most requested commercial and agricultural fitments, positioned for domestic distribution and export programs.</p></Reveal><div className="product-grid featured-grid">{featuredProducts.map(product => <ProductCard key={product.slug} product={product}/>)}</div><div className="center-action"><Link className="button button-dark" href="/products">Browse all 50 sizes <span>↗</span></Link></div></div></section>

      <section className="process-section"><div className="shell process-grid"><Reveal><div className="factory-image"><Image src="/images/factory.png" alt="Demo Tyro Tyres manufacturing and quality inspection facility" fill sizes="(max-width: 760px) 100vw, 55vw"/><span>Factory visit available</span></div></Reveal><Reveal><p className="eyebrow"><span/> Manufacturing</p><h2>Controlled at every turn.</h2><p>From incoming compound checks to final uniformity inspection, our six-stage manufacturing approach is designed around repeatability, traceability and export-ready consistency.</p><ol className="process-list"><li><b>01</b><span>Compound development</span></li><li><b>02</b><span>Component preparation</span></li><li><b>03</b><span>Tyre building</span></li><li><b>04</b><span>Precision curing</span></li><li><b>05</b><span>Uniformity inspection</span></li><li><b>06</b><span>Final dispatch audit</span></li></ol><Link className="button button-red" href="/manufacturing">Inside our process <span>↗</span></Link></Reveal></div></section>

      <section className="section quality-section"><div className="shell"><Reveal className="section-head light"><div><p className="eyebrow red"><span/> Quality assurance</p><h2>Evidence, not promises.</h2></div><p>Demo certification architecture prepared for replacement with verified client documents before production launch.</p></Reveal><div className="cert-grid">{CERTIFICATIONS.map(certificate => <Cert key={certificate.code} {...certificate}/>)}</div></div></section>

      <section className="industries section"><div className="shell"><Reveal className="section-head light"><div><p className="eyebrow red"><span/> Industries served</p><h2>Made for real work.</h2></div></Reveal><div className="industry-grid">{[["01","Long-haul fleets","Heat control and casing endurance across demanding highway cycles."],["02","Regional transport","Stable performance for mixed loads and variable road surfaces."],["03","Bus & passenger","Steady handling, predictable wear and dependable uptime."],["04","Agriculture","Traction, self-cleaning and soil-conscious field performance."],["05","Dealers & distributors","A focused range backed by private-label market support."],["06","Importers & OEM programs","Export documentation, mixed-container planning and custom branding."]].map(([n,t,d]) => <Reveal key={n}><article><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></div></section>

      <section className="cta-section"><div className="shell cta-inner"><Reveal><p className="eyebrow"><span/> Start a conversation</p><h2>Your market.<br/>Our manufacturing.</h2><p>Tell us the sizes, destination and volume. Our commercial team will shape a practical quotation for your fleet, distribution or private-label program.</p><div><Link className="button button-white" href="/contact#quote">Ask for quotation <span>↗</span></Link><a className="button button-ghost" href="mailto:exports@tyrotyres.example">Reach export desk</a></div></Reveal></div></section>
    </>
  );
}

function Cert({ code, title }: { code: string; title: string }) { return <Reveal><article className="cert-card"><span>DEMO</span><div className="cert-seal">✓</div><strong>{code}</strong><p>{title}</p><small>Certificate placeholder<br/>Verification pending</small></article></Reveal>; }
