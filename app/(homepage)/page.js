import HomeSections from "@/components/HomeSections";
import { getData } from "@/services/api";
import { getPlaceholderImage, addBase64 } from "@/utils/image-load";


export default async function Home() {
  let blocksData = await getData("get_all_blocks");
  blocksData = blocksData.blocks;
  blocksData = await addBase64(blocksData, "block_image_link");
  let bannerData = await getData("get_banner");
  bannerData = bannerData.banner[0];
  bannerData.base64 = (await getPlaceholderImage(bannerData.banner_link)).base64;
  return (
    <HomeSections blocksData={blocksData} bannerData={bannerData} />
  );
}