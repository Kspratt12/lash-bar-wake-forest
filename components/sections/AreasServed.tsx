import Image from "next/image";

const AREAS = [
  { name: "Wake Forest", note: "27587 · S Main Street studio" },
  { name: "Rolesville", note: "10 minutes" },
  { name: "Youngsville", note: "15 minutes" },
  { name: "North Raleigh", note: "Wakefield, Falls of Neuse" },
  { name: "Heritage", note: "Heritage Wake Forest" },
  { name: "Forestville", note: "Off Capital Boulevard" },
];

export default function AreasServed() {
  return (
    <section id="areas" className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(26,19,12,0.4)]">
            <Image
              src="/images/cool-1.png"
              alt="Lash extension close-up — Lash Bar Wake Forest client"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5">
              <span className="chip bg-white/90 backdrop-blur-sm">Wake Forest, NC</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="eyebrow">Areas We Serve</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Lashes for the
            <br />
            <span className="script-italic">Wake Forest area.</span>
          </h2>
          <div className="section-divider" />

          <p className="mt-8 text-ink-soft text-[17px] leading-[1.8] font-light max-w-md">
            The studio sits on S Main Street in Wake Forest, just minutes from
            Rolesville, Youngsville, and North Raleigh. Easy parking, by
            appointment only.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {AREAS.map((a) => (
              <div
                key={a.name}
                className="flex items-baseline justify-between gap-4 px-5 py-4 rounded-2xl bg-cream2 border border-rule transition-colors hover:border-copper-300"
              >
                <div className="font-display text-xl tracking-[-0.01em] text-ink">
                  {a.name}
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft text-right">
                  {a.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
