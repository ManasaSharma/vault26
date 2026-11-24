import Section from '@/components/common/Section';

export default function ProjectsSection() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
    
      <div className="sectionHeading">
        <div>
          <p className="sectionHeadingEyebrow">The workshop</p>
          <h2 id="projects-title" className="type-headline-lg">Ideas taking shape</h2>
        </div>
        <p className="sectionHeadingDescription">A reusable grid for projects and experiments. Real content comes next.</p></div><div className="layout-grid layout-grid--three">{[1, 2, 3].map(number => <article key={number} className="portfolio-card"><div className="skeleton-project-image" aria-hidden="true"><span className="skeleton-label">Project preview</span></div><p className="skeleton-label">Category / Status</p><h3 className="skeleton-title">Project {number}</h3><div className="layout-placeholder" aria-hidden="true"><span /><span /><span /></div></article>)}</div>
  </Section>
  );
}
