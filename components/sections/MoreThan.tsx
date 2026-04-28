import Image from "next/image";

export default function MoreThan() {
  return (
    <section className="relative bg-cream2 py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">The Studio</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            More than <span className="script-italic">a lash bar.</span>
          </h2>
          <div className="section-divider center" />
          <p className="mt-8 text-ink-soft text-[17px] leading-[1.8] font-light">
            Beauty, calm, and confidence woven into every appointment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <figure className="relative col-span-2 row-span-2 rounded-[24px] overflow-hidden bg-white ring-1 ring-rule">
            <div className="relative aspect-square">
              <Image
                src="/images/photo-9.png"
                alt="Detail shot of a finished lash set"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-5 left-5">
              <span className="chip bg-white/90 backdrop-blur-sm">Beauty</span>
            </figcaption>
          </figure>

          <figure className="relative rounded-[24px] overflow-hidden bg-white ring-1 ring-rule">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/photo-11.png"
                alt="Studio details"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4">
              <span className="chip bg-white/90 backdrop-blur-sm">Calm</span>
            </figcaption>
          </figure>

          <figure className="relative rounded-[24px] overflow-hidden bg-white ring-1 ring-rule">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/photo-12.png"
                alt="Lash artistry"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4">
              <span className="chip bg-white/90 backdrop-blur-sm">Confidence</span>
            </figcaption>
          </figure>

          <figure className="relative col-span-2 rounded-[24px] overflow-hidden bg-white ring-1 ring-rule">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/cool-landscape-2.png"
                alt="Studio interior"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4">
              <span className="chip bg-white/90 backdrop-blur-sm">Atelier</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
