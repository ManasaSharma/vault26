export default function Footer() {
    return (
        <footer className="border-t border-[#374151]/40 bg-[rgba(19,19,25,0.6)]">
            <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-3">Manasa B</h3>
                        <p className="text-sm text-[#9ca3af]">
                            Frontend engineer building scalable systems at Intuit.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--ink)] mb-3 text-sm uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-[#9ca3af]">
                            <li><a href="#skills" className="hover:text-[var(--accent)] transition">Skills</a></li>
                            <li><a href="#experience" className="hover:text-[var(--accent)] transition">Experience</a></li>
                            <li><a href="#lab" className="hover:text-[var(--accent)] transition">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--ink)] mb-3 text-sm uppercase tracking-wide">Connect</h4>
                        <ul className="space-y-2 text-sm text-[#9ca3af]">
                            <li><a href="mailto:bmanasasharma@outlook.com" className="hover:text-[var(--accent)] transition">Email</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)] transition">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)] transition">GitHub</a></li>
                            <li><a href="#contact" className="hover:text-[var(--accent)] transition">Get in Touch</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#374151]/40 pt-6 text-center">
                    <p className="text-xs text-[#6b7c8f]">
                        © 2026 Manasa B. Built with Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}