"use client";

import { useState } from "react";
import { Badge } from "../atoms/Badge";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

const routeRefreshSample = `// components/TrackKitRouteRefresh.tsx
"use client";

import { useTrackKitRouteRefresh } from "nextjs-trackkit/react";

export function TrackKitRouteRefresh() {
  useTrackKitRouteRefresh();
  return null;
}

// app/providers.tsx
"use client";

import { TrackKitProvider } from "nextjs-trackkit/react";
import { TrackKitRouteRefresh } from "@/components/TrackKitRouteRefresh";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TrackKitProvider gtmId={process.env.NEXT_PUBLIC_GTM_ID}>
      <TrackKitRouteRefresh />
      {children}
    </TrackKitProvider>
  );
}`;

const readDataLayer = () => {
  if (typeof window === "undefined") return [];
  return [...((window as DataLayerWindow).dataLayer || [])].slice(-6).reverse();
};

export function DataLayerLog() {
  const [events, setEvents] = useState<unknown[]>(() => readDataLayer());

  return (
    <article className="tracking-console surface">
      <Badge tone="purple">SPA route refresh</Badge>
      <pre className="code-panel">{routeRefreshSample}</pre>
      <div className="tracking-actions">
        <h3>Live dataLayer</h3>
        <button
          className="control-button"
          type="button"
          onClick={() => setEvents(readDataLayer())}
        >
          Refresh log
        </button>
      </div>
      <pre className="event-log">
        {events.length ? JSON.stringify(events, null, 2) : "No events yet."}
      </pre>
    </article>
  );
}
