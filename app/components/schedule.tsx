"use client";

export default function Schedule() {
  const events = [
    {
      time: "2:00 PM",
      title: "Ceremony",
      description:
        "Join us as we exchange our vows in the beautiful garden setting",
      icon: "ri-heart-3-line",
    },
    {
      time: "3:00 PM",
      title: "Cocktail Hour",
      description: "Enjoy drinks and hors d'oeuvres while we take photos",
      icon: "ri-goblet-line",
    },
    {
      time: "4:30 PM",
      title: "Reception",
      description: "Dinner, toasts, and celebration begin",
      icon: "ri-restaurant-line",
    },
    {
      time: "7:00 PM",
      title: "First Dance",
      description: "Watch us take our first dance as a married couple",
      icon: "ri-music-2-line",
    },
    {
      time: "10:00 PM",
      title: "Grand Finale",
      description: "Sparkler send-off under the stars",
      icon: "ri-sparkling-line",
    },
  ];

  return (
    <section id='schedule' className='py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-serif text-gray-800 mb-4'>Schedule</h2>
          <div className='w-24 h-1 bg-[#7D2E3D] mx-auto mb-6'></div>
          <p className='text-gray-600 mb-8'>
            December 9th, 2026 • Rosewood Estate Gardens
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Vertical Line */}
          <div className='absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-[#7D2E3D]/20'></div>

          <div className='space-y-12'>
            {events.map((event, index) => (
              <div
                key={`event-${index}`}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className='bg-[#FDF8F5] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                    <div className='text-[#7D2E3D] font-semibold text-lg mb-2'>
                      {event.time}
                    </div>
                    <h3 className='text-2xl font-serif text-gray-800 mb-2'>
                      {event.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>{event.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className='w-16 h-16 rounded-full bg-[#7D2E3D] flex items-center justify-center shadow-lg z-10'>
                  <i className={`${event.icon} text-2xl text-white`}></i>
                </div>

                {/* Spacer */}
                <div className='flex-1'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
