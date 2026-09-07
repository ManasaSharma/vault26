const experiments = [
  {
    id: 1,
    title: "Frontend Systems Lab",
    description: "Personal learning project built with Next.js, React Query, and Zustand. Experiments in state management, data fetching, and component architecture.",
    tech: ["Next.js", "React", "TypeScript", "Zustand"],
    status: "In Progress",
  },
  {
    id: 2,
    title: "AI-Powered Code Review Tool",
    description: "Claude integration for automated code review with context awareness. Experimenting with LangGraph and MCP for agentic workflows.",
    tech: ["Claude API", "LangGraph", "MCP", "TypeScript"],
    status: "In Progress",
  },
  {
    id: 3,
    title: "Observability Dashboard",
    description: "Real-time monitoring dashboard for distributed systems. Built with Recharts, WebSocket data streams, and serverless backend.",
    tech: ["React", "Recharts", "WebSockets", "Node.js"],
    status: "Archived",
  },
  {
    id: 4,
    title: "Component Library",
    description: "Reusable component library with Storybook, built for design system documentation and team collaboration.",
    tech: ["React", "Storybook", "TypeScript", "Tailwind"],
    status: "Active",
  },
];

export default function Lab() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4">Engineering Lab</h1>
          <p className="text-xl text-[var(--foreground-secondary)]">
            Experiments, tools, and learning projects. Building in public.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              className="bg-[var(--background-secondary)] p-6 rounded border border-[var(--border)] hover:border-[var(--accent)] transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[var(--foreground)]">{exp.title}</h3>
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${
                  exp.status === "In Progress"
                    ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                    : exp.status === "Active"
                    ? "bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]"
                    : "bg-[var(--foreground-dim)]/20 text-[var(--foreground-dim)]"
                }`}>
                  {exp.status}
                </span>
              </div>
              <p className="text-sm text-[var(--foreground-dim)] mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[var(--background)] rounded text-[var(--foreground-dim)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-[var(--background-secondary)] p-8 rounded border border-[var(--border)]">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-[var(--foreground-dim)] mb-6">
            I'm available for full-time roles, consulting projects, and mentorship opportunities. Let's discuss how to scale your frontend systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:bmanasasharma@outlook.com"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded font-semibold hover:opacity-90 transition"
            >
              Email Me
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded font-semibold hover:bg-[var(--background)] transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded font-semibold hover:bg-[var(--background)] transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}