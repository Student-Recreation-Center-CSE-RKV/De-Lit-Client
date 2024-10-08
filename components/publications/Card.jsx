import React from "react";
import styles from "@/components/publications/Card.module.css";

const Card = ({ title, text, image }) => {
  return (
    <div className={`${styles.cardWarp}`}>
      <div
        className={`${styles.card} w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] `}
      >
        <img
          className={`${styles.cardBg} object-cover hover:scale-110 transition-all duration-300 ease-in-out`}
          src={image}
        />
        <div className={styles.cardInfo}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
