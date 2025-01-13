"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import BlockSection from "./BlockSection";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import { useSwipeable } from "react-swipeable";

export default function HomeSections({ bannerImage, base64, blocksData }) {
  const router = useRouter();
  blocksData.forEach((block) => {
    block.id = block.name.toLowerCase().replace(/[^a-z]/g, "");
  });

  const ids = ["banner"].concat(blocksData.map((block) => block.id)).concat(["footer"]);
  const [currentBlock, setCurrentBlock] = useState(0);
  
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => scrollDown(() => {}),
    onSwipedDown: () => scrollUp(() => {})
  });

  const scrollDown = (removeListener) => {
    if (currentBlock === ids.length - 1) return;
    router.push("#" + ids[currentBlock + 1]);
    setCurrentBlock(currentBlock + 1);
    removeListener();
  }

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
    }, 500);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(delay);
    }
  }, [currentBlock]);

  return (
    <div {...swipeHandlers}>
      <Banner image={bannerImage} base64={base64} />
      <BlockSection blocksData={blocksData} activeBlock={currentBlock  - 1} />
      <Footer />
    </div>
  );
}