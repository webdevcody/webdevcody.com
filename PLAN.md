# Astro Refactor Plan

## Goal

Move `webdevcody.com` from TanStack Start/Vite routing to Astro while keeping the current React component library, Tailwind styling, sponsor billing flow, Better Auth, Drizzle/Postgres, and Stripe webhook behavior intact.

Prefer an incremental migration: ship the mostly static marketing pages first, then migrate the sponsor/account surfaces and API endpoints once the Astro shell is stable.

## Current App Shape

- Framework: TanStack Start on Vite with generated file routing.
- UI: React 19 components, Tailwind, Radix primitives, Lucide icons, Framer Motion.
- Shared layout: `Header`, `Footer`, theme provider, toaster, global CSS, fonts, SEO metadata.
- Routes: homepage, about/contact/legal pages, courses/products detail and index pages, sponsor pages.
- Server features: Better Auth, Drizzle/Postgres sponsor state, Stripe checkout/customer portal/webhooks, sponsor asset endpoints.

## Target Astro Shape

- Use Astro file routing in `src/pages`.
- Use React islands for existing interactive components instead of rewriting everything at once.
- Keep reusable React UI in `src/components`.
- Keep server/domain logic in `src/server`, `src/lib`, and `src/db`.
- Use Astro endpoints for API routes under `src/pages/api`.
- Use Astro layouts for shared HTML shell, metadata, fonts, header/footer, and global CSS.

## Phase 1: Scaffold Astro

- Install Astro and integrations:
  - `astro`
  - `@astrojs/react`
  - `@astrojs/tailwind` or keep the current Tailwind pipeline if preferred
  - `@astrojs/node` if deploying with SSR/API routes
- Replace scripts:
  - `dev`: `astro dev`
  - `build`: `astro build`
  - `start`: `node ./dist/server/entry.mjs` or adapter-specific command
- Replace `vite.config.ts` TanStack/Nitro setup with `astro.config.mjs`.
- Keep `tsconfig` path aliases working for `@/*`.
- Move global shell responsibilities from `src/routes/__root.tsx` into an Astro layout.

## Phase 2: Migrate Static Routes

Create Astro pages for the lowest-risk routes first:

- `/` from `src/routes/index.tsx`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms-of-service`
- `/fulfillment-policy`
- `/bye`
- `/courses`
- `/courses/[slug]`
- `/products`
- `/products/[slug]`

Use existing React components as islands where needed:

- Static components can be rendered directly through Astro/React integration.
- Interactive components should use `client:load`, `client:idle`, or `client:visible` intentionally.
- Replace TanStack `Link` usage with normal anchors or an Astro-compatible local link wrapper.

## Phase 3: Shared Layout and UI Cleanup

- Create `src/layouts/BaseLayout.astro`.
- Port root metadata, font links, favicon, global CSS, and body classes.
- Port `Header` and `Footer`.
- Replace router-specific navigation APIs in:
  - `src/components/site/header.tsx`
  - `src/components/site/mobile-menu.tsx`
  - `src/components/site/nav-dropdown.tsx`
  - `src/components/link.tsx`
- Recheck theme support. `next-themes` may not be the best fit in Astro; either keep it inside a React island or replace it with a small inline theme script.
- Recheck toasts. Keep them only on pages that need client-side sponsor/account interactions.

## Phase 4: Migrate Sponsor Pages

Move sponsor UI routes after the marketing pages are stable:

- `/sponsors`
- `/sponsors/login`
- `/sponsors/account`

Keep sponsor panels/buttons as React islands because they depend on forms, auth state, uploads, checkout, and client-side feedback.

Server data options:

- Prefer Astro SSR pages for account/dashboard data that depends on cookies/session.
- Keep public sponsor slot data server-rendered where possible.
- Use API endpoints only where the UI needs client-side mutations or uploads.

## Phase 5: Migrate API Routes

Map TanStack Start server routes to Astro endpoints:

- `src/routes/api/auth/$.ts` -> `src/pages/api/auth/[...all].ts`
- `src/routes/api/stripe/webhook.ts` -> `src/pages/api/stripe/webhook.ts`
- `src/routes/api/sponsors/checkout.ts` -> `src/pages/api/sponsors/checkout.ts`
- `src/routes/api/sponsors/portal.ts` -> `src/pages/api/sponsors/portal.ts`
- `src/routes/api/sponsors/assets.ts` -> `src/pages/api/sponsors/assets.ts`
- `src/routes/api/sponsors/assets/$assetId.ts` -> `src/pages/api/sponsors/assets/[assetId].ts`

Important checks:

- Preserve raw request body handling for Stripe webhook signature verification.
- Preserve auth cookies/session headers for Better Auth.
- Verify multipart or binary handling for sponsor asset uploads/downloads.
- Keep Stripe event idempotency behavior unchanged.

## Phase 6: Remove TanStack Start

After routes and endpoints are migrated:

- Remove `@tanstack/react-router`, `@tanstack/react-router-devtools`, `@tanstack/react-start`, and `nitro` if unused.
- Delete `src/router.tsx` and `src/routeTree.gen.ts`.
- Delete TanStack route files after their Astro equivalents are verified.
- Remove generated-route assumptions from build scripts and configs.
- Re-run package install to update `package-lock.json`.

## Verification Checklist

- `npm run typecheck`
- `npm run build`
- Local smoke test:
  - Homepage renders.
  - Header/mobile nav works.
  - Theme toggle works.
  - Courses/products index and detail pages resolve.
  - Sponsor slots render.
  - Sponsor login/account pages preserve session behavior.
  - Stripe checkout starts.
  - Stripe webhook verifies a signed event.
  - Sponsor asset upload and asset serving work.

## Main Risks

- Auth/session behavior can drift when moving from TanStack server handlers to Astro endpoints.
- Stripe webhooks require exact raw body handling.
- Existing React components may assume TanStack Router `Link` or route context.
- Global providers from `__root.tsx` should not hydrate the whole site unnecessarily.
- Sponsor/account pages likely require SSR and should drive the adapter/deployment choice.

## Suggested Order of Work

1. Create Astro config, base layout, and homepage.
2. Migrate simple static pages and validate build output.
3. Migrate courses/products pages.
4. Replace router-specific link/navigation code.
5. Migrate sponsor public page.
6. Migrate auth, sponsor account, checkout, portal, assets, and Stripe webhook endpoints.
7. Remove TanStack Start dependencies and generated files.
8. Run the full verification checklist before deploying.
