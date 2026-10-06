export interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  eyebrow?: string;
  title?: string;
  stats: Stat[];
}

export default function StatsGrid({ eyebrow, title, stats }: StatsGridProps) {
  return (
    <div className="w-full mt-10 md:mt-14">
      {(eyebrow || title) && (
        <div className="mb-5 md:mb-6" style={{ animation: "fade-in-up 0.7s ease-out 0.55s both" }}>
          {eyebrow && (
            <div className="font-[var(--font-mono)] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent2)] mb-1.5">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[var(--ink)]">
              {title}
            </h2>
          )}
        </div>
      )}
      <section
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full"
        style={{animation: "fade-in-up 0.8s ease-out 0.6s both"}}
      >
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="bg-[rgba(31,33,47,0.6)] border border-[#374151]/40 rounded-lg px-5 py-6 md:px-6 md:py-8 hover:border-[#4b5563]/60 transition-colors duration-200"
            style={{animation: `fade-in-up 0.7s ease-out ${0.7 + idx * 0.08}s both`}}
          >
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-3 md:mb-4 font-[var(--font-display)] leading-none">
              {stat.value}
            </div>
            <div className="font-[var(--font-mono)] text-[9px] md:text-[10px] uppercase font-[600] text-[#6b7c8f] tracking-wider leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

