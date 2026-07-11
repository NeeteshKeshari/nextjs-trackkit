import { Badge } from "@/components/atoms/Badge";
import { ButtonLink } from "@/components/atoms/ButtonLink";

export default function SetupPage() {
  return (
    <main className="page">
      <section
        className="hero hero-full"
        data-track-context
        data-track-view
        data-track-content-name="Setup Page Hero"
        data-track-content-type="Setup Section"
        data-track-content-variant="Overview"
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">Setup</span>
          <h1>Install TrackKit and wire event tracking into your app.</h1>
          <p className="lede">
            Follow these steps to add the provider, choose between the React API
            and data-attribute API, call advanced helpers, and send custom
            events or custom parameters.
          </p>
          <div className="button-row">
            <ButtonLink href="/demo" label="Open event demo">
              Open Demo
            </ButtonLink>
            <ButtonLink href="/playground" label="Open custom event playground" variant="secondary">
              Open Playground
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="setup-steps">
          <article className="feature-card surface setup-step">
            <Badge>1. Install</Badge>
            <h3>Add the package</h3>
            <p>
              Install the package in your Next.js app and set your GTM container
              id in an environment variable.
            </p>
            <pre className="code-panel">{`npm install nextjs-trackkit

# .env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="green">2. Provider</Badge>
            <h3>Wrap your app</h3>
            <p>
              The provider initializes `window.dataLayer`, applies default
              consent, loads GTM when an id is present, and activates
              data-attribute click and viewport tracking. It also provides the
              context used by TrackKit React components and hooks.
            </p>
            <pre className="code-panel">{`// app/providers.tsx
"use client";

import { TrackKitProvider } from "nextjs-trackkit/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TrackKitProvider gtmId={process.env.NEXT_PUBLIC_GTM_ID}>
      {children}
    </TrackKitProvider>
  );
}`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="purple">3. Layout</Badge>
            <h3>Use the provider in your root layout</h3>
            <pre className="code-panel">{`// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge>4. React API</Badge>
            <h3>Track reusable components with less markup</h3>
            <p>
              Use this method for design systems, reusable CTAs, cards, and
              sections. Define content context once with `TrackKitSection`, then
              use `TrackKitLink`, `TrackKitButton`, or `useTrackKitCta` inside
              your components.
            </p>
            <pre className="code-panel">{`"use client";

import {
  TrackKitButton,
  TrackKitLink,
  TrackKitSection,
} from "nextjs-trackkit/react";

export function PricingHero() {
  return (
    <TrackKitSection
      view
      content={{
        name: "Pricing Hero",
        type: "Marketing Section",
        variant: "Primary",
        media: "Text",
      }}
    >
      <TrackKitLink href="/signup" cta={{ type: "Button" }}>
        Start free trial
      </TrackKitLink>

      <TrackKitButton cta={{ type: "Button" }} eventType="control">
        Open pricing preview
      </TrackKitButton>
    </TrackKitSection>
  );
}`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="green">5. Data Attributes</Badge>
            <h3>Track views and clicks directly in markup</h3>
            <p>
              Put shared context on a section and add click/view attributes to
              elements inside it. Use this method when you do not want to import
              TrackKit React components in each UI file.
            </p>
            <pre className="code-panel">{`<section
  data-track-context
  data-track-view
  data-track-content-name="Pricing Hero"
  data-track-content-type="Marketing Section"
  data-track-content-variant="Primary"
  data-track-content-media="Text"
>
  <a
    href="/signup"
    data-track-click
    data-track-cta-type="Button"
    data-track-destination="Internal"
  >
    Start free trial
  </a>
</section>`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="purple">6. Manual Helpers</Badge>
            <h3>Fire advanced predefined events from client components</h3>
            <p>
              Use manual helpers when the event depends on custom component
              logic, video state, form completion state, or another workflow.
            </p>
            <pre className="code-panel">{`"use client";

import { trackContentCtaClick } from "nextjs-trackkit";

trackContentCtaClick({
  content: {
    name: "Pricing Hero",
    type: "Marketing Section",
    variant: "Primary",
    media: "Text",
  },
  cta: {
    type: "Button",
    text: "Start free trial",
  },
  navigateToUrl: "/signup",
});`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge>7. Custom Parameters</Badge>
            <h3>Add extra data to predefined events</h3>
            <p>
              Use `customParameters` when your GTM variables need business or
              experiment metadata beyond the standard event shape.
            </p>
            <pre className="code-panel">{`trackContentCtaClick({
  content: {
    name: "Pricing Hero",
    type: "Marketing Section",
    media: "Text",
  },
  cta: {
    type: "Button",
    text: "Start free trial",
  },
  navigateToUrl: "/signup",
  customParameters: {
    campaign_id: "summer_launch",
    audience_segment: "developers",
    experiment_id: "pricing_cta_v2",
  },
});`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="green">8. Custom Events</Badge>
            <h3>Create any event name and parameter object</h3>
            <p>
              Use `trackCustomEvent` when your analytics design needs an event
              outside the predefined helpers.
            </p>
            <pre className="code-panel">{`import { trackCustomEvent } from "nextjs-trackkit";

trackCustomEvent({
  event: "signup_step_completed",
  parameters: {
    flow_name: "Onboarding",
    step_name: "Choose plan",
    step_number: 2,
    plan_type: "Starter",
  },
});`}</pre>
          </article>

          <article className="feature-card surface setup-step">
            <Badge tone="purple">9. Validate</Badge>
            <h3>Inspect events in the browser</h3>
            <ul>
              <li>Install the DataLayer Checker extension in Google Chrome.</li>
              <li>Test one React API component and one data-attribute example.</li>
              <li>Open the Demo page and trigger each event type.</li>
              <li>Use Playground to test custom event names and JSON parameters.</li>
              <li>Create matching GTM Custom Event triggers and Data Layer Variables.</li>
            </ul>
            <div className="button-row">
              <ButtonLink href="/demo" label="Go to setup demo">
                Go to Demo
              </ButtonLink>
              <ButtonLink href="/playground" label="Go to setup playground" variant="secondary">
                Go to Playground
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
