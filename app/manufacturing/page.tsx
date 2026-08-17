import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tyre Manufacturing & Quality Assurance",
  description: "Explore the demo Tyro Tyres manufacturing process, quality gates, laboratory testing and private-label production capabilities in New Delhi, India.",
  alternates: { canonical: "/manufacturing" },
};

const stages = [
  ["01", "Compound development", "Natural and synthetic rubbers, carbon black and performance additives are weighed through controlled recipes designed for the intended duty cycle."],
  ["02", "Component preparation", "Calendering, extrusion and bead preparation create consistent inner liner, sidewall, tread, steel-belt and reinforcement components."],
  ["03", "Precision tyre building", "Computer-guided assembly aligns every component into a dimensionally controlled green tyre with recorded batch identity."],
  ["04", "Curing & moulding", "Time, temperature and pressure are controlled to form the final tread, bond the structure and deliver repeatable geometry."],
  ["05", "Inspection & testing", "Visual, dimensional, balance and uniformity checks screen every tyre before laboratory sampling validates performance targets."],
  ["06", "Traceable dispatch", "Approved tyres receive final identification, protective packing and shipment documentation for domestic or export dispatch."],
] as const;

const tests = [
  ["01", "Endurance", "Simulated load, speed and heat cycles"],
  ["02", "Uniformity", "Radial force variation and balance"],
  ["03", "X-ray", "Internal construction and placement"],
  ["04", "Dimensions", "Section width, diameter and geometry"],
  ["05", "Materials", "Compound and reinforcement properties"],
  ["06", "Field trials", "Application-specific wear observation"],
] as const;

const compliance = [
  ["ISO 9001:2015", "Quality management system", "DEMO-QMS-2011"],
  ["IATF 16949:2016", "Automotive quality management", "DEMO-IATF-16949"],
  ["BIS IS 15636", "Indian pneumatic tyre conformity", "DEMO-CML-000000"],
  ["ECE Regulation 54", "Commercial vehicle tyre approval", "DEMO-E54-TYRO"],
] as const;

export default function ManufacturingPage() {
  return <>
    <PageHero
      className="manufacturing-hero"
      image={{ src: "/images/factory.png", alt: "Modern Tyro Tyres production facility concept" }}
      eyebrow="Factory & quality"
      title={<>Precision in.<br /><em>Performance out.</em></>}
      description="A transparent, traceable manufacturing concept built for repeatable private-label quality."
    />

    <section className="section">
      <div className="shell split-heading">
        <div><Eyebrow accent>How we manufacture</Eyebrow><h2>Six controlled stages.</h2></div>
        <p className="large-copy">Quality is not a final checkpoint. It is a connected set of decisions, measurements and sign-offs running from raw material receipt to container loading.</p>
      </div>
      <div className="shell manufacturing-steps">
        {stages.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
      </div>
    </section>

    <section className="lab-section dark-section section">
      <div className="shell">
        <SectionHeading eyebrow="Validation concept" title={<>Tested beyond<br />the visible.</>} description="Demo laboratory program prepared for replacement with the client’s verified equipment, methods and results." />
        <div className="test-grid">{tests.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section cert-detail">
      <div className="shell">
        <SectionHeading light eyebrow="Compliance framework" title="Prepared for proof." description="All certification names and numbers below are placeholders. Publish only after documentary verification." />
        <div className="cert-list">{compliance.map(([name, description, number]) => <article key={name}><div className="cert-seal">✓</div><div><h3>{name}</h3><p>{description}</p></div><code>{number}</code><span>DEMO</span></article>)}</div>
      </div>
    </section>

    <section className="cta-section"><div className="shell cta-inner"><h2>Audit the process.<br />Meet the people.</h2><p>Private-label partners can request a guided factory walkthrough and technical discussion.</p><Link className="button button-white" href="/contact#factory-visit">Book factory visit ↗</Link></div></section>
  </>;
}
