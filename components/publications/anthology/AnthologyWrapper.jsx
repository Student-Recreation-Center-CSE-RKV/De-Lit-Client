import React from "react";
import Anthology from "@/components/publications/anthology/Anthology";
import { ANTHOLOGIES } from "@/utils/dummy";
import { addBase64 } from "@/utils/image-load";
import AnthologySkeleton from "../skeletons/AnthologySkeleton";
import SkeletonWrapper from "../skeletons/SkeletonWrapper";

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

async function getAnthologies() {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  return ANTHOLOGIES;
}

export default async function AnthologyWrapper() {
  await getAnthologies();
  const data = await addBase64(ANTHOLOGIES);
  return (
    <CardWrapper
      data={data}
      header={"Anthologies"}
      subheader={"A Journey Through Words: Our Anthologies"}
      CardComponent={Anthology}
    />
  );
}
