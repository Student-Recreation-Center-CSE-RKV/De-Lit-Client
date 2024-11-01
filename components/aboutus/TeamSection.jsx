import Card from "./Card";

export default function TeamSection({data}) {
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl">R21</h1>
        <div className="flex flex-wrap gap-5 justify-center m-10">
          {data.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </div>
    </div>
  )
}
