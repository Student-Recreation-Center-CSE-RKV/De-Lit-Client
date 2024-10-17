"use client";
import React from "react";
import EmblaCarousel from "./EmblaCorousel";
import Loading from "@/app/loading";
import { Suspense } from "react";

const ImageGallery = () => {
  const slides = [
    "https://picsum.photos/1200/1200?random=1",
    "https://picsum.photos/1200/1200?random=6",
    "https://picsum.photos/1200/1200?random=5",
    "https://picsum.photos/1200/1200?random=4",
    "https://picsum.photos/1200/1200?random=3",
    "https://picsum.photos/1200/1200?random=2",
  ];

  const OPTIONS = { align: "center", dragFree: true, loop: true, delay: 50 };
  return (
    <>
      <Suspense fallback={<Loading />}>
      <EmblaCarousel slides={slides} options={OPTIONS} direction={"forward"} />
      <EmblaCarousel slides={slides} options={OPTIONS} direction={"backward"} />
      </Suspense>
    </>
  );
};

export default ImageGallery;
