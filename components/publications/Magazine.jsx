"use client";

import { useState, useRef} from "react";
import styles from "./Magazine.module.css";

import Modal from "./Modal";

const Magazine = ({ title, text, image }) => {
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <div
        className={styles.cardWarp}
        ref={cardRef}
        onClick={handleClickOpen}
      >
        <div
          className={`${styles.card} w-[19rem] h-[37rem] md:w-[23.5rem] md:h-[39.75rem]`}
        >
          <div
            className={styles.cardBg}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className={styles.cardInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
