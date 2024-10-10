// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="relative w-full bg-cover bg-center h-64 md:h-80 lg:h-96" >
//       <div className="absolute inset-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">

//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1675369009502-4125a781576a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
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
