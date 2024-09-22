import React from 'react'

export default function Block() {
  return (
    <div className="flex flex-row space-x-24 m-20 items-center">
    <div className="relative w-1/3">
        <img className="object-cover w-full h-full" src="mag.jpg" alt="" />
        <span className="absolute top-12 left-3/4 text-8xl tracking-widest">MAGAZINES</span>
    </div>
    <div className="w-2/5 self-end mb-16">
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat optio omnis debitis repellendus perspiciatis itaque ratione laboriosam adipisci exercitationem harum blanditiis, sint illum assumenda fugit libero voluptatibus? Quae, reiciendis.</p>
        <button className="bg-gray-600 text-gray-300 px-3 py-3 rounded-lg mt-10">Check it out</button>
    </div>
    </div>
  )
}
