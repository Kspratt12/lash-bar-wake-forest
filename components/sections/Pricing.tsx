const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type Tier = {
  title: string;
  price: string;
  unit: string;
  blurb: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    title: "Cluster Lashes",
    price: "$30",
    unit: "/ 15 min",
    blurb: "A quick, fluttery look for a special weekend or event.",
    features: ["Quick application", "Soft, natural finish", "Great for first-timers"],
    cta: "Book Clusters",
  },
  {
    title: "2-Week Fill",
    price: "$85",
    unit: "/ 45 min",
    blurb: "Flexibility without the subscription. Stay on schedule.",
    features: ["Refills your set", "Keeps full look", "Ideal every 2 weeks"],
    cta: "Book Fill",
  },
  {
    title: "Full Set",
    price: "$135",
    unit: "/ 1 hr",
    blurb: "Your custom-mapped set. Classic. Hybrid. Volume.",
    features: ["Custom eye mapping", "Premium pro-grade lashes", "Fill schedule included"],
    cta: "Book Full Set",
    popular: true,
  },
  {
    title: "Foreign Fill",
    price: "$100",
    unit: "/ 1 hr",
    blurb: "Refresh of lashes done elsewhere. Welcome home.",
    features: ["Lash health assessment", "Premium refresh", "Priority booking next visit"],
    cta: "Book Fill",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream2 py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Find your <span className="script-italic">rhythm.</span>
          </h2>
          <div className="section-divider center" />
          <p className="mt-8 text-ink-soft text-[17px] leading-[1.8] font-light">
            Whether you&rsquo;re here for a one-time set or a routine you can
            count on, there&rsquo;s a service that fits the way you live.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.title}
              className={`relative rounded-[24px] p-7 sm:p-8 flex flex-col transition-all duration-500 ${
                t.popular
                  ? "bg-ink text-white shadow-[0_40px_80px_-40px_rgba(26,19,12,0.6)] lg:scale-[1.04] z-10"
                  : "bg-white text-ink border border-rule hover:border-copper-300"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-copper-500 text-white text-[10px] tracking-[0.3em] font-semibold uppercase shadow-md">
                  Most Booked
                </div>
              )}

              <div className="text-[10px] tracking-[0.32em] uppercase font-medium opacity-70">
                {t.popular ? "Signature" : "Service"}
              </div>
              <h3 className="mt-2 font-display text-[28px] tracking-[-0.015em] leading-tight">
                {t.title}
              </h3>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[56px] tracking-[-0.025em] leading-none">{t.price}</span>
                <span className={`text-sm ${t.popular ? "text-white/70" : "text-ink-soft"}`}>
                  {t.unit}
                </span>
              </div>

              <p className={`mt-4 text-[14.5px] leading-[1.7] font-light ${t.popular ? "text-white/80" : "text-ink-soft"}`}>
                {t.blurb}
              </p>

              <div className={`my-6 h-px ${t.popular ? "bg-white/15" : "bg-rule"}`} />

              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`mt-[3px] shrink-0 ${t.popular ? "text-copper-300" : "text-copper-500"}`}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={t.popular ? "text-white/90" : "text-ink/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  t.popular
                    ? "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3.5 bg-white text-ink text-[10px] font-semibold tracking-[0.28em] uppercase hover:bg-cream2 transition"
                    : "mt-7 btn-primary"
                }
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-ink-soft text-sm font-light">
          Lash Removal — <span className="text-ink font-medium">$50</span>
          <span className="mx-3 text-rule">·</span>
          Cluster Tutorial — <span className="text-ink font-medium">$15</span>
        </p>
      </div>
    </section>
  );
}
