# webdevcody.com

TanStack Start site for webdevcody.com.

## Development

```bash
npm install
npm run dev
```

## Database

Sponsor slots, Better Auth accounts, Stripe subscription state, and sponsor
images are stored in Postgres.

```bash
docker compose up -d postgres
npm run db:migrate
```

Required:

```bash
DATABASE_URL=postgres://webdevcody:webdevcody@localhost:5433/webdevcody
```

## Sponsor Billing Setup

Required for the sponsorship flow:

```bash
APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=replace-with-at-least-32-characters

GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Stripe webhook endpoint:

```text
https://your-domain.com/api/stripe/webhook
```

Subscribe the webhook to:

- `checkout.session.completed`
- `checkout.session.expired`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

Sponsors must sign in before checkout. Active subscriptions claim one of the
five fixed sponsor slots; canceled, failed, unpaid, past-due, or expired states
release the slot.
