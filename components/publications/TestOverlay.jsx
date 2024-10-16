import React from 'react'
import { FaTimes } from 'react-icons/fa'
import PDFViewer from './PDFViewer'

export default function Overlay() {
  return (
    <>
    <div class="absolute inset-0 bg-black opacity-40 z-40"></div>
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto backdrop-blur-sm">
        <div className="flex justify-center items-center my-10">
            <div className="flex flex-col bg-white shadow-lg rounded-2xl w-5/6">
                <div className="sticky top-0 p-4 self-end">
                    <button className='bg-black p-2 rounded-full text-mywhite hover:text-white'><FaTimes size={17}/></button>
                </div>
                <PDFViewer file="/sample.pdf" width={1100} />
            </div>
        </div>
    </div>
    </>
  )
}
