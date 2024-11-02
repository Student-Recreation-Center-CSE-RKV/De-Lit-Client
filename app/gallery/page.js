"use client";
import React from "react";
import Gallery from "@/components/gallery/Gallery";
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Our Memories</title>
      </Head>
      <div className="flex flex-col items-center ">
        <h1 className="text-7xl font-bold text-gray-800  mt-[100px]">Our Memories</h1>
        <Gallery />
      </div>
    </>
  );
};

export default Page;
