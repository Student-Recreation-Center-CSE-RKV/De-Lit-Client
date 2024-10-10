"use client";
import React from "react";
import GalleryCard from "./GalleryCard"; 
import BranchGallery from "./BranchedGallery";

const ImageGallery = () => {

  const imageData = [
    { id: 1, src: "https://picsum.photos/200/300?random=1" },
    { id: 2, src: "https://picsum.photos/200/300?random=2" },
    { id: 3, src: "https://picsum.photos/200/300?random=3" },
    { id: 4, src: "https://picsum.photos/200/300?random=4" },
    { id: 5, src: "https://picsum.photos/200/300?random=5" },
    { id: 6, src: "https://picsum.photos/200/300?random=6" },
    { id: 7, src: "https://picsum.photos/200/300?random=7" },
  ];


  return (
    <>
    <div className="container  w-auto h-[100vh] ">
      <div className="flex relative top-[60px] justify-center gap-10 ">

        {imageData.slice(0, 3).map((image) => (
          <GalleryCard
            key={image.id}
            image={image.src}
            date={1111}
            event={image.id}
          />
        ))}
      </div>
      
    </div>
    <div>
    <BranchGallery />
    </div>
    </>
  );
};

export default ImageGallery;
