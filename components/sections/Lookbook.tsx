import Image from "next/image";

const SHOTS = [
  { src: "/images/photo-2.png", alt: "Classic lash extension look" },
  { src: "/images/photo-4.png", alt: "Hybrid lash extension look" },
  { src: "/images/photo-5.png", alt: "Volume lash extension look" },
  { src: "/images/photo-6.png", alt: "Soft natural lash set" },
  { src: "/images/photo-8.png", alt: "Lash artist at work" },
  { src: "/images/photo-10.png", alt: "Studio detail" },
  { src: "/images/photo-14.png", alt: "Custom-mapped lash set" },
  { src: "/images/photo-15.png", alt: "Boutique studio interior" },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="eyebrow">Lookbook</span>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
              Every set, <span className="script-italic">hand-mapped.</span>
            </h2>
            <div className="section-divider" />
          </div>
          <p className="text-ink-soft text-[17px] leading-[1.8] font-light max-w-md">
            A look at recent work — Classic, Hybrid, and Volume sets shaped to
            real eyes, real lifestyles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className="relative overflow-hidden rounded-[20px] bg-white ring-1 ring-rule"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
