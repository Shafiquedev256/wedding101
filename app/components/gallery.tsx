"use client";

import { useState } from "react";

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "slideshow">("slideshow");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const photos = [
    { url: "/proposal.jpg", caption: "Garden Dreams" },
    { url: "/proposal.jpg", caption: "Beach Sunset" },
    { url: "/proposal.jpg", caption: "Bookstore Love" },
    { url: "/proposal.jpg", caption: "First Dance Practice" },
    { url: "/proposal.jpg", caption: "Picnic in Paradise" },
    { url: "/img6.jpg", caption: "Mountain Top" },
    { url: "/proposal.jpg", caption: "Autumn Stroll" },
    { url: "/img6.jpg", caption: "Dancing in the Rain" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % photos.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id='gallery' className='py-20 px-4 md:px-6 max-w-7xl mx-auto'>
      {/* Header + View Toggle */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
        <h2 className='text-4xl md:text-6xl font-serif italic text-[#3A3A3A] mb-6 md:mb-0 text-center md:text-left'>
          Our Moments
        </h2>

        <div className='flex gap-2 bg-white rounded-full p-1 shadow-md'>
          {["grid", "slideshow"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode as "grid" | "slideshow")}
              className={`px-4 md:px-6 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                viewMode === mode
                  ? "bg-[#D4AF77] text-white"
                  : "text-[#6B6B6B] hover:text-[#3A3A3A]"
              }`}
            >
              {mode === "grid" ? "Grid" : "Slideshow"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {photos.map((photo, index) => (
            <div
              key={index}
              className='relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500'
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6'>
                <p className='text-white text-sm md:text-lg font-light'>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Slideshow View */
        <div className='relative max-w-full md:max-w-4xl mx-auto'>
          <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
            <img
              src={photos[currentImage].url}
              alt={photos[currentImage].caption}
              className='w-full h-[300px] md:h-[600px] object-cover object-top rounded-2xl'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8'>
              <p className='text-white text-lg md:text-2xl font-light text-center'>
                {photos[currentImage].caption}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer'
          >
            <i className='ri-arrow-left-line text-xl md:text-2xl text-[#3A3A3A]'></i>
          </button>
          <button
            onClick={nextImage}
            className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer'
          >
            <i className='ri-arrow-right-line text-xl md:text-2xl text-[#3A3A3A]'></i>
          </button>

          {/* Dots */}
          <div className='flex justify-center gap-2 mt-4 md:mt-6 flex-wrap'>
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentImage
                    ? "bg-[#D4AF77] w-6 h-2 md:w-8"
                    : "bg-[#D4AF77]/30 w-2 h-2"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4'
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className='absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer'
          >
            <i className='ri-close-line text-2xl md:text-3xl text-white'></i>
          </button>

          <div
            className='max-w-full max-h-[90vh] relative'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[currentImage].url}
              alt={photos[currentImage].caption}
              className='max-w-full max-h-[80vh] md:max-h-[90vh] object-contain rounded-2xl'
            />
            <p className='text-white text-base md:text-xl text-center mt-4 md:mt-6 font-light'>
              {photos[currentImage].caption}
            </p>
          </div>

          {/* Lightbox Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className='absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer'
          >
            <i className='ri-arrow-left-line text-2xl md:text-3xl text-white'></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className='absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer'
          >
            <i className='ri-arrow-right-line text-2xl md:text-3xl text-white'></i>
          </button>
        </div>
      )}
    </section>
  );
}
