import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import { isPublicHttpsUrl } from '@/config/sections.config';
import './AILabSection.scss';

export default function AILabSection({ lab, projects = [] }) {
  if (!lab || !projects.length) return null;
  return (
    <Section id="ai-lab" aria-labelledby="ai-lab-title">
      <div className="sectionHeading">
        <div><p className="sectionHeadingEyebrow">{lab.label}</p><h2 id="ai-lab-title" className="ui-section-title">{lab.title}</h2></div>
        <p className="sectionHeadingDescription">{lab.description}</p>
      </div>
      <div className="ai-lab-projects">
        {projects.map(project => (
          <Card as="article" key={project.id} className="ai-lab-project">
            <h3>{project.title}</h3>
            <p className="ui-muted">{project.description}</p>
            {!!project.lessons?.length && <div><h4>{lab.lessonsLabel}</h4><ul>{project.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}</ul></div>}
            <div className="ai-lab-links">
              <a className="ui-button ui-button--primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{lab.demoLabel}</a>
              {isPublicHttpsUrl(project.codeUrl) && <a className="ui-button ui-button--secondary" href={project.codeUrl} target="_blank" rel="noopener noreferrer">{lab.codeLabel}</a>}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
