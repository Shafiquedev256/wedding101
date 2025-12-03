"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className='relative min-h-screen bg-[#FDF8F5] flex flex-col'>
      {/* Navigation */}
      <nav
        className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "fixed bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
          {/* Logo */}
          <Image
            src='/logo.png'
            alt='Wedding Logo'
            width={40}
            height={40}
            className='object-contain'
          />

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8 items-center'>
            {[
              ["schedule", "SCHEDULE"],
              ["travel", "TRAVEL & STAY"],
              ["faq", "FAQ"],
              ["contact", "CONTACT"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className='text-sm tracking-wider hover:text-[#7D2E3D] transition-colors cursor-pointer'
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("rsvp")}
              className='bg-[#7D2E3D] text-white px-6 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors cursor-pointer'
            >
              RSVP
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden focus:outline-none'
          >
            <i className={`ri-menu-3-line text-3xl text-[#7D2E3D]`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className='flex flex-col bg-white border-t border-gray-200 px-6 py-4 gap-4'>
            {[
              ["schedule", "SCHEDULE"],
              ["travel", "TRAVEL & STAY"],
              ["faq", "FAQ"],
              ["contact", "CONTACT"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className='text-sm tracking-wider py-2 text-left hover:text-[#7D2E3D] transition-colors'
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("rsvp")}
              className='bg-[#7D2E3D] text-white px-4 py-2 text-sm tracking-wider hover:bg-[#5D1E2D] transition-colors mt-2'
            >
              RSVP
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className='flex flex-1 flex-col  items-center justify-center px-6 text-center'>
        <div className='max-w-4xl w-full space-y-6 md:space-y-8'>
          {/* Subtitle */}
          <div className='text-[#7D2E3D]  font-serif italic text-sm md:text-base tracking-widest'>
            The wedding of
          </div>

          {/* Main Heading */}
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className='flex md:flex-row md:space-x-3 flex-col justify-center items-center text-[#7D2E3D] text-6xl md:text-7xl lg:text-8xl leading-tight md:leading-none'
          >
            <div>Gemma</div>
            <div> & </div>
            <div>Jeﬄe</div>
          </h1>

          {/* Invitation Text */}
          <div className='flex flex-col justify-center items-center'>
            <div className='flex w-[80%]  flex-row justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-widest text-gray-600'>
              <div className='w-1/3'>YOU</div>
              <div className='w-1/3 '>ARE</div>
              <div className='w-1/3 '>INVITED</div>
            </div>
          </div>

          {/* Description */}
          <p className='text-sm md:text-base leading-relaxed text-gray-700 max-w-2xl mx-auto'>
            Each Blume perfume tells a story of love, beauty, and nature's
            elegance, carefully composed with the finest floral notes and
            complemented by warm, luxurious undertones. Our fragrances are
            designed to capture romance and timeless sophistication.
          </p>

          {/* Image with Date */}
          <div className='flex flex-col md:flex-row justify-center items-center md:space-x-7 gap-4 mt-6'>
            {/* Image */}
            <div className='  sm:w-64  sm:h-48  overflow-hidden '>
              <Image
                src='/firstdate.jpg'
                alt='Wedding'
                width={200}
                height={200}
                className='rounded-lg'
              />
            </div>

            {/* Date Box */}
            <div className='flex items-center justify-center gap-2 bg-white border-2 border-[#7D2E3D] rounded-lg shadow-md p-4'>
              <div className='text-2xl sm:text-3xl font-light text-[#7D2E3D]'>
                20
              </div>
              <div className='text-2xl sm:text-3xl text-[#7D2E3D]'>❤️</div>
              <div className='text-2xl sm:text-3xl font-light text-[#7D2E3D]'>
                DEC
              </div>
              <div className='text-2xl sm:text-3xl text-[#7D2E3D]'>❤️</div>
              <div className='text-2xl sm:text-3xl font-light text-[#7D2E3D]'>
                2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
