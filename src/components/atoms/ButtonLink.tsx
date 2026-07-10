import Link from "next/link";

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  label: string;
  ctaType?: "Button" | "Text" | "Card";
  download?: boolean;
  target?: "_self" | "_blank";
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  label,
  ctaType = "Button",
  download = false,
  target,
  variant = "primary",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const trackTarget = target || (isExternal ? "_blank" : "_self");

  return (
    <Link
      className={`button-link button-link-${variant}`}
      href={href}
      target={trackTarget}
      rel={trackTarget === "_blank" ? "noreferrer" : undefined}
      download={download || undefined}
      data-track-click
      data-track-label={label}
      data-track-cta-type={ctaType}
      data-track-cta-target={download ? "Download" : undefined}
      data-track-destination={isExternal ? "External" : "Internal"}
      data-track-target={trackTarget}
    >
      {children}
    </Link>
  );
}
