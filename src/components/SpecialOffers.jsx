import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SpecialOffers = () => {
  const dataOffers = [
    {
      id: 1,
      asset: "/assets/img/special-offers/49dd756e626d5cf811043836b.webp",
    },
    { id: 2, asset: "/assets/img/special-offers/bali-yours.webp" },
    {
      id: 3,
      asset: "/assets/img/special-offers/book-early-save-more.webp",
    },
    { id: 4, asset: "/assets/img/special-offers/pop-arden.webp" },
    { id: 5, asset: "/assets/img/special-offers/pop-asvara.webp" },
    { id: 6, asset: "/assets/img/special-offers/pop-maar.webp" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center my-28 px-12">
      <div className="flex relative justify-center items-center text-center gap-4 w-full max-w-[1500px] mb-10">
        <div className="line-text"></div>
        <h2 className="title leading-tight font-poppins-medium ">
          Our Special Offers
        </h2>
        <div className="line-text"></div>
      </div>
      <div className="flex w-full justify-center items-center max-w-[1500px] mx-auto">
        <Swiper
          breakpoints={{
            310: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 250,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 350,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 500,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={true}
          className="w-full"
          modules={[Autoplay]}
        >
          {dataOffers.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-[280px] h-[280px] mx-auto gap-52 flex justify-center items-center md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]">
                <div className="relative">
                  <img
                    src={slide.asset}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="hidden md:flex absolute top-0 px-2 text-[10px] md:px-4 py-1 md:left-0 md:text-sm text-white bg-orange-100">
                  OFFERS
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialOffers;
