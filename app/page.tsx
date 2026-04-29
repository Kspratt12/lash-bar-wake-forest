import Header from "@/components/Header";
import { FilmGrain, MagneticInit } from "@/components/Atmosphere";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Lookbook from "@/components/sections/Lookbook";
import Owner from "@/components/sections/Owner";
import Calendar from "@/components/sections/Calendar";
import About from "@/components/sections/About";
import Editorial from "@/components/sections/Editorial";
import Schedule from "@/components/sections/Schedule";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import AreasServed from "@/components/sections/AreasServed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FilmGrain />
      <MagneticInit />
      <Header />
      <Hero />
      <Marquee />
      <Lookbook />
      <Owner />
      <Calendar />
      <About />
      <Editorial />
      <Services />
      <Schedule />
      <Pricing />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  );
}
