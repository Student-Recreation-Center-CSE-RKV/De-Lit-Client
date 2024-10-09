import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BranchGallery = () => {
  const imageData = [
    { id: 1, src: "https://picsum.photos/200/300?random=1" },
    { id: 2, src: "https://picsum.photos/200/300?random=2" },
    { id: 3, src: "https://picsum.photos/200/300?random=3" },
    { id: 4, src: "https://picsum.photos/200/300?random=4" },
    { id: 5, src: "https://picsum.photos/200/300?random=5" },
    { id: 6, src: "https://picsum.photos/200/300?random=6" },
    { id: 7, src: "https://picsum.photos/200/300?random=7" },
    { id: 8, src: "https://picsum.photos/200/300?random=8" },
  ];

  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial state of the path for the animation
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Animate the path based on scroll progress
      gsap.set(path, { strokeDashoffset: length * (1 - scrollProgress) });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* SVG with the curved path */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 14827 32770"
        className="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M0 0 C 500 150, 1000 300, 1500 100, 2000 200, 3000 150, 4000 300, 5000 100, 6000 150, 7000 200, 8000 100, 9000 200, 10000 100, 11000 200, 12000 100, 13000 150, 14000 300, 14827 200"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Render images */}
      <div className="flex flex-col items-center">
        {imageData.map((image, index) => (
          <div
            key={image.id}
            className={`my-10 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            style={{ position: "relative", top: `${index * 300}px`, zIndex: 1 }} // Adjust vertical position
          >
            <img
              src={image.src}
              alt={`Random Image ${image.id}`}
              className="object-cover w-[200px] h-[300px] border-2 border-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchGallery;
