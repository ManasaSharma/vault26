export interface ProjectEntry {
    id: number;
    title: string;
    description: string;
    tech: string[];
    status: "In Progress" | "Active" | "Archived";
}

interface ProjectsGridProps {
    id?: string;
    eyebrow: string;
    title: string;
    blurb: string;
    projects: ProjectEntry[];
}

const STATUS_STYLES: Record<ProjectEntry["status"], string> = {
    "In Progress": "bg-[var(--accent)]/15 text-[var(--accent)]",
    Active: "bg-[var(--accent2)]/15 text-[var(--accent2)]",
    Archived: "bg-[#6b7c8f]/15 text-[#6b7c8f]",
};

export default function ProjectsGrid({ id, eyebrow, title, blurb, projects }: ProjectsGridProps) {
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
                className="font-[var(--font-display)] text-3xl md:text-5xl font-bold text-[var(--ink)] mb-3 md:mb-4"
                style={{ animation: "fade-in-up 0.7s ease-out 0.1s both" }}
            >
                {title}
            </h2>
            <p
                className="text-sm md:text-base text-[#9ca3af] mb-10 md:mb-14 max-w-xl"
                style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}
            >
                {blurb}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className="bg-[rgba(31,33,47,0.6)] border border-[#374151]/40 rounded-lg p-5 md:p-6 hover:border-[#4b5563]/60 transition-colors duration-200"
                        style={{ animation: `fade-in-up 0.7s ease-out ${0.3 + idx * 0.08}s both` }}
                    >
                        <div className="flex items-start justify-between gap-2 mb-3">
                            <h3 className="font-semibold text-sm md:text-base text-[var(--ink)]">{project.title}</h3>
                            <span
                                className={`font-[var(--font-mono)] text-[9px] md:text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded shrink-0 ${STATUS_STYLES[project.status]}`}
                            >
                                {project.status}
                            </span>
                        </div>
                        <p className="text-[13px] md:text-sm text-[#9ca3af] mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#374151]/40">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[11px] md:text-xs px-2 py-1 bg-[var(--bg)] rounded text-[#6b7c8f]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
