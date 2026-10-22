import Section from '@/components/common/Section';

export default function GetInTouchSection() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
    
      <div className="portfolio-card skeleton-panel">
        <div className="sectionHeading">
          <div>
            <p className="sectionHeadingEyebrow">Connect</p>
            <h2 id="contact-title" className="type-headline-lg">A space to start a conversation</h2>
          </div>
          <p className="sectionHeadingDescription">Contact details and booking will be added after the layout is ready.</p>
        </div>
        <div className="skeleton-contact">
          <div>
            <p className="skeleton-label">Conversation details</p>
            <h3 className="skeleton-title">Let’s connect</h3>
            <div className="layout-placeholder" aria-hidden="true">
              <span /><span />
              <span /><span />
            </div>
          </div>
          <div>
            <p className="skeleton-label">Calendar placeholder</p>
            <div className="skeleton-calendar" aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <span key={i} />)}</div>
          </div>
          <div>
            <p className="skeleton-label">Time slots placeholder</p>
            <div aria-hidden="true">{[1, 2, 3].map(n =>
              <div key={n} className="skeleton-slot" />)}</div>
          </div>
        </div>
      </div>
    
  </Section>
  );
}
