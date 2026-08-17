import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Tyro | Private-Label Tyre Manufacturer",
  description: "Founded in 2011, Tyro is a New Delhi private-label commercial and agricultural tyre manufacturer serving India and export markets.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["T", "Tough by design", "Products shaped around real routes, loads, surfaces and punishing operating cycles."],
  ["Y", "Yield-driven value", "Tyres engineered around uptime, service life and practical fleet or farm economics."],
  ["R", "Reliable engineering", "Controlled materials, consistent processes and verification at defined quality gates."],
  ["O", "Open partnership", "Direct access, practical answers and private-label support built around your market."],
];

export default function AboutPage() {
  return <>
    <section className="page-hero about-hero"><div className="shell"><p className="eyebrow"><span/> Company</p><h1>Built here.<br/><em>Ready everywhere.</em></h1><p>A focused Indian manufacturer combining market understanding, flexible private-label programs and an open-door approach to partnership.</p></div></section>
    <section className="section"><div className="shell story-grid"><div><p className="eyebrow red"><span/> Our story</p><h2>Focused since 2011.</h2></div><div><p className="large-copy">Tyro began with a practical belief: commercial buyers deserve a manufacturer that listens closely, develops carefully and stays accountable after dispatch.</p><p>From our New Delhi manufacturing base, we focus on two demanding segments—truck and bus radial tyres, and agricultural tyres. This concentration helps us build relevant ranges, support private-label customers and respond to regional operating conditions.</p><p className="demo-callout"><b>Client approval note</b> This company narrative, address, capabilities and market claims are demonstration copy and must be verified before public promotion.</p></div></div></section>
    <section className="values dark-section section"><div className="shell"><div className="section-head"><div><p className="eyebrow"><span/> The Tyro standard</p><h2>Four letters.<br/>One promise.</h2></div><p>A brand platform built to communicate durability, value, engineering discipline and collaborative service.</p></div><div className="value-grid tyro-values">{principles.map(([letter,title,copy]) => <article key={letter}><b>{letter}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section stats-section"><div className="shell stats-grid"><div><strong>15+</strong><span>Years of manufacturing direction</span></div><div><strong>50</strong><span>Core catalogue sizes</span></div><div><strong>100%</strong><span>Batch traceability concept</span></div><div><strong>24h</strong><span>Target enquiry response</span></div></div></section>
    <section className="cta-section"><div className="shell cta-inner"><h2>Come see how<br/>Tyro tyres are built.</h2><p>Book a guided demo factory visit for your procurement or distribution team.</p><Link className="button button-white" href="/contact#factory-visit">Plan your visit ↗</Link></div></section>
  </>;
}
