import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export default function Card({
  title,
  description,
  idno,
  cardNum,
  image_link,
}) {
  const cardClasses = [
    "lg:ml-[10%] lg:-translate-y-2 lg:-rotate-3 sm:ml-[25%] -translate-y-1 rotate-3", // mobile #1
    "ml-auto mr-[2%] -translate-y-2 rotate-6",
    "lg:ml-[2%] lg:translate-y-2 -rotate-12 max-md:translate-y-1 sm:ml-[25%] ml-[5%]", // mobile #2
    "ml-auto mr-[10%] -translate-y-3 rotate-2",
    "ml-[30%] -translate-y-2 rotate-2", // if this is the last and single card in big screens
  ];
  const clipClasses = [
    "left-[50%] max-md:left-[35%]",
    "left-[25%]",
    "left-[80%]",
    "left-[50%]",
    "left-[50%]",
  ];
  return (
    <div
      className={`relative lg:w-[35%] sm:w-[50%] w-[90%] xl:min-h-96 sm:min-h-72 min-h-80 ${cardClasses[cardNum]}`}
    >
      <img src="clip.svg" className={`absolute top-[-10px] w-[12px] z-10 ${clipClasses[cardNum]}`} alt="clip" />
      <div className={`flex flex-col bg-white shadow-lg rounded-xl overflow-hidden xl:p-10 p-5 h-full ${raleway.className}`}>
        <div className="flex items-center justify-center border-colorE border-[1px] p-5 mb-5 rounded-xl flex-grow">
          <p className="xl:text-lg md:text-sm text-base text-colorA">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="pl-5">
            <h3 className="lg:text-xl md:text-lg text-base">{title}</h3>
            <p className="text-sm">R2XXXXX</p>
          </div>
          <div className="relative mr-2 w-[40px] h-[40px]">
            <Image
              src={
                image_link ? image_link : `https://ui-avatars.com/api/?name=${title}&background=random`
              }
              alt={title}
              quality={100}
              sizes="64px"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
