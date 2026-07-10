# nextjs-gtm-tracking-demo

Demo Next.js app for testing the local `nextjs-gtm-tracking` package.

## Run

```sh
npm install
npm run dev
```

Set `NEXT_PUBLIC_GTM_ID` in `.env.local` if you want the provider to load a GTM
container script. Without it, the provider still initializes `window.dataLayer`
and declarative tracking for local testing.
