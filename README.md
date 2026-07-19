# TrackKit Demo Website

This is the demo website for `nextjs-trackkit`, a lightweight event tracking
package for Next.js apps. The site explains the package, shows the setup flow,
and lets you trigger real `window.dataLayer` events in the browser.

## About `nextjs-trackkit`

`nextjs-trackkit` helps teams send consistent analytics events from Next.js UI
components without rebuilding every component from scratch.

It supports:

- React components and hooks for low-boilerplate tracking
- Data attributes for markup-first tracking
- Manual helper functions for advanced client-side flows
- Custom event names and custom parameters
- GTM-friendly `window.dataLayer` payloads
- Download CTA handling with clear `File` media and `Download` target values

## Demo Pages

- **Home** introduces TrackKit, the package version, and the two main tracking
  methods.
- **Setup** explains installation, provider setup, React API usage,
  data-attribute usage, manual helpers, custom parameters, custom events, and
  validation.
- **Demo** lets you trigger predefined events and inspect recent dataLayer
  payloads.
- **SPA** shows `useTrackKitRouteRefresh()` across client-side route changes.
- **Playground** lets you create any custom event name and JSON parameter object.

## Tracking Methods Shown

### 1. React Components And Hooks

Use this method for reusable sections, CTAs, cards, and design-system
components.

The package provides:

- `TrackKitProvider`
- `TrackKitSection`
- `TrackKitLink`
- `TrackKitButton`
- `useTrackKitCta`
- `useTrackKitContext`

This approach lets child CTAs inherit shared tracking context from a parent
section.

### 2. Data Attributes

Use this method when you want tracking directly in markup.

Common attributes include:

- `data-track-view`
- `data-track-click`
- `data-track-context`
- `data-track-content-name`
- `data-track-content-type`
- `data-track-content-variant`
- `data-track-content-media`
- `data-track-cta-type`
- `data-track-cta-target="Download"`

### Advanced Helpers

The demo also uses helper functions from `nextjs-trackkit`:

- `trackContentCtaClick`
- `trackContentControlInteraction`
- `trackVideoEngagement`
- `trackVideoProgress`
- `trackActionCompletion`
- `trackCustomEvent`

## Getting Started

Install dependencies:

```sh
npm install
```

Run the local dev server:

```sh
npm run dev
```

Open:

```txt
http://127.0.0.1:3000
```

If you need network access from another device, use:

```sh
npm run dev:network
```

## GTM Setup

Create `.env.local` and add your GTM container id:

```sh
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

If `NEXT_PUBLIC_GTM_ID` is not set, the provider still initializes
`window.dataLayer`, so you can test events locally without loading a GTM script.

Recommended browser testing:

- Install the Chrome extension **DataLayer Checker**.
- Open the Demo page.
- Click each event button.
- Compare the in-page event log with DataLayer Checker.

## Available Scripts

```sh
npm run dev
npm run dev:network
npm run lint
npm run build
npm run start
```

## Deployment

The project is ready for Vercel with `vercel.json`.

For GitHub Pages, build with:

```sh
GITHUB_PAGES=true npm run build
```

When `GITHUB_PAGES=true`, `next.config.ts` enables:

- static export
- `/trackkit` base path
- `/trackkit` asset prefix
- trailing slashes
- unoptimized images

## Package Dependency

This demo currently uses:

```json
"nextjs-trackkit": "^1.2.0"
```

Update it after publishing newer package versions:

```sh
npm update nextjs-trackkit
```

## Author

Built by Neetesh Keshari for Next.js developers.
