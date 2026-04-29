const PHRASES = [
  "Soft life starts with effortless beauty",
  "Wake up. Skip the mascara.",
  "Wake Forest, NC",
  "By appointment only",
  "Hand-mapped sets",
  "2000 S Main Street",
];

function Petal() {
  return (
    <svg className="w-4 h-4 shrink-0 text-cream/55" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function Marquee() {
  const repeated = [...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <section className="bg-copper-900 text-cream py-8 overflow-hidden border-y border-copper-800/40">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {repeated.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-9 px-9 shrink-0">
            <span className="font-display italic text-[28px] sm:text-[34px] tracking-[-0.005em] text-cream/90">
              {item}
            </span>
            <Petal />
          </div>
        ))}
      </div>
    </section>
  );
}
