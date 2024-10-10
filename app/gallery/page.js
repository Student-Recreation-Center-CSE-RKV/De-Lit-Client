import React from "react";
import "./gallery.css"
import ImageGallery from "@/components/gallery/ImageGallery";
const page = () => {
  return (
    <>
      <h1 className="flex justify-center text-[5em] capitalize font-serif w-auto bebas-neue-regular">
        our moments
      </h1>
      <ImageGallery />
    </>
  );
};

export default page;
