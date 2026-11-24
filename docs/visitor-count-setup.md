# Serverless portfolio visitor counter on Vercel

The footer connects to `/api/visitors`, a Next.js Route Handler deployed as a Vercel Function. Counts persist in Upstash Redis over HTTPS, so there is no server or local filesystem to maintain.

## Connect the existing Vercel project

1. Open the project that owns `manasab-portfolio.vercel.app` in the Vercel dashboard.
2. In Storage or Marketplace, connect an Upstash Redis database to that project. Review the plan before confirming creation.
3. In project Environment Variables, ensure the integration supplies `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. The code also supports `KV_REST_API_URL` and `KV_REST_API_TOKEN` if the integration uses those names. Keep these server-only: never use `NEXT_PUBLIC_`.
4. Deploy the current `vault26` source to this project. The live URL was serving an older portfolio when checked on November 22, 2026; connecting the database alone does not deploy the updated footer code.
5. Open the deployed page. The footer displays a real count only after a successful counter response. If the service is missing or unavailable, no invented number is shown.
6. Refresh in the same browser: the count remains unchanged. Open a new browser profile: the count increases.

## Counting behavior

- Counts distinct browser IDs since tracking was enabled, not verified people or historical visits.
- A random UUID is stored in localStorage as `vault-visitor-id`. Only its SHA-256 hash reaches Redis. No email, IP address, or user agent is stored by this counter.
- Atomic Redis set insertion and cardinality prevent concurrent/repeat requests for one browser ID from increasing the count twice.
- Clearing browser storage, using another device, or automated clients can affect the count. This is a lightweight portfolio metric, not fraud-resistant analytics.
- Production, Preview, and Development use separate Redis keys by default: `vault26:production:unique-visitors`, `vault26:preview:unique-visitors`, and `vault26:development:unique-visitors`.
- Optional `PORTFOLIO_VISITOR_KEY` overrides the key. Do not reuse a production override in preview/local environments.
- Credentials remain in Vercel environment settings. Never commit them. Use a separate Redis database for local development if practical.

References:
- https://vercel.com/docs/redis
- https://upstash.com/docs/redis/quickstarts/vercel-functions-app-router
- https://upstash.com/docs/redis/features/restapi
