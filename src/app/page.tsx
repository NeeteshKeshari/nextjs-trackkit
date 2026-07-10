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
            `nextjs-trackkit` gives teams a lightweight provider, declarative
            data attributes, typed helpers, and a custom event API for generic
            analytics tracking.
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
            <h3>One provider, many tracking patterns.</h3>
            <p>
              Add data attributes for simple components, use helpers for complex
              flows, and push custom event names when your analytics setup needs them.
            </p>
            <div className="metric-grid">
              <MetricPill label="Predefined events" value="6" />
              <MetricPill label="Custom params" value="Any" />
              <MetricPill label="Setup file" value="1" />
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
            <Badge>Declarative</Badge>
            <h3>Track with data attributes</h3>
            <p>
              Add `data-track-view` or `data-track-click` to your components and
              inherit shared content context from parent sections.
            </p>
          </article>
          <article className="feature-card surface">
            <Badge tone="green">Manual</Badge>
            <h3>Use typed helper functions</h3>
            <p>
              Fire CTA clicks, controls, video events, completion events, and
              custom events from client components.
            </p>
          </article>
          <article className="feature-card surface">
            <Badge tone="purple">Custom</Badge>
            <h3>Add custom parameters</h3>
            <p>
              Extend predefined event payloads with campaign IDs, experiment
              metadata, user segments, or any tracking variable your team needs.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="feature-card surface">
            <Badge tone="green">Install</Badge>
            <h3>Start in minutes</h3>
            <pre className="code-panel">{`npm install nextjs-trackkit

// app/providers.tsx
import { GtmTrackingProvider } from "nextjs-trackkit/react";

export function Providers({ children }) {
  return (
    <GtmTrackingProvider gtmId={process.env.NEXT_PUBLIC_GTM_ID}>
      {children}
    </GtmTrackingProvider>
  );
}`}</pre>
          </article>
          <article className="feature-card surface">
            <Badge tone="purple">Next steps</Badge>
            <h3>Use this website to test the package.</h3>
            <ul>
              <li>Open the Setup page to copy install and configuration snippets.</li>
              <li>Open the Demo page to fire every predefined event type.</li>
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
