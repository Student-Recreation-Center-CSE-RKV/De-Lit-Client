import { CLUB_TALK } from "@/utils/dummy";
import TestimonialRow from "./TestimonialRow";

export default function Testimonials() {
    const pairs = [];
    for (let i = 0; i < CLUB_TALK.length; i += 2) {
      pairs.push([CLUB_TALK[i], CLUB_TALK[i + 1] || null]);
    }

    // console.log(pairs);
    return (
        <>
        {/* two cards per row in big screens */}
        <div className="min-h-screen m-auto max-w-[1500px] md:block hidden">
            {pairs.map((pair, index) => (
                <TestimonialRow key={index} first={index % 2 === 0} talk1={pair[0]} talk2={pair[1]} lastAndSingle={pair[1] === null} />
            ))}
        </div>
        {/* one card per row in mobiles */}
        <div className="min-h-screen block md:hidden">
            {CLUB_TALK.map((talk, index) => (
                <TestimonialRow key={index} first={index % 2 === 0} talk1={talk} talk2={null} />
            ))}
        </div>
        </>
    )
}