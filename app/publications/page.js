import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/publications/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/AnthologyWrapper";
import Overlay from "@/components/publications/TestOverlay";


polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="container flex flex-col mt-32 overflow-hidden">
        <Overlay />
        <MagazineWrapper />
        <AnthologyWrapper />
        {/* <CardWrapper header={"Articles"} /> */}
      </div>
    </>
  );
}
