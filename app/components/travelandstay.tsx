"use client";

export default function TravelStay() {
  const hotels = [
    {
      name: "Hotel",
      price: "$150-$165/night",
      address: "123 Lorimer St, New York, NY 11206",
      icon: "ri-hotel-line",
    },
    {
      name: "Hotel",
      price: "$200-$250/night",
      address: "123 Lorimer St, New York, NY 11206",
      icon: "ri-building-line",
    },
    {
      name: "Hotel",
      price: "$150-$165/night",
      address: "123 Lorimer St, New York, NY 11206",
      icon: "ri-home-smile-line",
    },
  ];

  const airports = [
    {
      name: "JFK",
      fullName: "John F. Kennedy International Airport",
      distance: "30 minutes from venue",
      icon: "ri-plane-line",
    },
    {
      name: "LGA",
      fullName: "LaGuardia Airport",
      distance: "30 minutes from venue",
      icon: "ri-flight-takeoff-line",
    },
    {
      name: "Newark",
      fullName: "Newark Liberty International Airport",
      distance: "1 hour from Brooklyn",
      icon: "ri-flight-land-line",
    },
  ];

  return (
    <section id='travel' className='py-24 bg-[#FDF8F5]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-serif text-gray-800 mb-4'>
            Travel &amp; Stay
          </h2>
          <div className='w-24 h-1 bg-[#7D2E3D] mx-auto mb-6'></div>
        </div>

        {/* Neighborhoods */}
        <div className='mb-16 bg-white p-8 rounded-lg shadow-md'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full shrink-0'>
              <i className='ri-map-pin-line text-2xl text-white'></i>
            </div>
            <div>
              <h3 className='text-2xl font-serif text-[#7D2E3D] mb-3'>
                Neighborhoods
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                As far as neighborhoods go, we think you might enjoy{" "}
                <strong>Williamsburg</strong>, which is close to the venue. Or,
                if you want to go to Manhattan, try{" "}
                <strong>Lower East Side</strong> or{" "}
                <strong>East Village</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Stay Section */}
        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full'>
              <i className='ri-hotel-bed-line text-2xl text-white'></i>
            </div>
            <h3 className='text-3xl font-serif text-[#7D2E3D]'>Stay</h3>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-md mb-8'>
            <h4 className='text-xl font-semibold text-gray-800 mb-3'>
              Williamsburg
            </h4>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              We've reserved a block of rooms at the following hotels. During
              the weekend, we have special rates at the following hotels in the
              area.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              {hotels.map((hotel, index) => (
                <div
                  key={`hotel-${index}`}
                  className='bg-[#FDF8F5] p-6 rounded-lg border-2 border-[#7D2E3D]/10 hover:border-[#7D2E3D]/30 transition-all hover:shadow-lg'
                >
                  <div className='w-14 h-14 flex items-center justify-center bg-[#7D2E3D] rounded-full mx-auto mb-4'>
                    <i className={`${hotel.icon} text-2xl text-white`}></i>
                  </div>
                  <h5 className='font-semibold text-gray-800 text-center mb-2'>
                    {hotel.name}
                  </h5>
                  <p className='text-[#7D2E3D] font-semibold text-center mb-3'>
                    {hotel.price}
                  </p>
                  <p className='text-gray-600 text-sm text-center'>
                    {hotel.address}
                  </p>
                </div>
              ))}
            </div>

            <div className='bg-[#7D2E3D]/5 p-6 rounded-lg border-l-4 border-[#7D2E3D]'>
              <div className='flex items-start gap-3'>
                <i className='ri-mail-line text-xl text-[#7D2E3D] mt-1'></i>
                <p className='text-gray-700 leading-relaxed'>
                  To book your accommodations, send a reservation request to{" "}
                  <a
                    href='mailto:reservations@hotel.com'
                    className='text-[#7D2E3D] font-semibold hover:underline'
                  >
                    reservations@hotel.com
                  </a>
                  . Mention you're attending our wedding party.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full'>
              <i className='ri-roadster-line text-2xl text-white'></i>
            </div>
            <h3 className='text-3xl font-serif text-[#7D2E3D]'>
              Getting There
            </h3>
          </div>

          {/* Flying */}
          <div className='bg-white p-8 rounded-lg shadow-md mb-6'>
            <div className='flex items-center gap-3 mb-6'>
              <i className='ri-plane-fill text-2xl text-[#7D2E3D]'></i>
              <h4 className='text-xl font-semibold text-gray-800'>Flying</h4>
            </div>

            <br />

            <div className='grid md:grid-cols-3 gap-6 mb-6'>
              {airports.map((airport, index) => (
                <div
                  key={`airport-${index}`}
                  className='bg-[#FDF8F5] p-6 rounded-lg text-center hover:shadow-md transition-shadow'
                >
                  <div className='w-14 h-14 flex items-center justify-center bg-[#7D2E3D] rounded-full mx-auto mb-4'>
                    <i className={`${airport.icon} text-2xl text-white`}></i>
                  </div>
                  <h5 className='font-bold text-[#7D2E3D] text-lg mb-2'>
                    {airport.name}
                  </h5>
                  <p className='text-gray-700 text-sm mb-2'>
                    {airport.fullName}
                  </p>
                  <p className='text-gray-600 text-sm font-semibold'>
                    {airport.distance}
                  </p>
                </div>
              ))}
            </div>

            <p className='text-gray-700 leading-relaxed'>
              Newark Liberty International Airport has international flights and
              is about 1 hour by car from Brooklyn.
            </p>
          </div>

          {/* Transportation */}
          <div className='bg-white p-8 rounded-lg shadow-md'>
            <div className='flex items-center gap-3 mb-6'>
              <i className='ri-taxi-line text-2xl text-[#7D2E3D]'></i>
              <h4 className='text-xl font-semibold text-gray-800'>
                Getting to/from LGA or JFK to Brooklyn
              </h4>
            </div>

            <br />

            <div className='grid md:grid-cols-4 gap-4'>
              {[
                "ri-taxi-fill",
                "ri-car-line",
                "ri-taxi-fill",
                "ri-subway-line",
              ].map((icon, i) => (
                <div
                  key={i}
                  className='bg-[#FDF8F5] p-4 rounded-lg text-center'
                >
                  <div className='w-12 h-12 flex items-center justify-center bg-[#7D2E3D] rounded-full mx-auto mb-3'>
                    <i className={`${icon} text-xl text-white`}></i>
                  </div>
                  <p className='font-semibold text-gray-800'>
                    {["Uber", "Lyft", "Taxi", "Subway"][i]}
                  </p>
                </div>
              ))}
            </div>

            <br />

            <p className='text-gray-600 text-sm mt-6 text-center italic'>
              Uber, Lyft, or taxi are your best options. You can take the
              subway, but it’s more complicated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
