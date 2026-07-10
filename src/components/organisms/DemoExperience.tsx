"use client";

import { useState } from "react";
import {
  trackActionCompletion,
  trackContentControlInteraction,
  trackContentCtaClick,
  trackCustomEvent,
  trackVideoEngagement,
  trackVideoProgress,
} from "nextjs-trackkit";
import { Badge } from "../atoms/Badge";
import { ButtonLink } from "../atoms/ButtonLink";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const readDataLayer = () => {
  if (typeof window === "undefined") return [];
  return [...((window as DataLayerWindow).dataLayer || [])].slice(-10).reverse();
};

export function DemoExperience() {
  const [events, setEvents] = useState<unknown[]>(() => readDataLayer());

  const refreshEvents = () => {
    setEvents(readDataLayer());
  };

  const trackManualCta = () => {
    trackContentCtaClick({
      content: {
        name: "Manual CTA Demo",
        type: "Demo Section",
        variant: "Manual helper",
        media: "Text",
      },
      cta: {
        type: "Button",
        text: "Track manual CTA",
      },
      navigateToUrl: "/examples/manual-cta",
      customParameters: {
        demo_group: "predefined_events",
        helper_name: "trackContentCtaClick",
      },
    });
    refreshEvents();
  };

  const trackControl = () => {
    trackContentControlInteraction({
      content: {
        name: "Control Demo",
        type: "Demo Section",
        variant: "Tabs",
        media: "Text",
      },
      action: {
        type: "Button",
        text: "Overview tab",
      },
      input: {
        selection: "Overview",
      },
    });
    refreshEvents();
  };

  const trackVideoStart = () => {
    trackVideoEngagement({
      content: {
        name: "Video Demo",
        type: "Demo Section",
        variant: "Hero video",
        media: "Video",
      },
      video: {
        action: "Play",
        length: 180,
        id: "demo-video-001",
        title: "Tracking walkthrough",
        category: "Education",
        location: "Demo page",
      },
    });
    refreshEvents();
  };

  const trackVideoHalf = () => {
    trackVideoProgress({
      content: {
        name: "Video Demo",
        type: "Demo Section",
        variant: "Hero video",
        media: "Video",
      },
      video: {
        action: "Progress",
        length: 180,
        id: "demo-video-001",
        title: "Tracking walkthrough",
        category: "Education",
        location: "Demo page",
      },
      videoProgress: {
        percentage: "50%",
      },
    });
    refreshEvents();
  };

  const trackCompletion = () => {
    trackActionCompletion({
      content: {
        name: "Signup Form Demo",
        variant: "Success state",
      },
      response: {
        type: "Lead form",
        status: "Success",
      },
      customParameters: {
        form_id: "demo-signup-form",
        response_time_ms: 420,
      },
    });
    refreshEvents();
  };

  const trackCustom = () => {
    trackCustomEvent({
      event: "demo_package_health_check",
      parameters: {
        source_page: "Demo",
        package_name: "nextjs-trackkit",
        checked_at: new Date().toISOString(),
      },
    });
    refreshEvents();
  };

  return (
    <main className="page">
      <section
        className="hero hero-full"
        data-track-context
        data-track-view
        data-track-content-name="Demo Page Hero"
        data-track-content-type="Demo Section"
        data-track-content-variant="Overview"
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">Demo</span>
          <h1>Trigger every supported package event type.</h1>
          <p className="lede">
            Use this page with Google Chrome extension DataLayer Checker to
            inspect each event payload as it is pushed to `window.dataLayer`.
          </p>
          <div className="notice">
            <strong>Tip:</strong> Install the Chrome extension DataLayer Checker,
            open DevTools, and click the buttons below to inspect event details.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="component-grid">
          <article
            className="feature-card surface"
            data-track-context
            data-track-view
            data-track-content-name="Viewport Demo Card"
            data-track-content-type="Demo Section"
            data-track-content-variant="Viewport"
            data-track-content-media="Text"
          >
            <Badge>Viewport</Badge>
            <h3>content_in_viewport</h3>
            <p>
              This card fires automatically when it enters the viewport through
              declarative `data-track-view` attributes.
            </p>
          </article>

          <article
            className="feature-card surface"
            data-track-context
            data-track-content-name="Declarative CTA Demo"
            data-track-content-type="Demo Section"
            data-track-content-variant="CTA"
            data-track-content-media="Text"
          >
            <Badge tone="green">CTA</Badge>
            <h3>content_cta_click</h3>
            <p>Click this link to trigger a declarative CTA click event.</p>
            <ButtonLink href="/examples/declarative-cta" label="Open declarative CTA">
              Open declarative CTA
            </ButtonLink>
          </article>

          <article className="feature-card surface">
            <Badge tone="purple">Manual CTA</Badge>
            <h3>content_cta_click</h3>
            <p>Use the manual helper and add custom parameters to the payload.</p>
            <button className="control-button" type="button" onClick={trackManualCta}>
              Track manual CTA
            </button>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="component-grid">
          <article className="feature-card surface">
            <Badge>Control</Badge>
            <h3>content_control_interaction</h3>
            <p>Fire a tab/control interaction with `action.text` and input metadata.</p>
            <button className="control-button" type="button" onClick={trackControl}>
              Track control
            </button>
          </article>

          <article className="feature-card surface">
            <Badge tone="green">Video</Badge>
            <h3>video_engagement</h3>
            <p>Simulate a video play event with title, id, length, and location.</p>
            <button className="control-button" type="button" onClick={trackVideoStart}>
              Track video play
            </button>
          </article>

          <article className="feature-card surface">
            <Badge tone="purple">Progress</Badge>
            <h3>video_progress</h3>
            <p>Simulate a 50% video progress milestone.</p>
            <button className="control-button" type="button" onClick={trackVideoHalf}>
              Track 50% progress
            </button>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="component-grid">
          <article className="feature-card surface">
            <Badge>Completion</Badge>
            <h3>action_completion</h3>
            <p>Simulate a successful form or workflow completion.</p>
            <button className="control-button" type="button" onClick={trackCompletion}>
              Track completion
            </button>
          </article>

          <article className="feature-card surface">
            <Badge tone="green">Download</Badge>
            <h3>Download CTA</h3>
            <p>Download CTAs force `content.media` to `File` and target to `Download`.</p>
            <ButtonLink
              href="/downloads/gtm-tracking-checklist.txt"
              label="Download checklist"
              download
            >
              Download checklist
            </ButtonLink>
          </article>

          <article className="feature-card surface">
            <Badge tone="purple">Custom</Badge>
            <h3>trackCustomEvent</h3>
            <p>Send a fully custom event name and arbitrary parameters.</p>
            <button className="control-button" type="button" onClick={trackCustom}>
              Track custom event
            </button>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="tracking-console surface">
            <Badge>Event log</Badge>
            <h3>Last dataLayer entries</h3>
            <p className="lede">
              Click any demo control, then refresh this log or inspect the same
              payloads in DataLayer Checker.
            </p>
            <div className="tracking-actions">
              <button className="control-button" type="button" onClick={refreshEvents}>
                Refresh log
              </button>
              <ButtonLink href="/playground" label="Open playground" variant="secondary">
                Open playground
              </ButtonLink>
            </div>
            <pre className="event-log">
              {events.length ? JSON.stringify(events, null, 2) : "No events yet."}
            </pre>
          </article>
          <article className="feature-card surface">
            <Badge tone="green">Checklist</Badge>
            <h3>Suggested inspection flow</h3>
            <ul>
              <li>Install DataLayer Checker in Google Chrome.</li>
              <li>Open this Demo page and clear previous dataLayer entries.</li>
              <li>Click each event card button once.</li>
              <li>Confirm event names and nested parameters match your tracking variables.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
