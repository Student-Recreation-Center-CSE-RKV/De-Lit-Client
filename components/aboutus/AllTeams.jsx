import TeamSection from "./TeamSection"

export default function AllTeams({allteamsdata}) {
  return (
    <div className="my-10">
      {allteamsdata.map((data, index) => (
        <TeamSection key={index} data={data} />
      ))}
    </div>
  )
}
