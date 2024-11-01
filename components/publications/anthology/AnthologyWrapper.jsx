import React from "react";
import Anthology from "@/components/publications/anthology/Anthology";
import { ANTHOLOGIES } from "@/utils/dummy";
import { addBase64 } from "@/utils/image-load";

import dynamic from "next/dynamic";

const CardWrapper = dynamic(
  () => {
    return import("../CardWrapper");
  },
  { ssr: false }
);

async function getAnthologies() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return ANTHOLOGIES;
}

export default async function AnthologyWrapper() {
<<<<<<< HEAD:components/publications/AnthologyWrapper.jsx
  const data = await addBase64(ANTHOLOGIES);
=======
  const data = await getAnthologies();
>>>>>>> e7707ca (style, chore(publications): change file structure and update fallback animations for magazine, anthology, article):components/publications/anthology/AnthologyWrapper.jsx
  return (
    <CardWrapper
      data={data}
      header={"Anthologies"}
      subheader={"A Journey Through Words: Our Anthologies"}
      CardComponent={Anthology}
    />
  );
}
