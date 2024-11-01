import HeaderSkeleton from "./HeaderSkeleton";

export default function SkeletonWrapper({ Skeleton }) {
  return (
    <>
      <div className="ml-3 md:ml-16 mb-9">
        <HeaderSkeleton />
        <div className="w-full overflow-x-auto gap-3 p-4 flex no-scrollbar scroll-smooth snap-mandatory snap-x">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
