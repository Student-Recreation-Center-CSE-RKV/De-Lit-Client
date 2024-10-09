import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/publications/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/AnthologyWrapper";


polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="flex flex-col my-32 space-y-24">
        <MagazineWrapper />
        <AnthologyWrapper />
        {/* <CardWrapper header={"Articles"} /> */}
      </div>
    </>
  );
}
