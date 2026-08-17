"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem("tyro-intro");
    const timer = window.setTimeout(() => { setVisible(false); if (!skip) sessionStorage.setItem("tyro-intro", "seen"); }, skip ? 0 : 1750);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="intro" aria-hidden="true"><div className="intro-track"/><div className="intro-wheel"><span/></div><div className="intro-copy"><b>TYRO</b><span>Engineered to go further</span></div></div>;
}
