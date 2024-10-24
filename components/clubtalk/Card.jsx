import { Raleway } from "next/font/google";

const raleway = Raleway({subsets: ['latin']});

export default function Card({ title, description, idno, cardNum, image_link }) {
    const cardClasses = [
        "lg:ml-[10%] lg:-mt-2 lg:-rotate-3 sm:ml-[25%] -mt-1 rotate-3", // mobile #1
        "ml-auto mr-[2%] -mt-2 rotate-6",
        "lg:ml-[2%] lg:mt-2 -rotate-12 max-md:mt-1 sm:ml-[25%]",  // mobile #2
        "ml-auto mr-[10%] -mt-3 rotate-2",
        "ml-[30%] -mt-2 rotate-2",  // if this is the last and single card in big screens
    ]
    const clipClasses = [
        "left-[50%] max-md:left-[35%]",
        "left-[25%]",
        "left-[80%]",
        "left-[50%]",
        "left-[50%]"
    ]
    return (
        <div className={`relative lg:w-[35%] sm:w-[50%] w-[90%] ${cardClasses[cardNum]}`}>
            <img className={`absolute top-[-10px] w-[12px] z-10 ${clipClasses[cardNum]}`} src="clip.svg" alt="clip" />
            <div className={`bg-white shadow-lg rounded-xl overflow-hidden xl:p-10 p-5 ${raleway.className}`}>          
                <div className="border-colorE border-[1px] p-5 mb-5 rounded-xl">
                    <p className="mt-2 xl:text-lg lg:text-sm md:text-sm text-base">{description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="pl-5">
                        <h3 className="text-xl lg:text-xl md:text-lg">{title}</h3>
                        <p className="text-sm">R2XXXXX</p>
                    </div>
                    <img 
                        src={image_link ? image_link : `https://ui-avatars.com/api/?name=${title}&background=random`}
                        className="w-8 h-8 mr-2 rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}