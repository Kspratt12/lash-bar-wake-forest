import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function MeetArtist() {
  return (
    <section className="relative bg-cream2 py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(26,19,12,0.55)]">
              <Image
                src="/images/Julia-Ross.png"
                alt="Lash artist at Lash Bar Wake Forest"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:-right-10 hidden md:block">
              <div className="bg-ink text-white rounded-2xl px-7 py-5 shadow-[0_24px_60px_-30px_rgba(26,19,12,0.6)]">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/55">Founder & Lash Artist</div>
                <div className="mt-1 font-display text-xl tracking-[-0.01em]">Hand-mapped, every time.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="eyebrow">The Artist</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Crafted by
            <br />
            <span className="script-italic">hand &amp; heart.</span>
          </h2>
          <div className="section-divider" />

          <div className="mt-10 space-y-6 text-ink-soft text-base sm:text-[17px] leading-[1.8] font-light max-w-xl">
            <p>
              Every lash you wear out of this studio is mapped, isolated, and
              applied by a single trained artist. No assembly line. No rushed
              appointments. Just intentional time, on you.
            </p>
            <p>
              The goal is always the same: lashes that look like the best
              version of yours, feel weightless, and hold beautifully between
              fills.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Set
            </a>
            <a href="#pricing" className="btn-outline">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
