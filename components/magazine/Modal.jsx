"use client";
import { useRef, useEffect } from "react";
import PDFViewer from "@/components/magazine/PDFViewer";
export default function Modal({ open, handleClose }) {

  const dialog = useRef();
  useEffect(() => {
    if (open) {
      document.getElementById('body').classList.toggle("blur-sm")
      // document.getElementById('body').classList.toggle("opacity-70")
      dialog.current.showModal();
    } else {
      document.getElementById('body').classList.toggle("blur-sm")
      // document.getElementById('body').classList.toggle("opacity-70")
      dialog.current.close();
    } 
  }, [open]);

  return (
    <dialog
      ref={dialog}
      onClose={handleClose}
      className="z-20 md:w-4/5 m-auto mb-0 md:mt-[5%] rounded-t-xl  overflow-scroll no-scrollbar"
    >
      <button
        className="fixed z-30 m-2 w-8 h-8 md:m-5 rounded-full border-2  hover:border-colorA"
        onClick={handleClose}
      >
        X
      </button>
      <h1 className="text-4xl md:text-7xl text-center mt-5 p-5">A journey to death</h1>
      <PDFViewer file={'./sample.pdf'} />
    </dialog>
  );
}
