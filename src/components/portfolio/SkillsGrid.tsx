export interface SkillGroup {
  label: string;
  color: "accent" | "accent2" | "accent3";
  skills: string[];
}

interface SkillsSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  groups: SkillGroup[];
}

export default function SkillsSection({ id, eyebrow, title, groups }: SkillsSectionProps) {
  return (
    <section id={id} className="w-full max-w-4xl mx-auto px-4 md:px-0 scroll-mt-24">
      <div
        className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full font-[var(--font-mono)] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em]"
        style={{ animation: "fade-in-up 0.6s ease-out both" }}
      >
        <span aria-hidden="true">{"</>"}</span>
        <span>{eyebrow}</span>
      </div>
      <h2
        className="font-[var(--font-display)] text-3xl md:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-14"
        style={{ animation: "fade-in-up 0.7s ease-out 0.1s both" }}
      >
        {title}
      </h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {groups.map((group, idx) => (
          <div
            key={group.label}
            style={{ animation: `fade-in-up 0.7s ease-out ${0.2 + idx * 0.1}s both` }}
          >
            <h3
              className="font-[var(--font-mono)] text-[11px] md:text-xs font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ color: `var(--${group.color})` }}
            >
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[rgba(31,33,47,0.6)] border border-[#374151]/40 rounded-lg text-[13px] md:text-sm text-[var(--ink)] hover:border-[#4b5563]/60 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

