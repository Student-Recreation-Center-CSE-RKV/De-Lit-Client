import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import CardWrapper from "@/components/publications/CardWrapper";

polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="flex flex-col my-36 space-y-24">
        <CardWrapper header={"Dive Into Our Curated Magazine Collection"} to={"magazines"}/>
        <CardWrapper header={"A Journey Through Words: Our Anthologies"} />
        {/* <CardWrapper header={"Articles"} /> */}
      </div>
    </>
  );
}