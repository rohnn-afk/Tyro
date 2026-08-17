import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact, Quotation & Factory Visit",
  description: "Contact the Tyro Tyres demo domestic, export and private-label teams or request a factory visit in New Delhi, India.",
  alternates: { canonical: "/contact" },
};

const visitDetails = [
  { term: "Visit hours", description: "Monday–Saturday · 10:00–16:00" },
  { term: "Advance notice", description: "Minimum 2 working days" },
  { term: "What to bring", description: "Government ID and safety footwear" },
] as const;

const faqs = [
  { question: "Do you sell tyres online?", answer: "No. Tyro Tyres is positioned as a quotation-led manufacturer serving fleets, dealers, importers and private-label partners." },
  { question: "Can Tyro manufacture under our brand?", answer: "Yes, subject to programme volume, mould availability, market compliance and approved commercial terms." },
  { question: "Can we combine sizes in one export shipment?", answer: "Mixed-size planning can be discussed based on production cycles and container optimisation." },
  { question: "Are these certificates and specifications final?", answer: "No. This prototype deliberately labels all unverified technical and compliance information as demo content." },
] as const;

function ContactCard({ title, phone, phoneHref, email }: { title: string; phone: string; phoneHref: string; email: string }) {
  return <article><span>{title}</span><a href={`tel:${phoneHref}`}>{phone}</a><a href={`mailto:${email}`}>{email}</a></article>;
}
export default function ContactPage() {
  const visitEmail = `mailto:${SITE.email.visits}?subject=Factory%20visit%20request`;
  return <>
    <PageHero
      className="contact-hero"
      eyebrow={`Contact ${SITE.name}`}
      title={<>Let’s move<br /><em>business forward.</em></>}
      description="Share your size, volume, destination and application. We’ll shape the next conversation around your market."
    />

    <section id="quote" className="section contact-main">
      <div className="shell enquiry-grid contact-grid">
        <div>
          <Eyebrow accent>Request quotation</Eyebrow>
          <h2>Tell us what<br />the work demands.</h2>
          <p>For useful pricing, include expected monthly volume, port or delivery region, preferred sizes and any private-label requirements.</p>
          <div className="contact-cards">
            <ContactCard title="Domestic sales" phone={SITE.phone} phoneHref={SITE.phoneHref} email={SITE.email.sales} />
            <ContactCard title="Export & private label" phone={SITE.whatsapp} phoneHref={SITE.whatsappHref} email={SITE.email.exports} />
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>

    <section id="factory-visit" className="factory-visit">
      <div className="shell visit-grid">
        <div className="map-concept"><span>TYRO</span><div className="map-pin">●</div><small>Demo location map</small></div>
        <div>
          <Eyebrow>Factory visits</Eyebrow>
          <h2>See the process<br />in person.</h2>
          <p>{SITE.address.street}<br />{SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}</p>
          <dl>{visitDetails.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.description}</dd></div>)}</dl>
          <a className="button button-white" href={visitEmail}>Request a visit ↗</a>
          <small className="draft-warning">Address and visit details are demonstration content.</small>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell faq-grid">
        <div><Eyebrow accent>Common questions</Eyebrow><h2>Before you enquire.</h2></div>
        <div className="faqs">{faqs.map((faq, index) => <details open={index === 0} key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  </>;
}
