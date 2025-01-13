import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export default function Block({name, id, image_link, base64, content, link, isActive}) {
  const titleClasses = {
    "md:left-3/4 md:top-[calc(14%)]": isActive,
    "md:left-[116%] md:top-[14%]": !isActive
  }
    const blockClasses = {
      "md:opacity-0 md:-z-50": !isActive,
      "md:opacity-1 md:z-0": isActive,
    }
  const contentClasses = {
    "md:translate-y-0": isActive,
    "md:translate-y-10": !isActive 
  }
  const imageClasses = {
    "md:scale-100": isActive,
    "md:scale-90": !isActive
  }

  return (
    <div id={id} className={clsx("min-h-[100dvh] flex items-center justify-center overflow-x-hidden transition-all duration-100 overflow-hidden ease-[cubic-bezier(0.455,0.030,0.515,0.955)]", blockClasses)}>
      <div className="mt-[10dvh] flex justify-center items-center">
        <div className="flex md:flex-row lg:space-x-24 md:mx-20 max-md:mx-14 items-center flex-col md:space-x-10 max-md:space-y-12 self-stretch lg:h-[67dvh] md:h-[50dvh] max-md:h-1/3">
          <Link href={link} className="relative self-stretch md:w-1/3 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:h-[40vh]">
              <div className={clsx("relative opacity-1 w-full h-full transition-all duration-700 ease-[cubic-bezier(.455,.03,.515,.955)]", imageClasses)}>
                <Image src={image_link} alt="block-img" fill placeholder="blur" blurDataURL={base64}
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 100vw"
                  className="rounded-3xl object-cover"
                />
              </div>
              <p className={clsx("absolute max-md:-bottom-6 text-5xl lg:text-8xl md:text-5xl text-myblack tracking-widest md:glow mobile-glow transition-all duration-1000 ease-[cubic-bezier(.455,.03,.515,.955)]", titleClasses)}>{name}</p>
          </Link>
          <div className={clsx("md:w-3/6 mt-[20%] mb-7 text-center md:text-justify transition-all ease-[cubic-bezier(.455,.03,.515,.955)] duration-500", contentClasses)}>
              <p className={clsx("lg:text-lg md:text-sm max-md:text-xs text-colorB")}>{content}</p>
              <Link href={link}>
                <button className="bg-colorA hover:bg-black text-white lg:py-2 lg:px-4 md:py-2 md:px-3 lg:text-sm md:text-sm rounded-full mt-10 px-3 py-2 tracking-wide transistion-all duration-300">EXPLORE</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}