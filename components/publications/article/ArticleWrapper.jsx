import { ARTICLES } from "@/utils/dummy";
import dynamic from "next/dynamic";
import ArticleSkeleton from "../skeletons/ArticleSkeleton";
const Articles = dynamic(
  () => import("@/components/publications/article/Articles"),
  {
    loading: () => <ArticleSkeleton />,
    ssr: false,
  }
);

import { getData } from "@/services/api";

export default async function ArticleWrapper() {
  const articles = (await getData("get_all_publications?type=article"))
    .publications;

  return (
    <Articles
      header={"Articles"}
      subheader={"Your source for fascinating reads and ideas."}
      data={articles}
    />
  );
}
