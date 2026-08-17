import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-head${light ? " light" : ""}`}>
      <div><Eyebrow accent={light}>{eyebrow}</Eyebrow><h2>{title}</h2></div>
      {description && <p>{description}</p>}
    </div>
  );
}

