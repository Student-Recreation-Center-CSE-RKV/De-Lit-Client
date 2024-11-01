import React from "react";
import { MAGAZINES } from "@/utils/dummy";
import Card from "./Card";
import dynamic from "next/dynamic";

const CardWrapper = dynamic(
  () => {
    return import("./CardWrapper");
  },
  { ssr: false }
);

export default async function MagazineWrapper({ isFirst }) {
  return (
    <CardWrapper
      data={MAGAZINES}
      header={"Magazines"}
      subheader={"Dive Into Our Curated Magazine Collection"}
      isFirst={isFirst}
      CardComponent={Card}
    />
  );
}
