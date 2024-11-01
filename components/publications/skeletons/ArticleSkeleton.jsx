import HeaderSkeleton from "./HeaderSkeleton";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

export default function ArticleSkeleton() {
  return (
    <>
      <div className="ml-3 md:ml-16 mb-9">
        <HeaderSkeleton />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <ArticleCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
