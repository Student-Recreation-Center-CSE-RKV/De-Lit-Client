import React from "react";
import CardWrapper from "./CardWrapper";
import { ANTHOLOGIES } from "@/utils/dummy";

export default function AnthologyWrapper({ isFirst }) {
  return (
    <CardWrapper
      data={ANTHOLOGIES}
      header={"Anthologies"}
      subheader={"A Journey Through Words: Our Anthologies"}
      isFirst={isFirst}
    />
  );
}
