import BlockSection from "@/components/BlockSection";
import Banner from "@/components/Banner";
import { getPlaceholderImage, addBase64 } from "@/utils/image-load";

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
  const bannerImage = "https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg";
  const { base64 } = await getPlaceholderImage(bannerImage);

  return (
    <>
      <Banner image={bannerImage} base64={base64} />
      <BlockSection blocksData={blocksData} />
    </>
  );
}
