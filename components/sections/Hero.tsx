import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

const TREATMENTS = [
  { label: "Classic", img: "/images/photo-2.png", angle: -36 },
  { label: "Hybrid", img: "/images/photo-4.png", angle: -24 },
  { label: "Volume", img: "/images/photo-5.png", angle: -12 },
  { label: "Foreign Fill", img: "/images/photo-8.png", angle: 0 },
  { label: "2-Week Fill", img: "/images/photo-10.png", angle: 12 },
  { label: "3-Week Fill", img: "/images/photo-14.png", angle: 24 },
  { label: "Cluster Lashes", img: "/images/photo-15.png", angle: 36 },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-0 px-3 sm:px-5">
      <div className="relative rounded-[36px] sm:rounded-[40px] overflow-hidden min-h-[88svh] sm:min-h-[92svh] flex flex-col">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/photo-1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2014]/40 via-[#2D2014]/15 to-[#2D2014]/65" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 pt-20 pb-12">
          <div className="animate-lift-1">
            <h1 className="font-display text-white text-[clamp(2.6rem,7.4vw,6rem)] leading-[1.02] tracking-[-0.02em] font-medium max-w-5xl">
              Wake up,
              <br />
              <span className="script-italic is-light font-normal">skip the mascara.</span>
            </h1>
          </div>

          <p className="animate-lift-2 mt-7 text-white/85 max-w-md text-[15px] sm:text-[17px] leading-[1.7] font-light">
            Soft life starts with effortless beauty. Classic, Hybrid, and Volume
            lash extensions in Wake Forest, NC.
          </p>

          <div className="animate-lift-3 mt-9 flex flex-col sm:flex-row items-center gap-4">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </a>
            <a href="#pricing" className="btn-ghost">
              See Pricing
            </a>
          </div>
        </div>

        <div className="relative z-10 pb-10 sm:pb-14">
          <div className="hidden md:flex items-end justify-center gap-2 px-8 max-w-6xl mx-auto">
            {TREATMENTS.map((t) => (
              <a
                key={t.label}
                href="#services"
                className="treatment-chip group hover:bg-white/95 transition-colors"
                style={{
                  transform: `rotate(${t.angle}deg) translateY(${
                    Math.abs(t.angle) * 0.5
                  }px)`,
                }}
              >
                <span className="av relative">
                  <Image src={t.img} alt="" fill sizes="24px" className="object-cover" />
                </span>
                {t.label}
              </a>
            ))}
          </div>

          <div className="md:hidden overflow-x-auto px-6 -mx-3 no-scrollbar">
            <div className="flex gap-2 w-max">
              {TREATMENTS.map((t) => (
                <a key={t.label} href="#services" className="treatment-chip">
                  <span className="av relative">
                    <Image src={t.img} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                  {t.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center gap-2 text-white/75">
            <svg className="petal-icon text-white/85" viewBox="0 0 24 24"><path d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z"/><circle cx="12" cy="12" r="1.6"/></svg>
            <span className="text-[11px] tracking-[0.32em] uppercase font-light">Wake Forest, NC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
