import Link from 'next/link';
import clsx from 'clsx';

export default function Block({title, image, description, isActive}) {

  const titleClasses = {
    "md:left-3/4 md:top-[calc(14%)]": isActive,
    "md:left-[169%] md:top-0": !isActive
  }
    const blockClasses = {
      "opacity-0 -z-50": !isActive,
      "opacity-1 z-0": isActive,
    }
  const contentClasses = {
    "translate-y-0": isActive,
    "translate-y-20": !isActive 
  }

  return (
    <div className={clsx("min-h-[85vh] flex items-center justify-center sticky top-[15vh] overflow-x-hidden transition-opacity duration-700", blockClasses)}>
      <div className="flex md:flex-row lg:space-x-24 my-auto mx-20 items-center flex-col md:space-x-10 max-md:space-y-12 self-stretch md:max-h-[70vh] max-md:h-1/3">
        <div className="relative self-stretch md:w-1/3 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:h-[40vh]">
            <img className="object-cover w-full h-full" src={image} alt="" />
            <span className={clsx("absolute max-md:-bottom-6 text-5xl lg:text-8xl md:text-5xl tracking-widest bg-gradient-to-br from-black to-colorC bg-clip-text text-transparent transition-all duration-700", titleClasses)}>{title}</span>
        </div>
        <div className="md:w-3/6 mt-[20%] mb-7 text-center md:text-justify">
            <p className={clsx("lg:text-lg md:text-sm max-md:text-xs transition-all duration-700", contentClasses)}>{description}</p>
            <Link href="/magazines">
              <button className="transition-none bg-gradient-to-br from-colorA to-colorB hover:from-black hover:to-colorB text-white lg:py-4 lg:px-6 md:py-2 md:px-3 lg:text-lg md:text-sm rounded-full mt-10 px-3 py-2">EXPLORE NOW !</button>
            </Link>
        </div>
      </div>
    </div>
  )
}