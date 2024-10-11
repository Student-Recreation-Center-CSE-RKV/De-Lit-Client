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
      <div className="absolute inset-0 bg-black opacity-50 -z-0"></div>
      {/* Content */}
      <div className="relative h-screen md:w-2/3 w-5/6 m-auto flex items-center justify-center">
          <h1 className={`text-white md:leading-[1] md:text-[5rem] text-3xl text-center ${font.className}`} >
            Building a like-minded community!
          </h1>
      </div>
    </div>
  );
};

export default Banner;
