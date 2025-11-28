export default function LoveStory() {
  const stories = [
    {
      date: "March 2019",
      title: "The First Hello",
      description:
        "We met at a mutual friend's art gallery opening in downtown. James accidentally spilled his wine on Emma's favorite dress, and instead of being upset, she laughed. That laugh changed everything. We spent the entire evening talking about travel, dreams, and our shared love for vintage bookstores.",
      image: "/firstdate.jpg",
      align: "left",
    },
    {
      date: "December 2019",
      title: "Our First Adventure",
      description:
        "Nine months later, we took our first trip together to the mountains. We got lost on a hiking trail, danced in the rain, and watched the sunset from a cliff edge. It was the moment we both knew this was something special, something worth fighting for.",
      image: "/88932cd27050db4d7b8c31d10aa6bb17.jpg",
      align: "right",
    },
    {
      date: "June 2024",
      title: "The Proposal",
      description:
        "James planned the perfect surprise at the same art gallery where we first met. Surrounded by our closest friends and family, he got down on one knee and asked Emma to be his forever. Through happy tears, she said yes. It was a moment six years in the making, and absolutely worth the wait.",
      image: "/proposal.jpg",
      align: "left",
    },
  ];
  return (
    <section id='story' className='py-32 px-6 max-w-7xl mx-auto'>
      <div className='text-center mb-20'>
        <h2
          className='text-6xl md:text-7xl font-serif italic text-[#3A3A3A] mb-6'
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Love Story
        </h2>
        <div className=' h-0.5 w-28 bg-gradient-to-r from-transparent via-[#D4AF77] to-transparent mx-auto'></div>
      </div>
      <div className='space-y-24'>
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              story.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 md:gap-12 items-center group`}
          >
            {/* Image */}
            <div className='w-full md:w-2/5 relative'>
              <div className='relative overflow-hidden rounded-[32px] shadow-xl transform group-hover:scale-105 transition-transform duration-500'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#D4AF77]/20 to-transparent z-10'></div>
                <img
                  src={story.image}
                  alt={story.title}
                  className='w-full h-80 object-cover object-top'
                  style={{ transform: "rotate(-1deg)" }}
                />
              </div>
            </div>
            {/* Content */}
            <div className='w-full md:w-3/5'>
              <div className='bg-white rounded-[32px] shadow-lg p-12 md:p-16 transform group-hover:shadow-2xl transition-shadow duration-500'>
                <div
                  className='text-[#E8A598] text-sm mb-4'
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontSize: "1.5rem",
                  }}
                >
                  {story.date}
                </div>
                <h3
                  className='text-4xl font-serif text-[#3A3A3A] mb-6'
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {story.title}
                </h3>
                <p
                  className='text-[#6B6B6B] leading-relaxed text-base'
                  style={{ lineHeight: "1.8" }}
                >
                  {story.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
