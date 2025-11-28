import Link from "next/link";

export default function Hero() {
  return (
    <section className='pt-32 text-[#FAF8F5] h-[70vh] lg:h-[90vh] bg-center bg-cover pb-16 text-center bg-[url("/cinematic-style-couple-vineyard.jpg")]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl md:text-8xl font-bold text-[#FAF8F5] pb-8'>
          Sophia
        </h1>
        <h1 className='text-5xl'>&</h1>
        <h1 className='text-6xl md:text-8xl font-bold'>Alexander</h1>
      </div>

      <p className='mt-4 text-lg'>June 15, 2025 • Napa Valley</p>
      <div className='mt-6 space-x-4'>
        <Link
          href='#rsvp'
          className='px-5 py-2 rounded-full border border-terracotta hover:bg-[#C17B5C]'
        >
          RSVP
        </Link>
        <Link
          href='#gallery'
          className='px-5 py-2 rounded-full border border-terracotta hover:bg-[#C17B5C]'
        >
          Gallery
        </Link>
      </div>
    </section>
  );
}
