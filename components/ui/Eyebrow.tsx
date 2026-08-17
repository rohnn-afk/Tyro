import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  accent?: boolean;
};

export function Eyebrow({ children, accent = false }: EyebrowProps) {
  return <p className={`eyebrow${accent ? " red" : ""}`}><span />{children}</p>;
}

