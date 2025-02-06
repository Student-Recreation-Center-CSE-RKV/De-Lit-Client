import React from "react";
import Card from "@/components/publications/magazine/Card";
import CardSkeleton from "../skeletons/CardSkeleton";
import SkeletonWrapper from "../skeletons/SkeletonWrapper";
import dynamic from "next/dynamic";
import { addBase64 } from "@/utils/image-load";
import { getData } from "@/services/api";

const CardWrapper = dynamic(
  () => {
    return import("../CardWrapper");
  },
  { loading: () => <SkeletonWrapper Skeleton={CardSkeleton} />, ssr: false }
);

export default async function MagazineWrapper({ isFirst }) {
  const data = (await getData("get_all_publications?type=magazine"))
    .publications;
  const magazines = await addBase64(data, "cover_image_link");
  return (
    <CardWrapper
      data={magazines}
      header={"Magazines"}
      subheader={"Dive Into Our Curated Magazine Collection"}
      isFirst={isFirst}
      CardComponent={Card}
    />
  );
}
