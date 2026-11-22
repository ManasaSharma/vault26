'use client';

import { useState } from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import './TechStackSection.scss';

export default function TechStackSection({ dailyDrivers = [], filters = [] }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? dailyDrivers : dailyDrivers.filter(item => item.category === filter);
  return <Section id="techstack" className="drivers-section" aria-labelledby="techstack-title">
    <Card panel className="drivers-panel blueprint-grid">
      <div className="drivers-heading"><p className="ui-eyebrow ui-muted">Daily Drivers</p><h2 id="techstack-title" className="ui-section-title">The stack behind everything I ship</h2></div>
      <div className="drivers-tags" id="driver-results">{visible.map(item => <span key={item.id ?? item.name} className="driver-tag" title={item.description}><span aria-hidden="true" className={`driver-icon tone-${item.tone ?? 'primary'}`}>{item.icon}</span>{item.name}</span>)}</div>
      <div className="drivers-filters" role="group" aria-label="Filter technologies">{[{id:'all',label:'All'}, ...filters].map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} aria-controls="driver-results" onClick={() => setFilter(item.id)}><span aria-hidden="true" />{item.label}</button>)}</div>
      <span className="drivers-announcement" role="status">{visible.length} technologies shown</span>
    </Card>
  </Section>;
}
