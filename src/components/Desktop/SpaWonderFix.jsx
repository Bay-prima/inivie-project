import React from "react";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { spaData } from "../../utils/spa-property";
import { wonderData } from "../../utils/wonderspace";
import "../../Style/SpaWonderDesktop.css";
import "swiper/css";
import Button from "../Animation/Button";
import { Autoplay } from "swiper/modules";

const SpaWonderFix = () => {
  // const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768); 
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const mobileModules = isMobile ? [Autoplay] : [];
  // const autoplayConfig = {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // };

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-10 my-20 px-4 md:px-12">
      {/* Spa */}
      <div className="flex flex-col items-center justify-center text-center gap-4 md:justify-between md:items-baseline md:flex-row md:text-left">
        <div className="flex flex-col gap-2">
          <h2 className="title">Explore Our Spa</h2>
          <span className="desc"> Find something that fits your need.</span>
        </div>
        <a href="#" className="flex justify-center items-center cursor-pointer">
          <button className="flex text-sm items-center h-10 text-white rounded-full px-4 gap-4 bg-black">
            View Our Family
            <FiArrowUpRight className="w-5 h-5" />
          </button>
        </a>
      </div>
      <div className="flex relative w-full">
        <div className="hidden xl:flex w-[400px] h-[550px]">
          <img
            src="/assets/img/spa-property/svaha-spa-sanur-cover.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex w-full justify-center items-center lg:max-w-[1000px] xl:max-w-[1000px] mx-auto">
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              760: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3.1,
              },
            }}
            grabCursor={true}
            // modules={mobileModules}
            spaceBetween={-40}
            centeredSlides={true}
            // autoplay={isMobile ? autoplayConfig : false}
            loop={true}
            className="w-full"
          >
            {spaData.map((spa) => (
              <SwiperSlide key={spa.id}>
                <div className="flex flex-col gap-4 w-[280px] h-[500px] group">
                  <div className="w-auto h-[350px]">
                    <img
                      src={spa.Img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center text-sm text-white text-center justify-between ">
                    <label
                      htmlFor={spa.destination}
                      className="border border-blue-50 group-hover:bg-blue-50 rounded-full group-hover:text-white transition-all duration-500 text-black px-3 py-2 italic font-light"
                    >
                      {spa.destination}
                    </label>
                    <a href={spa.link}>
                      <Button className="bg-orange-100  px-3 py-2" />
                    </a>
                  </div>
                  <div className="flex justify-between items-center ">
                    <h3 className="desc w-52">{spa.name}</h3>
                    <p className="text-sm">{spa.rating}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* WonderSpace */}
      <div className="flex flex-col items-center justify-center text-center gap-4 md:justify-between md:items-baseline md:flex-row md:text-left md:mt-10">
        <div className="flex flex-col gap-2">
          <h2 className="title leading-9">Explore Our WonderSpace</h2>
          <span className="desc"> Find something that fits your need.</span>
        </div>
        <a href="#" className="flex justify-center items-center cursor-pointer">
          <button className="flex text-sm items-center h-10 text-white rounded-full px-4 gap-4 bg-black">
            View Our Family
            <FiArrowUpRight className="w-5 h-5" />
          </button>
        </a>
      </div>
      <div className="flex relative">
        <div className="flex w-full justify-center items-center lg:max-w-[1000px] xl:max-w-[1000px] mr-auto">
          <Swiper
             breakpoints={{
              480: {
                slidesPerView: 1,
              },
              760: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3.1,
              },
            }}
            grabCursor={true}
            // modules={mobileModules}
            spaceBetween={-40}
            centeredSlides={true}
            // autoplay={isMobile ? autoplayConfig : false}
            loop={true}
            className="w-full"
          >
            {wonderData.map((wonder) => (
              <SwiperSlide key={wonder.id}>
                <div className="flex flex-col gap-4 w-[280px] h-[500px] group">
                  <div className="w-auto h-[350px]">
                    <img
                      src={wonder.Img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center text-sm text-white text-center justify-between ">
                    <label
                      htmlFor={wonder.destination}
                      className="border border-blue-50 group-hover:bg-blue-50 rounded-full group-hover:text-white transition-all duration-500 text-black px-3 py-2 italic font-light"
                    >
                      {wonder.destination}
                    </label>
                    <a href={wonder.link}>
                      <Button className="bg-orange-100  px-3 py-2" />
                    </a>
                  </div>
                  <div className="flex justify-between items-center ">
                    <h3 className="desc w-52">{wonder.name}</h3>
                    <p className="text-sm">{wonder.rating}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden xl:flex w-[400px] h-[550px]">
          <img
            src="/assets/img/wonderspace-property/sanctuary-umalas-badung-cover.webp"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaWonderFix;
