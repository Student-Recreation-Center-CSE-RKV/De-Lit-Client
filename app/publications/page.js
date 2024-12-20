import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/publications/magazine/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/anthology/AnthologyWrapper";
import ArticleWrapper from "@/components/publications/article/ArticleWrapper";

polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="container flex flex-col mt-24 mb-5 md:mt-32 overflow-hidden">
        <MagazineWrapper isFirst />
        <AnthologyWrapper />
        <ArticleWrapper />
      </div>
    </>
  );
}
