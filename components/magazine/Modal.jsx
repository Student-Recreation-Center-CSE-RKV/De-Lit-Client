"use client";

import Sample from "../Sample";
import { useEffect, useRef } from "react";
export default function Modal({ open, handleClose }) {

  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialog}
      onClose={handleClose}
      className="z-20 w-4/5 mt-[5%] rounded-t-xl h-[88%] overflow-scroll no-scrollbar"
    >
      <button
        className="fixed z-30 m-5 w-8 h-8 rounded-full border-2  hover:border-colorA"
        onClick={handleClose}
      >
        X
      </button>
      <h1 className="text-7xl text-center mt-5 p-5">A journey to the sky</h1>
      <Sample />
    </dialog>
  );
}
