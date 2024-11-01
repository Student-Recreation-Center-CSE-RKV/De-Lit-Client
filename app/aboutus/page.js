import TeamSection from "@/components/aboutus/TeamSection";
import ContentBlock from "@/components/aboutus/ContentBlock";
import { LOTR_CHARACTERS } from "@/utils/dummy";
import { addBase64 } from "@/utils/image-load";

export default async function Page() {
  const data = await addBase64(LOTR_CHARACTERS);
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
      <TeamSection data={data}/>
    </div>
  )
}