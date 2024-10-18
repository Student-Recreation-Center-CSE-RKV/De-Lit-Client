import React from "react";
import CardWrapper from "./CardWrapper";
import { MAGAZINES } from "@/utils/dummy";

export default async function MagazineWrapper() {
  return (
    <CardWrapper
      data={MAGAZINES}
      header={"Dive Into Our Curated Magazine Collection"}
    />
  );
}
