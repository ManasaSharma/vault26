export default function Contact() {
  return (
    <div className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Let's Talk</h1>
        <p className="text-xl text-[var(--foreground-secondary)] mb-12 leading-relaxed">
          I'm always interested in new projects, technical challenges, and collaborations. Whether you want to discuss frontend architecture, build a product, or just exchange ideas—reach out.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:bmanasasharma@outlook.com"
            className="p-6 bg-[var(--background-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition group"
          >
            <div className="text-2xl mb-2">✉️</div>
            <h3 className="font-bold mb-1 group-hover:text-[var(--accent)]">Email</h3>
            <p className="text-sm text-[var(--foreground-dim)]">bmanasasharma@outlook.com</p>
          </a>

          <a
            href="#"
            className="p-6 bg-[var(--background-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition group"
          >
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-bold mb-1 group-hover:text-[var(--accent)]">LinkedIn</h3>
            <p className="text-sm text-[var(--foreground-dim)]">Connect with me</p>
          </a>

          <a
            href="#"
            className="p-6 bg-[var(--background-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition group"
          >
            <div className="text-2xl mb-2">👨‍💻</div>
            <h3 className="font-bold mb-1 group-hover:text-[var(--accent)]">GitHub</h3>
            <p className="text-sm text-[var(--foreground-dim)]">View my repositories</p>
          </a>

          <a
            href="#"
            className="p-6 bg-[var(--background-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition group"
          >
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-bold mb-1 group-hover:text-[var(--accent)]">Schedule a Call</h3>
            <p className="text-sm text-[var(--foreground-dim)]">Book a time</p>
          </a>
        </div>

        {/* Quick Response */}
        <div className="bg-[var(--background-secondary)] p-8 rounded border border-[var(--border)]">
          <p className="text-[var(--foreground-dim)] mb-4">
            I typically respond within 24 hours. Feel free to reach out for any inquiries!
          </p>
          <div className="flex justify-center gap-4">
            <span className="text-sm text-[var(--accent)]">Open to opportunities</span>
            <span className="text-[var(--border)]">•</span>
            <span className="text-sm text-[var(--accent)]">Available for consulting</span>
          </div>
        </div>
      </div>
    </div>
  );
}