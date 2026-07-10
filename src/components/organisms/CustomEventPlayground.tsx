"use client";

import { useMemo, useState } from "react";
import { trackCustomEvent } from "nextjs-trackkit";
import { Badge } from "../atoms/Badge";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const defaultParameters = `{
  "flow_name": "Demo onboarding",
  "step_name": "Choose plan",
  "step_number": 2,
  "plan_type": "Starter",
  "experiment_id": "playground_custom_event"
}`;

const readDataLayer = () => {
  if (typeof window === "undefined") return [];
  return [...((window as DataLayerWindow).dataLayer || [])].slice(-8).reverse();
};

export function CustomEventPlayground() {
  const [eventName, setEventName] = useState("playground_custom_event");
  const [parametersText, setParametersText] = useState(defaultParameters);
  const [events, setEvents] = useState<unknown[]>(() => readDataLayer());
  const [error, setError] = useState<string | null>(null);

  const preview = useMemo(() => {
    try {
      return JSON.stringify(
        {
          event: eventName,
          parameters: JSON.parse(parametersText),
        },
        null,
        2,
      );
    } catch {
      return "Fix JSON parameters to preview this event.";
    }
  }, [eventName, parametersText]);

  const refreshEvents = () => {
    setEvents(readDataLayer());
  };

  const fireEvent = () => {
    try {
      const parameters = JSON.parse(parametersText) as Record<string, unknown>;
      trackCustomEvent({
        event: eventName,
        parameters,
      });
      setError(null);
      refreshEvents();
    } catch {
      setError("Parameters must be valid JSON.");
    }
  };

  return (
    <main className="page">
      <section
        className="hero hero-full"
        data-track-context
        data-track-view
        data-track-content-name="Playground Hero"
        data-track-content-type="Playground Section"
        data-track-content-variant="Custom Events"
        data-track-content-media="Text"
      >
        <div className="hero-copy">
          <span className="eyebrow">Playground</span>
          <h1>Create custom dataLayer events and parameters.</h1>
          <p className="lede">
            Use this page to test any event name and JSON parameter object before
            wiring it into your own Next.js components.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="feature-card surface">
            <Badge>Builder</Badge>
            <h3>Custom event payload</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="event-name">Event name</label>
                <input
                  id="event-name"
                  value={eventName}
                  onChange={(event) => setEventName(event.target.value)}
                  placeholder="signup_step_completed"
                />
              </div>
              <div className="field">
                <label htmlFor="event-parameters">Parameters JSON</label>
                <textarea
                  id="event-parameters"
                  value={parametersText}
                  onChange={(event) => setParametersText(event.target.value)}
                  spellCheck={false}
                />
                <span className="inline-help">
                  Enter any flat or nested JSON object. These keys become tracking
                  dataLayer variables under `parameters`.
                </span>
              </div>
              {error ? <p className="notice">{error}</p> : null}
              <div className="button-row">
                <button className="control-button" type="button" onClick={fireEvent}>
                  Fire custom event
                </button>
                <button className="control-button" type="button" onClick={refreshEvents}>
                  Refresh log
                </button>
              </div>
            </div>
          </article>

          <article className="feature-card surface">
            <Badge tone="green">Preview</Badge>
            <h3>Payload preview</h3>
            <pre className="code-panel">{preview}</pre>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="split-grid">
          <article className="tracking-console surface">
            <Badge tone="purple">dataLayer</Badge>
            <h3>Last entries</h3>
            <p className="lede">
              Fire the event, then compare this log with DataLayer Checker.
            </p>
            <pre className="event-log">
              {events.length ? JSON.stringify(events, null, 2) : "No events yet."}
            </pre>
          </article>
          <article className="feature-card surface">
            <Badge>Usage</Badge>
            <h3>Equivalent package code</h3>
            <pre className="code-panel">{`import { trackCustomEvent } from "nextjs-trackkit";

trackCustomEvent({
  event: "${eventName}",
  parameters: ${parametersText}
});`}</pre>
          </article>
        </div>
      </section>
    </main>
  );
}
