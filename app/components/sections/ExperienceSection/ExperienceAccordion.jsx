'use client';

import { copy } from '@/lib/content';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Card from '@/components/common/Card';

const companyColors = {
  Intuit: 'status-active',
  'Fidelity Investments': 'primary',
  'AT&T': 'secondary',
  Vanguard: 'blue-light',
  'Korn Ferry': 'amber',
  'Virgin Mobile': 'blue-medium',
  'JPMorgan Chase': 'tertiary',
};
const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
function formatDate(value) {
  return value ? monthYear.format(new Date(`${value}-01T00:00:00Z`)) : copy.common.present;
}

export default function ExperienceAccordion({ experiences = [] }) {
  const [expandedId, setExpandedId] = useState(null);
  if (!experiences.length) return null;

  return (
      <ol className="experience-accordion" aria-label={copy.experience.timelineLabel}>
        {experiences.map(role => {
          const expanded = expandedId === role.id;
          const detailsId = `experience-details-${role.id}`;
          const toggleId = `experience-toggle-${role.id}`;
          return (
            <li key={role.id} style={{ '--experience-accent': `var(--colors-${companyColors[role.company] ?? 'primary'})` }}>
              <Card as="article" className={`experience-entry${expanded ? ' is-expanded' : ''}`}>
                <h3>
                  <button id={toggleId} type="button" className="experience-toggle" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpandedId(expanded ? null : role.id)}>
                    <span className="experience-node" aria-hidden="true" />
                    <span className="experience-summary"><strong>{role.company}</strong><span>{role.role}</span></span>
                    <span className="experience-date-range"><time dateTime={role.startDate}>{formatDate(role.startDate)}</time> – {role.endDate ? <time dateTime={role.endDate}>{formatDate(role.endDate)}</time> : copy.common.present}</span>
                    <FiChevronDown className="experience-chevron" aria-hidden="true" />
                  </button>
                </h3>
                <div id={detailsId} className="experience-details" role="region" aria-labelledby={toggleId} hidden={!expanded}>
                  <p className="experience-location">{role.location}{!role.endDate && <span> · {copy.common.currentRole}</span>}</p>
                  <p className="experience-description">{role.description}</p>
                  {!!role.keyAccomplishments?.length && <ul className="experience-accomplishments">{role.keyAccomplishments.map(item => <li key={item}>{item}</li>)}</ul>}
                  {!!role.skills?.length && <ul className="experience-skills" aria-label={`${role.company} ${copy.common.technologies}`}>{role.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
  );
}
