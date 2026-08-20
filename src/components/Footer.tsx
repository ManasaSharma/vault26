export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-[var(--foreground)] mb-3">Manasa B</h3>
            <p className="text-sm text-[var(--foreground-dim)]">
              Frontend engineer building scalable systems at Intuit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-3 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[var(--foreground-dim)]">
              <li><a href="/about" className="hover:text-[var(--accent)] transition">About</a></li>
              <li><a href="/projects" className="hover:text-[var(--accent)] transition">Projects</a></li>
              <li><a href="/experience" className="hover:text-[var(--accent)] transition">Experience</a></li>
              <li><a href="/lab" className="hover:text-[var(--accent)] transition">Lab</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-3 text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 text-sm text-[var(--foreground-dim)]">
              <li><a href="mailto:bmanasasharma@outlook.com" className="hover:text-[var(--accent)] transition">Email</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition">GitHub</a></li>
              <li><a href="/contact" className="hover:text-[var(--accent)] transition">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 text-center">
          <p className="text-xs text-[var(--foreground-dim)]">
            © 2024 Manasa B. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}