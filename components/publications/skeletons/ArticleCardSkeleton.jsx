function ArticleCardSkeleton() {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden xl:p-10 p-5">
        <div className="w-1/2 h-4 bg-gray-300 rounded mt-2 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mt-4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mt-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mt-6 animate-pulse"></div>
      </div>
    );
  }
  
  export default ArticleCardSkeleton;
  