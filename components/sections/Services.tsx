const FEATURES = [
  { title: "Custom mapping", body: "Every set is shaped to your eye, not a stencil." },
  { title: "Pro-grade lashes", body: "Cruelty-free, weightless, and built to hold." },
  { title: "Quiet hour", body: "One client at a time. Soft music, no rush." },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-3xl">
          A small studio, with a <span className="script-italic">lot of detail.</span>
        </h2>

        <div className="mt-16 grid sm:grid-cols-3 gap-x-10 gap-y-10">
          {FEATURES.map((f, i) => (
            <div key={f.title}>
              <div className="font-display text-copper-700 text-[15px] tracking-[0.02em] italic">
                {String(i + 1).padStart(2, "0")} / 03
              </div>
              <h3 className="mt-4 font-display text-[26px] tracking-[-0.01em] text-copper-900 font-medium">
                {f.title}
              </h3>
              <p className="mt-3 text-ink-soft text-[15.5px] leading-[1.75] font-light max-w-sm">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
