export default function ExperienceSection() {
  const roles = ['Most recent role', 'Previous role', 'Earlier role'];
  return <section id="experience" aria-labelledby="experience-title" className="portfolio-section"><div className="vault-container">
    <div className="sectionHeading"><div><p className="sectionHeadingEyebrow">Track record</p><h2 id="experience-title" className="type-headline-lg">Where I’ve built & grown</h2></div><p className="sectionHeadingDescription">Space for your company timeline and the details of each role.</p></div>
    <div className="skeleton-experience">
      <div className="portfolio-card"><p className="skeleton-label">Career timeline</p><ol className="skeleton-role-list">{roles.map((role, i) => <li key={role}><a href={`#skeleton-role-${i}`}><strong>Company {i + 1}</strong><small>{role}</small></a></li>)}</ol></div>
      <div className="skeleton-experience-details">{roles.map((role, i) => <div className="skeleton-role-detail" id={`skeleton-role-${i}`} key={role}><article className="portfolio-card"><p className="skeleton-label">Company / Date range</p><h3 className="skeleton-title">{role}</h3><div className="layout-placeholder" aria-hidden="true"><span /><span /><span /><span /></div></article></div>)}</div>
    </div>
  </div></section>;
}
