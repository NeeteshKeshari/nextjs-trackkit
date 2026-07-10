import { Badge } from "../atoms/Badge";
import { ButtonLink } from "../atoms/ButtonLink";
import { MetricPill } from "../atoms/MetricPill";
import { CustomTrackingDemo } from "../molecules/CustomTrackingDemo";
import { FeatureCard } from "../molecules/FeatureCard";
import { TrackingConsole } from "../molecules/TrackingConsole";

const features = [
  {
    badge: "Declarative attributes",
    title: "Hero view tracking",
    description:
      "Sections use data-track-view and shared content context so viewport impressions are captured once.",
    href: "/examples/viewport-tracking",
  },
  {
    badge: "CTA click tracking",
    title: "Tracked buttons",
    description:
      "Atoms can stay simple while parent context fills out the dataLayer content payload.",
    href: "/examples/cta-tracking",
  },
  {
    badge: "Manual helpers",
    title: "Custom event helpers",
    description:
      "Client components can call package helpers directly for flows that already have local state.",
    href: "/examples/manual-helpers",
  },
];

export function ComponentShowcase() {
  return (
    <main className="page">
      <section
        className="hero"
        data-track-context
        data-track-view
        data-track-content-name="Demo Home Hero"
        data-track-content-type="Content"
        data-track-content-variant="Primary"
        data-track-content-media="Text"
        data-track-content-region="Home"
      >
        <div className="hero-copy">
          <span className="eyebrow">TrackKit demo</span>
          <h1>Atomic UI wired to modern dataLayer events.</h1>
          <p className="lede">
            This sample Next.js project installs the local package and renders a
            few atoms, molecules, and an organism on one home page for quick
            tracking checks.
          </p>
          <div className="button-row">
            <ButtonLink href="/tracking-console" label="Open tracking console">
              Open console route
            </ButtonLink>
            <ButtonLink href="https://www.google.com/" label="Open Google" variant="secondary">
              Open Google
            </ButtonLink>
            <ButtonLink
              href="/downloads/gtm-tracking-checklist.txt"
              label="Download tracking checklist"
              download
              variant="secondary"
            >
              Download checklist
            </ButtonLink>
          </div>
        </div>
        <div className="hero-card surface">
          <div className="hero-card-grid" id="atoms">
            <Badge>Atom</Badge>
            <Badge tone="green">Atom variant</Badge>
            <Badge tone="purple">Tracking ready</Badge>
            <MetricPill label="Component categories" value="3" />
            <MetricPill label="Tracked interactions" value="6+" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Custom tracking</span>
          <h2>Send your own event names and parameters.</h2>
        </div>
        <CustomTrackingDemo />
      </section>

      <section
        className="section"
        id="components"
        data-track-context
        data-track-view
        data-track-content-name="Component Grid"
        data-track-content-type="Content"
        data-track-content-variant="Molecules"
        data-track-content-media="Text"
      >
        <div className="section-header">
          <span className="eyebrow">Molecules</span>
          <h2>Reusable pieces with inherited tracking context.</h2>
        </div>
        <div className="component-grid" id="molecules">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} position={index + 1} />
          ))}
        </div>
      </section>

      <section
        className="section"
        id="tracking-console"
        data-track-context
        data-track-view
        data-track-content-name="Organism Showcase"
        data-track-content-type="Content"
        data-track-content-variant="Console"
        data-track-content-media="Text"
      >
        <div className="section-header">
          <span className="eyebrow">Organism</span>
          <h2>One section for observing package behavior.</h2>
        </div>
        <div className="panel-grid">
          <div className="feature-card surface">
            <Badge tone="green">Organism</Badge>
            <h3>What to test</h3>
            <p>
              Scroll the page to trigger viewport events, click CTAs to trigger
              click events, and use the tracking console to call exported helper
              functions from the installed package. The download CTA demonstrates
              `action.target` as Download and `content.media` as File.
            </p>
            <div className="button-row">
              <ButtonLink href="https://tagmanager.google.com/" label="Open Google Tag Manager">
                Open Tag Manager
              </ButtonLink>
              <ButtonLink
                href="/downloads/gtm-tracking-checklist.txt"
                label="Download tracking checklist"
                download
                variant="secondary"
              >
                Download file
              </ButtonLink>
            </div>
          </div>
          <TrackingConsole />
        </div>
      </section>
    </main>
  );
}
