type Review = {
  name: string;
  initials: string;
  body: string;
  source: string;
};

const REVIEWS: Review[] = [
  {
    name: "Brittany R.",
    initials: "BR",
    body:
      "Lash Bar Wake Forest is my new go-to. The space is calming, the work is detailed, and my lashes have never looked this good. I leave every appointment feeling like myself, just polished.",
    source: "Google Review",
  },
  {
    name: "Maddie K.",
    initials: "MK",
    body:
      "I was nervous to try extensions for the first time and the whole experience made me so comfortable. The mapping process is incredible, my lashes feel like nothing, and I get compliments every single day.",
    source: "Google Review",
  },
  {
    name: "Sara L.",
    initials: "SL",
    body:
      "The retention is unmatched. I’ve been going elsewhere for years and switched after one set here. My fills last longer, the curl is gorgeous, and the whole vibe of the studio is luxe.",
    source: "Google Review",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-copper-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-cream2 py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Words From Clients</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Hear from our <span className="script-italic">lash bar.</span>
          </h2>
          <div className="section-divider center" />
          <div className="mt-8 inline-flex items-center gap-3">
            <Stars />
            <span className="text-ink-soft text-sm font-light">5.0 on</span>
            <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            <span className="text-ink-soft text-sm font-light">Google</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="bg-white rounded-[24px] p-8 border border-rule hover:border-copper-300 transition-colors"
            >
              <Stars />
              <p className="mt-5 text-ink/85 text-[16px] leading-[1.75] font-light">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-rule flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-cream2 grid place-items-center text-copper-700 font-display font-medium text-[15px]">
                  {r.initials}
                </div>
                <div>
                  <div className="font-display text-[17px] tracking-[-0.005em] text-ink">
                    {r.name}
                  </div>
                  <div className="text-ink-soft text-[11px] tracking-[0.18em] uppercase mt-0.5">
                    {r.source}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
