"use client";

import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className={`font-serif text-2xl transition-colors duration-300 cursor-pointer ${
            scrolled ? "text-[#3E2723]" : "text-white"
          }`}
        >
          S & A
        </button>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-12'>
          {["rsvp", "gallery", "schedule"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm tracking-[2px] uppercase transition-colors duration-300 cursor-pointer hover:text-[#C17B5C] ${
                scrolled ? "text-[#3E2723]" : "text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col gap-[5px]'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              scrolled ? "bg-[#3E2723]" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4'>
          {["rsvp", "gallery", "schedule"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className='text-[#3E2723] uppercase tracking-[2px] text-sm py-2 border-b border-gray-200'
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
