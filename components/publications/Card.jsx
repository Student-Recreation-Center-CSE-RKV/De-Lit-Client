import { useState } from "react";
import Overlay from "@/components/publications/Overlay";

const Card = ({ title, text, image, link, scrollRef }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 280;
    }
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={link} />}

      <div
        className="relative w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] cursor-pointer bg-cover rounded-[28px] flex-shrink-0 bg-center hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] p-2"
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleClickOpen}
      >
        <h3 className="absolute text-mywhite bottom-0 ml-2 mr-1 mb-3 text-2xl md:text-3xl md:text-[1.6rem]">
          {title}
        </h3>
      </div>
    </>
  );
};

export default Card;
