"use client";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Block from "@/components/Block";
// import { BLOCKS_DATA } from '@/utils/dummy';

const links = {
  "PUBLICATIONS": "/publications",
  "BLOGS": "/blog",
  "GALLERY": "/gallery",
  "CLUB\u00a0TALK": "/clubtalk",
};

export default function BlockSection({ blocksData }) {
  const n = blocksData.length;
  
  // scrolling animation
  const targetRef = useRef(null);
  const [activeBlock, setActiveBlock] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    setActiveBlock(Math.floor(latest * n))
  );

  return (
    <>
      <motion.div className="container" ref={targetRef} style={{ height: `${(n + 1) * 100}vh` }} >
        {blocksData.map((block, idx) => (
          <Block
            key={block._id}
            {...block}
            link={links[block.name]}
            isActive={ activeBlock === idx || (activeBlock === n && idx === n - 1) }
          />
        ))}
      </motion.div>
    </>
  );
}
