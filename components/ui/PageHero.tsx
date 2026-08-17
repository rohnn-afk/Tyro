import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  className?: string;
  image?: { src: string; alt: string };
};

export function PageHero({ eyebrow, title, description, className = "", image }: PageHeroProps) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      {image && <Image src={image.src} alt={image.alt} fill priority sizes="100vw" />}
      {image && <div className="hero-shade" />}
      <div className="shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

