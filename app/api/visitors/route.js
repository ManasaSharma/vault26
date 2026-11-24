import { createHash } from 'node:crypto';

export const runtime = 'nodejs';
const headers = { 'Cache-Control': 'no-store' };

export async function POST(request) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return Response.json({ enabled: false }, { headers });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: 'Invalid origin' }, { status: 403, headers });
  try {
    const { visitorId } = await request.json();
    if (typeof visitorId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(visitorId)) return Response.json({ error: 'Invalid visitor ID' }, { status: 400, headers });
    // Redis set membership deduplicates concurrent requests and repeat browser visits.
    // No IP address, user agent, email, or raw browser token is stored.
    const visitorHash = createHash('sha256').update(visitorId).digest('hex');
    const key = process.env.PORTFOLIO_VISITOR_KEY || `vault26:${process.env.VERCEL_ENV || 'development'}:unique-visitors`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['EVAL', "redis.call('SADD', KEYS[1], ARGV[1]); return redis.call('SCARD', KEYS[1])", '1', key, visitorHash]),
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error('Counter unavailable');
    const result = await response.json();
    if (result.error || !Number.isSafeInteger(result.result) || result.result < 0) throw new Error('Invalid count');
    return Response.json({ enabled: true, count: Number(result.result) }, { headers });
  } catch {
    return Response.json({ enabled: false }, { status: 503, headers });
  }
}
