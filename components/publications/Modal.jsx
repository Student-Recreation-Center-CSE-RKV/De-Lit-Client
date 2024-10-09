"use client";
import { useRef, useEffect } from "react";
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
  return (
    <dialog
      ref={dialog}
      onClose={handleClose}
      className="z-20 md:w-4/5 m-auto w-full mb-0 md:mt-[7.5%] rounded-t-xl overflow-scroll no-scrollbar md:mx-auto"
    >
      <button
        className="fixed z-30 m-2 w-8 h-8 md:m-5"
        onClick={handleClose}
      >
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
