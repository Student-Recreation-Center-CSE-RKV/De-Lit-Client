"use client";
import { useRef} from "react";
import Card from "./Card";
import styles from "@/components/publications/Card.module.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const CardWrapper = ({ header, data}) => {
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
      <div className="ml-3 md:ml-16">
        <h1
          className={`text-4xl md:text-5xl font-medium mb-8 md:mb-16 text-center tracking-wide`}
        >
          {header}
        </h1>
        <div
          className={`${styles.container} no-scrollbar gap-3 scroll-smooth mb-8 md:mb-0`}
          ref={scrollRef}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              {...item}
            />
          ))}
        </div>
        <div className="text-end pt-6 mr-12 mb-3 hidden md:block">
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
