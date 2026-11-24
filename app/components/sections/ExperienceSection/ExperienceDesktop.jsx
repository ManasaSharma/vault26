'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '@/components/common/Card';

// Presentation colors are shared by each company's timeline entry and detail card.
// Repeat engagements deliberately keep the same company color and separate role IDs.
const companyColors = {
  Intuit: 'status-active',
  'Fidelity Investments': 'primary',
  'AT&T': 'secondary',
  Vanguard: 'blue-light',
  'Korn Ferry': 'amber',
  'Virgin Mobile': 'blue-medium',
  'JPMorgan Chase': 'tertiary',
};
const companyStyle = company => ({
  '--experience-accent': `var(--colors-${companyColors[company] ?? 'primary'})`,
});

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(value) {
  return value ? monthYear.format(new Date(`${value}-01T00:00:00Z`)) : 'Present';
}

export default function ExperienceDesktop({ experiences = [] }) {
  const streamRef = useRef(null);
  const timelineRef = useRef(null);
  const sparkRef = useRef(null);
  const cardRefs = useRef(new Map());
  const [activeId, setActiveId] = useState(null);
  const selectedId = activeId ?? experiences[0]?.id;

  // Desktop tracks the inner card stream; phones track the normal page scroll.
  useEffect(() => {
    const stream = streamRef.current;
    if (!stream || !experiences.length) return;
    const desktop = matchMedia('(min-width: 1024px)');
    let frame;

    function updateSelection() {
      const boundary = desktop.matches
        ? stream.getBoundingClientRect().top + 32
        : (document.querySelector('.header')?.getBoundingClientRect().height ?? 64) + 32;
      if (!desktop.matches) {
        const bounds = stream.getBoundingClientRect();
        if (bounds.bottom < boundary || bounds.top > innerHeight) return;
      }
      let next = experiences[0].id;
      for (const role of experiences) {
        const card = cardRefs.current.get(role.id);
        if (card && card.getBoundingClientRect().top <= boundary) next = role.id;
      }
      // A short final card cannot reach the top once the scroll position is clamped.
      if (desktop.matches && stream.scrollHeight > stream.clientHeight &&
          stream.scrollTop + stream.clientHeight >= stream.scrollHeight - 2) {
        next = experiences[experiences.length - 1].id;
      }
      setActiveId(next);
      // Interpolate between role markers so the spark follows scroll progress.
      const timeline = timelineRef.current;
      const spark = sparkRef.current;
      const index = experiences.findIndex(role => role.id === next);
      const markers = timeline?.querySelectorAll('.experience-node');
      const marker = markers?.[index];
      if (timeline && spark && marker) {
        const origin = timeline.getBoundingClientRect().top;
        const currentY = marker.getBoundingClientRect().top - origin + marker.offsetHeight / 2;
        const followingMarker = markers[index + 1];
        const currentCard = cardRefs.current.get(next);
        const followingCard = cardRefs.current.get(experiences[index + 1]?.id);
        const currentTop = currentCard?.getBoundingClientRect().top;
        const nextTop = followingCard?.getBoundingClientRect().top;
        const progress = followingCard && nextTop > currentTop
          ? Math.max(0, Math.min(1, (boundary - currentTop) / (nextTop - currentTop))) : 0;
        const nextY = followingMarker ? followingMarker.getBoundingClientRect().top - origin + followingMarker.offsetHeight / 2 : currentY;
        spark.style.top = `${currentY + (nextY - currentY) * progress}px`;
        spark.style.setProperty('--spark-color', `var(--colors-${companyColors[experiences[index].company] ?? 'primary'})`);
        spark.style.opacity = '1';
      }
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSelection);
    }

    updateSelection();
    stream.addEventListener('scroll', onScroll, { passive: true });
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      stream.removeEventListener('scroll', onScroll);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, [experiences]);

  function selectRole(id) {
    const card = cardRefs.current.get(id);
    const stream = streamRef.current;
    if (!card || !stream) return;
    setActiveId(id);
    const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    if (matchMedia('(min-width: 1024px)').matches) {
      stream.scrollTo({
        top: stream.scrollTop + card.getBoundingClientRect().top - stream.getBoundingClientRect().top,
        behavior,
      });
    } else {
      card.scrollIntoView({ behavior, block: 'start' });
    }
  }

  if (!experiences.length) return null;

  return (
      <div className="experience-layout">
        <Card className="experience-dock">
          <nav ref={timelineRef} className="experience-rail" aria-label="Career timeline">
            <span ref={sparkRef} className="experience-spark" aria-hidden="true" />
            <ol className="experience-timeline">
              {experiences.map(role => (
                <li key={role.id} style={companyStyle(role.company)}>
                  <button
                    type="button"
                    className="experience-company"
                    aria-current={role.id === selectedId ? 'true' : undefined}
                    aria-controls={`experience-${role.id}`}
                    aria-label={`${role.company}, ${role.role}, ${formatDate(role.startDate)} to ${formatDate(role.endDate)}`}
                    onClick={() => selectRole(role.id)}
                  >
                    <span className="experience-node" aria-hidden="true" />
                    <span className="experience-company-copy">
                      <strong>{role.company}</strong>
                      <small>{role.role}</small>
                      <small>{formatDate(role.startDate)} – {formatDate(role.endDate)}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </Card>

        <div
          ref={streamRef}
          className="experience-stream"
          role="region"
          aria-label="Experience details"
          tabIndex={0}
        >
          {experiences.map(role => (
            <div
              key={role.id}
              className="experience-card-anchor"
              ref={node => {
                if (node) cardRefs.current.set(role.id, node);
                else cardRefs.current.delete(role.id);
              }}
            >
              <Card
                as="article"
                style={companyStyle(role.company)}
                id={`experience-${role.id}`}
                aria-labelledby={`experience-heading-${role.id}`}
                className={`experience-role${role.id === selectedId ? ' is-active' : ''}`}
              >
                <div className="experience-role-meta">
                  <p className="ui-eyebrow experience-role-label">
                    {!role.endDate ? <><span className="ui-dot" aria-hidden="true" /> Current role</> : role.company}
                  </p>
                  <p className="experience-date-range">
                    <time dateTime={role.startDate}>{formatDate(role.startDate)}</time>
                    {' – '}
                    {role.endDate ? <time dateTime={role.endDate}>{formatDate(role.endDate)}</time> : 'Present'}
                  </p>
                </div>
                <h3 id={`experience-heading-${role.id}`}>{role.role} @ {role.company}</h3>
                <p className="experience-location">{role.location}</p>
                <p className="experience-description">{role.description}</p>
                {!!role.keyAccomplishments?.length && (
                  <ul className="experience-accomplishments">
                    {role.keyAccomplishments.map(item => <li key={item}>{item}</li>)}
                  </ul>
                )}
                <ul className="experience-skills" aria-label={`${role.company} technologies`}>
                  {(role.skills ?? []).map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
  );
}
