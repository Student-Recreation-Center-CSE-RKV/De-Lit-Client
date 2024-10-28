"use client";
import Card from "./Card";
import { motion } from "framer-motion";

export default function TestimonialRow({firstRow, firstTheega, talk1, talk2, lastAndSingle}) {
    let theegasvg = firstTheega ? "theega.svg" : "theega2.svg";
    theegasvg = talk2 === null ? "theega-mobile.svg" : theegasvg;
    return (
        <motion.div 
            initial={{opacity: (firstRow ? 1 : 0), scale: 0.95}} 
            whileInView={{opacity: 1, scale: 1}} 
            viewport={{amount: 0.4, once: true}}  
            transition={{duration: 1, type: "spring", stiffness: 200}}
            className="lg:my-40 lg:mx-24 mx-10 mb-24"
        >
            <img className="w-full" src={theegasvg} alt="Theega" />
            <div className="flex">
                <Card 
                    {...talk1}
                    cardNum={lastAndSingle ? 4 : (firstTheega ? 0 : 2)} 
                />
                {talk2 ? 
                    <Card 
                        {...talk2}
                        cardNum={firstTheega ? 1 : 3} 
                    /> 
                : null}
            </div>
        </motion.div>
    )
}