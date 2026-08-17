import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";

const whatsappUrl = getWhatsAppUrl("Hello Tyro Tyres, I would like a quotation.");

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a className="float-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span>WA</span><b>WhatsApp</b>
      </a>
      <Link href="/contact#quote"><span>↗</span><b>Get quote</b></Link>
    </div>
  );
}
