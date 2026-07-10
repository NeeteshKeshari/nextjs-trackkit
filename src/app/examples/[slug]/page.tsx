import Link from "next/link";

const titles: Record<string, string> = {
  "viewport-tracking": "Viewport Tracking",
  "cta-tracking": "CTA Tracking",
  "manual-helpers": "Manual Helpers",
  "declarative-cta": "Declarative CTA",
  "manual-cta": "Manual CTA",
  "custom-parameters": "Custom Parameters",
};

export function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }));
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = titles[slug] || "Tracking Example";

  return (
    <main className="page">
      <section className="feature-card surface">
        <span className="eyebrow">Internal route</span>
        <h1>{title}</h1>
        <p className="lede">
          This route exists so homepage CTAs navigate to real internal pages
          while tracking click payloads.
        </p>
        <div className="button-row">
          <Link className="button-link button-link-primary" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
