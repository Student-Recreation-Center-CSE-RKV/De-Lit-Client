import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import { Suspense } from "react";
import MagazineWrapper from "@/components/publications/magazine/MagazineWrapper";
import AnthologyWrapper from "@/components/publications/anthology/AnthologyWrapper";
import ArticleWrapper from "@/components/publications/article/ArticleWrapper";
import CardSkeleton from "@/components/publications/skeletons/CardSkeleton";
import AnthologySkeleton from "@/components/publications/skeletons/AnthologySkeleton";
import SkeletonWrapper from "@/components/publications/skeletons/SkeletonWrapper";
import ArticleSkeleton from "@/components/publications/skeletons/ArticleSkeleton";

polyfillPromiseWithResolvers();

export default function page() {
  return (
    <>
      <div className="container flex flex-col mt-24 mb-5 md:mt-32 overflow-hidden">
        <Suspense fallback={<SkeletonWrapper Skeleton={CardSkeleton} />}>
          <MagazineWrapper isFirst />
        </Suspense>
        <Suspense fallback={<SkeletonWrapper Skeleton={AnthologySkeleton} />}>
          <AnthologyWrapper />
        </Suspense>
        <Suspense fallback={<ArticleSkeleton />}>
          <ArticleWrapper />
        </Suspense>
      </div>
    </>
  );
}
