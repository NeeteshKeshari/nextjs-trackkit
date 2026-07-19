import { Badge } from "@/components/atoms/Badge";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { MetricPill } from "@/components/atoms/MetricPill";

export default function Home() {
  return (
    <main className="page">
      <section
        className="hero"
        data-track-context
        data-track-view
        data-track-content-name="Home Hero"
        data-track-content-type="Landing Section"
        data-track-content-variant="Primary"
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">Modern event tracking for web applications</span>
          <h1>Ship consistent dataLayer events without rebuilding every component.</h1>
          <p className="lede">
            nextjs-trackkit gives teams a lightweight provider, React
            components and hooks, data attributes, typed helpers, and custom
            event support for generic analytics tracking.
          </p>
          <div className="button-row">
            <ButtonLink href="/setup" label="Open setup guide">
              Read setup guide
            </ButtonLink>
            <ButtonLink href="/demo" label="Explore event demos" variant="secondary">
              Explore demos
            </ButtonLink>
          </div>
        </div>
        <div className="hero-card surface-dark">
          <div className="hero-card-grid">
            <Badge>Package highlights</Badge>
            <h3>One provider, two easy tracking methods.</h3>
            <p>
              Use React components and hooks for reusable CTAs, or add data
              attributes directly in markup. Both methods push the same
              consistent dataLayer event schema.
            </p>
            <div className="metric-grid">
              <MetricPill label="Latest version" value="1.2.0" />
              <MetricPill label="Predefined events" value="6" />
              <MetricPill label="Tracking methods" value="2" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">What you get</span>
          <h2>Built for generic event collection.</h2>
        </div>
        <div className="component-grid">
          <article className="feature-card surface">
            <Badge>React API</Badge>
            <h3>Track with components and hooks</h3>
            <p>
              Define tracking context once at a section level, then let reusable
              links, buttons, cards, and design-system components inherit those
              values automatically.
            </p>
          </article>
          <article className="feature-card surface">
            <Badge tone="green">Data Attributes</Badge>
            <h3>Track directly in markup</h3>
            <p>
              Add view and click attributes to existing components when you want
              tracking without importing a React tracking component into every
              file.
            </p>
          </article>
          <article className="feature-card surface">
            <Badge tone="purple">Advanced</Badge>
            <h3>Use helpers and custom events</h3>
            <p>
              Fire video events, completion events, custom event names, and
              custom parameters when your analytics model needs more control.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="feature-card surface">
            <Badge tone="green">Recommended</Badge>
            <h3>Choose the method that fits each component.</h3>
            <ul>
              <li>Use the React API for reusable sections, CTAs, and design systems.</li>
              <li>Use data attributes for existing markup and simple page content.</li>
              <li>Use manual helpers for videos, completions, and custom event flows.</li>
              <li>Use custom parameters for campaigns, experiments, and business metadata.</li>
            </ul>
          </article>
          <article className="feature-card surface">
            <Badge tone="purple">Next steps</Badge>
            <h3>Use this website to learn and test TrackKit.</h3>
            <ul>
              <li>Open the Setup page to compare the React API and data-attribute API.</li>
              <li>Open the Demo page to fire predefined and custom event examples.</li>
              <li>Open the SPA page to test viewport tracking across route changes.</li>
              <li>Install DataLayer Checker in Chrome to inspect payloads.</li>
              <li>Use the Playground page to create custom events and parameters.</li>
            </ul>
            <div className="button-row">
              <ButtonLink href="/setup" label="Go to setup page">
                Go to Setup
              </ButtonLink>
              <ButtonLink href="/demo" label="Go to demo page">
                Go to Demo
              </ButtonLink>
              <ButtonLink href="/spa" label="Go to SPA demo page" variant="secondary">
                Go to SPA
              </ButtonLink>
              <ButtonLink href="/playground" label="Go to playground page" variant="secondary">
                Go to Playground
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
