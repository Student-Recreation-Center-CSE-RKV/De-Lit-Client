import { getPlaiceholder } from "plaiceholder";

export async function getPlaceholderImage(src) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { 
    metadata: {height, width},
    ...plaiceholder
   } = await getPlaiceholder(buffer);
   
   return {
    ...plaiceholder,
    img: {src, width, height}
   }
}

export async function addBase64(data) {
  for (let i = 0; i < data.length; i++) {
    let image_link = data[i].image_link;
    if (!image_link) {
      if (data[i].image) {
        image_link = data[i].image;
      }
    }
    const {base64} = await getPlaceholderImage(image_link);
    data[i].base64 = base64;
  }
  return data;
}