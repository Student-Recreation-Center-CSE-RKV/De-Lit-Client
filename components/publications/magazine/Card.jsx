"use client";

import Image from "next/image";
import OverlayWrapper from "@/components/publications/OverlayWrapper";

const Card = ({
  title,
  text,
  cover_image_link: image,
  base64,
  publication_file_link: link,
  scrollRef,
}) => {
  return (
    <>
      <OverlayWrapper
        overlayLink={link}
        scrollRef={scrollRef}
        scrollDistance={280}
        title={title}
      >
        <div className="relative w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] cursor-pointer flex-shrink-0 hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] p-2 snap-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-[28px]"
            placeholder="blur"
            blurDataURL={base64}
            sizes="(max-width: 768px) 80vw, 30vw"
          />
          <h3 className="absolute text-mywhite bottom-0 ml-2 mr-1 mb-3 text-2xl md:text-3xl md:text-[1.6rem]">
            {title}
          </h3>
        </div>
      </OverlayWrapper>
    </>
  );
};

export default Card;
