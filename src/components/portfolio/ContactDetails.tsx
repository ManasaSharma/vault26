interface ContactDetailsProps {
  location: string;
  email: string;
  linkedinHref: string;
  linkedinLabel: string;
}

export default function ContactDetails({
  location,
  email,
  linkedinHref,
  linkedinLabel,
}: ContactDetailsProps) {
  return (
    <div
      className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6"
      style={{animation: "fade-in-up 0.7s ease-out 0.4s both"}}
    >
      <div className="flex items-center gap-2 text-[#9ca3af] text-[13px] md:text-[14px]">
        <span aria-hidden="true">📍</span>
        <span>{location}</span>
      </div>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-[var(--accent2)] font-[500] text-[13px] md:text-[14px] hover:opacity-70 transition-opacity"
      >
        <span aria-hidden="true">✉️</span>
        <span className="font-[var(--font-mono)]">{email}</span>
      </a>
      <a
        href={linkedinHref}
        className="flex items-center gap-2 text-[var(--accent2)] font-[500] text-[13px] md:text-[14px] hover:opacity-70 transition-opacity"
      >
        <span aria-hidden="true">🔗</span>
        <span>{linkedinLabel}</span>
      </a>
    </div>
  );
}

