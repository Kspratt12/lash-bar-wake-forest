const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type Service = {
  name: string;
  note: string;
  duration: string;
  price: string;
  tag?: "popular" | "new" | "tip";
};

const SERVICES: Service[] = [
  { name: "Full Set", note: "Custom-mapped Classic, Hybrid, or Volume", duration: "1 hr", price: "$135", tag: "popular" },
  { name: "Foreign Fill", note: "Refresh of lashes from another studio", duration: "1 hr", price: "$100" },
  { name: "2-Week Fill", note: "Two-week refill", duration: "45 min", price: "$85" },
  { name: "3-Week Fill", note: "Three-week refill", duration: "1 hr", price: "$100" },
  { name: "Lash Removal", note: "Safe, full removal", duration: "30 min", price: "$50" },
  { name: "Cluster Lashes", note: "A quick set for the weekend", duration: "15 min", price: "$30", tag: "new" },
  { name: "Cluster Tutorial", note: "How to use your at-home kit", duration: "10 min", price: "$15", tag: "tip" },
];

function Tag({ tag }: { tag: NonNullable<Service["tag"]> }) {
  const map = {
    popular: { label: "Most Booked", cls: "bg-copper-900 text-cream" },
    new: { label: "New", cls: "bg-cardtan text-copper-900" },
    tip: { label: "DIY", cls: "bg-cream ring-1 ring-rule text-copper-900" },
  } as const;
  const t = map[tag];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] tracking-[0.22em] font-semibold uppercase ${t.cls}`}>
      {t.label}
    </span>
  );
}

export default function Schedule() {
  return (
    <section id="menu" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-2xl">
            Full service menu.
          </h2>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary magnetic self-start sm:self-end">
            Open Calendar
          </a>
        </div>

        <ul className="border-t border-rule">
          {SERVICES.map((s) => {
            const featured = s.tag === "popular";
            return (
              <li key={s.name} className={`border-b border-rule ${featured ? "bg-cream/60" : ""}`}>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto_auto] items-center gap-3 sm:gap-8 py-7 hover:bg-cream/80 transition-colors px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-lg`}
                >
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`font-display tracking-[-0.01em] leading-tight font-medium ${featured ? "text-[28px] sm:text-[34px]" : "text-[24px] sm:text-[28px]"} text-copper-900`}>
                        {s.name}
                      </span>
                      {s.tag && <Tag tag={s.tag} />}
                    </div>
                    <div className="text-ink-soft text-[14px] mt-1.5 font-light">
                      {s.note}
                    </div>
                  </div>
                  <div className="hidden sm:block text-ink-soft text-[12px] tracking-[0.22em] uppercase">
                    {s.duration}
                  </div>
                  <div className={`font-display tracking-[-0.01em] text-copper-900 ${featured ? "text-[32px]" : "text-[26px]"}`}>
                    {s.price}
                  </div>
                  <svg className="hidden sm:block text-copper-700" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
