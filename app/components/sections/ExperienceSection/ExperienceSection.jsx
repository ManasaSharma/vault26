import { copy } from '@/lib/content';
import Section from '@/components/common/Section';
import ExperienceDesktop from './ExperienceDesktop';
import ExperienceAccordion from './ExperienceAccordion';
import './ExperienceSection.scss';

export default function ExperienceSection({ experiences = [] }) {
  if (!experiences.length) return null;
  return (
    <Section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-heading">
        <div><p className="ui-eyebrow tone-primary">{copy.experience.label}</p><h2 id="experience-title" className="ui-section-title">{copy.experience.title}<em className="tone-secondary">{copy.experience.titleAccent}</em></h2></div>
        <p className="ui-muted">{experiences.length} {copy.experience.summary}</p>
      </div>
      <div className="experience-desktop"><ExperienceDesktop experiences={experiences} /></div>
      <div className="experience-compact"><ExperienceAccordion experiences={experiences} /></div>
    </Section>
  );
}
