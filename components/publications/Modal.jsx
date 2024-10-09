"use client";
import { useRef, useEffect, useState } from "react";
import PDFViewer from "@/components/publications/PDFViewer";
export default function Modal({ open, handleClose, data }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  const handleScroll = (e) => {
    // Do something when the dialog box is scrolled
    if (e.target.scrollTop > 150){
      dialog.current.classList.remove("mt-[3%]");
    }
    if (e.target.scrollTop < 150){
      dialog.current.classList.add("mt-[3%]");
    }
  };
  return (
    <dialog
      ref={dialog}
      onClose={handleClose}
      className="z-20 md:w-[90%] max-h-screen m-auto w-full mt-[3%] rounded-t-3xl overflow-scroll md:mx-auto"
      onScroll={handleScroll}
    >
      <button className="fixed z-30 m-2 w-8 h-8 md:m-5" onClick={handleClose}>
        X
      </button>

      <h1 className="text-3xl md:text-7xl text-center mt-5 p-5">
        {data.title}
      </h1>
      {/* <p className="mx-24 mb-12 text-2xl text-colorB">{data.text}</p> */}
      <PDFViewer file={"./sample.pdf"} />
    </dialog>
  );
}
