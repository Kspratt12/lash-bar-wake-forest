const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A130C]/30 via-[#1A130C]/25 to-[#1A130C]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A130C]/55 via-transparent to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 pt-40 sm:pt-48 pb-28 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-3xl">
          <div className="animate-lift">
            <span className="eyebrow is-light">Boutique Lash Atelier · Wake Forest</span>
          </div>

          <h1 className="animate-lift-1 mt-6 font-display text-white text-[clamp(2.6rem,7.2vw,5.5rem)] leading-[0.98] tracking-[-0.025em] font-medium">
            Wake up
            <br />
            <span className="script-italic is-light">effortlessly beautiful.</span>
          </h1>

          <p className="animate-lift-2 mt-8 text-white/85 max-w-xl text-base sm:text-lg leading-[1.7] font-light">
            A private studio where every set is hand-mapped to your eye shape,
            your style, and the way you want to wake up. Classic. Hybrid.
            Volume. Effortless.
          </p>

          <div className="animate-lift-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reserve Your Set
            </a>
            <a href="#services" className="btn-ghost">
              The Studio
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2.5 text-white/75">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        <span className="text-[10px] tracking-[0.4em] font-medium uppercase">Scroll</span>
      </div>
    </section>
  );
}
