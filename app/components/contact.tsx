"use client";

export default function Contact() {
  return (
    <section id='contact' className='py-20 md:py-24 bg-[#FDF8F5]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-center mb-14'>
          <h2 className='text-4xl sm:text-5xl font-serif text-gray-800 mb-4'>
            Contact Us
          </h2>
          <div className='w-20 sm:w-24 h-1 bg-[#7D2E3D] mx-auto mb-6'></div>
          <p className='text-gray-600 text-sm sm:text-base'>
            Have questions? We're here to help!
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          {/* Contact Info */}
          <div className='space-y-10'>
            {/* Main contact block */}
            <div className='bg-white rounded-lg  p-6 sm:p-8 space-y-8'>
              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#7D2E3D] flex items-center justify-center shrink-0'>
                  <i className='ri-mail-line text-lg sm:text-xl text-white'></i>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>
                    Email
                  </h3>
                  <a
                    href='mailto:gemma.jefle.wedding@email.com'
                    className='text-[#7D2E3D] hover:underline text-sm sm:text-base'
                  >
                    gemma.jefle.wedding@email.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#7D2E3D] flex items-center justify-center shrink-0'>
                  <i className='ri-phone-line text-lg sm:text-xl text-white'></i>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>
                    Phone
                  </h3>
                  <a
                    href='tel:+15551234567'
                    className='text-[#7D2E3D] hover:underline text-sm sm:text-base'
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Venue */}
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#7D2E3D] flex items-center justify-center shrink-0'>
                  <i className='ri-map-pin-line text-lg sm:text-xl text-white'></i>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 text-base sm:text-lg mb-1'>
                    Venue
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                    Rosewood Estate Gardens <br />
                    1234 Garden Lane <br />
                    Napa Valley, CA 94558
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
