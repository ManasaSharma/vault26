'use client';

import { useState } from 'react';
import { FiCode } from 'react-icons/fi';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import './TechStackSection.scss';

const categoryTones = { frontend: 'primary', backend: 'secondary', devops: 'amber', observability: 'status-active' };

export default function TechStackSection({ dailyDrivers = [], filters = [] }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? dailyDrivers : dailyDrivers.filter(item => item.category === filter);
  return <Section id="skills" className="drivers-section" aria-labelledby="techstack-title">
    <Card panel className="drivers-panel blueprint-grid">
      <div className="drivers-heading"><p className="ui-eyebrow drivers-label"><FiCode aria-hidden="true" />Skills</p><h2 id="techstack-title" className="ui-section-title">The stack behind everything I <em>ship.</em></h2></div>
      <ul className="drivers-tags" id="driver-results" aria-label="Technical skills">{visible.map(item => <li key={item.id ?? item.name} className="driver-tag" title={item.description} style={{ '--skill-accent': `var(--colors-${categoryTones[item.category] ?? 'primary'})` }}><span aria-hidden="true" className="driver-icon">{item.icon}</span><span>{item.name}</span></li>)}</ul>
      <div className="drivers-filters" role="group" aria-label="Filter technologies">{[{id:'all',label:'All'}, ...filters].map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} aria-controls="driver-results" onClick={() => setFilter(item.id)}><span className="driver-filter-dot" aria-hidden="true" />{item.label}<span className="driver-filter-count" aria-hidden="true">{item.id === 'all' ? dailyDrivers.length : dailyDrivers.filter(skill => skill.category === item.id).length}</span></button>)}</div>
      <span className="drivers-announcement" role="status">{visible.length} technologies shown</span>
    </Card>
  </Section>;
}
