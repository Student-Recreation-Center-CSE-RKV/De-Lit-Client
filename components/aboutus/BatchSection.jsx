import Card from "./Card";

export default function TeamSection({ members, batchName, year }) {
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl lg:mt-24 m-10">{batchName}</h1>
        <div className="flex flex-wrap gap-5 justify-center md:mx-10">
          {members.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
    </div>
  )
}
