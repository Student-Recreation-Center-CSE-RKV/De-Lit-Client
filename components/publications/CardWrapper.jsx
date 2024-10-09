"use client";
import { useState } from "react";
import Card from "./Card";
import styles from "@/components/publications/Card.module.css";
import Modal from "@/components/publications/Modal";

const CardWrapper = ({ header, data, textPos }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (idx) => {
    setSelected(idx);
    document.getElementById("body").classList.toggle("blur-sm");
    setOpen(true);
  };

  const handleClose = () => {
    document.getElementById("body").classList.toggle("blur-sm");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal open={open} handleClose={handleClose} data={data[selected]} />
      )}
      <div className="ml-3 md:ml-16">
        <h1 className={`text-4xl md:text-5xl font-medium mb-8 md:mb-16 text-center ${textPos}`}>{header}</h1>
        <div className={`${styles.container} no-scrollbar space-x-6`}>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              onClick={() => handleClickOpen(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
