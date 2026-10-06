import HeroSection from "@/components/portfolio/HeroSection";
import StatsGrid, { type Stat } from "@/components/portfolio/StatsGrid";
import EducationSection, {
    type EducationEntry,
} from "@/components/portfolio/EducationSection";
import ContactDetails from "@/components/portfolio/ContactDetails";
import SkillsSection, { type SkillGroup } from "@/components/portfolio/SkillsGrid";
import ExperienceSection, { type Role } from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ProjectsGrid, { type ProjectEntry } from "@/components/portfolio/ProjectsGrid";

const heroData = {
    eyebrow: "Frontend Software Engineer",
    avatarEmoji: "👩‍💻",
    name: "Manasa B.",
    tagline: "11+ years shipping React & TypeScript at scale",
    bio: [
        "I'm a Senior Frontend Engineer with 11+ years of experience building systems that handle real-world complexity. I started my career learning React at JP Morgan, shipped Angular projects at Vanguard and AT&T, and now specialize in full-stack frontend architecture at Intuit.",
        "My focus is on three things: shipping fast, scaling systems, and enabling teams. I've led React migrations, built observability systems, and designed suppression engines that serve 350K+ daily users.",
    ],
    ctaHref: "#contact",
    ctaLabel: "Get in Touch",
    resumeHref: "/resume.pdf",
    resumeLabel: "Download Resume",
};

const stats: Stat[] = [
    { value: "11+", label: "Years of Experience" },
    { value: "7", label: "Companies Worked At" },
    { value: "350K+", label: "Users Served in Production" },
    { value: "10x", label: "Fewer Customer-Facing Errors" },
];

const educationEntries: EducationEntry[] = [
    { degree: "MS, Computer Science", school: "University Name", location: "CA, USA", year: "20XX" },
    { degree: "BS, Computer Science", school: "University Name", location: "City, Country", year: "20XX" },
];

const contactData = {
    location: "Newark, CA",
    email: "bmanasasharma@outlook.com",
    linkedinHref: "#",
    linkedinLabel: "LinkedIn",
};

const skillGroups: SkillGroup[] = [
    {
        label: "Frontend",
        color: "accent",
        skills: ["React 18+", "TypeScript", "Next.js", "Angular", "Tailwind", "Redux", "Zustand"],
    },
    {
        label: "Data & APIs",
        color: "accent2",
        skills: ["GraphQL", "REST", "Apollo", "Node.js", "React Query"],
    },
    {
        label: "Systems & DevOps",
        color: "accent3",
        skills: ["Vite", "Webpack", "Docker", "Kubernetes", "CI/CD", "Observability"],
    },
];

// PLACEHOLDER — swap for real role/company timeline in the content pass.
const roles: Role[] = [
    { title: "Software Engineer II", company: "Intuit", period: "20XX — Present" },
    { title: "Frontend Engineer", company: "AT&T", period: "20XX — 20XX" },
    { title: "Frontend Engineer", company: "Vanguard", period: "20XX — 20XX" },
    { title: "Software Engineer", company: "JP Morgan", period: "20XX — 20XX" },
];

const projects: ProjectEntry[] = [
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

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            {/* Aurora mesh background — soft, drifting color blobs behind the whole page */}
            <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute -top-32 -left-40 w-[38rem] h-[38rem] rounded-full opacity-25 blur-[110px]"
                    style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", animation: "aurora-drift-a 22s ease-in-out infinite" }}
                />
                <div
                    className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] rounded-full opacity-20 blur-[110px]"
                    style={{ background: "radial-gradient(circle, var(--accent2) 0%, transparent 70%)", animation: "aurora-drift-b 26s ease-in-out infinite" }}
                />
                <div
                    className="absolute top-[55%] left-1/4 w-[30rem] h-[30rem] rounded-full opacity-[0.14] blur-[110px]"
                    style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", animation: "aurora-drift-a 30s ease-in-out infinite reverse" }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.14] blur-[110px]"
                    style={{ background: "radial-gradient(circle, var(--accent3) 0%, transparent 70%)", animation: "aurora-drift-b 24s ease-in-out infinite reverse" }}
                />
            </div>

            {/* Main content */}
            <div className="relative isolate px-6 pt-8 lg:px-8">
                <div className="shell">
                    <section id="home" className="mb-16 md:mb-20 mt-0 scroll-mt-24">
                        <div className="flex flex-col items-start gap-5 md:gap-6 w-full">
                            <HeroSection {...heroData} />
                            <ContactDetails {...contactData} />
                            <EducationSection entries={educationEntries} />
                        </div>

                        <StatsGrid eyebrow="Impact at a glance" title="Achievements" stats={stats} />
                    </section>

                    <div className="flex flex-col gap-20 md:gap-28 pb-20 md:pb-28">
                        <SkillsSection id="skills" eyebrow="What I work with" title="Skills" groups={skillGroups} />

                        <ExperienceSection id="experience" eyebrow="Where I've worked" title="Experience" roles={roles} />

                        <ProjectsGrid
                            id="lab"
                            eyebrow="Building in public"
                            title="Projects"
                            blurb="Experiments, tools, and learning projects."
                            projects={projects}
                        />

                        <ContactSection
                            id="contact"
                            eyebrow="Let's talk"
                            title="Contact"
                            blurb="I'm available for full-time roles, consulting projects, and mentorship opportunities."
                            email="bmanasasharma@outlook.com"
                            linkedinHref="#"
                            linkedinLabel="LinkedIn"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}