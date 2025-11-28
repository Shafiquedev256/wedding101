export default function Schedule() {
  const events = [
    {
      time: "3:00 PM",
      title: "Ceremony",
      location: "Vineyard Garden",
      description:
        "Join us as we exchange our vows surrounded by the beauty of the vineyard",
    },
    {
      time: "4:00 PM",
      title: "Cocktail Hour",
      location: "Terrace Overlook",
      description:
        "Enjoy signature cocktails and hors d'oeuvres with stunning valley views",
    },
    {
      time: "5:30 PM",
      title: "Reception",
      location: "Grand Ballroom",
      description: "Celebrate with us as we begin our new journey together",
    },
    {
      time: "6:30 PM",
      title: "Dinner",
      location: "Grand Ballroom",
      description:
        "A curated farm-to-table dining experience featuring local cuisine",
    },
    {
      time: "8:00 PM",
      title: "First Dance",
      location: "Grand Ballroom",
      description: "Watch as we share our first dance as a married couple",
    },
    {
      time: "8:30 PM",
      title: "Cake Cutting",
      location: "Grand Ballroom",
      description: "Join us for a sweet moment as we cut our wedding cake",
    },
    {
      time: "9:00 PM",
      title: "Dancing & Celebration",
      location: "Grand Ballroom",
      description: "Dance the night away with live music and entertainment",
    },
  ];

  return (
    <section id='schedule' className='py-20 bg-[#FAF8F5]'>
      <div className='max-w-5xl mx-auto px-6'>
        <h2 className='font-serif text-4xl md:text-5xl text-[#3E2723] mb-16 text-center md:text-left'>
          Celebration Timeline
        </h2>

        <div className='relative'>
          {/* Timeline line – centered on mobile, left on desktop */}
          <div className='absolute left-1/2 md:left-0 top-0 bottom-0 w-[3px] bg-[#C17B5C] transform -translate-x-1/2 md:translate-x-0'></div>

          <div className='space-y-12'>
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative pl-0 md:pl-16 ${
                  index % 2 !== 0 ? "md:ml-20" : ""
                }`}
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Timeline dot */}
                <div className='absolute left-1/2 md:left-0 top-2 w-5 h-5 bg-[#C17B5C] rounded-full transform -translate-x-1/2 md:-translate-x-[7px]'></div>

                {/* Card */}
                <div className='bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300'>
                  <div className='flex items-start justify-between mb-4'>
                    <div>
                      <p className='text-[28px] md:text-[32px] font-light text-[#C17B5C] mb-2'>
                        {event.time}
                      </p>
                      <h3 className='font-serif text-xl md:text-2xl text-[#3E2723] mb-2'>
                        {event.title}
                      </h3>
                    </div>
                    <i className='ri-time-line text-xl md:text-2xl text-[#D4A89A] w-8 h-8 flex items-center justify-center'></i>
                  </div>

                  <p className='text-sm text-[#C17B5C] font-medium mb-2 flex items-center gap-2'>
                    <i className='ri-map-pin-line w-4 h-4 flex items-center justify-center'></i>
                    {event.location}
                  </p>

                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
