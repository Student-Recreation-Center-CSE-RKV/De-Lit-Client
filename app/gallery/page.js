import React from "react";
import "./gallery.css"
import ImageGallery from "@/components/gallery/ImageGallery";
const page = () => {
  return (
    <div className="container">
      <h1 className="flex justify-center text-[5em] capitalize font-serif w-auto bebas-neue-regular">
        our moments
      </h1>
      <ImageGallery />
    </div>
  );
};

export default page;
