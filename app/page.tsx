"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/gallery";
import Hero from "./components/herosection";
import Navigation from "./components/navbar";
import LoveStory from "./components/ourStory";
import RSVP from "./components/Rsvp";
import Schedule from "./components/schedule";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className='bg-[#FAF8F5] min-h-screen text-[#3b2f2f] w-[100%] overflow-hidden'>
      <Navigation scrolled={scrolled} />
      <Hero />
      <LoveStory />
      <RSVP />
      <Gallery />
      <section className='bg-[#FAF8F5]'>
        <Schedule />
      </section>

      <Footer />
    </main>
  );
}
