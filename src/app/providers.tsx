"use client";

import type { ReactNode } from "react";
import { GtmTrackingProvider } from "nextjs-trackkit/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <GtmTrackingProvider gtmId={process.env.NEXT_PUBLIC_GTM_ID}>
      {children}
    </GtmTrackingProvider>
  );
}
