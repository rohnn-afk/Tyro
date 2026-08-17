"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ product }: { product?: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><span>✓</span><h3>Enquiry captured</h3><p>This prototype form is working locally. Connect the client’s email or CRM before launch.</p><button className="text-link" onClick={() => setSent(false)}>Send another enquiry</button></div>;
  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-row"><label>Full name<input name="name" required placeholder="Your name"/></label><label>Company<input name="company" required placeholder="Company / fleet"/></label></div>
      <div className="form-row"><label>Work email<input type="email" name="email" required placeholder="name@company.com"/></label><label>Phone / WhatsApp<input type="tel" name="phone" required placeholder="+91 98XXXXXX"/></label></div>
      <div className="form-row"><label>Interested in<select name="interest" defaultValue={product || ""} required><option value="" disabled>Select product</option>{product && <option value={product}>{product}</option>}<option>TBR Tyres</option><option>Agricultural Tyres</option><option>Private Label / Export</option><option>Factory Visit</option></select></label><label>Required quantity<input type="text" name="quantity" placeholder="e.g. 200 tyres / month"/></label></div>
      <label>Requirement<textarea name="message" rows={4} placeholder="Sizes, destination market, application and timeline"/></label>
      <div className="form-submit"><button className="button button-red" type="submit">Request quotation <span>↗</span></button><small>Demo form — no personal data is transmitted.</small></div>
    </form>
  );
}
