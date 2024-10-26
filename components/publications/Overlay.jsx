"use client";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import PDFViewer from "./PDFViewer";

export default function Overlay({ link, handleClose }) {
  const overlayRef = useRef();
  const [pdfWidth, setPdfWidth] = useState(250);
  useEffect(() => {
    setPdfWidth(overlayRef.current.offsetWidth);
  });
  return (
    <>
      <div class="fixed inset-0 bg-black opacity-40 z-[55]"></div>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 right-0 bottom-0 z-[57] overflow-auto backdrop-blur-sm text-center"
      >
        <div className="flex justify-center items-center my-10">
          <div className="flex flex-col bg-white shadow-lg rounded-2xl w-[90%]">
            <div className="sticky top-0 p-4 self-end z-[60]">
              <button
                className="bg-black p-1 md:p-2 rounded-full text-mywhite hover:text-white"
                onClick={handleClose}
              >
                <FaTimes size={17} />
              </button>
            </div>
            <PDFViewer file="/sample.pdf" width={pdfWidth} />
          </div>
        </div>
      </div>
    </>
  );
}
