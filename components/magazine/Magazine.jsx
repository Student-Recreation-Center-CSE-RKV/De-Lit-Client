"use client";

import { useState, useRef, useEffect } from "react";
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

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [{ mouseX, mouseY }, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  let requestId = null;

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    if (requestId === null) {
      requestId = requestAnimationFrame(() => {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          mouseX: e.clientX - rect.left - width / 2, // Mouse position relative to card
          mouseY: e.clientY - rect.top - height / 2, // Mouse position relative to card
        });
      });
      requestId = null;
    }
  };

  // Function to reset parallax effect on mouse leave
  const handleMouseLeave = () => {
    setTimeout(() => {
      setMousePosition({ mouseX: 0, mouseY: 0 });
    }, 10);
  };

  // Measure the card dimensions when it mounts
  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef.current]);

  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <div
        className={styles.cardWarp}
        ref={cardRef}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleClickOpen}
      >
        <div
          className={`${styles.card} w-[19rem] h-[37rem] md:w-[21.5rem] md:h-[39.75rem]`}
          style={{
            transform: `rotateY(${(mouseX * 7) / width}deg) rotateX(${
              (mouseY * -7) / height
            }deg)`,
          }}
        >
          <div
            className={styles.cardBg}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${(mouseX * 30) / width}px) translateY(${
                (mouseY * -30) / height
              }px)`,
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