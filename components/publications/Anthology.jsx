"use client";

import { useState } from "react";
import Overlay from "@/components/publications/Overlay";

const Anthology = ({ title, text, image, link, scrollRef }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 600;
    }
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={link} />}

      <div
        className="relative mr-[6rem] w-[16rem] h-[30rem] md:w-[60rem] md:h-[32rem] cursor-pointer bg-white rounded-[28px] flex-shrink-0 bg-center hover:scale-[1.02] transition-all duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] snap-center"
        onClick={handleClickOpen}
      >
        <div className="flex flex-row">
          <div className="w-1/2">
            <img
              src={image}
              alt=""
              className="w-[16rem] h-full md:w-[22rem] md:h-[32rem] bg-cover rounded-[28px]"
            />
          </div>
          <div className="flex flex-col gap-12 w-full pl-9 pr-5">
            <h1 className="md:text-5xl tracking-wider pt-16">{title}</h1>
            <p className=" text-colorB">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              voluptas quibusdam, nobis necessitatibus repellendus distinctio
              velit animi reprehenderit iure. Exercitationem consequuntur beatae
              architecto, impedit magnam ad quod mollitia at error. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Debitis sit itaque
              quas ullam nam? Accusamus, excepturi, aliquam ratione beatae
              provident perspiciatis qui, sed vero ullam necessitatibus labore
              iste ab distinctio Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anthology;
