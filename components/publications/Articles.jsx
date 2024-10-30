import { ARTICLES } from "@/utils/dummy";
import ArticleCard from "@/components/publications/ArticleCard";

export default function Articles({header, subheader}) {
  return (
    <div className="container mx-auto pb-10 px-5">
      <div className="mb-3 md:mb-8">
        <h1 className="text-[2.8rem] md:text-7xl text-center text-myblack tracking-wide">
          {header}
        </h1>
        <p className="hidden md:block text-center mt-4 text-colorA">
          {subheader}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {ARTICLES.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
