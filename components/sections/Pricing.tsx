const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type Tier = {
  title: string;
  price: string;
  note: string;
  features: string[];
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    title: "First Set",
    price: "135",
    note: "Custom-mapped full set",
    features: ["Classic, Hybrid, or Volume", "Eye-shape mapping", "Aftercare guide"],
  },
  {
    title: "Membership Fill",
    price: "85",
    note: "Two-week refill",
    features: ["Keeps your set full", "Lash health check", "Priority calendar"],
    popular: true,
  },
  {
    title: "Coming In Hot",
    price: "100",
    note: "Foreign fill",
    features: ["Refresh of another studio's set", "Honest lash health read", "Welcome kit"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-3xl">
          Three ways to get started.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.title}
              className={`relative rounded-[24px] p-8 flex flex-col transition-colors duration-500 ${
                t.popular
                  ? "bg-copper-900 text-cream"
                  : "bg-cream text-ink"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cardtan text-copper-900 text-[10px] tracking-[0.22em] font-semibold uppercase">
                  Most Booked
                </div>
              )}

              <div className="text-[12px] tracking-[0.22em] uppercase opacity-65 font-medium">
                {t.title}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[24px] opacity-65">$</span>
                <span className="font-display text-[68px] leading-none tracking-[-0.025em] font-medium">{t.price}</span>
              </div>
              <div className={`mt-2 text-[14px] font-light ${t.popular ? "text-cream/75" : "text-ink-soft"}`}>
                {t.note}
              </div>

              <div className={`my-7 h-px ${t.popular ? "bg-cream/15" : "bg-rule"}`} />

              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] font-light">
                    <svg className={`mt-[3px] shrink-0 ${t.popular ? "text-cardtan" : "text-copper-500"}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  t.popular
                    ? "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 bg-cardtan text-copper-900 text-[12px] font-medium tracking-[0.02em] hover:bg-cream transition"
                    : "mt-8 btn-primary"
                }
              >
                Book
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-ink-soft text-[13.5px] font-light">
          Removal $50 &nbsp;·&nbsp; Cluster $30 &nbsp;·&nbsp; Cluster tutorial $15 &nbsp;·&nbsp; Three-week fill $100
        </p>
      </div>
    </section>
  );
}
