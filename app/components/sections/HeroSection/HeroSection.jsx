export default function HeroSection() {
  return <section id="hero" aria-labelledby="hero-title" className="portfolio-section skeleton-hero"><div className="vault-container">
    <div className="skeleton-hero-top">
      <div className="skeleton-hero-copy">
        <p className="skeleton-label">Overview / Portfolio in progress</p>
        <h1 id="hero-title">A space for the work, the craft, and what’s next.</h1>
        <p>Your introduction will go here. For now, this sample text helps establish the width, spacing, and shape of the opening section.</p>
        <div className="skeleton-actions"><a className="skeleton-link" href="#contact">Let’s connect ↗</a><a className="skeleton-link" href="#projects">Explore projects</a></div>
      </div>
      <div className="skeleton-avatar" aria-hidden="true">Profile / badge</div>
    </div>
    <div className="layout-grid layout-grid--three">{['Current focus', 'Core craft', 'Impact record'].map(label => <div key={label} className="portfolio-card"><p className="skeleton-label">{label}</p><h2 className="skeleton-title">Content to follow</h2><div className="layout-placeholder" aria-hidden="true"><span /><span /></div></div>)}</div>
  </div></section>;
}
