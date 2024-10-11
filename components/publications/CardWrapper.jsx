"use client";
import { useRef, useState } from "react";
import Card from "./Card";
import styles from "@/components/publications/Card.module.css";
import Modal from "@/components/publications/Modal";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
// import Overlay from "@/components/publications/Overlay";

const CardWrapper = ({ header, data, textPos }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = (idx) => {
    setSelected(idx);
    document.getElementById("body").classList.toggle("blur-sm");
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.getElementById("body").classList.toggle("blur-sm");
    document.body.style.overflow = "visible";
    setOpen(false);
  };

  return (
    <>
      {open && (
        // <Overlay handleClose={handleClose} data={data[selected]} />
        <Modal open={open} handleClose={handleClose} data={data[selected]} />
      )}
      <div className="ml-3 md:ml-16">
        <h1
          className={`text-4xl md:text-5xl font-medium mb-8 md:mb-16 text-center ${textPos}`}
        >
          {header}
        </h1>
        <div
          className={`${styles.container} no-scrollbar space-x-6 scroll-smooth mb-8 md:mb-0`}
          ref={scrollRef}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              onClick={() => handleClickOpen(index)}
            />
          ))}
        </div>
        <div className="text-end pt-6 mr-12 mb-3 hidden md:block">
          <button className="bg-colorF m-1 rounded-full hover:opacity-75" onClick={handleScrollLeft}>
            <MdKeyboardArrowLeft className="size-6 md:size-9 text-colorB" />
          </button>
          <button className="bg-colorF m-1 rounded-full hover:opacity-75" onClick={handleScrollRight}>
            <MdKeyboardArrowRight className="size-6 md:size-9 text-colorB" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
