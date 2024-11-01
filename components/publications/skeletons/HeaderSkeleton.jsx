export default function HeaderSkeleton() {
  return (
    <div className="md:mb-8 animate-pulse hidden md:block">
      <div className="bg-gray-300 h-8 md:h-16 w-[30%] mx-auto rounded-md mb-2"></div>
      <div className="hidden md:block bg-gray-300 h-6 w-1/5 mx-auto rounded-md mt-4"></div>
    </div>
  );
}
