"use client";

import { useState } from "react";
import { trackContentCtaClick, trackCustomEvent } from "nextjs-trackkit";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const readDataLayer = () => {
  if (typeof window === "undefined") return [];
  return [...((window as DataLayerWindow).dataLayer || [])].slice(-6).reverse();
};

export function CustomTrackingDemo() {
  const [events, setEvents] = useState<unknown[]>(() => readDataLayer());

  const refreshEvents = () => {
    setEvents(readDataLayer());
  };

  const fireCustomEvent = () => {
    trackCustomEvent({
      event: "demo_custom_signup_step",
      parameters: {
        flow_name: "Demo onboarding",
        step_name: "Choose plan",
        step_number: 2,
        plan_type: "Starter",
        experiment_id: "homepage_custom_tracking",
      },
    });
    refreshEvents();
  };

  const firePredefinedEventWithCustomParameters = () => {
    trackContentCtaClick({
      content: {
        name: "Custom Tracking Demo",
        type: "Demo Section",
        variant: "Custom parameters",
        media: "Text",
      },
      cta: {
        type: "Button",
        text: "Track CTA with custom params",
      },
      navigateToUrl: "/examples/custom-parameters",
      customParameters: {
        campaign_id: "summer_launch",
        audience_segment: "developers",
        component_owner: "growth",
      },
    });
    refreshEvents();
  };

  return (
    <section
      className="tracking-console surface"
      data-track-context
      data-track-view
      data-track-content-name="Custom Tracking Demo"
      data-track-content-type="Demo Section"
      data-track-content-variant="Custom Events"
      data-track-content-media="Text"
    >
      <span className="badge badge-blue">Custom</span>
      <h3>Custom events and parameters</h3>
      <p className="lede">
        Fire a custom event name with any parameters, or add custom parameters
        to a predefined tracking event.
      </p>
      <div className="tracking-actions">
        <button className="control-button" type="button" onClick={fireCustomEvent}>
          Fire custom event
        </button>
        <button
          className="control-button"
          type="button"
          onClick={firePredefinedEventWithCustomParameters}
        >
          Track CTA with custom params
        </button>
        <button className="control-button" type="button" onClick={refreshEvents}>
          Refresh custom log
        </button>
      </div>
      <pre className="event-log">
        {events.length ? JSON.stringify(events, null, 2) : "No custom events yet."}
      </pre>
    </section>
  );
}
