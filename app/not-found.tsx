import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/images/lash-bar-wake-forest-logo.png"
        alt="Lash Bar Wake Forest"
        width={120}
        height={120}
        className="w-24 h-24 object-contain"
      />
      <div className="mt-8 text-[11px] tracking-[0.4em] uppercase text-copper-700 font-medium">
        404 · Page not found
      </div>
      <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-[-0.025em] font-medium text-copper-900">
        This page is on
        <br />
        <span className="italic font-light">a fill break.</span>
      </h1>
      <p className="mt-7 max-w-md text-ink-soft text-[16px] leading-[1.85] font-light">
        The page you&rsquo;re looking for moved or never existed. Head back to the
        studio.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-copper-900 text-cream font-medium text-[13px] hover:bg-copper-800 transition"
      >
        Back to Home
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </Link>
    </main>
  );
}
