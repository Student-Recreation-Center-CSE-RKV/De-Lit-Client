import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export default function Block({block_title, id, block_image_link, base64, block_content, link}) {
  const headingClasses = {
    "text-5xl": block_title.length <= 9,
    "text-4xl": block_title.length > 9
  }
  return (
    <div id={id} className={clsx("min-h-[100dvh] flex items-center justify-center overflow-x-hidden overflow-hidden")}>
      <div className="mt-[10dvh] flex justify-center items-center">
        <div className="flex md:flex-row lg:space-x-24 max-md:mx-14 items-center justify-center flex-col md:space-x-7 max-md:space-y-12 self-stretch 2xl:h-[50dvh] lg:h-[67dvh] md:h-[50dvh] max-md:h-1/3">
          <Link href={link} className="relative self-stretch md:w-1/3 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:h-[40vh]">
              <div className={clsx("relative opacity-1 w-full h-full")}>
                <Image src={block_image_link} alt="block-img" fill placeholder="blur" blurDataURL={base64}
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 100vw"
                  className="rounded-3xl object-cover"
                />
              </div>
              <p className={clsx("absolute max-md:-bottom-6 text-myblack tracking-widest md:glow mobile-glow md:left-3/4 md:top-[14%] 2xl:text-9xl lg:text-8xl md:text-5xl", headingClasses)}>{block_title}</p>
          </Link>
          <div className={clsx("md:w-3/6 mt-[15%] mb-7 text-center md:text-justify flex flex-col justify-center")}>
              <p className={clsx("2xl:text-2xl xl:text-xl lg:text-lg md:text-sm max-md:text-xs text-colorB")}>{block_content}</p>
              <div>
                <Link href={link} >
                  <button className="bg-colorA hover:bg-black text-white 2xl:py-4 2xl:px-6 lg:py-3 lg:px-5 md:py-2 md:px-3 2xl:text-xl lg:text-sm md:text-sm rounded-full mt-10 px-3 py-2 tracking-wide">EXPLORE</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}