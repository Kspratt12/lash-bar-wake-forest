import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="eyebrow">The Studio</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            A space where lashes
            <br />
            meet <span className="script-italic">quiet luxury.</span>
          </h2>
          <div className="section-divider" />

          <div className="mt-10 space-y-6 text-ink-soft text-base sm:text-[17px] leading-[1.8] font-light max-w-xl">
            <p>
              Lash Bar Wake Forest was built around a single idea: that getting
              lashes should feel like a slow exhale, not an errand. Every set,
              fill, and removal is shaped to your eyes and your lifestyle.
            </p>
            <p>
              The studio runs on intention. Premium adhesives. Cruelty-free
              lashes. Quiet music, soft lighting, and a single chair so the
              hour belongs to you alone.
            </p>
            <p>
              Whether you&rsquo;re here for your first set or your hundredth fill,
              this is a place to close your eyes and leave looking like the
              version of yourself you&rsquo;ve been chasing.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div>
              <div className="font-display text-3xl tracking-[-0.02em]">5.0</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ink-soft mt-1">Google Rated</div>
            </div>
            <div className="w-[1px] h-10 bg-rule" />
            <div>
              <div className="font-display text-3xl tracking-[-0.02em]">3</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ink-soft mt-1">Lash Styles</div>
            </div>
            <div className="w-[1px] h-10 bg-rule" />
            <div>
              <div className="font-display text-3xl tracking-[-0.02em]">1:1</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ink-soft mt-1">Private Suite</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden">
              <Image
                src="/images/photo-3.png"
                alt="Inside Lash Bar Wake Forest"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -left-10 bg-cream rounded-2xl px-7 py-6 shadow-[0_24px_60px_-30px_rgba(26,19,12,0.4)] border border-rule max-w-[260px]">
              <span className="chip">Wake Forest, NC</span>
              <div className="mt-3 font-display text-xl tracking-[-0.01em]">
                Boutique by design.
              </div>
              <div className="mt-1 text-sm text-ink-soft">
                One artist. One client. One quiet hour.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
