import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { DataLayerLog } from "@/components/molecules/DataLayerLog";

const pages: Record<
  string,
  { title: string; name: string; variant: string; description: string }
> = {
  alpha: {
    title: "SPA Page Alpha",
    name: "SPA Page Alpha",
    variant: "Route A",
    description:
      "This section should fire content_in_viewport when you arrive here via client navigation from the SPA demo hub.",
  },
  beta: {
    title: "SPA Page Beta",
    name: "SPA Page Beta",
    variant: "Route B",
    description:
      "Navigate here from Alpha or the hub. Each route gets its own viewport event thanks to useTrackKitRouteRefresh().",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function SpaSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    return (
      <main className="page">
        <section className="feature-card surface">
          <h1>SPA page not found</h1>
          <Link className="button-link button-link-primary" href="/spa">
            Back to SPA demo
          </Link>
        </section>
      </main>
    );
  }

  const otherSlug = slug === "alpha" ? "beta" : "alpha";

  return (
    <main className="page">
      <section
        className="hero hero-full"
        data-track-context
        data-track-view
        data-track-content-name={page.name}
        data-track-content-type="Demo Section"
        data-track-content-variant={page.variant}
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">SPA demo</span>
          <h1>{page.title}</h1>
          <p className="lede">{page.description}</p>
          <div className="button-row">
            <ButtonLink href="/spa" label="Back to SPA demo hub" variant="secondary">
              Back to hub
            </ButtonLink>
            <ButtonLink href={`/spa/${otherSlug}`} label={`Open SPA Page ${otherSlug}`}>
              Go to Page {otherSlug === "alpha" ? "Alpha" : "Beta"}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article
            className="feature-card surface"
            data-track-context
            data-track-view
            data-track-content-name={`${page.name} Card`}
            data-track-content-type="Demo Section"
            data-track-content-variant="Viewport card"
            data-track-content-media="Text"
          >
            <Badge tone="purple">Viewport</Badge>
            <h3>Tracked section on this route</h3>
            <p>
              Scroll this card into view or land on this page from another SPA
              route. You should see <code>content_in_viewport</code> with{" "}
              <code>content.name</code> set to <code>{page.name} Card</code>.
            </p>
          </article>

          <DataLayerLog />
        </div>
      </section>
    </main>
  );
}
