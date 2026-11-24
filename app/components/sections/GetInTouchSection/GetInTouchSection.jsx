'use client';

import { copy } from '@/lib/content';

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
        <div className="sectionHeading"><div><p className="sectionHeadingEyebrow">{copy.contact.label}</p><h2 id="contact-title" className="ui-section-title">{copy.contact.title}</h2></div><p className="sectionHeadingDescription">{copy.contact.description}</p></div>
        <div className="contact-booking-layout">
          <div className="contact-calendar">
            <p className="ui-eyebrow ui-muted">{copy.contact.dateLabel}</p>
            <div className="contact-month-nav"><h3 aria-live="polite">{monthLabel}</h3><div><button type="button" aria-label={copy.contact.previousMonth} disabled={month.slice(0, 7) <= today.slice(0, 7)} onClick={() => changeMonth(-1)}><FiChevronLeft /></button><button type="button" aria-label={copy.contact.nextMonth} onClick={() => changeMonth(1)}><FiChevronRight /></button></div></div>
            <div className="contact-dates" role="group" aria-label={`${copy.contact.chooseDate} ${monthLabel}`}>
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(day => <span className="contact-weekday" key={day} aria-hidden="true">{day}</span>)}
              {Array.from({ length: firstDay }, (_, i) => <span key={`empty-${i}`} />)}
              {Array.from({ length: days }, (_, i) => {
                const value = `${month.slice(0, 7)}-${String(i + 1).padStart(2, '0')}`;
                return <button type="button" key={value} disabled={value < today} aria-label={dateLabel(value)} aria-pressed={selectedDate === value} aria-current={value === today ? 'date' : undefined} onClick={() => { setTime({ hour: '', minute: '00', period: 'PM' }); setSelectedDate(value === selectedDate ? '' : value); }}>{i + 1}</button>;
              })}
            </div>
            <div className="contact-time-picker">
            <fieldset className="contact-clock" disabled={!selectedDate}>
              <legend>{copy.contact.timeLabel} <span>{copy.common.optional}</span></legend>
              <div className="contact-clock-line">
                <input className="contact-clock-input" aria-label={copy.contact.hourLabel} type="text" inputMode="numeric" placeholder={copy.contact.hourPlaceholder} maxLength={2} value={time.hour} onChange={event => { const value = event.target.value; if (/^\d{0,2}$/.test(value) && Number(value) <= 12) setTime(current => ({ ...current, hour: value })); }} onBlur={() => setTime(current => ({ ...current, hour: current.hour && Number(current.hour) > 0 ? current.hour.padStart(2, '0') : '' }))} />
                <span className="contact-clock-colon" aria-hidden="true">:</span>
                <input className="contact-clock-input" aria-label={copy.contact.minuteLabel} type="text" inputMode="numeric" placeholder={copy.contact.minutePlaceholder} maxLength={2} value={time.minute} onChange={event => { const value = event.target.value; if (/^\d{0,2}$/.test(value) && Number(value) <= 59) setTime(current => ({ ...current, minute: value })); }} onBlur={() => setTime(current => ({ ...current, minute: (current.minute || '00').padStart(2, '0') }))} />
                <div className="contact-clock-period" role="group" aria-label={copy.contact.periodLabel}>{['AM', 'PM'].map(period => <button type="button" key={period} aria-pressed={time.period === period} onClick={() => setTime(current => ({ ...current, period }))}>{period}</button>)}</div>
                {time.hour && <button type="button" className="contact-clock-clear" aria-label={copy.contact.clearTime} onClick={() => setTime({ hour: '', minute: '00', period: 'PM' })}>×</button>}
              </div>
            </fieldset>
            <p className="contact-timezone">{copy.contact.timezone}</p>
            </div>
          </div>
          <div className="contact-time">
            <p className="ui-eyebrow ui-muted">{copy.contact.detailsLabel}</p>
            <div className="contact-fields">
              <div><label htmlFor="contact-sender-name">{copy.contact.name} <span className="contact-optional">{copy.common.optional}</span></label><input id="contact-sender-name" type="text" autoComplete="name" placeholder={copy.contact.name} maxLength={100} value={senderName} onChange={event => setSenderName(event.target.value)} /></div>
              <div><label htmlFor="contact-identity">{copy.contact.company} <span className="contact-optional">{copy.common.optional}</span></label><input id="contact-identity" type="text" autoComplete="organization" placeholder={copy.contact.companyPlaceholder} maxLength={120} value={identity} onChange={event => setIdentity(event.target.value)} /></div>
            </div>
            <div className="contact-message"><label htmlFor="contact-message">{copy.contact.messageLabel}</label><textarea id="contact-message" rows={4} required minLength={5} maxLength={2000} placeholder={copy.contact.messagePlaceholder} value={message} onChange={event => setMessage(event.target.value)} /></div>
            {email && <div className="contact-direct"><p className="ui-eyebrow ui-muted">{copy.contact.direct}</p><a className="contact-email" href={`mailto:${email}`}><FiMail aria-hidden="true" /><span>{email}</span><FiArrowUpRight aria-hidden="true" /></a></div>}
            <button className="ui-button ui-button--primary contact-request" type="submit" disabled={!canConnect}><FiMail aria-hidden="true" />{copy.contact.submit}</button>
            <p className="contact-description">{copy.contact.draftNote}</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
