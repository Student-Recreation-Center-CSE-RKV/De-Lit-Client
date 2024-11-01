import React from "react";
import { MAGAZINES } from "@/utils/dummy";
import Card from "./Card";
import dynamic from "next/dynamic";
import { addBase64 } from "@/utils/image-load";

const CardWrapper = dynamic(
  () => {
    return import("./CardWrapper");
  },
  { ssr: false }
);

export default async function MagazineWrapper({ isFirst }) {
  const data = await addBase64(MAGAZINES);
  return (
    <CardWrapper
      data={data}
      header={"Magazines"}
      subheader={"Dive Into Our Curated Magazine Collection"}
      isFirst={isFirst}
      CardComponent={Card}
    />
  );
}
