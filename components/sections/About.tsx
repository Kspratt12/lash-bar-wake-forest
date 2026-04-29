import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden">
            <Image
              src="/images/photo-3.png"
              alt="Inside Lash Bar Wake Forest"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={140} className="lg:col-span-7 lg:pt-10">
          <p className="font-display text-copper-900 text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.25] tracking-[-0.012em] font-light max-w-xl">
            One artist. One client at a time. The studio is small on purpose,
            so the hour you spend here actually feels like one.
          </p>

          <div className="mt-12 flex items-start gap-5 max-w-xl">
            <span className="block w-10 h-px bg-copper-400 mt-3 shrink-0" />
            <div className="space-y-5 text-ink-soft text-[16px] leading-[1.85] font-light">
              <p>
                Lash Bar is a private suite on S Main Street in Wake Forest,
                focused on lash extensions you don&rsquo;t have to think about
                between fills. Classic, Hybrid, and Volume sets, all custom-mapped
                to your eyes.
              </p>
              <p>
                Pro-grade lashes. Lash-safe adhesive. Soft music, dim lighting,
                no upsell. An hour that feels nothing like a salon.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
