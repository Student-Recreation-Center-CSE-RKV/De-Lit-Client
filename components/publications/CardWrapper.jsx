import React from "react";
import Card from "./Card";
import styles from "@/components/publications/Card.module.css";

const CardWrapper = ({ header }) => {
  return (
    <>
      <div className="ml-3 md:ml-16">
        <h1 className="text-5xl font-medium mb-16">{header}</h1>
        <div className={`${styles.container} no-scrollbar space-x-6`}>
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />{" "}
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />{" "}
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />{" "}
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />{" "}
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />{" "}
          <Card
            title="Canyon"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          />
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
