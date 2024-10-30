export default function ArticleCard({ article }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg  overflow-hidden xl:p-10 p-5 hover:-translate-y-1 
                   transition-transform duration-200 ease-[cubic-bezier(0.455,0.030,0.515,0.955)] cursor-pointer"
    >
      <h3 className="text-xl text-colorA font-medium truncate">{article.title}</h3>
      <p className="text-colorB mt-2 line-clamp-3">{article.description}</p>
      <button className="mt-4 text-blue-600 font-semibold">Read more</button>
    </div>
  );
}
