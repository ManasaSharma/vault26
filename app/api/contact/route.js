import { buildContactEmail, validateContact } from '@/lib/contact';

export const runtime = 'nodejs';
const headers = { 'Cache-Control': 'no-store' };
const reply = (body, status = 200, extra = {}) => Response.json(body, { status, headers: { ...headers, ...extra } });

export async function POST(request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) return reply({ error: 'Please send your message from this portfolio.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply({ error: 'Invalid request format.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 12000) return reply({ error: 'Message is too large.' }, 413);
  let input;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 12000) return reply({ error: 'Message is too large.' }, 413);
    input = JSON.parse(raw);
  } catch { return reply({ error: 'Please check your form details.' }, 400); }
  const validation = validateContact(input);
  if (validation.error) return reply({ error: validation.error }, 400);
  const { data } = validation;
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId || !/^[a-zA-Z0-9]+$/.test(formId)) return reply({ error: 'Messaging is being set up. Please use Reach me directly to email me.' }, 503);
  try {
    const content = buildContactEmail(data);
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: data.email, name: data.name, company: data.company, message: content.text, subject: content.subject, _gotcha: data.website || '' }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return reply({ error: response.status === 429 ? 'Too many messages. Please try later or email me directly.' : 'Your message could not be sent. Please try again or email me directly.' }, response.status === 429 ? 429 : 502);
    return reply({ success: true });
  } catch {
    return reply({ error: 'We couldn’t confirm delivery. Your message is still here. Please check before sending it again, or email me directly.' }, 503);
  }
}
