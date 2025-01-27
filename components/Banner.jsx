import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const font = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const Banner = ({ bannerData }) => {
  const { banner_link, quote, base64 } = bannerData;
  return (
    <div
      className="relative w-full h-[100dvh]"
      id="banner"
    >
        <Image
          src={banner_link}
          alt="Banner"
          fill
          placeholder="blur"
          quality={90}
          blurDataURL={base64}
          sizes="(max-width: 1000px) 200vw, 100vw"
          className="object-cover object-center"
        />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-0"></div>
      {/* Content */}
      <div className="relative h-[100dvh] md:w-2/3 w-5/6 m-auto flex items-center justify-center">
          <h1 className={`text-white md:leading-[1] leading-[1.3] 2xl:text-9xl lg:text-[5rem] sm:text-5xl text-4xl text-center ${font.className}`} >
            {quote}
          </h1>
      </div>
    </div>
  );
};

export default Banner;
