"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_NAVIGATION, PRIORITY_SIZES, SITE } from "@/config/site";
import { Brand } from "./Brand";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Private-label tyre manufacturer · Since {SITE.founded}</span>
          <span>
            {SITE.address.city}, {SITE.address.country} ·{" "}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-row">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
          >
            <span /><span /><span />
            <b className="sr-only">Menu</b>
          </button>

          <nav
            id="primary-nav"
            className={`nav${isMenuOpen ? " open" : ""}`}
            aria-label="Main navigation"
          >
            {MAIN_NAVIGATION.map((item) => (
              <Link href={item.href} onClick={closeMenu} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-dark nav-cta" href="/contact#quote">
            Get a quote <span>↗</span>
          </Link>
        </div>

        <div className="featured-strip">
          <div className="shell">
            <strong>★ Priority sizes</strong>
            {PRIORITY_SIZES.map((item) => (
              <Link href={item.href} key={item.size}>{item.size}</Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
