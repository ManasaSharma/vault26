interface HeroSectionProps {
  eyebrow: string;
  avatarEmoji: string;
  name: string;
  tagline: string;
  bio: string[];
  ctaHref: string;
  ctaLabel: string;
  resumeHref: string;
  resumeLabel: string;
}

export default function HeroSection({
  eyebrow,
  avatarEmoji,
  name,
  tagline,
  bio,
  ctaHref,
  ctaLabel,
  resumeHref,
  resumeLabel,
}: HeroSectionProps) {
  return (
    <div className="w-full text-left flex flex-col items-start gap-0">
      <div
        className="inline-flex items-center gap-3 mb-8 md:mb-4 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full font-[var(--font-mono)] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] hover:border-indigo-500/50 transition-colors"
        style={{animation: "slide-in-left 0.6s ease-out"}}
      >
        <span aria-hidden="true" className="text-[12px] md:text-[13px] leading-none">{"</>"}</span>
        <span className="leading-none">{eyebrow}</span>
      </div>

      <div
        className="mb-6 md:mb-8"
        style={{animation: "fade-in-up 0.7s ease-out 0.1s both"}}
      >
        <h1 className="font-[var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight text-[var(--ink)] leading-[1.15] mb-2">
          {name.split(" ")[0]} <span className="inline">{name.split(" ")[1]}</span>
          <span
            className="text-4xl md:text-5xl inline-block ml-2 md:ml-3"
            style={{animation: "float 3s ease-in-out infinite", animationDelay: "0.5s"}}
            aria-hidden="true"
          >
            {avatarEmoji}
          </span>
        </h1>
        <div className="flex gap-1.5 mt-3 md:mt-4">
          <div className="h-0.5 w-10 bg-[var(--accent)]"></div>
          <div className="h-0.5 w-5 bg-[var(--accent2)]"></div>
        </div>
      </div>

      <p
        className="text-base md:text-lg text-[#9ca3af] font-[400] mb-7 md:mb-9 leading-[1.6] max-w-4xl"
        style={{animation: "fade-in-up 0.7s ease-out 0.2s both"}}
      >
        {tagline}
      </p>

      {bio.map((paragraph, i) => {
        const highlightedParagraph = paragraph
          .replace(/shipping fast/g, '<span class="text-[var(--accent)] font-[600]">shipping fast</span>')
          .replace(/scaling systems/g, '<span class="text-[var(--accent2)] font-[600]">scaling systems</span>')
          .replace(/enabling teams/g, '<span class="text-[var(--accent3)] font-[600]">enabling teams</span>')
          .replace(/built observability systems/g, '<span class="text-[var(--accent2)] font-[600]">built observability systems</span>')
          .replace(/React migrations/g, '<span class="text-[var(--accent)] font-[600]">React migrations</span>');

        return (
          <p
            key={i}
            className={`text-sm md:text-base text-[#b4bcc8] leading-[1.65] font-[400] max-w-4xl ${
              i === bio.length - 1 ? "mb-8 md:mb-10" : "mb-4 md:mb-5"
            }`}
            style={{animation: `fade-in-up 0.7s ease-out ${0.3 + i * 0.1}s both`}}
            dangerouslySetInnerHTML={{ __html: highlightedParagraph }}
          />
        );
      })}

      <div
        className="flex flex-wrap justify-start gap-4 md:gap-5 mt-4 md:mt-5"
        style={{animation: "fade-in-up 0.7s ease-out 0.5s both"}}
      >
        <a
          href={ctaHref}
          className="group relative inline-flex items-center justify-center px-9 py-3.5 md:px-11 md:py-4 rounded-lg font-[600] text-sm md:text-[15px] leading-none text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-950/40 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/40 hover:brightness-110 active:scale-95 whitespace-nowrap"
        >
          {ctaLabel}
        </a>
        <a
          href={resumeHref}
          className="inline-flex items-center justify-center px-9 py-3.5 md:px-11 md:py-4 rounded-lg font-[600] text-sm md:text-[15px] leading-none text-[var(--ink)] border border-white/15 bg-white/[0.03] backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.07] active:scale-95 whitespace-nowrap"
        >
          {resumeLabel}
        </a>
      </div>
    </div>
  );
}

