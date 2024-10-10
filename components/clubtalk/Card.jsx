export default function Card({ title, description, cardNum }) {
    const cardClasses = [
        "ml-[15%] -mt-2 -rotate-3",
        "ml-auto mr-[5%] -mt-2 rotate-6",
        "ml-[2%] mt-2 -rotate-12",
        "ml-auto mr-[10%] -mt-3",
    ]
    const clipClasses = [
        "left-[50%]",
        "left-[25%]",
        "left-[80%]",
        "left-[50%]",
    ]
    return (
        <div className={`relative md:w-1/4 w-1/3 ${cardClasses[cardNum]}`}>
            <img className={`absolute top-[-10px] w-[12px] z-10 ${clipClasses[cardNum]}`} src="clip.svg" alt="clip" />
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:p-10 p-5">
                <h1 className="font-bold text-sm md:text-lg">{title}</h1>
                <p className="mt-2 md:text-sm text-[0.5rem]">{description}</p>
            </div>
        </div>
    )
}