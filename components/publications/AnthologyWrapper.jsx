import React from "react";
import Anthology from "./Anthology";
import { ANTHOLOGIES } from "@/utils/dummy";

import dynamic from "next/dynamic";

const CardWrapper = dynamic(
  () => {
    return import("./CardWrapper");
  },
  { ssr: false }
);

export default function AnthologyWrapper() {
  return (
    <CardWrapper
      data={[]}
      header={"Anthologies"}
      subheader={"A Journey Through Words: Our Anthologies"}
      CardComponent={Anthology}
    />
  );
}
