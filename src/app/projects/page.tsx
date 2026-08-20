const projects = [
  {
    id: 1,
    tag: "SYSTEMS",
    title: "React 18 Migration @ Scale",
    problem: "4 monorepos on React 17, blocking design system upgrades and modern tooling.",
    outcome: "Architected migration strategy, shipped in 6 weeks with zero regressions. Org-wide adoption.",
    tech: ["React 18", "TypeScript", "Webpack", "Node.js"],
  },
  {
    id: 2,
    tag: "DATA ARCHITECTURE",
    title: "GraphQL Unification",
    problem: "Legacy Data API calls scattered across 80+ files with inconsistent error handling.",
    outcome: "Built migration agent mapping IDA → Consumer Supergraph. Enabled 350K+ users.",
    tech: ["GraphQL", "Apollo", "Schema validation"],
  },
  {
    id: 3,
    tag: "PERFORMANCE",
    title: "Marketing Suppression Engine",
    problem: "Ineligible users seeing irrelevant upsells, increasing support burden.",
    outcome: "Designed suppression rules engine, feature-flagged rollout, 15% relevance improvement.",
    tech: ["Rules engine", "Feature flags", "IXP", "React"],
  },
  {
    id: 4,
    tag: "TOOLING",
    title: "Build System Optimization",
    problem: "Build times 3x slower than industry standard. Cold starts 90+ seconds.",
    outcome: "Migrated Webpack → Vite. Build time: 8s. HMR: <100ms. 40% productivity gain.",
    tech: ["Vite", "Webpack", "esbuild", "Performance"],
  },
  {
    id: 5,
    tag: "INFRASTRUCTURE",
    title: "Observability & Monitoring",
    problem: "Zero visibility into production errors. MTTR: 45+ minutes.",
    outcome: "Instrumented stack with Splunk + Wavefront + RUM. MTTR: 8 minutes. 10x error reduction.",
    tech: ["Splunk", "Wavefront", "RUM", "Observability"],
  },
  {
    id: 6,
    tag: "TESTING",
    title: "E2E Test Automation",
    problem: "Manual QA taking 3+ days per release. Flaky Cypress tests.",
    outcome: "Built MSW + Playwright framework. 400+ tests at 99.8% stability. QA time: 4h.",
    tech: ["Playwright", "Jest", "MSW", "Storybook"],
  },
];

export default function Projects() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4">Projects & Case Studies</h1>
          <p className="text-xl text-[var(--foreground-secondary)]">
            Systems I've built, problems I've solved, and impact I've measured.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--background-secondary)] p-8 rounded border border-[var(--border)] hover:border-[var(--accent)] transition group"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3 inline-block">
                {project.tag}
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--foreground-dim)] mb-4">
                <strong className="text-[var(--foreground-secondary)]">Challenge:</strong> {project.problem}
              </p>
              <p className="text-sm text-[var(--foreground-secondary)] mb-6">
                <strong className="text-[var(--accent)]">Outcome:</strong> {project.outcome}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[var(--background)] rounded text-[var(--foreground-dim)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}