'use client';

import { useState } from 'react';
import { buildContactEmail } from '@/lib/contact';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiMail } from 'react-icons/fi';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import './GetInTouchSection.scss';

const zone = 'America/Los_Angeles';
function todayInZone() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const get = type => parts.find(part => part.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
function dateLabel(value) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T12:00:00Z`));
}

export default function GetInTouchSection({ profile }) {
  const [today] = useState(todayInZone);
  const [month, setMonth] = useState(() => `${today.slice(0, 7)}-01`);
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState({ hour: '', minute: '00', period: 'PM' });
  const selectedTime = /^(0?[1-9]|1[0-2])$/.test(time.hour) && /^[0-5]\d$/.test(time.minute) ? `${time.hour}:${time.minute} ${time.period}` : '';
  const [identity, setIdentity] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const email = profile?.email;
  const monthDate = new Date(`${month}T12:00:00Z`);
  const year = monthDate.getUTCFullYear();
  const monthIndex = monthDate.getUTCMonth();
  const firstDay = monthDate.getUTCDay();
  const days = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  const monthLabel = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(monthDate);
  const canConnect = Boolean(email) && message.trim().length >= 5;

  function sendMessage(event) {
    event.preventDefault();
    if (!canConnect) return;
    const content = buildContactEmail({ name: senderName.trim(), company: identity.trim(), message: message.trim(), date: selectedDate, time: selectedTime });
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(content.subject)}&body=${encodeURIComponent(content.text)}`;
  }

  function changeMonth(offset) {
    const next = new Date(Date.UTC(year, monthIndex + offset, 1));
    setMonth(`${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-01`);
  }

  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Card as="form" className="contact-panel" onSubmit={sendMessage}>
        <div className="sectionHeading"><div><p className="sectionHeadingEyebrow">Connect</p><h2 id="contact-title" className="ui-section-title">Have something in mind? Let’s talk.</h2></div><p className="sectionHeadingDescription">Send a message, or add an optional date and time for a call.</p></div>
        <div className="contact-booking-layout">
          <div className="contact-calendar">
            <p className="ui-eyebrow ui-muted">Select a date · optional</p>
            <div className="contact-month-nav"><h3 aria-live="polite">{monthLabel}</h3><div><button type="button" aria-label="Previous month" disabled={month.slice(0, 7) <= today.slice(0, 7)} onClick={() => changeMonth(-1)}><FiChevronLeft /></button><button type="button" aria-label="Next month" onClick={() => changeMonth(1)}><FiChevronRight /></button></div></div>
            <div className="contact-dates" role="group" aria-label={`Choose a date in ${monthLabel}`}>
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(day => <span className="contact-weekday" key={day} aria-hidden="true">{day}</span>)}
              {Array.from({ length: firstDay }, (_, i) => <span key={`empty-${i}`} />)}
              {Array.from({ length: days }, (_, i) => {
                const value = `${month.slice(0, 7)}-${String(i + 1).padStart(2, '0')}`;
                return <button type="button" key={value} disabled={value < today} aria-label={dateLabel(value)} aria-pressed={selectedDate === value} aria-current={value === today ? 'date' : undefined} onClick={() => { setTime({ hour: '', minute: '00', period: 'PM' }); setSelectedDate(value === selectedDate ? '' : value); }}>{i + 1}</button>;
              })}
            </div>
            <div className="contact-time-picker">
            <fieldset className="contact-clock" disabled={!selectedDate}>
              <legend>Preferred time <span>(optional)</span></legend>
              <div className="contact-clock-line">
                <input className="contact-clock-input" aria-label="Hour, 1 to 12" type="text" inputMode="numeric" placeholder="hh" maxLength={2} value={time.hour} onChange={event => { const value = event.target.value; if (/^\d{0,2}$/.test(value) && Number(value) <= 12) setTime(current => ({ ...current, hour: value })); }} onBlur={() => setTime(current => ({ ...current, hour: current.hour && Number(current.hour) > 0 ? current.hour.padStart(2, '0') : '' }))} />
                <span className="contact-clock-colon" aria-hidden="true">:</span>
                <input className="contact-clock-input" aria-label="Minutes, 00 to 59" type="text" inputMode="numeric" placeholder="mm" maxLength={2} value={time.minute} onChange={event => { const value = event.target.value; if (/^\d{0,2}$/.test(value) && Number(value) <= 59) setTime(current => ({ ...current, minute: value })); }} onBlur={() => setTime(current => ({ ...current, minute: (current.minute || '00').padStart(2, '0') }))} />
                <div className="contact-clock-period" role="group" aria-label="AM or PM">{['AM', 'PM'].map(period => <button type="button" key={period} aria-pressed={time.period === period} onClick={() => setTime(current => ({ ...current, period }))}>{period}</button>)}</div>
                {time.hour && <button type="button" className="contact-clock-clear" aria-label="Clear preferred time" onClick={() => setTime({ hour: '', minute: '00', period: 'PM' })}>×</button>}
              </div>
            </fieldset>
            <p className="contact-timezone">Pacific time · America/Los_Angeles</p>
            </div>
          </div>
          <div className="contact-time">
            <p className="ui-eyebrow ui-muted">Your details</p>
            <div className="contact-fields">
              <div><label htmlFor="contact-sender-name">Your name <span className="contact-optional">(optional)</span></label><input id="contact-sender-name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} value={senderName} onChange={event => setSenderName(event.target.value)} /></div>
              <div><label htmlFor="contact-identity">Company <span className="contact-optional">(optional)</span></label><input id="contact-identity" type="text" autoComplete="organization" placeholder="Company name" maxLength={120} value={identity} onChange={event => setIdentity(event.target.value)} /></div>
            </div>
            <div className="contact-message"><label htmlFor="contact-message">What would you like to talk about?</label><textarea id="contact-message" rows={4} required minLength={5} maxLength={2000} placeholder="Hi Manasa, we’re working on…" value={message} onChange={event => setMessage(event.target.value)} /></div>
            {email && <div className="contact-direct"><p className="ui-eyebrow ui-muted">Reach me directly</p><a className="contact-email" href={`mailto:${email}`}><FiMail aria-hidden="true" /><span>{email}</span><FiArrowUpRight aria-hidden="true" /></a></div>}
            <button className="ui-button ui-button--primary contact-request" type="submit" disabled={!canConnect}><FiMail aria-hidden="true" />Let’s connect</button>
            <p className="contact-description">Opens an email draft for you to review and send. Call times aren’t confirmed bookings.</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
