import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Experience() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cool-landscape.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A130C]/85 via-[#1A130C]/55 to-[#1A130C]/40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-28 sm:py-40 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="text-white lg:col-span-7">
          <span className="eyebrow is-light">The Experience</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Not just an appointment.
            <br />
            <span className="script-italic is-light">Your hour.</span>
          </h2>
          <div className="section-divider is-light" />

          <p className="mt-10 text-white/85 max-w-lg text-[17px] leading-[1.8] font-light">
            A space to slow down, close your eyes, and leave a little softer,
            a little more confident, and a whole lot more put-together. One
            chair. One artist. One quiet hour that belongs entirely to you.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: "Private", v: "Single-suite studio" },
              { k: "Custom", v: "Hand-mapped sets" },
              { k: "Premium", v: "Pro-grade lashes" },
            ].map((b) => (
              <div key={b.k} className="border-l border-white/20 pl-4">
                <div className="font-display text-2xl tracking-[-0.01em] text-white">{b.k}</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-white/55 mt-1">
                  {b.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reserve Your Hour
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto rounded-[28px] overflow-hidden ring-1 ring-white/15 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/photo-7.png"
              alt="Inside the studio"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
