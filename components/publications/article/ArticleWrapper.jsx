import { ARTICLES } from "@/utils/dummy";
import Articles from "@/components/publications/article/Articles";

async function getArticles() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return ARTICLES;
}

export default async function ArticleWrapper() {
  const data = await getArticles();
  return (
    <Articles
      header={"Articles"}
      subheader={"Your source for fascinating reads and ideas."}
      data={data}
    />
  );
}
