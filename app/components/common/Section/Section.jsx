import './Section.scss';

/** Common section spacing and content width; each section supplies its own content. */
export default function Section({ id, className = '', children, ...props }) {
  return (
    <section
      {...props}
      id={id}
      className={`shared-section ${className}`.trim()}
    >
      <div className="shared-section__inner">
        {children}
      </div>
    </section>
  );
}
