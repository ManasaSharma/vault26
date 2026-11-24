import Section from '@/components/common/Section';
import ExperienceDesktop from './ExperienceDesktop';
import ExperienceAccordion from './ExperienceAccordion';
import './ExperienceSection.scss';

export default function ExperienceSection({ experiences = [] }) {
  if (!experiences.length) return null;
  return (
    <Section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-heading">
        <div><p className="ui-eyebrow tone-primary">{'// Track record'}</p><h2 id="experience-title" className="ui-section-title">Where I’ve built &amp; <em className="tone-secondary">scaled</em></h2></div>
        <p className="ui-muted">{experiences.length} roles across frontend engineering, financial services, and telecommunications.</p>
      </div>
      <div className="experience-desktop"><ExperienceDesktop experiences={experiences} /></div>
      <div className="experience-compact"><ExperienceAccordion experiences={experiences} /></div>
    </Section>
  );
}
