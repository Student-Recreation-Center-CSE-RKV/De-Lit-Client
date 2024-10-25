import Card from "./Card";
import { LOTR_CHARACTERS } from "@/utils/dummy";

export default function TeamSection() {
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl">R21</h1>
        <div className="flex flex-wrap gap-5 justify-center m-10">
          {LOTR_CHARACTERS.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </div>
    </div>
  )
}
