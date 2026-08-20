const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer 2 (Frontend)",
    company: "Intuit",
    duration: "Apr 2024 — Present",
    location: "San Francisco, CA",
    current: true,
    highlights: [
      "Leading Expert Hub redesign and contact expert panel",
      "Architecting marketing suppression engine serving 350K+ daily users",
      "Mentoring junior engineers on systems design",
    ],
  },
  {
    id: 2,
    role: "Senior Frontend Developer",
    company: "Fidelity Investments",
    duration: "Sep 2022 — Feb 2024",
    location: "Boston, MA",
    current: false,
    highlights: [
      "Built React 18 migration strategy across 4 monorepos",
      "Owned frontend architecture for wealth management platform",
      "Led code review standards and testing practices",
    ],
  },
  {
    id: 3,
    role: "Senior Angular Developer",
    company: "AT&T",
    duration: "Oct 2021 — Aug 2022",
    location: "Dallas, TX",
    current: false,
    highlights: [
      "Architected internal tools serving 1000+ employees",
      "Optimized build system, reducing CI/CD time by 40%",
      "Built component library and design system documentation",
    ],
  },
  {
    id: 4,
    role: "Senior Frontend Developer",
    company: "Vanguard",
    duration: "Jan 2020 — Oct 2020",
    location: "Malvern, PA",
    current: false,
    highlights: [
      "Built retirement planning tools for millions of users",
      "Led GraphQL integration across multiple products",
      "Established testing best practices and automation",
    ],
  },
  {
    id: 5,
    role: "Angular Developer",
    company: "Korn Ferry",
    duration: "May 2018 — Dec 2019",
    location: "Los Angeles, CA",
    current: false,
    highlights: [
      "Built talent management platform used by Fortune 500 companies",
      "Implemented real-time data synchronization with WebSockets",
      "Mentored team on advanced Angular patterns",
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4">Career Timeline</h1>
          <p className="text-xl text-[var(--foreground-secondary)]">
            6+ years building frontend systems at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-1 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-24">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-[var(--background)] ${
                    exp.current
                      ? "bg-[var(--accent-secondary)] shadow-lg shadow-[var(--accent-secondary)]/50"
                      : "bg-[var(--accent)]"
                  }`}
                ></div>

                {/* Content */}
                <div className={`pb-8 ${exp.current ? "bg-[var(--background-secondary)] p-6 rounded border border-[var(--accent)]" : ""}`}>
                  <h3 className={`text-xl font-bold ${exp.current ? "text-[var(--accent-secondary)]" : "text-[var(--foreground)]"}`}>
                    {exp.role}
                  </h3>
                  <p className="text-[var(--accent)] font-semibold text-sm mb-1">{exp.company}</p>
                  <p className="text-xs text-[var(--foreground-dim)] mb-4">
                    {exp.duration} • {exp.location}
                  </p>
                  {exp.current && <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-secondary)] mb-3 inline-block">Currently Here</span>}
                  <ul className="space-y-2 text-sm text-[var(--foreground-secondary)]">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[var(--accent)] flex-shrink-0 mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--foreground-dim)] mb-4">Want to chat about a role?</p>
          <a
            href="mailto:bmanasasharma@outlook.com"
            className="inline-block px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded font-semibold hover:opacity-90 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}