import Section from '@/components/common/Section';

export default function TechStackSection() {
  return (
    <Section id="techstack" aria-labelledby="techstack-title"><div className="portfolio-card skeleton-panel blueprint-grid">
    <div className="sectionHeading"><div><p className="sectionHeadingEyebrow">Daily drivers</p><h2 id="techstack-title" className="type-headline-lg">The tools behind the work</h2></div><p className="sectionHeadingDescription">A place for your stack, grouped by how you use it.</p></div>
    <div className="skeleton-tags">{['Frontend', 'Language', 'Framework', 'Styling', 'State', 'Data & APIs', 'Build tools', 'Testing', 'Observability', 'Documentation'].map(label => <span key={label} className="skeleton-tag">{label}</span>)}</div>
  </div>
  </Section>
  );
}
