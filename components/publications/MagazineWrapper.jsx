import React from "react";
import CardWrapper from "./CardWrapper";
import { MAGAZINES } from "@/utils/dummy";

export default async function MagazineWrapper({ isFirst }) {
  return (
    <CardWrapper
      data={MAGAZINES}
      header={"Magazines"}
      subheader={"Dive Into Our Curated Magazine Collection"}
      isFirst={isFirst}
    />
  );
}
