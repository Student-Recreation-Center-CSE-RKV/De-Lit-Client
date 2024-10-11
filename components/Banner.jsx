import React from "react";
import { Playfair_Display } from "next/font/google";
import { BANNER_IMAGE } from "@/utils/dummy";

const font = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative h-full flex md:flex-row flex-col items-center md:justify-around justify-center">
        <div className="md:w-1/2 max-md:h-1/2">
          <img
            className="max-md:object-contain max-md:w-full max-md:h-full md:w-3/4 opacity-70 m-auto"
            src="/stroke.svg"
            alt="Magazine"
          />
        </div>
        <div className="text-white md:w-1/2">
          <h1
            className={`text-[2.5rem] leading-[1.2] md:text-[5rem] w-2/3 max-md:text-center max-md:m-auto ${font.className}`}
          >
            Building a like-minded community!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
