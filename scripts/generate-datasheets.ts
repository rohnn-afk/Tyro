import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { products } from "../lib/products.ts";

const escapePdf = (value: string) => value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E]/g, "-");
const text = (value: string, x: number, y: number, size: number, bold = false, color = "0 0 0") => `BT /${bold ? "F2" : "F1"} ${size} Tf ${color} rg ${x} ${y} Td (${escapePdf(value)}) Tj ET\n`;

function makePdf(product: (typeof products)[number]) {
  const specs = [
    ["TYRE SIZE", product.size], ["PATTERN", product.pattern], ["CATEGORY", product.category === "tbr" ? "TRUCK & BUS RADIAL" : "AGRICULTURAL"],
    ["SERIES", product.group], ["PLY RATING", product.plyRating], ["LOAD / SPEED INDEX", product.loadIndex],
    ["RECOMMENDED RIM", product.rim], ["POSITION", product.position], ["CONSTRUCTION", product.category === "tbr" ? "RADIAL" : "BIAS"],
  ];
  let stream = "q\n0.055 0.055 0.06 rg 0 0 595 842 re f\n0.84 0.05 0.075 rg 0 790 595 52 re f\n";
  stream += text("TYRO", 38, 806, 24, true, "1 1 1") + text("TYRES", 104, 808, 16, true, "1 1 1") + text("DEMO TECHNICAL DATASHEET", 385, 808, 9, true, "1 1 1");
  stream += text(product.category === "tbr" ? "COMMERCIAL RADIAL" : "AGRICULTURAL", 39, 736, 9, true, ".84 .05 .075");
  stream += text(product.size, 38, 668, 54, true, "1 1 1") + text(product.pattern, 41, 638, 15, true, ".75 .75 .75");
  stream += text("ENGINEERED TO GO FURTHER", 350, 692, 11, true, "1 1 1");
  stream += text("Private-label tyre manufacturing - India", 350, 672, 8, false, ".6 .6 .6");
  stream += "0.2 0.2 0.22 RG 38 605 m 557 605 l S\n";
  stream += text("TECHNICAL SPECIFICATION", 38, 574, 11, true, "1 1 1");
  let y = 535;
  for (const [label, value] of specs) {
    stream += `${y % 2 ? ".10 .10 .11" : ".13 .13 .14"} rg 38 ${y - 13} 519 34 re f\n`;
    stream += text(label, 50, y, 8, true, ".55 .55 .55") + text(value, 270, y, 10, true, "1 1 1"); y -= 36;
  }
  stream += text("APPLICATION", 38, 190, 9, true, ".84 .05 .075") + text(product.application.toUpperCase(), 38, 169, 9, false, "1 1 1");
  stream += ".84 .05 .075 rg 38 82 519 54 re f\n" + text("DEMO / CLIENT APPROVAL REQUIRED", 52, 111, 10, true, "1 1 1") + text("All specifications, approvals and performance claims are placeholders and must be verified before commercial use.", 52, 95, 7, false, "1 1 1");
  stream += text("Tyro Tyres - New Delhi, India", 38, 42, 8, true, ".55 .55 .55") + text("tyrotyres.example", 453, 42, 8, false, ".55 .55 .55") + "Q\n";

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
  ];
  let pdf = "%PDF-1.4\n%TYRO\n"; const offsets = [0];
  objects.forEach((object, index) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf); pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, "ascii");
}

const publicDir = join(process.cwd(), "public", "datasheets");
mkdirSync(publicDir, { recursive: true });
for (const product of products) {
  writeFileSync(join(publicDir, `${product.slug}.pdf`), makePdf(product));
}
console.log(`Generated ${products.length} branded demo datasheets.`);
