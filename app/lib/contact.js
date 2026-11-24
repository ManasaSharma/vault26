export const CONTACT_TIMEZONE = 'America/Los_Angeles';
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
export function validateContact(input, now = new Date()) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { error: 'Please complete the contact form.' };
  const limits = { email: 254, name: 100, company: 120, message: 2000, date: 10, time: 8, website: 200 };
  const data = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (input[key] !== undefined && typeof input[key] !== 'string') return { error: 'Please check your form details.' };
    data[key] = (input[key] ?? '').trim();
    if (data[key].length > limit) return { error: `${key === 'message' ? 'Message' : 'One of the fields'} is too long.` };
  }
  if (data.website) return { error: 'Unable to send this message.' };
  if (!emailPattern.test(data.email)) return { error: 'Please enter a valid email address.' };
  if (/[\r\n\x00]/.test(data.name + data.company)) return { error: 'Please enter your name and company on one line.' };
  if (data.message.length < 5) return { error: 'Please add a short message (at least 5 characters).' };
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: CONTACT_TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
  if (data.date) {
    const parsed = new Date(`${data.date}T12:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || !Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== data.date || data.date < today) return { error: 'Please choose today or a future date.' };
  }
  if (data.time) {
    if (!data.date || !/^(0?[1-9]|1[0-2]):[0-5]\d (AM|PM)$/.test(data.time)) return { error: 'Please check your preferred date and time.' };
    const [clock, period] = data.time.split(' ');
    const [hour, minute] = clock.split(':').map(Number);
    const preferredMinutes = (hour % 12 + (period === 'PM' ? 12 : 0)) * 60 + minute;
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: CONTACT_TIMEZONE, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(now);
    const currentMinutes = Number(parts.find(p => p.type === 'hour').value) * 60 + Number(parts.find(p => p.type === 'minute').value);
    if (data.date === today && preferredMinutes <= currentMinutes) return { error: 'That time has already passed. Choose a later time or leave the time blank.' };
  }
  return { data };
}

export function buildContactEmail(data) {
  const callDetails = data.date ? ['Preferred conversation', `Date: ${new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${data.date}T12:00:00Z`))}`, data.time ? `Time: ${data.time}` : '', `Timezone: Pacific time (${CONTACT_TIMEZONE})`, 'Requested only — not a confirmed booking.'].filter(Boolean).join('\n') : '';
  return {
    subject: `Portfolio ${data.date ? 'call request' : 'message'}${data.name || data.company ? ` — ${data.name || data.company}` : ''}`,
    text: [
      /^(hi|hello|hey|dear)\b/i.test(data.message) ? '' : 'Hi Manasa,',
      data.message,
      callDetails,
      ['Thanks and regards,', data.name, data.company, data.email ? `Reply email: ${data.email}` : ''].filter(Boolean).join('\n'),
    ].filter(Boolean).join('\n\n'),
  };
}
