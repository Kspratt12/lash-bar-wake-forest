import Reveal from "@/components/Reveal";

const FEATURES = [
  { title: "Custom mapping", body: "Every set is shaped to your eye, not a stencil." },
  { title: "Pro-grade lashes", body: "Cruelty-free, weightless, and built to hold." },
  { title: "Quiet hour", body: "One client at a time. Soft music, no rush." },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-copper-900 text-cream py-28 sm:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(220, 192, 154, 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.02] tracking-[-0.025em] font-medium max-w-3xl">
            A small studio.
            <br />
            A lot of detail.
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-3 gap-x-10 gap-y-14">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 130}>
              <div className="relative">
                <div className="font-display text-[80px] leading-none italic text-cream/15 tracking-[-0.03em]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 h-px bg-gradient-to-r from-cream/40 via-cream/15 to-transparent" />
                <h3 className="mt-6 font-display text-[28px] tracking-[-0.01em] font-medium">
                  {f.title}
                </h3>
                <p className="mt-3 text-cream/70 text-[16px] leading-[1.8] font-light max-w-sm">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
