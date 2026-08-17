import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Tyro home">
      <span className="brand-tyro" aria-hidden="true">TYRO</span>
      <span className="brand-name">TYRES<small>INDIA</small></span>
    </Link>
  );
}
