import ContentBlock from "@/components/aboutus/ContentBlock";
import { addBase64 } from "@/utils/image-load";
import AllTeams from "@/components/aboutus/AllBatches";
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

  return (
    <div className="container mt-[20vh]">
      <ContentBlock 
        title="The Story of De-Lit" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <ContentBlock 
        title="Our Vision" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <h1 className="text-center text-5xl mt-10">The Fellowship</h1>
      <p className="text-center text-lg mt-5">Meet the team that makes it all happen</p>
      <AllTeams allBatches={batchMap}/>
    </div>
  )
}