import Link from "next/link";
import { TrackingConsole } from "@/components/molecules/TrackingConsole";

export default function TrackingConsolePage() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Internal route</span>
          <h1>Tracking Console</h1>
          <p className="lede">
            This page reuses the console from the homepage so internal navigation
            can be tested without hash links.
          </p>
        </div>
        <TrackingConsole />
        <div className="button-row">
          <Link className="button-link button-link-secondary" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
