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
  const blocksData = await getBlocks();
  return (
    <>
      <Banner />
      <BlockSection blocksData={blocksData}/>
    </>
  );
}
