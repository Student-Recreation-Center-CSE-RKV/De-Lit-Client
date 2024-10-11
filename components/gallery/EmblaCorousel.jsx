"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./gallery.css";

const EmblaCarousel = ({ slides = [], options = {}, direction = "left" }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      speed: 2, // Control speed of scrolling
      direction: direction,
      stopOnMouseEnter: true, // Stops auto-scroll on hover
      stopOnInteraction: false, // Keeps scrolling after interaction
    }),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div
              className="embla__slide relative" // Use 'relative' for the overlay
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="embla__slide__img w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover"
              />
              <div
                className="embla__slide__text absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-2 opacity-0 hover:opacity-100 transform translate-y-full hover:translate-y-0 transition-all duration-300 ease-in-out"
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Slide {index + 1} Description
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
