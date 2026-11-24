import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { randomUUID } from 'node:crypto';

const source = fs.readFileSync('app/lib/contact.js', 'utf8');
const moduleUrl = 'data:text/javascript;base64,' + Buffer.from(source).toString('base64');
const { validateContact, buildContactEmail } = await import(moduleUrl);
const route = fs.readFileSync('app/api/contact/route.js', 'utf8').replace("'@/lib/contact'", JSON.stringify(moduleUrl));
const { POST } = await import('data:text/javascript;base64,' + Buffer.from(route).toString('base64'));
const valid = { email: 'sender@gmail.com', name: 'Gokul', company: 'Example', message: 'Hi Manasa, I would like to discuss a frontend role.', date: '2099-11-23', time: '01:30 PM', website: '' };
const request = (body, extra = {}) => new Request('https://portfolio.example/api/contact', { method: 'POST', headers: { Origin: 'https://portfolio.example', 'Content-Type': 'application/json', 'Idempotency-Key': randomUUID(), ...extra }, body: JSON.stringify(body) });

test('message-only and optional call data validate; email and message are required', () => {
  assert.ok(validateContact(valid).data);
  assert.ok(validateContact({ ...valid, date: '', time: '', name: '', company: '' }).data);
  for (const data of [{ ...valid, email: 'invalid' }, { ...valid, message: ' ' }, { ...valid, message: 'x'.repeat(2001) }, { ...valid, website: 'spam' }, { ...valid, date: '', time: '01:30 PM' }, { ...valid, date: '2099-02-31' }, { ...valid, time: '13:30 PM' }, { ...valid, date: '2000-01-01' }, { ...valid, name: 'Name\nBcc: other@example.com' }]) assert.ok(validateContact(data).error);
});
test('same-day past time is rejected, future time accepted in Pacific time', () => {
  const now = new Date('2026-11-23T20:00:00Z');
  assert.ok(validateContact({ ...valid, date: '2026-11-23', time: '11:00 AM' }, now).error);
  assert.ok(validateContact({ ...valid, date: '2026-11-23', time: '01:00 PM' }, now).data);
});
test('email preserves user message and includes reply identity plus optional call details', () => {
  const email = buildContactEmail(valid);
  assert.equal(email.text.match(/Hi Manasa/g).length, 1);
  assert.ok(email.text.includes('Thanks and regards,\nGokul\nExample\nReply email: sender@gmail.com'));
  assert.ok(email.text.includes('Time: 01:30 PM'));
  assert.equal(buildContactEmail({ ...valid, date: '', time: '' }).text.includes('Preferred conversation'), false);
});
test('Formspree relay validates, uses fixed form and preserves reply address and call details', async () => {
  const saved = process.env.FORMSPREE_FORM_ID;
  const originalFetch = globalThis.fetch;
  delete process.env.FORMSPREE_FORM_ID;
  try {
    globalThis.fetch = async () => { throw new Error('Unexpected request'); };
    assert.equal((await POST(request(valid, { Origin: 'https://evil.example' }))).status, 403);
    assert.equal((await POST(request({ ...valid, email: 'bad' }))).status, 400);
    assert.equal((await POST(request(valid))).status, 503);
    process.env.FORMSPREE_FORM_ID = 'testform';
    globalThis.fetch = async (url, options) => {
      assert.equal(url, 'https://formspree.io/f/testform');
      const payload = JSON.parse(options.body);
      assert.equal(payload.email, 'sender@gmail.com');
      assert.ok(payload.message.includes('01:30 PM'));
      assert.equal(payload.to, undefined);
      return Response.json({ ok: true });
    };
    assert.equal((await POST(request({ ...valid, to: 'attacker@example.com' }))).status, 200);
    globalThis.fetch = async () => Response.json({}, { status: 429 });
    assert.equal((await POST(request(valid))).status, 429);
    globalThis.fetch = async () => Response.json({}, { status: 500 });
    assert.equal((await POST(request(valid))).status, 502);
    globalThis.fetch = async () => { throw new Error('offline'); };
    assert.equal((await POST(request(valid))).status, 503);
  } finally {
    globalThis.fetch = originalFetch;
    if (saved === undefined) delete process.env.FORMSPREE_FORM_ID; else process.env.FORMSPREE_FORM_ID = saved;
  }
});
