export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://rrr-tyres-india.reapr90.chatgpt.site";

export const SITE = {
  name: "Tyro Tyres",
  shortName: "Tyro",
  founded: 2011,
  tagline: "Engineered to go further",
  phone: "+91 11 4500 1111",
  phoneHref: "+911145001111",
  whatsapp: "+91 98100 11111",
  whatsappHref: "919810011111",
  email: {
    sales: "sales@tyrotyres.example",
    exports: "exports@tyrotyres.example",
    visits: "visits@tyrotyres.example",
  },
  address: {
    street: "Plot 18, Industrial Growth Centre, Bawana",
    city: "New Delhi",
    postalCode: "110039",
    country: "India",
  },
} as const;

export const MAIN_NAVIGATION = [
  { label: "TBR Tyres", href: "/products?category=tbr" },
  { label: "Agriculture", href: "/products?category=agriculture" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRIORITY_SIZES = [
  { size: "10.00R20", href: "/products/tbr-10-00r20" },
  { size: "11.00R20", href: "/products/tbr-11-00r20" },
  { size: "295/90R20", href: "/products/tbr-295-90r20" },
  { size: "14.9-28", href: "/products/agri-14-9-28" },
  { size: "16.9-28", href: "/products/agri-16-9-28" },
] as const;

export const DEMO_CLIENTS = [
  "BHARATLINE",
  "NORTHSTAR",
  "KISANSHAKTI",
  "TRANSAXLE",
  "INDUSFLEET",
] as const;

export const CERTIFICATIONS = [
  { code: "ISO 9001", title: "Quality management" },
  { code: "IATF 16949", title: "Automotive systems" },
  { code: "BIS", title: "India compliance" },
  { code: "ECE R54", title: "Commercial tyres" },
] as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}

