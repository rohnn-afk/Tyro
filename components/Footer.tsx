import Link from "next/link";
import { SITE } from "@/config/site";
import { Brand } from "./Brand";

const productLinks = [
  { label: "Truck & Bus Radial", href: "/products?category=tbr" },
  { label: "Agricultural", href: "/products?category=agriculture" },
  { label: "All sizes", href: "/products" },
  { label: "Bulk enquiry", href: "/contact#quote" },
] as const;

const companyLinks = [
  { label: "About Tyro", href: "/about" },
  { label: "Factory & quality", href: "/manufacturing" },
  { label: "Book a factory visit", href: "/contact#factory-visit" },
  { label: "Export desk", href: "/contact" },
] as const;

function FooterLinks({ title, links }: { title: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return <div><h3>{title}</h3>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>;
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Brand light />
          <p>Commercial and agricultural tyres engineered for Indian roads, global markets and work that does not wait.</p>
          <div className="demo-note">Prototype website · Contact, certificates and specifications are demonstration content pending client approval.</div>
        </div>
        <FooterLinks title="Products" links={productLinks} />
        <FooterLinks title="Company" links={companyLinks} />
        <div>
          <h3>Reach us</h3>
          <p>{SITE.address.street}<br />{SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}</p>
          <a href={`mailto:${SITE.email.exports}`}>{SITE.email.exports}</a>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 {SITE.name}. Demo brand presentation.</span>
        <span>Privacy · Terms · Warranty</span>
      </div>
    </footer>
  );
}
