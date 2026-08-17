import type { Metadata } from "next";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroLoader } from "@/components/IntroLoader";
import { SITE, SITE_URL } from "@/config/site";
import "./globals.css";

const description = `${SITE.name} is a New Delhi private-label manufacturer of truck, bus, light commercial and agricultural tyres for Indian fleets and export markets.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | TBR & Agricultural Tyre Manufacturer India`,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "TBR tyres India",
    "truck tyre manufacturer",
    "agricultural tyre manufacturer",
    "private label tyres",
    "tyre exporter India",
    "10.00R20 tyre",
    "11.00R20 tyre",
    "14.9-28 tractor tyre",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "TBR and agricultural tyres manufactured in India for demanding work and global markets.",
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${SITE.name} - ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Commercial and agricultural tyres from India.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.shortName,
  foundingDate: String(SITE.founded),
  url: SITE_URL,
  logo: `${SITE_URL}/og.png`,
  email: SITE.email.exports,
  telephone: SITE.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressCountry: "IN",
  },
  description: "Private-label manufacturer of commercial and agricultural tyres. Demonstration company details pending approval.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <IntroLoader />
        <Header />
        <main id="main">{children}</main>
        <FloatingActions />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
