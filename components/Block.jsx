import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export default function Block({name, image_link, base64, content, link, isActive}) {
  const titleClasses = {
    "md:left-3/4 md:top-[calc(14%)]": isActive,
    "md:left-[116%] md:top-[14%]": !isActive
  }
    const blockClasses = {
      "opacity-0 -z-50": !isActive,
      "opacity-1 z-0": isActive,
    }
  const contentClasses = {
    "translate-y-0": isActive,
    "translate-y-10": !isActive 
  }
  const imageClasses = {
    "scale-100": isActive,
    "scale-90": !isActive
  }

  return (
    <div className={clsx("min-h-[85dvh] flex items-center justify-center sticky top-[15dvh] overflow-x-hidden transition-all duration-100 overflow-hidden ease-[cubic-bezier(0.455,0.030,0.515,0.955)]", blockClasses)}>
      <div className="flex md:flex-row lg:space-x-24 my-auto mx-20 items-center flex-col md:space-x-10 max-md:space-y-12 self-stretch md:max-h-[70dvh] max-md:h-1/3">
        <Link href={link} className="relative self-stretch md:w-1/3 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:h-[40dvh]">
            <div className={clsx("opacity-1 w-full h-full transition-all duration-700 ease-[cubic-bezier(.455,.03,.515,.955)]", imageClasses)}>
              <Image src={image_link} alt="block-img" fill placeholder="blur" blurDataURL={base64}
                sizes="(max-width: 768px) 70vw, 25vw"
                className="rounded-3xl object-cover" 
              />
            </div>
            <span className={clsx("absolute max-md:-bottom-6 text-5xl lg:text-8xl md:text-5xl tracking-widest bg-gradient-to-br from-black to-colorC bg-clip-text text-transparent transition-all duration-[800ms] ease-[cubic-bezier(.455,.03,.515,.955)]", titleClasses)}>{name}</span>
        </Link>
        <div className={clsx("md:w-3/6 mt-[20%] mb-7 text-center md:text-justify transition-all ease-[cubic-bezier(.455,.03,.515,.955)] duration-500", contentClasses)}>
            <p className={clsx("lg:text-lg md:text-sm max-md:text-xs text-colorB")}>{content}</p>
            <Link href={link}>
              <button className="bg-gradient-to-br from-colorA to-colorB hover:from-black hover:to-colorB text-white lg:py-4 lg:px-6 md:py-2 md:px-3 lg:text-lg md:text-sm rounded-full mt-10 px-3 py-2 tracking-widest">EXPLORE !</button>
            </Link>
        </div>
      </div>
    </div>
  )
}