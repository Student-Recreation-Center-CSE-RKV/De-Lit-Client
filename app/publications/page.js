import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/publications/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/AnthologyWrapper";
import Articles from "@/components/publications/Articles";

polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="container flex flex-col mt-24 mb-5 md:mt-32 overflow-hidden">
        <MagazineWrapper isFirst />
        <AnthologyWrapper />
        <Articles header={"Articles"} subheader={"Your source for fascinating reads and ideas."}/>
      </div>
    </>
  );
}
