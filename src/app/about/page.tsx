export default function About() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4">About Me</h1>
          <p className="text-xl text-[var(--foreground-secondary)]">
            Building products that scale. Currently at Intuit, previously at Fidelity and AT&T.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[var(--accent)] rounded"></div>
                My Story
              </h2>
              <p className="text-[var(--foreground-dim)] leading-relaxed mb-4">
                I'm a Senior Frontend Engineer with 6+ years of experience building systems that handle real-world complexity. I started my career learning React at JP Morgan, shipped Angular projects at Vanguard and AT&T, and now specialize in full-stack frontend architecture at Intuit.
              </p>
              <p className="text-[var(--foreground-dim)] leading-relaxed mb-4">
                My focus is on three things: <strong className="text-[var(--foreground)]">shipping fast</strong>, <strong className="text-[var(--foreground)]">scaling systems</strong>, and <strong className="text-[var(--foreground)]">enabling teams</strong>. I've led React migrations, built observability systems, and designed suppression engines that serve 350K+ daily users.
              </p>
              <p className="text-[var(--foreground-dim)] leading-relaxed">
                I believe in clear code, strong abstractions, and measurable outcomes. No complexity for complexity's sake.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[var(--accent-secondary)] rounded"></div>
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--accent)] mb-2 uppercase text-sm tracking-wide">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React 18+", "TypeScript", "Next.js", "Angular", "Tailwind", "Redux", "Zustand"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[var(--background-secondary)] border border-[var(--border)] rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--accent-secondary)] mb-2 uppercase text-sm tracking-wide">Data & APIs</h3>
                  <div className="flex flex-wrap gap-2">
                    {["GraphQL", "REST", "Apollo", "Node.js", "React Query"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[var(--background-secondary)] border border-[var(--border)] rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--accent-tertiary)] mb-2 uppercase text-sm tracking-wide">Systems & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Vite", "Webpack", "Docker", "Kubernetes", "CI/CD", "Observability"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[var(--background-secondary)] border border-[var(--border)] rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[var(--accent)] rounded"></div>
                What I'm Learning
              </h2>
              <p className="text-[var(--foreground-dim)] leading-relaxed mb-4">
                Currently diving into AI-powered workflows, compiler design, and edge computing. I'm also mentoring junior engineers on systems thinking and code review practices.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[var(--background-secondary)] p-6 rounded border border-[var(--border)]">
              <h3 className="font-bold text-[var(--accent)] mb-4 uppercase text-sm tracking-wide">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-[var(--foreground-dim)]">
                <li>📍 <strong className="text-[var(--foreground)]">Based in</strong> San Francisco, CA</li>
                <li>💼 <strong className="text-[var(--foreground)]">Currently</strong> Senior SWE at Intuit</li>
                <li>🎓 <strong className="text-[var(--foreground)]">Education</strong> Computer Science</li>
                <li>🚀 <strong className="text-[var(--foreground)]">Passion</strong> Scalable systems</li>
                <li>📚 <strong className="text-[var(--foreground)]">Reading</strong> System design, performance</li>
              </ul>
            </div>

            <div className="bg-[var(--background-secondary)] p-6 rounded border border-[var(--border)]">
              <h3 className="font-bold text-[var(--accent)] mb-4 uppercase text-sm tracking-wide">Let's Connect</h3>
              <div className="space-y-3">
                <a href="mailto:bmanasasharma@outlook.com" className="block text-[var(--accent)] hover:underline text-sm font-semibold">
                  Email Me
                </a>
                <a href="#" className="block text-[var(--accent)] hover:underline text-sm font-semibold">
                  LinkedIn Profile
                </a>
                <a href="#" className="block text-[var(--accent)] hover:underline text-sm font-semibold">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}