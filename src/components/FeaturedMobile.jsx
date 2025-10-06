import React, { useEffect, useRef, useState } from "react";
import {
  resortData,
  luxuryData,
  premiumData,
  midscaleData,
} from "../utils/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import RollingButton from "./Animation/RollingButton";
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedMobile = () => {
  const [activeData, setActiveData] = useState(luxuryData);
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null); // Ref untuk mengontrol Swiper

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
  const handleNavClick = (newData, index) => {
    setActiveButtonIndex(index);
    setActiveData(newData);
    setStartIndex(0);
    setTotalSlides(newData.length);
    setCurrentSlide(1);
  };
  return (
    <div id="featured" className="flex flex-col relative w-full px-4 py-20 h-auto md:hidden">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-full h-[0.5px] bg-black"></div>
        <h2 className="italic font-poppins-semibold text-xl mb-4">
          Featured Property
        </h2>
        <div className="w-full h-[0.5px] bg-black"></div>
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
                className={`px-2 py-2 uppercase rounded whitespace-nowrap 
      ${activeButtonIndex === index ? "active-nav" : "inactive-nav"}
    `}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
        {/* SLider */}
        <div className="w-full">
          {" "}
          <Swiper
            modules={[Navigation, Pagination]}
            // navigation={true}
            // pagination={{ clickable: true , type: "fraction"}}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTotalSlides(swiper.slides.length);
            }}
            // 2. Update state saat slide berubah
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            // Hapus modules={[Navigation, Pagination]}

            navigation={{
              prevEl: ".prevBtn",
              nextEl: ".nextBtn",
            }}
            slidesPerView={1.15}
            spaceBetween={16}
            grabCursor={true}
            loop={true}
            className="featured-swiper"
          >
            {activeData.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col rounded-lg overflow-hidden items-center text-center h-[520px]">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="flex flex-col mt-5 p-4 gap-2">
                    <h3 className="text-xl font-poppins-medium leading-7  uppercase">
                      {property.name}
                    </h3>
                    <p className="desc-sm">{property.description}</p>
                    <span className="text-xs text-blue-500 mt-2 block">
                      {property.destination}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className=" w-12 h-12 flex items-center justify-center rounded-full prevBtn">
            <RiArrowLeftSLine size={30} />
          </button>
          <div className="flex items-center gap-2 italic text-base font-semibold">
            <span className="text-orange-400">{currentSlide}</span>
            <span className="text-blue-50 opacity-80">/</span>
            <span className="text-blue-50 opacity-80">{totalSlides}</span>
          </div>
          <button className=" w-12 h-12 flex items-center justify-center rounded-full nextBtn">
            <RiArrowRightSLine size={30} />
          </button>
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
    </div>
  );
};

export default FeaturedMobile;
