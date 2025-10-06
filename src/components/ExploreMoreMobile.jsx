import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

const ExploreMoreMobile = () => {
  return (
    <div className="w-full h-auto flex items-center px-4 py-10 md:hidden">
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-poppins-medium">Explore More With</h3>
          <h3 className="text-2xl font-poppins-medium text-orange-100">
            iNi ViE Hospitality
          </h3>
        </div>
        <Swiper
          className="w-[250px] h-[250px]"
          initialSlide={1}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 5,
            rotate: true,
            slideShadows: false,
          }}
        >
          {/* Content 1*/}
          <SwiperSlide className="flex items-center justify-center bg-red-400">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/fly-rosie-2.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-blue-400">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/fly-rosie-1.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-green-400">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/fly-rosie-3.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col w-full items-center gap-2 text-center">
          <h2 className="font-poppins-medium text-lg">The Skyward Journey</h2>
          <span className="desc-sm">
            Soar above breathtaking landscapes and embrace the boundless freedom
            of the skies.
          </span>
          <a href="" className="font-light underline underline-offset-8">
            View All
          </a>
        </div>
        {/* Content 2 */}
        <Swiper
          className="w-[250px] h-[250px] mt-10"
          initialSlide={1}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 5,
            rotate: true,
            slideShadows: false,
          }}
        >
          {/* Hapus div wrapper yang tidak perlu */}
          <SwiperSlide className="flex items-center justify-center ">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/memory-2.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/memory-1.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="flex flex-col w-full h-full">
              <img
                src="/public/assets/img/memory-3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col w-full items-center gap-2 text-center">
          <h2 className="font-poppins-medium text-lg">
            The Timeless Celebration
          </h2>
          <span className="desc-sm">
            Celebrate life’s most precious moments in enchanting settings, where
            every detail is crafted to perfection.
          </span>
          <a href="" className="font-light underline underline-offset-8">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreMobile;
