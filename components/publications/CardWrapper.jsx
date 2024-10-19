"use client";
import { useRef } from "react";
import Card from "./Card";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const CardWrapper = ({ header, data, subheader, isFirst }) => {
  const scrollRef = useRef();

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <>
      <div className={`ml-3 md:ml-16 mb-3 ${isFirst ? "" : "md:-mt-8"}`}>
        <div class="mb-3 md:mb-8">
          <h1 className="text-[2.8rem] md:text-7xl text-center text-myblack tracking-wide">
            {header}
          </h1>
          <p className="hidden md:block text-center mt-4 text-colorA">{subheader}</p>
        </div>
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto gap-3 p-4 flex no-scrollbar scroll-smooth"
        >
          {data.map((card, index) => (
            <Card key={index} {...card} scrollRef={scrollRef} />
          ))}
        </div>

        <div className="text-end pt-6 mr-12  hidden md:block">
          <button
            className="bg-colorF m-1 rounded-full hover:opacity-75"
            onClick={handleScrollLeft}
          >
            <MdKeyboardArrowLeft className="size-6 md:size-9 text-colorB" />
          </button>
          <button
            className="bg-colorF m-1 rounded-full hover:opacity-75"
            onClick={handleScrollRight}
          >
            <MdKeyboardArrowRight className="size-6 md:size-9 text-colorB" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
