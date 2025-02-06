import HomeSections from "@/components/HomeSections";
import { getData } from "@/services/api";
import { getPlaceholderImage, addBase64 } from "@/utils/image-load";
import slugify from "slugify";

export default async function Home() {
  let blocksData = (await getData("get_all_blocks")).blocks;
  blocksData = await addBase64(blocksData, "block_image_link");
  blocksData.forEach((block) => {
    block.slug = slugify(block.block_title, { lower: true, strict: true });
    block.block_title = block.block_title.toUpperCase().replace(" ", "\u00A0"); // replace space with non-breaking space
  });
  blocksData.sort((a, b) => a.position - b.position);

  let bannerData = await getData("get_banner");
  bannerData = bannerData.banner[0];
  bannerData.base64 = (await getPlaceholderImage(bannerData.banner_link)).base64;
  
  return (
    <HomeSections blocksData={blocksData} bannerData={bannerData} />
  );
}