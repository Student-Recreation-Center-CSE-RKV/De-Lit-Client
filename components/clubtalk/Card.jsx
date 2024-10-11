import { Raleway } from "next/font/google";

const raleway = Raleway({subsets: ['latin']});

export default function Card({ title, description, idno, cardNum }) {
    const cardClasses = [
        "ml-[10%] -mt-2 -rotate-3 max-md:ml-[5%] max-md:-mt-1 max-md:rotate-3",
        "ml-auto mr-[2%] -mt-2 rotate-6",
        "ml-[2%] mt-2 -rotate-12 max-md:mt-1",
        "ml-auto mr-[10%] -mt-3 rotate-2",
        "ml-[30%] -mt-2 rotate-2",  {/* if this is the last and single card in big screens */}
    ]
    const clipClasses = [
        "left-[50%] max-md:left-[35%]",
        "left-[25%]",
        "left-[80%]",
        "left-[50%]",
        "left-[50%]"
    ]
    return (
        <div className={`relative md:w-[35%] w-[90%] ${cardClasses[cardNum]}`}>
            <img className={`absolute top-[-10px] w-[12px] z-10 ${clipClasses[cardNum]}`} src="clip.svg" alt="clip" />
            <div className={`bg-white shadow-lg rounded-xl overflow-hidden md:p-10 p-5 ${raleway.className}`}>          
                <div className="border-colorE border-[1px] p-5 mb-5 rounded-xl">
                    <p className="mt-2 lg:text-lg md:text-sm text-base">{description}</p>
                </div>
                <div className="pl-5">
                    <h3 className="text-xl lg:text-xl md:text-lg">{title}</h3>
                    <p className="text-sm">R2XXXXX</p>
                </div>
            </div>
        </div>
    )
}