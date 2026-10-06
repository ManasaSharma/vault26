export interface Role {
  title: string;
  company: string;
  period: string;
}

interface ExperienceSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  roles: Role[];
}

// PLACEHOLDER — swap for real role/company timeline in the content pass.
export default function ExperienceSection({ id, eyebrow, title, roles }: ExperienceSectionProps) {
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

      <div className="flex flex-col">
        {roles.map((role, idx) => (
          <div
            key={`${role.company}-${role.period}`}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#374151]/40 py-5 md:py-6 first:pt-0"
            style={{ animation: `fade-in-up 0.7s ease-out ${0.2 + idx * 0.08}s both` }}
          >
            <div>
              <h3 className="font-semibold text-sm md:text-base text-[var(--ink)]">{role.title}</h3>
              <p className="text-[13px] md:text-sm text-[var(--accent2)] font-medium mt-0.5">{role.company}</p>
            </div>
            <span className="font-[var(--font-mono)] text-[11px] md:text-xs uppercase tracking-wider text-[#6b7c8f]">
              {role.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

