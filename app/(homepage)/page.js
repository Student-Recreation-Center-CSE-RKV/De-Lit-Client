import BlockSection from "@/components/BlockSection";
import Banner from "@/components/Banner";
import { getPlaceholderImage, addBase64 } from "@/utils/image-load";
import HomeSections from "@/components/HomeSections";

export default async function Home() {
  const getBlocks = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}/home/`, {
      next: { revalidate: 30 }
    });
    let data = await res.json();
    data = await addBase64(data);
    return data;
  }

  const getBannerImage = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}/banner/`, {
      next: { revalidate: 30 }
    });
    const data = await res.json();
    return data[0].link;
  }

  const blocksData = await getBlocks();
  const bannerImage = "https://www.pixel4k.com/wp-content/uploads/2023/02/the-batman-2022-wide-4k_1675639354-1536x864.jpg";
  const { base64 } = await getPlaceholderImage(bannerImage);

  return (
    <>
      <HomeSections bannerImage={bannerImage} base64={base64} blocksData={blocksData} />
    </>
  );
}