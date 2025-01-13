"use client";
import Block from "@/components/Block";
// import { BLOCKS_DATA } from '@/utils/dummy';

const links = {
  "PUBLICATIONS": "/publications",
  "BLOGS": "/blog",
  "GALLERY": "/gallery",
  "CLUB\u00a0TALK": "/clubtalk",
};

export default function BlockSection({ blocksData, activeBlock }) {
  const n = blocksData.length;

  return (
    <>
      <div className="container" style={{ height: `${n * 100}dvh` }} >
        {blocksData.map((block, idx) => (
          <Block
            key={block._id}
            {...block}
            link={links[block.name]}
            // isActive={activeBlock === idx}
            isActive={true}
          />
        ))}
      </div>
    </>
  );
}
