import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MeetArtist from "@/components/sections/MeetArtist";
import Experience from "@/components/sections/Experience";
import Schedule from "@/components/sections/Schedule";
import LashCare from "@/components/sections/LashCare";
import MoreThan from "@/components/sections/MoreThan";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Lookbook from "@/components/sections/Lookbook";
import Testimonials from "@/components/sections/Testimonials";
import AreasServed from "@/components/sections/AreasServed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MeetArtist />
      <Experience />
      <Schedule />
      <Services />
      <Pricing />
      <Lookbook />
      <MoreThan />
      <LashCare />
      <Testimonials />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  );
}
