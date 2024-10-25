import TeamSection from "@/components/aboutus/TeamSection";

export default function Page() {
  return (
    <div className="container mt-[20vh]">
      <div className="">
          <h1 className="lg:text-[6rem] md:text-[3rem] text-[2.5rem] text-center tracking-wide">ABOUT US</h1>
          <p className="text-center">Who are we?</p>
      </div>
      <TeamSection />
    </div>
  )
}