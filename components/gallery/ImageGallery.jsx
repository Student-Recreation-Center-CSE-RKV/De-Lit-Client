"use client";
import React from "react";
import EmblaCarousel from "./EmblaCorousel";

const ImageGallery = () => {
  const slides = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=2",
  ];

  const OPTIONS = { align: "center", dragFree: true, loop: true, delay: 50 };
  return (
    <>
      <EmblaCarousel slides={slides} options={OPTIONS} direction={"forward"} />
      <EmblaCarousel slides={slides} options={OPTIONS} direction={"backward"} />
    </>
  );
};

export default ImageGallery;
