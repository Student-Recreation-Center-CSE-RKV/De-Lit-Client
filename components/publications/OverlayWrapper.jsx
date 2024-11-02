"use client";

import { useState } from "react";
import Overlay from "@/components/publications/Overlay";

export default function OverlayWrapper({ children, overlayLink, scrollRef, scrollDistance }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);

    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollLeft += scrollDistance || 0;
    }
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={overlayLink} />}

      <section onClick={handleClickOpen}>
        {children}
      </section>
    </>
  );
}
