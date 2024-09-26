"use client";
import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Block from '@/components/Block';

const data = [
{
    "id": 0,
    "image": "/mag.jpg",
    "title": "MAGAZINES"
},
{
    "id": 1,
    "image": "/mag.jpg",
    "title": "BLOGS"
},
{
    "id": 2,
    "image": "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "GALLERY"
},
{
    "id": 3,
    "image": "https://plus.unsplash.com/premium_photo-1661844581764-eb881c5a7462?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "CLUB\u00A0TALK"
}
]

export default function BlockSection() {
    const targetRef = useRef(null);
    const [activeBlock, setActiveBlock] = useState(0);
    const {scrollYProgress} = useScroll({target: targetRef, offset: ["start start", "end end"]});
    const activeBlockValue = useTransform(scrollYProgress, (latest) => Math.floor(latest * 4));
    useEffect(() => activeBlockValue.onChange(latest => {setActiveBlock(latest)}), [])
    return (
      <>
      <motion.p className="fixed top-5 left-5 text-lg">{activeBlock}</motion.p>
        <motion.div ref={targetRef} className={`min-h-[${data.length + 1}00vh]`}>
        {data.map(block => <Block key={block.id} {...block} isActive={activeBlock === block.id} />)}
        </motion.div>
      </>
    )
  }