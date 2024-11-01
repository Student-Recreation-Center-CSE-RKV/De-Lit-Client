"use client";
import OverlayWrapper from "./OverlayWrapper";

const Card = ({ title, text, image, link, scrollRef }) => {
  return (
    <>
      <OverlayWrapper overlayLink={link} scrollRef={scrollRef} scrollDistance={280}>
        <div
          className="relative w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] cursor-pointer bg-cover rounded-[28px] flex-shrink-0 bg-center hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] p-2 snap-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="absolute text-mywhite bottom-0 ml-2 mr-1 mb-3 text-2xl md:text-3xl md:text-[1.6rem]">
            {title}
          </h3>
        </div>
      </OverlayWrapper>
    </>
  );
};

export default Card;
