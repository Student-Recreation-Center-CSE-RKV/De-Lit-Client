import React from "react";

const AnthologySkeleton = () => {
  return (
    <div className="relative mr-[6%] md:w-[82%] md:h-[32rem] cursor-pointer bg-gray-200 rounded-[28px] flex-shrink-0 animate-pulse snap-center">
      <div className="flex flex-row h-[32rem]">
        <div className="w-2/3 h-full bg-gray-300 rounded-[28px]"></div>
        <div className="flex flex-col justify-center gap-6 w-full p-10">
          <div className="w-3/4 h-8 bg-gray-300 rounded"></div> {/* Title placeholder */}
          <div className="space-y-4">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded"></div> {/* Shorter line */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnthologySkeleton;
