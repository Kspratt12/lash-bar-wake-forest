const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

const SERVICES = [
  { name: "Full Set", note: "Custom-mapped Classic, Hybrid, or Volume", duration: "1 hr", price: "$135" },
  { name: "Foreign Fill", note: "Refresh of lashes from another studio", duration: "1 hr", price: "$100" },
  { name: "2-Week Fill", note: "Two-week refill", duration: "45 min", price: "$85" },
  { name: "3-Week Fill", note: "Three-week refill", duration: "1 hr", price: "$100" },
  { name: "Lash Removal", note: "Safe, full removal", duration: "30 min", price: "$50" },
  { name: "Cluster Lashes", note: "A quick set for the weekend", duration: "15 min", price: "$30" },
  { name: "Cluster Tutorial", note: "How to use your at-home kit", duration: "10 min", price: "$15" },
];

export default function Schedule() {
  return (
    <section id="menu" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-2xl">
            Book your <span className="script-italic">appointment.</span>
          </h2>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary self-start sm:self-end">
            Open Calendar
          </a>
        </div>

        <ul className="border-t border-rule">
          {SERVICES.map((s) => (
            <li key={s.name} className="border-b border-rule">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto_auto] items-center gap-3 sm:gap-8 py-6 hover:bg-cream2/60 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
              >
                <div>
                  <div className="font-display text-[24px] sm:text-[28px] tracking-[-0.01em] text-copper-900 font-medium leading-tight">
                    {s.name}
                  </div>
                  <div className="text-ink-soft text-[14px] mt-1 font-light">
                    {s.note}
                  </div>
                </div>
                <div className="hidden sm:block text-ink-soft text-[12px] tracking-[0.22em] uppercase">
                  {s.duration}
                </div>
                <div className="text-copper-800 font-display text-[26px] tracking-[-0.01em]">
                  {s.price}
                </div>
                <svg className="hidden sm:block text-copper-700" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
