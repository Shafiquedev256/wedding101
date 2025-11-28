"use client";
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
      className='bg-gradient-to-br from-[#FAF7F2] to-[#F4E4E6] py-20 px-6'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Monogram */}
          <div className='text-center md:text-left'>
            <div
              className='text-6xl font-serif text-[#D4AF77] mb-4'
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              S & A
            </div>
            <p className='text-xs uppercase tracking-[0.2em] text-[#6B6B6B]'>
              September 20, 2025
            </p>
          </div>
          {/* Quick Links */}
          <div className='text-center'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-[#3A3A3A] mb-6 font-medium'>
              Helpful Links
            </h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#D4AF77] hover:text-[#3A3A3A] transition-colors duration-300 text-sm font-light hover:underline cursor-pointer whitespace-nowrap'
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href='https://maps.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#D4AF77] hover:text-[#3A3A3A] transition-colors duration-300 text-sm font-light hover:underline cursor-pointer whitespace-nowrap'
                >
                  Travel Info
                </a>
              </li>
              <li>
                <a
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#D4AF77] hover:text-[#3A3A3A] transition-colors duration-300 text-sm font-light hover:underline cursor-pointer whitespace-nowrap'
                >
                  Gift Registry
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("rsvp")}
                  className='text-[#D4AF77] hover:text-[#3A3A3A] transition-colors duration-300 text-sm font-light hover:underline cursor-pointer whitespace-nowrap'
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          {/* Social */}
          <div className='text-center md:text-right'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-[#3A3A3A] mb-6 font-medium'>
              Share Our Joy
            </h4>
            <p
              className='text-2xl mb-6 text-[#D4AF77]'
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              #SophiaAndAlexander2025
            </p>
            <div className='flex justify-center md:justify-end gap-4'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#D4AF77] flex items-center justify-center text-[#D4AF77] hover:bg-[#D4AF77] hover:text-white transition-all duration-300 cursor-pointer'
              >
                <i className='ri-instagram-line text-lg'></i>
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#D4AF77] flex items-center justify-center text-[#D4AF77] hover:bg-[#D4AF77] hover:text-white transition-all duration-300 cursor-pointer'
              >
                <i className='ri-facebook-fill text-lg'></i>
              </a>
              <a
                href='https://pinterest.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border-2 border-[#D4AF77] flex items-center justify-center text-[#D4AF77] hover:bg-[#D4AF77] hover:text-white transition-all duration-300 cursor-pointer'
              >
                <i className='ri-pinterest-fill text-lg'></i>
              </a>
              <a
                href='/'
                className='w-10 h-10 rounded-full border-2 border-[#D4AF77] flex items-center justify-center text-[#D4AF77] hover:bg-[#D4AF77] hover:text-white transition-all duration-300 cursor-pointer'
              >
                <i className='ri-mail-line text-lg'></i>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='pt-8 border-t border-[#D4AF77]/30'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-xs text-[#6B6B6B]'>
              © 2025 Sophia & Alexander. All rights reserved.
            </p>
            <p
              className='text-sm text-[#D4AF77]'
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
