import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PullQuote() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cool-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2014]/55 via-[#2D2014]/40 to-[#2D2014]/65" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10 py-32 sm:py-44 text-cream">
        <Reveal>
          <div className="text-[12px] tracking-[0.32em] uppercase text-cardtan font-medium">
            From the chair
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="mt-7 max-w-4xl">
            <span aria-hidden className="font-display italic text-[80px] leading-none text-cardtan/60 block -mb-2">
              &ldquo;
            </span>
            <p className="font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.18] tracking-[-0.015em] font-medium">
              Switched after one set. Retention is unmatched. My fills last
              longer, the curl is gorgeous, and the whole vibe of the studio is
              <span className="script-italic is-light"> luxe.</span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={220} className="mt-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cardtan/30 grid place-items-center text-cardtan font-display text-[15px]">
            SL
          </div>
          <div>
            <div className="font-display text-[20px] tracking-[-0.005em]">
              Sara L.
            </div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-cardtan/80 mt-0.5 font-medium">
              Google Review
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
