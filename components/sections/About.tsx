import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden">
            <Image
              src="/images/photo-3.png"
              alt="Inside Lash Bar Wake Forest"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900">
            Lashes that look
            <br />
            <span className="script-italic">like the best version of yours.</span>
          </h2>

          <p className="mt-9 text-ink-soft text-[17px] leading-[1.85] font-light max-w-xl">
            One artist. One client at a time. Lash Bar is a small studio on
            S Main Street in Wake Forest, focused on lash extensions you don&rsquo;t
            have to think about between fills.
          </p>
          <p className="mt-5 text-ink-soft text-[17px] leading-[1.85] font-light max-w-xl">
            Classic, Hybrid, and Volume sets, all custom-mapped to your eyes.
            Pro-grade lashes, lash-safe adhesive, and an hour that feels nothing
            like a salon.
          </p>
        </div>
      </div>
    </section>
  );
}
