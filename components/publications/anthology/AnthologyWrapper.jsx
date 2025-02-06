import React from "react";
import Anthology from "@/components/publications/anthology/Anthology";
import { addBase64 } from "@/utils/image-load";
import AnthologySkeleton from "../skeletons/AnthologySkeleton";
import SkeletonWrapper from "../skeletons/SkeletonWrapper";
import { getData } from "@/services/api";

import dynamic from "next/dynamic";

const CardWrapper = dynamic(
  () => {
    return import("../CardWrapper");
  },
  {
    ssr: false,
    loading: () => <SkeletonWrapper Skeleton={AnthologySkeleton} />,
  }
);

export default async function AnthologyWrapper() {
  const anthologies = (await getData("get_all_publications?type=anthology"))
    .publications;
  const data = await addBase64(anthologies, "cover_image_link");
  return (
    <CardWrapper
      data={data}
      header={"Anthologies"}
      subheader={"A Journey Through Words: Our Anthologies"}
      CardComponent={Anthology}
    />
  );
}
