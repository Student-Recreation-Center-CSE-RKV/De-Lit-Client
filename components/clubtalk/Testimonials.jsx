import { getData } from "@/services/api";
import TestimonialRow from "./TestimonialRow";

export default async function Testimonials() {
    const data = (await getData("get_all_cards")).cards;
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
      pairs.push([data[i], data[i + 1] || null]);
    }
    return (
        <>
        {/* two cards per row in big screens */}
        <div className="min-h-screen lg:block hidden">
            {
                pairs.map((pair, index) => (
                    <TestimonialRow 
                        key={index}
                        firstRow={index === 0}
                        firstTheega={index % 2 === 0} 
                        talk1={pair[0]} 
                        talk2={pair[1]} 
                        lastAndSingle={pair[1] === null} 
                    />
                ))
            }
        </div>

        {/* one card per row in mobiles */}
        <div className="min-h-screen block lg:hidden">
            {
                data.map((talk, index) => (
                    <TestimonialRow 
                        key={index} 
                        firstTheega={index % 2 === 0} 
                        talk1={talk} 
                        talk2={null} 
                    />
                ))
            }
        </div>
        </>
    )
}