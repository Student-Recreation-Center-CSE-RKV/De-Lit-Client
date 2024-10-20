import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/publications/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/AnthologyWrapper";

polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="container flex flex-col mt-24 mb-5 md:mt-32 overflow-hidden">
        <MagazineWrapper isFirst/>
        <AnthologyWrapper />
        {/* <CardWrapper header={"Articles"} /> */}
      </div>
    </>
  );
}
