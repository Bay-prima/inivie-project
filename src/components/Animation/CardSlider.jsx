import React, { useState, useRef } from "react";
import "../../Style/CardSlider.css";
import { BsArrowRight } from "react-icons/bs";

const CardSlider = ({ cards, slidesToShow = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderRef = useRef(null);
  const totalSlides = Math.ceil(cards.length / slidesToShow);

  // Drag functions
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier untuk sensitivity

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Click vs Drag detection
  const handleMouseDown = (e) => {
    handleDragStart(e);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseMove = (e) => {
    handleDragging(e);
  };

  // Touch events untuk mobile
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    handleDragging(e.touches[0]);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Navigation functions (tetap ada)
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 0.5, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 0.5, 0));
  };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="card-slider" style={{ "--slides-to-show": slidesToShow }}>
      {/* Navigation Buttons */}
      {!isFirstSlide && (
        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          ‹
        </button>
      )}

      {!isLastSlide && (
        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          ›
        </button>
      )}

      {/* Slides Container dengan drag functionality */}
      <div
        ref={sliderRef}
        className={`slides-container ${isDragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slides-wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="slide-card group"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {card}
            </div>
          ))}
          <div className="flex items-center justify-center">
            
            {/* <button
              href=""
              className="flex w-40 items-center shadow-lg rounded-full gap-4 border text-sm px-4 py-2 hover:scale-90 hover:shadow-sm hover:border-none transition-all duration-500"
            >
              View Details
              <BsArrowRight />
            </button> */}
          </div>
        </div>
      </div>

      {/* Indicators */}
      {/* <div className="indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CardSlider;
