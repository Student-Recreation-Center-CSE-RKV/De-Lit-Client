import BlockSection from "@/components/BlockSection";
import Banner from "@/components/Banner";

export default async function Home() {
  const getBlocks = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}/home/`, {
      next: { revalidate: 30 }
    });
    const data = await res.json();
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
  const bannerImage = await getBannerImage();

  return (
    <>
      <Banner image={bannerImage} />
      <BlockSection blocksData={blocksData} />
    </>
  );
}
