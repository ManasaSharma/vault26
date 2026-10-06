export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  year: string;
}

interface EducationSectionProps {
  entries: EducationEntry[];
}

// PLACEHOLDER — swap for real degree/school details in the content pass.
export default function EducationSection({ entries }: EducationSectionProps) {
  return (
    <div
      className="w-full"
      style={{animation: "fade-in-up 0.7s ease-out 0.45s both"}}
    >
      <h2 className="font-[var(--font-mono)] text-[11px] md:text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent3)] mb-3 md:mb-4">
        Education
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-8">
      {entries.map((entry, idx) => (
        <div
          key={entry.degree}
          className="flex items-start gap-2.5"
          style={{animation: `fade-in-up 0.7s ease-out ${0.45 + idx * 0.05}s both`}}
        >
          <span aria-hidden="true" className="text-lg mt-0.5 flex-shrink-0">🎓</span>
          <div className="flex flex-col gap-1 flex-grow">
            <div>
              <span className="text-[#e5e7eb] font-[500] text-[13px] md:text-[14px]">{entry.degree}</span>
              <span className="text-[#6b7c8f] text-[12px] md:text-[13px]"> · </span>
              <span className="text-[var(--accent2)] font-[500] text-[13px] md:text-[14px]">{entry.school}</span>
            </div>
            <div className="text-[#6b7c8f] font-[var(--font-mono)] text-[11px] md:text-[12px]">
              {entry.location} · {entry.year}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

