"use client";
import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import Block from '@/components/Block';
import { BLOCKS_DATA } from '@/utils/dummy';

const n = BLOCKS_DATA.length;

export default function BlockSection() {
    const targetRef = useRef(null);
    const [activeBlock, setActiveBlock] = useState(0);
    const {scrollYProgress} = useScroll({target: targetRef, offset: ["start start", "end end"]});
    useMotionValueEvent(scrollYProgress, "change", (latest) => setActiveBlock(Math.floor(latest * n)));
    return (
      <>
        {/* <motion.p className="fixed text-red-500 left-2 top-[17vh]">{scrollYProgress}</motion.p> */}
        <motion.div className="container" ref={targetRef} style={{height: `${(n + 1) * 100}vh`}}>
        {
          BLOCKS_DATA.map((block, idx) => 
            <Block key={block.id} {...block} isActive={activeBlock === idx || (activeBlock === n && idx === n - 1)} />
          )
        }
        </motion.div>
      </>
    )
  }