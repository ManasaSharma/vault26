import Section from '@/components/common/Section';

export default function SkillsSection() {
  return (
    <Section id="skills" aria-labelledby="skills-title"><div className="sectionHeading"><div><p className="sectionHeadingEyebrow">How I work</p><h2 id="skills-title" className="type-headline-lg">Skills that connect the pieces</h2></div></div><div className="layout-grid layout-grid--three">{['Architecture', 'Collaboration', 'Delivery'].map(label => <div key={label} className="portfolio-card"><h3 className="skeleton-title">{label}</h3><div className="layout-placeholder" aria-hidden="true"><span /><span /><span /></div></div>)}</div></Section>
  );
}
