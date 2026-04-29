import Image from "next/image";

const SHOTS = [
  "/images/photo-2.png",
  "/images/photo-4.png",
  "/images/photo-5.png",
  "/images/photo-6.png",
  "/images/photo-8.png",
  "/images/photo-10.png",
  "/images/photo-14.png",
  "/images/photo-15.png",
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-3xl">
          Recent <span className="script-italic">work.</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {SHOTS.map((src) => (
            <figure key={src} className="relative overflow-hidden rounded-[18px]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt=""
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
