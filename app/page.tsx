import Header from "@/components/Header";
import { Cursor, FilmGrain } from "@/components/Atmosphere";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Bento from "@/components/sections/Bento";
import Owner from "@/components/sections/Owner";
import Calendar from "@/components/sections/Calendar";
import About from "@/components/sections/About";
import Schedule from "@/components/sections/Schedule";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Lookbook from "@/components/sections/Lookbook";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import AreasServed from "@/components/sections/AreasServed";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FilmGrain />
      <Cursor />
      <Header />
      <Hero />
      <Marquee />
      <Bento />
      <Owner />
      <Calendar />
      <About />
      <Services />
      <Schedule />
      <Pricing />
      <Lookbook />
      <Contact />
      <Testimonials />
      <AreasServed />
      <Footer />
    </main>
  );
}
