import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/setup", label: "Setup" },
  { href: "/demo", label: "Demo" },
  { href: "/playground", label: "Playground" },
];

export function SiteHeader() {
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
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            data-track-click
            data-track-label={item.label}
            data-track-content-name={item.label}
            data-track-cta-type="Text"
            data-track-destination="Internal"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
