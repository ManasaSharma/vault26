"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#lab", label: "Lab" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba((8,8,12,0.95))] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.05)]" style={{ padding: "16px 0" }}>
      <div className="w-full flex items-center justify-center px-4 md:px-12 overflow-x-auto">
        <nav>
          <ul className="flex items-center gap-4 sm-gap6  md:gap-8 mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.05em] white-space-nowrap">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`transition-all duration-200 ${isActive
                      ? "text-[var(--accent2)] font-semibold"
                      : "text-[var(--ink-dim)] hover:text-[var(--ink-soft)]"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
