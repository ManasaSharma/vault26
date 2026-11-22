'use client';

import { useId, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiMail } from 'react-icons/fi';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import './HeroSection.scss';

export default function HeroSection({ profile, hero, callToAction }) {
  const circleId = useId();
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const tagline = profile?.tagline ?? 'Architecting frontend systems, from pixels to pipelines';
  const bio = profile?.bio ?? 'Profile information will appear here once loaded.';
  const emphasis = hero?.bioEmphasis ?? [];
  // Split plain API strings into safe React nodes; never inject HTML from the API.
  const titleParts = tagline.split(/(pixels|pipelines)/g);
  const escaped = emphasis.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const bioParts = escaped.length ? bio.split(new RegExp(`(${escaped.join('|')})`, 'g')) : [bio];

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyFailed(false); }
    catch { setCopyFailed(true); setCopied(false); }
  }

  return <Section id="hero" className="hero-section" aria-labelledby="hero-title">
    <div className="hero-meta-row">
      <div className="hero-meta-pills">
        <span className="ui-pill"><span className="ui-dot tone-active" aria-hidden="true" /><span>📍 {profile?.location ?? 'Location'}{hero?.metaSummary && ` · ${hero.metaSummary}`}</span></span>
        {profile?.title && <span className="ui-pill ui-pill--accent">{profile.title}</span>}
      </div>
      <a href="#contact" className="availability-badge" aria-label={`${profile?.status ?? 'Connect'} — ${profile?.statusSubtitle ?? 'Start a conversation'}`}>
        <svg viewBox="0 0 100 100" className="availability-ring" aria-hidden="true"><defs><path id={circleId} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs><text><textPath href={`#${circleId}`} textLength="230" lengthAdjust="spacing" startOffset="0%">{profile?.status ?? 'OPEN TO WORK'} • {profile?.status ?? 'OPEN TO WORK'} • </textPath></text></svg>
        <span className="availability-center" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" /></svg></span>
      </a>
    </div>
    <div className="hero-copy">
      <h1 id="hero-title" className="hero-title">{titleParts.map((part,i) => part === 'pixels' || part === 'pipelines' ? <em className={part === 'pixels' ? 'tone-primary' : 'tone-secondary'} key={i}>{part}</em> : part)}</h1>
      <p className="hero-bio">{bioParts.map((part,i) => emphasis.includes(part) ? <strong key={i}>{part}</strong> : part)}</p>
      <div className="hero-actions"><Button href="#contact" className="ui-button--uppercase">{callToAction?.primary ?? 'Start a Conversation'} <FiArrowUpRight aria-hidden="true" /></Button>{profile?.email && <Button variant="secondary" onClick={copyEmail}><FiMail className="tone-primary" aria-hidden="true" /><span>{profile.email}</span>{copied && <FiCheck aria-hidden="true" />}</Button>}</div>
      <span role="status" className="hero-copy-status">{copied ? 'Email copied to clipboard.' : copyFailed ? 'Could not copy email. ' : ''}{copyFailed && <a href={`mailto:${profile?.email}`}>Open your email app</a>}</span>
    </div>
    <div className="hero-highlights">{(hero?.highlights ?? []).map(item => <Card key={item.id} as="article" className="hero-highlight"><p className={`ui-eyebrow tone-${item.tone}`}><span className="ui-dot" aria-hidden="true" />{item.label}</p><h2>{item.title}</h2><p className="hero-highlight-description">{item.description}</p></Card>)}</div>
  </Section>;
}
