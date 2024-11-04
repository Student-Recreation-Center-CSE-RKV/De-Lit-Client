"use client";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Card({ character }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <div
        className="flex flex-col gap-5 items-center justify-between lg:w-[30%] sm:w-[45%] w-[90%]
                   bg-white shadow-lg rounded-xl hover:-translate-y-1 xl:p-10 p-5 
                   transition-transform duration-200 ease-[cubic-bezier(0.455,0.030,0.515,0.955)] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative w-full h-[250px]">
          <Image
            src={character.image_link}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            placeholder="blur"
            blurDataURL={character.base64}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center xl:min-h-[120px] min-h-[80px]">
          <p className="text-colorB xl:text-xl text-lg text-center m-auto">{character.quote}</p>
        </div>
        <h1 className="md:text-xl text-lg self-end">{character.name}</h1>
      </div>
      {showModal && <Modal character={character} setShowModal={setShowModal} />}
    </>
  );
}
