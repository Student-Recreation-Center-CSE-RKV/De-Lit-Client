"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import BlockSection from "./BlockSection";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import { useSwipeable } from "react-swipeable";
import { useWheel } from "@use-gesture/react";

export default function HomeSections({ blocksData, bannerData }) {
  const router = useRouter();
  const [canScroll, setCanScroll] = useState(true);
  const [currentBlock, setCurrentBlock] = useState(0);

  useEffect(() => {
    router.push("#banner");
    setCurrentBlock(0);
  }, []);

  const ids = ["banner"]
    .concat(blocksData.map((block) => block.slug))
    .concat(["footer"]);

  // for mobile swipe
  const swipeHandlers = useSwipeable({
    onSwipeStart: ({ dir }) => {
      if (dir === "Up") scrollDown();
      else if (dir === "Down") scrollUp();
    },
  });

  // the function to scroll down
  const scrollDown = () => {
    if (currentBlock === ids.length - 1) return;
    router.replace("#" + ids[currentBlock + 1]);
    setCurrentBlock(currentBlock + 1);
    setCanScroll(false);
  };

  // the function to scroll up
  const scrollUp = () => {
    if (currentBlock === 0) return;
    router.replace("#" + ids[currentBlock - 1]);
    setCurrentBlock(currentBlock - 1);
    setCanScroll(false);
  };

  const bind = useWheel(state => {
      if (canScroll) {
        if (state.direction[1] > 0) scrollDown();
        else if (state.direction[1] < 0) scrollUp();
      }
  });

  useEffect(() => {
    const delay = setTimeout(() => setCanScroll(true), 900);
    const handleKeyPress = (event) => {
      if (!canScroll) return;
      if (event.key === "ArrowDown") scrollDown();
      else if (event.key === "ArrowUp") scrollUp();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => { 
      clearTimeout(delay);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [canScroll]);

  return (
    <div {...swipeHandlers} {...bind()}>
      <Banner bannerData={bannerData} />
      <BlockSection blocksData={blocksData} />
      <Footer />
    </div>
  );
}
