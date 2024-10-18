import React from "react";
import CardWrapper from "./CardWrapper";
import { ANTHOLOGIES } from "@/utils/dummy";

export default function AnthologyWrapper() {
  return (
    <CardWrapper
      data={ANTHOLOGIES}
      header={"A Journey Through Words: Our Anthologies"}
    />
  );
}
