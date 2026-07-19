import { Badge } from "@/components/atoms/Badge";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { DataLayerLog } from "@/components/molecules/DataLayerLog";

export default function SpaDemoPage() {
  return (
    <main className="page">
      <section
        className="hero hero-full"
        data-track-context
        data-track-view
        data-track-content-name="SPA Demo Hub"
        data-track-content-type="Demo Section"
        data-track-content-variant="Overview"
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">SPA demo</span>
          <h1>Test viewport tracking across client-side route changes.</h1>
          <p className="lede">
            This demo uses <code>useTrackKitRouteRefresh()</code> in the app
            provider. Navigate between pages below without a full reload and
            check for <code>content_in_viewport</code> events on each page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="feature-card surface">
            <Badge>How to test</Badge>
            <h3>Three quick steps</h3>
            <ol className="check-list">
              <li>Open DataLayer Checker in Chrome.</li>
              <li>Click Page Alpha or Page Beta below.</li>
              <li>
                Confirm a new <code>content_in_viewport</code> event fires for
                that page section.
              </li>
            </ol>
            <div className="button-row">
              <ButtonLink href="/spa/alpha" label="Open SPA Page Alpha">
                Page Alpha
              </ButtonLink>
              <ButtonLink href="/spa/beta" label="Open SPA Page Beta" variant="secondary">
                Page Beta
              </ButtonLink>
            </div>
          </article>

          <DataLayerLog />
        </div>
      </section>

      <section className="section">
        <article className="feature-card surface">
          <Badge tone="green">Why this hook exists</Badge>
          <h3>Without route refresh</h3>
          <p>
            Viewport elements added after the first client navigation may not be
            observed automatically. <code>useTrackKitRouteRefresh()</code> calls{" "}
            <code>refreshDeclarativeTracking()</code> whenever the pathname
            changes, so new <code>data-track-view</code> sections are registered
            on each SPA page.
          </p>
        </article>
      </section>
    </main>
  );
}
