"use client";

import { useState } from "react";
import { trackActionCompletion, updateGtmConsent } from "nextjs-trackkit";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const readDataLayer = () => {
  if (typeof window === "undefined") return [];
  return [...((window as DataLayerWindow).dataLayer || [])].slice(-8).reverse();
};

export function TrackingConsole() {
  const [events, setEvents] = useState<unknown[]>(() => readDataLayer());

  const refreshEvents = () => {
    setEvents(readDataLayer());
  };

  const grantConsent = () => {
    updateGtmConsent({
      analytics_storage: "granted",
      ad_storage: "granted",
    });
    refreshEvents();
  };

  const completeDemoAction = () => {
    trackActionCompletion({
      content: {
        name: "Tracking Console",
        variant: "Manual helper",
      },
      response: {
        type: "Demo",
        status: "Success",
      },
    });
    refreshEvents();
  };

  return (
    <aside
      className="tracking-console surface"
      data-track-context
      data-track-view
      data-track-content-name="Tracking Console"
      data-track-content-type="Content"
      data-track-content-variant="Diagnostics"
      data-track-content-media="Text"
    >
      <BadgeLabel />
      <h3>Tracking console</h3>
      <p className="lede">
        Use these buttons to grant consent, fire a manual package event, then
        inspect the last entries in <code>window.dataLayer</code>.
      </p>
      <div className="tracking-actions">
        <button
          className="control-button"
          type="button"
          onClick={grantConsent}
          data-track-click
          data-track-event-type="control"
          data-track-cta-type="Button"
        >
          Grant consent
        </button>
        <button
          className="control-button"
          type="button"
          onClick={completeDemoAction}
          data-track-click
          data-track-event-type="control"
          data-track-cta-type="Button"
        >
          Fire manual event
        </button>
        <button
          className="control-button"
          type="button"
          onClick={refreshEvents}
          data-track-click
          data-track-event-type="control"
          data-track-cta-type="Button"
        >
          Refresh log
        </button>
      </div>
      <pre className="event-log">
        {events.length ? JSON.stringify(events, null, 2) : "No dataLayer events yet."}
      </pre>
    </aside>
  );
}

function BadgeLabel() {
  return <span className="badge badge-purple">Molecule</span>;
}
