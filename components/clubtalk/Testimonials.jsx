"use client";
import Theega from "./Theega";
import { CLUB_TALK } from "@/utils/dummy";

export default function Testimonials() {
    const pairs = [];
    for (let i = 0; i < CLUB_TALK.length; i += 2) {
      pairs.push([CLUB_TALK[i], CLUB_TALK[i + 1] || null]);
    }
    console.log(pairs);
    return (
        <div className="min-h-screen m-10">
            {pairs.map((pair, index) => (
                <Theega key={index} first={index % 2 === 0} talk1={pair[0]} talk2={pair[1]} />
            ))}
        </div>
    )
}