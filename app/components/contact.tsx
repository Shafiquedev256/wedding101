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

        <div className='grid md:grid-cols-2 gap-10 md:gap-12'>
          {/* Contact Info */}
          <div className='space-y-10'>
            {/* Main contact block */}
            <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-8'>
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

            {/* Wedding Party Contacts */}
            <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8'>
              <h3 className='text-2xl font-serif text-gray-800 mb-6'>
                Wedding Party Contacts
              </h3>

              <div className='space-y-5'>
                {/* Maid of Honor */}
                <div className='pb-4 border-b border-gray-200'>
                  <div className='font-semibold text-gray-800 mb-1'>
                    Maid of Honor – Sarah Johnson
                  </div>
                  <a
                    href='mailto:sarah.j@email.com'
                    className='text-sm text-[#7D2E3D] hover:underline'
                  >
                    sarah.j@email.com
                  </a>
                </div>

                {/* Best Man */}
                <div className='pb-4 border-b border-gray-200'>
                  <div className='font-semibold text-gray-800 mb-1'>
                    Best Man – Michael Chen
                  </div>
                  <a
                    href='mailto:michael.c@email.com'
                    className='text-sm text-[#7D2E3D] hover:underline'
                  >
                    michael.c@email.com
                  </a>
                </div>

                {/* Coordinator */}
                <div>
                  <div className='font-semibold text-gray-800 mb-1'>
                    Wedding Coordinator – Emily Rose
                  </div>
                  <a
                    href='mailto:emily.rose@events.com'
                    className='text-sm text-[#7D2E3D] hover:underline'
                  >
                    emily.rose@events.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden h-[350px] sm:h-[450px] md:h-[600px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8937648348967!2d-122.31674368468198!3d37.80410897975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3b6f3e3b3b%3A0x3b3b3b3b3b3b3b3b!2sNapa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
              className='w-full h-full'
              style={{ border: 0 }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              title='Venue Location Map'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
