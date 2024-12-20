import Card from "./Card";

export default function TeamSection({data}) {
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl lg:mt-24 m-10">{data.year}</h1>
        <div className="flex flex-wrap gap-5 justify-center md:mx-10">
          {data.team.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </div>
    </div>
  )
}
