import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/75 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg tracking-tight text-[var(--accent)]">
          Manasa B
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="mailto:bmanasasharma@outlook.com"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--background)] rounded font-semibold text-sm hover:opacity-90 transition"
        >
          Reach Out
        </a>
      </div>
    </header>
  );
}
