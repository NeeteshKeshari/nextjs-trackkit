"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/setup", label: "Setup" },
  { href: "/demo", label: "Demo" },
  { href: "/playground", label: "Playground" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        data-track-click
        data-track-content-name="TK Logo"
        data-track-label="TrackKit home"
        data-track-cta-type="Text"
        data-track-destination="Internal"
      >
        <span className="brand-mark">TK</span>
        <span>Trackkit</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={active ? "active" : undefined}
              data-track-click
              data-track-label={item.label}
              data-track-content-name={item.label}
              data-track-cta-type="Text"
              data-track-destination="Internal"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
