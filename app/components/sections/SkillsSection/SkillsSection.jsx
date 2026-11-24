import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import './SkillsSection.scss';

export default function SkillsSection({ skills = [] }) {
  if (!skills.length) return null;
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <div className="sectionHeading">
        <div>
          <p className="sectionHeadingEyebrow">How I work</p>
          <h2 id="skills-title" className="ui-section-title">Skills that connect the pieces</h2>
        </div>
      </div>
      <div className="layout-grid layout-grid--three">
        {skills.map(({ category, description, items = [] }) => (
          <Card as="article" key={category} className="skills-card">
            <h3>{category}</h3>
            {description && <p>{description}</p>}
            <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
