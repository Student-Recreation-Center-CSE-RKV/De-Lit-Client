"use client";
import { useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from "./Card";
import CardSkeleton from "./skeletons/CardSkeleton";
import AnthologySkeleton from "./skeletons/AnthologySkeleton";
import useScreenSize from "@/hooks/useScreenSize";

const CardWrapper = ({ header, data, subheader, CardComponent, isFirst }) => {
  const scrollRef = useRef();
  const screenSize = useScreenSize();

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 600;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 600;
    }
  };

  return (
    <>
      <div className={`ml-3 md:ml-16 mb-3 ${isFirst ? "" : "md:-mt-8"}`}>
        <div className="mb-3 md:mb-8">
          <h1 className="text-[2.8rem] md:text-7xl text-center text-myblack tracking-wide">
            {header}
          </h1>
          <p className="hidden md:block text-center mt-4 text-colorA">
            {subheader}
          </p>
        </div>
        {/* <div
          ref={scrollRef}
          className="w-full overflow-x-auto gap-3 p-4 flex no-scrollbar scroll-smooth snap-mandatory snap-x"
        >
          {data.map((card, index) => (
            screenSize.width > 1024 ? <CardComponent key={index} {...card} scrollRef={scrollRef} /> : <Card key={index} {...card} />
          ))}
        </div> */}

        <div
          ref={scrollRef}
          className="w-full overflow-x-auto gap-3 p-4 flex no-scrollbar scroll-smooth snap-mandatory snap-x"
        >
          {data && data.length > 0
            ? data.map((card, index) =>
                screenSize.width > 1024 ? (
                  <CardComponent key={index} {...card} scrollRef={scrollRef} />
                ) : (
                  <Card key={index} {...card} />
                )
              )
            : // Render 5 skeleton cards as placeholders
              Array.from({ length: 5 }).map((_, index) => (
                <CardSkeleton key={index} />
                // <AnthologySkeleton key={index} />
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
