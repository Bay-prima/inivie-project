import React, { useRef, useState, useEffect } from "react";
import {
  resortData,
  luxuryData,
  premiumData,
  midscaleData,
} from "../utils/properties";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import RollingButton from "./Animation/RollingButton";

const FeaturedDesktop = () => {
  const [activeData, setActiveData] = useState(luxuryData);
  const [startIndex, setStartIndex] = useState(0);
  const [carouselBackground, setCarouselBackground] = useState(
    luxuryData[0]?.background || luxuryData[0]?.image || ""
  );
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  
  // const [underlineItem, setUndelineItem] = useState({
  //   width: 0,
  //   left: 0,
  // });

  // const itemRefs = useRef([]);

  // const setItemRef = (index) => (el) => {
  //   itemRefs.current[index] = el;
  // };

  // useEffect(() => {
  //   if (activeButtonIndex === null || !itemRefs.current[activeButtonIndex])
  //     return;

  //   const itemEl = itemRefs.current[activeButtonIndex];
  //   const rect = itemEl.getBoundingClientRect();
  //   const parentRect = itemEl.parentElement.getBoundingClientRect();

  //   setUndelineItem({
  //     width: rect.width,
  //     left: rect.left - parentRect,
  //   });
  // }, [activeButtonIndex]);

  const buttonsData = [
    { name: "Resort", data: resortData },
    { name: "Luxury Properties", data: luxuryData },
    { name: "Premium Properties", data: premiumData },
    { name: "Midscale Villas", data: midscaleData },
  ];

  // Efek untuk menggeser tombol navigasi
  useEffect(() => {
    if (activeButtonIndex !== null && containerRef.current) {
      const container = containerRef.current;
      const activeBtn = buttonRefs.current[activeButtonIndex];

      if (activeBtn) {
        const btnOffsetLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const containerWidth = container.offsetWidth;

        const scrollPosition =
          btnOffsetLeft - containerWidth / 2 + btnWidth / 2;

        container.style.transform = `translateX(${-scrollPosition}px)`;
      }
    } else {
      containerRef.current.style.transform = `translateX(0)`;
    }
  }, [activeButtonIndex]);

  // Efek untuk mengubah latar belakang
  useEffect(() => {
    if (activeData.length > 0) {
      const centerItem = activeData[startIndex % activeData.length];
      if (centerItem) {
        const bg = centerItem.background || centerItem.image;
        setCarouselBackground(bg || "");
      }
    }
  }, [activeData, startIndex]);

  const totalData = activeData.length;
  const positions = ["left", "left1", "center", "right1", "right"];

  // styleVariants
  const imageVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 5,
      opacity: 1,
      width: 450,
      height: 600,
    },
    left1: {
      x: "-125%",
      scale: 1,
      zIndex: 3,
      opacity: 0.8,
      width: 350,
      height: 500,
    },
    left: {
      x: "-230%",
      scale: 1,
      zIndex: 2,
      opacity: 0.5,
      width: 350,
      height: 500,
    },
    right: {
      x: "230%",
      scale: 1,
      zIndex: 1,
      opacity: 0.5,
      width: 350,
      height: 500,
    },
    right1: {
      x: "125%",
      scale: 1,
      zIndex: 3,
      opacity: 0.8,
      width: 350,
      height: 500,
    },
  };

  let displayedItems = [];
  if (totalData === 0) {
    displayedItems = [];
  } else if (totalData < 5) {
    displayedItems = [...activeData];
    while (displayedItems.length < 5) {
      displayedItems.push(null);
    }
  } else {
    displayedItems = [
      activeData[(startIndex - 2 + totalData) % totalData],
      activeData[(startIndex - 1 + totalData) % totalData],
      activeData[startIndex % totalData],
      activeData[(startIndex + 1) % totalData],
      activeData[(startIndex + 2) % totalData],
    ];
  }

  const handleNavClick = (newData, index) => {
    setActiveButtonIndex(index);
    setActiveData(newData);
    setStartIndex(0);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalData);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalData) % totalData);
  };

  return (
    <div className="hidden relative flex-col items-center justify-center py-10 md:flex">
      <h2 className="italic font-poppins-semibold text-xl mb-4">
        Featured Property
      </h2>

      {/* Container Navigasi Tombol */}
      <div style={{ overflowX: "", position: "relative" }}>
        <div
          ref={containerRef}
          className="flex flex-row w-full px-0 font-poppins-medium tracking-widest justify-center items-center text-center gap-8 mb-8 transition-transform duration-500 ease-in-out"
        >
          {buttonsData.map((button, index) => (
            <button
              key={index}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleNavClick(button.data, index)}
              className={`px-4 py-2 uppercase rounded whitespace-nowrap 
      ${activeButtonIndex === index ? "active-nav" : "inactive-nav"}
    `}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>

      {/* BG/Carousel */}
      <div
        className="relative flex items-center justify-center w-screen h-[800px] mb-14 bg-center bg-cover bg-no-repeat transition-all duration-700 backdrop-opacity-60"
        style={{
          backgroundImage: carouselBackground
            ? `url(${carouselBackground})`
            : "none",
          backgroundColor: carouselBackground ? "transparent" : "#f0f4f8",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="w-full h-[50%] absolute top-0 inset-x-0 bg-gradient-to-b from-white to-transparent lg:h-[75%]"></div>

        {/* Kontrol Navigasi */}
        <div className="absolute items-center text-center justify-center flex mb-4 gap-4 bottom-5">
          <button
            onClick={handlePrev}
            className="z-20 text-xl text-white shadow-md rounded-full"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <p className="text-white text-[18px] mx-4 tracking-widest font-poppins-medium font-medium transition-all duration-300 ease-in-out">
            {startIndex + 1} / {totalData}
          </p>
          <button
            onClick={handleNext}
            className="z-20 text-xl text-white shadow-md rounded-full"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
          
        </div>

        {/* Item Carousel */}
        {displayedItems.map((item, index) => {
          if (!item) return null;

          return (
            <motion.div
              key={item.id || index}
              className={`absolute flex flex-col items-center justify-between bg-blue-50 cursor-pointe ${
                positions[index] !== "center"
                  ? "ring-2 ring-gray-300 rounded-xl bg-transparent backdrop-blur-sm"
                  : ""
              }`}
              animate={positions[index]}
              variants={imageVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ width: "40%", height: "80%" }}
            >
              {positions[index] === "center" && (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-[400px] object-cover shadow-xl"
                />
              )}

              <div className="flex flex-col gap-0 px-6 items-center justify-center">
                <h3
                  className={`mt-2 text-center font-poppins-semibold text-white uppercase ${
                    positions[index] === "center"
                      ? "text-[20px] mt-4 font-semibold tracking-widest"
                      : "text-lg font-poppins-semibold mt-96 text-white"
                  }`}
                >
                  {item.name}
                </h3>
                {positions[index] === "center" && (
                  <>
                    <p className="text-md text-gray-300 text-center px-3 mt-1 mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <button className="w-[180px] h-[40px] uppercase font-semibold bg-orange-100 text-sm text-white text-center mb-8">
                      Make Reservation
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      <RollingButton
        text="View All Featured"
        bgColor="bg-black"
        textColor="text-white"
        className="flex items-center gap-4 z-index-20 p-4 text-sm text-white font-medium bg-black"
      >
        View All Featured
        <FiArrowUpRight className="text-lg" />
      </RollingButton>
    </div>
  );
};

export default FeaturedDesktop;
