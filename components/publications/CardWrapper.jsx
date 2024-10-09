import React from "react";
import Card from "./Card";
import styles from "@/components/publications/Card.module.css";
import { MAGAZINES, ANTHOLOGIES } from "@/utils/dummy";

const CardWrapper = ({ header, to }) => {
  const data = to === "magazines" ? MAGAZINES : ANTHOLOGIES;
  return (
    <>
      <div className="ml-3 md:ml-16">
        <h1 className={`text-5xl font-medium mb-16 ${to === "magazines" ? "": "text-center"}`}>{header}</h1>
        <div className={`${styles.container} no-scrollbar space-x-6`}>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
