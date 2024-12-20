import React from "react";
import { MAGAZINES } from "@/utils/dummy";
import Card from "@/components/publications/magazine/Card";
import CardSkeleton from "../skeletons/CardSkeleton";
import SkeletonWrapper from "../skeletons/SkeletonWrapper";
import dynamic from "next/dynamic";
import { addBase64 } from "@/utils/image-load";

const CardWrapper = dynamic(
  () => {
    return import("../CardWrapper");
  },
  { loading: () => <SkeletonWrapper Skeleton={CardSkeleton} />, ssr: false }
);

async function getMagazines() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return MAGAZINES;
}

export default async function MagazineWrapper({ isFirst }) {
  await getMagazines();
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
