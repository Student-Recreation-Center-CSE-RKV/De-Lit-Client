import { useState } from "react";
import styles from "@/components/publications/Card.module.css";
import Overlay from "@/components/publications/Overlay";

const Card = ({ title, text, image, link }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={link} />}
      <div onClick={handleClickOpen}>
        <div
          className={`relative bg-gray-800 overflow-hidden rounded-[28px] transition-all duration-200 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]  w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] cursor-pointer`}
        >
          <img
            className={`${styles.cardBg} object-cover hover:scale-110 transition-all duration-300 ease-in-out`}
            src={image}
          />
          <h3
            className={`absolute font-bold text-mywhite bottom-0 ml-3 md:ml-5 mb-4 text-3xl md:text-[32px]`}
          >
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
