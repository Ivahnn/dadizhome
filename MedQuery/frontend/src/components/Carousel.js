import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button1 className="prev" onClick={prevSlide}>
        &#10094;
      </button1>
      <div className="carousel-images-container">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      <button1 className="next" onClick={nextSlide}>
        &#10095;
      </button1>
    </div>
  );
};

export default Carousel;
