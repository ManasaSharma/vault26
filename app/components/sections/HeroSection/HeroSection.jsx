'use client';

import { copy, defaultProfile } from '@/lib/content';

import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiLinkedin, FiMail } from 'react-icons/fi';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import './HeroSection.scss';

export default function HeroSection({ profile, hero, social = [] }) {
  const linkedin = social.find(item => item.icon === 'linkedin' || item.name?.toLowerCase() === 'linkedin');
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const tagline = profile?.tagline ?? defaultProfile.tagline;
  const bio = profile?.bio ?? copy.hero.bioFallback;
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
        <span className="ui-pill"><span className="ui-dot tone-active" aria-hidden="true" /><span>📍 {profile?.location ?? copy.hero.locationFallback}{hero?.metaSummary && ` · ${hero.metaSummary}`}</span></span>
        {profile?.title && <span className="ui-pill ui-pill--accent">{profile.title}</span>}
      </div>
    </div>
    <div className="hero-copy">
      <h1 id="hero-title" className="hero-title">{titleParts.map((part,i) => part === 'pixels' || part === 'pipelines' ? <em className={part === 'pixels' ? 'tone-primary' : 'tone-secondary'} key={i}>{part}</em> : part)}</h1>
      <p className="hero-bio">{bioParts.map((part,i) => emphasis.includes(part) ? <strong key={i}>{part}</strong> : part)}</p>
      <div className="hero-actions">{profile?.email && <Button variant="secondary" onClick={copyEmail}><FiMail className="tone-primary" aria-hidden="true" /><span>{profile.email}</span>{copied && <FiCheck aria-hidden="true" />}</Button>}{linkedin && <a className="hero-linkedin" href={linkedin.url} target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden="true" />{linkedin.name}<FiArrowUpRight aria-hidden="true" /></a>}</div>
      <span role="status" className="hero-copy-status">{copied ? copy.hero.copied : copyFailed ? copy.hero.copyFailed : ''}{copyFailed && <a href={`mailto:${profile?.email}`}>{copy.common.openEmail}</a>}</span>
    </div>
    <div className="hero-highlights">{(hero?.highlights ?? []).map(item => <Card key={item.id} as="article" className="hero-highlight"><p className={`ui-eyebrow tone-${item.tone}`}><span className="ui-dot" aria-hidden="true" />{item.label}</p><h2>{item.title}</h2><p className="hero-highlight-description">{item.description}</p></Card>)}</div>
  </Section>;
}
