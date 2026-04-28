const ADDRESS = "2000 S Main Street, Wake Forest, NC";
const MAP_QUERY = encodeURIComponent(ADDRESS);

const ITEMS = [
  {
    label: "Address",
    value: "2000 S Main Street\nWake Forest, NC",
    aux: "By appointment only",
    href: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "Lashbarwakeforest@gmail.com",
    href: "mailto:Lashbarwakeforest@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(720) 402-9075",
    href: "tel:+17204029075",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@lashbarwakeforest",
    href: "https://www.instagram.com/lashbarwakeforest/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <span className="eyebrow">Visit</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Find your way
            <br />
            to <span className="script-italic">Lash Bar.</span>
          </h2>
          <div className="section-divider" />

          <ul className="mt-10 space-y-3 max-w-md">
            {ITEMS.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 px-5 py-4 rounded-2xl border border-rule hover:border-copper-300 hover:bg-cream2 transition-colors"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-cream2 grid place-items-center text-copper-700 group-hover:bg-white">
                    {it.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] tracking-[0.32em] uppercase text-ink-soft font-medium">
                      {it.label}
                    </div>
                    <div className="mt-0.5 font-display text-[19px] tracking-[-0.005em] text-ink whitespace-pre-line leading-tight">
                      {it.value}
                    </div>
                    {it.aux && (
                      <div className="text-xs text-ink-soft italic mt-0.5">
                        {it.aux}
                      </div>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative w-full aspect-square rounded-[28px] overflow-hidden border border-rule shadow-[0_30px_80px_-40px_rgba(26,19,12,0.4)]">
            <iframe
              title="Map of Lash Bar Wake Forest"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
