const FEATURES = [
  {
    title: "Hand-mapped",
    body:
      "Every set is custom mapped to your eye shape so the lashes flatter you, not the trend.",
  },
  {
    title: "Premium products",
    body:
      "High-grade adhesives and cruelty-free lashes that hold beautifully and feel weightless.",
  },
  {
    title: "Boutique by design",
    body:
      "Single-suite studio. Quiet music, soft lighting, no rushing — just intentional time on your eyes.",
  },
  {
    title: "All eyes welcome",
    body:
      "First-timers, longtime wearers, hooded, monolid, mature lashes — we shape every set to fit you.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink text-white py-28 sm:py-40 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-10 lg:gap-20">
        <div className="lg:col-span-5">
          <span className="eyebrow is-light">The Approach</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Not your average
            <br />
            <span className="script-italic is-light">lash bar.</span>
          </h2>
          <div className="section-divider is-light" />
          <p className="mt-8 text-white/70 text-[17px] leading-[1.8] font-light max-w-md">
            Classic, Hybrid, and Volume extensions, applied with the kind of
            precision and care that turns a beauty appointment into a part of
            your weekly reset.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="group">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-copper-300 text-[20px] tracking-[-0.01em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[26px] tracking-[-0.015em]">{f.title}</h3>
              </div>
              <div className="mt-3 ml-9 h-px bg-gradient-to-r from-white/15 to-transparent" />
              <p className="mt-4 ml-9 text-white/65 leading-[1.75] text-[15px] font-light">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
