import ContentBlock from "@/components/aboutus/ContentBlock";
import { addBase64 } from "@/utils/image-load";
import AllBatches from "@/components/aboutus/AllBatches";
import { getData } from "@/services/api";

export default async function Page() {
  let data = (await getData("get_all_members")).members;
  data = await addBase64(data, "profile_image");
  let batchMap = {};
  data.forEach((member) => {
    if (!batchMap[member.batch]) {
      batchMap[member.batch] = {};
      batchMap[member.batch].year = member.year;
      batchMap[member.batch].members = [];
    }
    batchMap[member.batch].members.push(member);
  });

  const infoSections = (await getData("get_all_infos")).infos;
  return (
    <div className="container mt-[20vh]">
      {infoSections.map((infoSection) => (
        <ContentBlock key={infoSection.id} title={infoSection.title} description={infoSection.content} />
      ))}
      <AllBatches allBatches={batchMap}/>
    </div>
  )
}