"use client";
import { useRef, useEffect, useState } from "react";
import PDFViewer from "@/components/publications/PDFViewer";
import { IoMdCloseCircle } from "react-icons/io";

const classes = ["mt-[3%]", "rounded-t-3xl", "no-scrollbar"];

export default function Modal({ open, handleClose, data }) {
  const dialog = useRef();
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
    setWidth(dialog.current.offsetWidth);
    
  }, []);

  const handleScroll = (e) => {
    console.log(dialog.current.offsetWidth);
    if (
      e.target.scrollTop > 150 &&
      dialog.current.classList.contains("mt-[3%]")
    ) {
      dialog.current.classList.remove(...classes);
    }
    if (
      e.target.scrollTop < 150 &&
      !dialog.current.classList.contains("mt-[3%]")
    ) {
      dialog.current.classList.add(...classes);
    }
  };
  return (
    <dialog
      ref={dialog}
      onClose={handleClose}
      className="z-20 md:w-[90%] max-h-screen w-full my-0 rounded-t-3xl mt-[3%] scroll-smooth overflow-scroll md:mx-auto customScrollbar no-scrollbar transition-all duration-500 ease-in-out"
      onScroll={handleScroll}
    >
      <button className="fixed z-30 m-2 md:m-5 rounded-full" onClick={handleClose}>
        <IoMdCloseCircle className="size-6 md:size-10" />
      </button>

      <h1 className="text-3xl md:text-7xl text-center mt-5 p-5">
        {data.title}
      </h1>
      {/* <p className="mx-24 mb-12 text-2xl text-colorB">{data.text}</p> */}
      <PDFViewer file={"./sample.pdf"} width={width}/>
    </dialog>
  );
}
