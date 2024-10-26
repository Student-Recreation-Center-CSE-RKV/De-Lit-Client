"use client";
import Modal from "./Modal";
import { useEffect, useState } from "react";

export default function Card({ character }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <div
        className="flex flex-col gap-5 items-center justify-between lg:w-[30%] sm:w-[40%] w-[90%]
                   bg-white shadow-lg rounded-xl overflow-hidden xl:p-10 p-5 hover:-translate-y-1 
                   transition-transform duration-200 ease-[cubic-bezier(0.455,0.030,0.515,0.955)] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          src={character.image_link}
          alt={character.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <p className="text-colorB xl:text-lg text-base text-center">
          {character.quote}
        </p>
        <h1 className="text-xl self-end justify-end">{character.name}</h1>
      </div>
      {showModal && <Modal character={character} setShowModal={setShowModal} />}
    </>
  );
}
