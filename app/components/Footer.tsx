"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id='footer'
      className='bg-linear-to-br from-[#FDF8F5] to-[#FBEDEC] py-20 px-6'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Monogram */}
          <div className='text-center md:text-left'>
            <div className='flex items-center'>
              <Image
                src='/logo.png'
                alt='Wedding Logo'
                width={60}
                height={60}
                className='object-contain'
              />
            </div>
            <p className='text-xs uppercase tracking-[0.2em] text-gray-600'>
              September 20, 2025
            </p>
          </div>

          {/* Quick Links */}
          <div className='text-center'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-gray-700 mb-6 font-medium'>
              Helpful Links
            </h4>

            <ul className='space-y-3'>
              <li>
                <a
                  href='/'
                  className='text-[#7D2E3D] hover:text-gray-800 transition-colors duration-300 text-sm font-light hover:underline cursor-pointer'
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href='https://maps.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#7D2E3D] hover:text-gray-800 transition-colors duration-300 text-sm font-light hover:underline cursor-pointer'
                >
                  Travel Info
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='text-[#7D2E3D] hover:text-gray-800 transition-colors duration-300 text-sm font-light hover:underline cursor-pointer'
                >
                  Gift Registry
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className='text-[#7D2E3D] hover:text-gray-800 transition-colors duration-300 text-sm font-light hover:underline cursor-pointer'
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className='text-center md:text-right'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-gray-700 mb-6 font-medium'>
              Share Our Joy
            </h4>

            <p
              className='text-2xl mb-6 text-[#7D2E3D]'
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              #GemmaAndJeﬄe2025
            </p>

            <div className='flex justify-center md:justify-end gap-4'>
              {/* Instagram */}
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#7D2E3D] flex items-center justify-center text-[#7D2E3D] hover:bg-[#7D2E3D] hover:text-white transition-all duration-300'
              >
                <i className='ri-instagram-line text-lg'></i>
              </a>

              {/* Facebook */}
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#7D2E3D] flex items-center justify-center text-[#7D2E3D] hover:bg-[#7D2E3D] hover:text-white transition-all duration-300'
              >
                <i className='ri-facebook-fill text-lg'></i>
              </a>

              {/* Pinterest */}
              <a
                href='https://pinterest.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#7D2E3D] flex items-center justify-center text-[#7D2E3D] hover:bg-[#7D2E3D] hover:text-white transition-all duration-300'
              >
                <i className='ri-pinterest-fill text-lg'></i>
              </a>

              {/* Email */}
              <a
                href='/'
                className='w-10 h-10 rounded-full border-2 border-[#7D2E3D] flex items-center justify-center text-[#7D2E3D] hover:bg-[#7D2E3D] hover:text-white transition-all duration-300'
              >
                <i className='ri-mail-line text-lg'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-[#7D2E3D]/20'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-xs text-gray-600'>
              © 2025 Gemma & Jeﬄe. All rights reserved.
            </p>

            <p
              className='text-sm text-[#7D2E3D]'
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Made with ♡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
