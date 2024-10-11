"use client";
import React from "react";
import "./gallery.css";
import ImageGallery from "@/components/gallery/ImageGallery";

const Page = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[90px] mb-[20px]">
        <h1 className="text-center md:text-[6em] sm:text-[4em] text-[3em] capitalize font-serif w-auto bebas-neue-regular">
          our moments
        </h1>
      </div>
      <div className="mt-4 px-4">
        <ImageGallery />
      </div>
    </>
  );
};

export default Page;
