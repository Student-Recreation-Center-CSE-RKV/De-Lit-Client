import React from 'react';
import Link from 'next/link';

export default function Block() {
  return (
    <div className="flex md:flex-row lg:space-x-24 m-20 items-center flex-col md:space-x-10 max-md:space-y-12">
      <div className="relative md:w-1/3 flex flex-col items-center text-center">
          <img className="w-2/3 md:object-cover md:w-full md:h-full" src="mag.jpg" alt="" />
          <span className="absolute max-md:-bottom-6 text-5xl md:top-[calc(14%)] md:left-3/4 lg:text-8xl md:text-5xl tracking-widest bg-gradient-to-br from-black to-colorC bg-clip-text text-transparent">MAGAZINES </span>
      </div>
      <div className="md:w-3/6 mb-7 mt-[20%] text-center md:text-justify">
          <p className="lg:text-lg md:text-sm">We call ourselves 'dreamers and doers' for a reason: we can make happen not just what is possible, but what is impossible. NEOM is a unique investment opportunity, unrivalled anywhere else. This is not business as usual. Be a part of it. Invest in the new future now, invest in NEOM.</p>
          <button className="bg-gradient-to-br from-colorA to-colorB hover:from-black hover:to-colorB text-white lg:py-4 lg:px-6 md:py-2 md:px-3 lg:text-lg md:text-sm rounded-full mt-10 px-3 py-2">EXPLORE NOW !</button>
      </div>
    </div>
  )
}
