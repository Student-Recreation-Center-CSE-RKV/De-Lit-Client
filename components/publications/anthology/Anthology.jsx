"use client";

import { useState } from "react";
import Overlay from "@/components/publications/Overlay";
import Image from "next/image";

const Anthology = ({ title, text, image, base64, link, scrollRef }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollLeft += 600;
    }
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={link} title={title} />}

      <div
        className="relative mr-[6rem]  md:w-[82%] md:h-[32rem] cursor-pointer bg-white rounded-[28px] flex-shrink-0 bg-center hover:shadow-xl transition-all duration-200 ease-[cubic-bezier(0.445,0.030,0.515,0.955)] snap-center"
        onClick={handleClickOpen}
      >
        <div className="flex flex-row h-[32rem]">
          <div className="w-2/3 h-full">
            <div className="relative w-[16rem] h-full md:w-full md:h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-[28px]"
                placeholder="blur"
                blurDataURL={base64}
                sizes="50vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-12 w-full p-10">
            <h1 className="md:text-5xl">{title}</h1>
            <p className=" text-colorB text-lg">
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
