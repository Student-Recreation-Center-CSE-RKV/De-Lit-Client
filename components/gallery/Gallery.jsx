"use client";
import React, { useEffect, useState, useRef } from 'react';
import './gallery2.css';
import Image from 'next/image';

const Gallery = ({images}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true); // State for instruction message
  const galleryRef = useRef(null); // Reference to the gallery

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "Escape") {
      closeModal();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in"); // Add class when in view
        } else {
          entry.target.classList.remove("slide-in"); // Remove class when out of view
        }
      });
    }, options);

    const items = galleryRef.current.querySelectorAll(".pics");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Set timeout to hide instruction message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstruction(false);
    }, 5000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      {showInstruction && (
        <div className="instruction-overlay">
          <p>Click on the images to view the slideshow!</p>
        </div>
      )}
      {images.map((item, index) => (
        <div className="relative pics" key={index} onClick={() => openModal(index)}>
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} placeholder="blur" blurDataURL={item.base64} className="rounded-[10px]" />
        </div>
      ))}

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="modal-image" />
            <div className="modal-description">
              <p>Description: {images[currentIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
