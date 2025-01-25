"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import BlockSection from "./BlockSection";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import { useSwipeable } from "react-swipeable";

export default function HomeSections({ blocksData, bannerData }) {
  const router = useRouter();

  useEffect(() => {
    router.push("#banner");
  }, []);

  blocksData.forEach((block) => {
    block.block_title = block.block_title.toUpperCase();
    block.id = block.block_title.toLowerCase().replace(/[^a-z]/g, "");  // keep only alphabets
  });

  const ids = ["banner"].concat(blocksData.map((block) => block.id)).concat(["footer"]);
  const [currentBlock, setCurrentBlock] = useState(0);
  
  // for mobile swipe
  const swipeHandlers = useSwipeable({
    onSwipeStart: ({dir}) => {
      if (dir === "Up") scrollDown(() => {});
      else if (dir === "Down") scrollUp(() => {});
    }
  });

  // the function to scroll down
  const scrollDown = (removeListener) => {
    if (currentBlock === ids.length - 1) return;
    router.push("#" + ids[currentBlock + 1]);
    setCurrentBlock(currentBlock + 1);
    removeListener();
  }

  // the function to scroll up
  const scrollUp = (removeListener) => {
    if (currentBlock === 0) return;
    router.push("#" + ids[currentBlock - 1]);
    setCurrentBlock(currentBlock - 1); 
    removeListener();
  }

  useEffect(() => {
    const removeWheelListener = () => window.removeEventListener("wheel", handleScroll);
    const removeKeyListener = () => window.removeEventListener("keydown", handleKeyPress);

    const handleScroll = (event) => {
      if (event.deltaY > 0) scrollDown(removeWheelListener);
      else scrollUp(removeWheelListener);
    }

    const handleKeyPress = (event) => {
      if (event.key === "ArrowDown") scrollDown(removeKeyListener);
      else if (event.key === "ArrowUp") scrollUp(removeKeyListener);
    }

    const delay = setTimeout(() => {
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("keydown", handleKeyPress);
    }, 1000);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(delay);
    }
  }, [currentBlock]);

  return (
    <div {...swipeHandlers}>
      <Banner bannerData={bannerData} />
      <BlockSection blocksData={blocksData} />
      <Footer />
    </div>
  );
}