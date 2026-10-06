interface ContactSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  blurb: string;
  email: string;
  linkedinHref: string;
  linkedinLabel: string;
}

export default function ContactSection({
  id,
  eyebrow,
  title,
  blurb,
  email,
  linkedinHref,
  linkedinLabel,
}: ContactSectionProps) {
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
        className="font-[var(--font-display)] text-3xl md:text-5xl font-bold text-[var(--ink)] mb-4 md:mb-5"
        style={{ animation: "fade-in-up 0.7s ease-out 0.1s both" }}
      >
        {title}
      </h2>
      <p
        className="text-sm md:text-base text-[#9ca3af] mb-8 md:mb-10 max-w-xl"
        style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}
      >
        {blurb}
      </p>

      <div
        className="flex flex-wrap gap-4"
        style={{ animation: "fade-in-up 0.7s ease-out 0.3s both" }}
      >
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-9 py-3.5 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/50 transition-all duration-200 active:scale-95"
        >
          Email Me
        </a>
        <a
          href={linkedinHref}
          className="inline-flex items-center justify-center px-9 py-3.5 border border-gray-600 text-white rounded-lg font-semibold text-sm hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-200 active:scale-95"
        >
          {linkedinLabel}
        </a>
      </div>
    </section>
  );
}

