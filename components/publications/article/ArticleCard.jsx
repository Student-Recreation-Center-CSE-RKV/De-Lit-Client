import OverlayWrapper from "@/components/publications/OverlayWrapper";

export default function ArticleCard({ article }) {
  return (
    <OverlayWrapper overlayLink="" title={article.title}>
      <div
        className="bg-white shadow-md rounded-lg  overflow-hidden xl:p-10 p-5 hover:-translate-y-1 
                   transition-transform duration-200 ease-[cubic-bezier(0.455,0.030,0.515,0.955)] cursor-pointer"
      >
        <p className="text-colorA mt-2 text-sm pb-2">{article.author}</p>
        <h3 className="text-xl text-colorA font-medium truncate">
          {article.title}
        </h3>
        <p className="text-xs md:text-base text-colorB mt-2 line-clamp-3">
          {article.description}
        </p>
        <button className="mt-4 text-colorC text-sm font-semibold">
          Read more
        </button>
      </div>
    </OverlayWrapper>
  );
}
