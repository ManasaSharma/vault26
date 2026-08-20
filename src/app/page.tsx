export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl mx-auto">
          {/* Label */}
          <div className="inline-block mb-6 px-4 py-2 bg-[var(--accent-secondary)] text-[var(--background)] rounded text-xs font-bold uppercase tracking-widest">
            Frontend Engineer × Systems Architect
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 text-[var(--foreground)]">
            Manasa B
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-light text-[var(--foreground-secondary)] mb-8 leading-relaxed">
            Building scalable frontend systems and AI-powered workflows
          </p>

          {/* Description */}
          <p className="text-lg text-[var(--foreground-dim)] mb-8 leading-relaxed max-w-2xl">
            I design and ship frontend systems that handle scale. Expert in React, TypeScript, GraphQL, and the infrastructure that powers production. Currently at Intuit, building expert networks and marketing suppression engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/about"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded font-semibold text-sm hover:opacity-90 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded font-semibold text-sm hover:bg-[var(--background-secondary)] transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <span className="text-[var(--foreground-dim)]">📍 San Francisco, CA</span>
            <a
              href="mailto:bmanasasharma@outlook.com"
              className="text-[var(--accent)] font-semibold hover:underline"
            >
              ✉️ bmanasasharma@outlook.com
            </a>
            <a href="#" className="text-[var(--accent)] font-semibold hover:underline">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[var(--background-secondary)] border-y border-[var(--border)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-[var(--accent)] mb-2">350K+</div>
              <div className="text-xs uppercase font-bold text-[var(--foreground-dim)] tracking-wide">Daily Users Served</div>
              <p className="text-sm text-[var(--foreground-secondary)] mt-2">Production systems I architect</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[var(--accent)] mb-2">6+</div>
              <div className="text-xs uppercase font-bold text-[var(--foreground-dim)] tracking-wide">Years Shipping</div>
              <p className="text-sm text-[var(--foreground-secondary)] mt-2">From startup to enterprise</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[var(--accent)] mb-2">4</div>
              <div className="text-xs uppercase font-bold text-[var(--foreground-dim)] tracking-wide">Major Migrations</div>
              <p className="text-sm text-[var(--foreground-secondary)] mt-2">React, GraphQL, and infrastructure</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[var(--accent)] mb-2">10x</div>
              <div className="text-xs uppercase font-bold text-[var(--foreground-dim)] tracking-wide">Error Reduction</div>
              <p className="text-sm text-[var(--foreground-secondary)] mt-2">Through systems design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <div className="w-1 h-6 bg-[var(--accent)] rounded"></div>
            Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/about"
              className="p-8 border border-[var(--border)] rounded hover:bg-[var(--background-secondary)] transition group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)]">About Me</h3>
              <p className="text-[var(--foreground-dim)]">Background, skills, and what I'm currently learning</p>
            </a>
            <a
              href="/projects"
              className="p-8 border border-[var(--border)] rounded hover:bg-[var(--background-secondary)] transition group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)]">Projects & Case Studies</h3>
              <p className="text-[var(--foreground-dim)]">The systems I've built and problems I've solved</p>
            </a>
            <a
              href="/experience"
              className="p-8 border border-[var(--border)] rounded hover:bg-[var(--background-secondary)] transition group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)]">Experience</h3>
              <p className="text-[var(--foreground-dim)]">Career timeline and professional highlights</p>
            </a>
            <a
              href="/lab"
              className="p-8 border border-[var(--border)] rounded hover:bg-[var(--background-secondary)] transition group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)]">Engineering Lab</h3>
              <p className="text-[var(--foreground-dim)]">Experiments, tools, and learning projects</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
