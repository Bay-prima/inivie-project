import React, { useEffect, useRef, useState } from "react";
import { heroVD, smallHeroVD } from "../utils";
import {
  FaBuilding,
  FaHelicopter,
  FaHotel,
  FaSpa,
} from "react-icons/fa";
import {  MdOutlineFlatware, MdVilla, } from "react-icons/md";
import ReadOnlyCalendar from "./Calendar";
import {  BsBuildingsFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa6";
import { LiaBuildingSolid, LiaHelicopterSolid, LiaHotelSolid } from "react-icons/lia";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVD : heroVD
  );
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  // Navbar Menu Mobile Content
  const options = [
    "Aviation",
    "Resort",
    "Luxury Properties",
    "Premium Properties",
    "WonderSpace",
    "Midscale VIllas",
  ];

  // FeaturedHero Items
  const featuredHero = [
    { name: "Resorts", icon: <FaBuilding className="w-8 h-8" /> },
    { name: "Aviation", icon: <FaHelicopter className="w-8 h-8" /> },
    { name: "Luxury properties", icon: <FaHotel className="w-8 h-8" /> },
    { name: "Premium properties", icon: <BsBuildingsFill className="w-8 h-8" /> },
    { name: "Midscale villas", icon: <MdVilla className="w-8 h-8" /> },
    { name: "Spa", icon: <FaSpa className="w-8 h-8" /> },
    { name: "Wonder Space", icon: <MdOutlineFlatware className="w-8 h-8" /> },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  // Buat array ref untuk setiap item
  const itemRefs = useRef([]);

  // Set ref untuk setiap item
  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el;
  };

  // Update posisi & lebar garis saat activeIndex berubah
  useEffect(() => {
    if (activeIndex === null || !itemRefs.current[activeIndex]) return;

    const itemEl = itemRefs.current[activeIndex];
    const rect = itemEl.getBoundingClientRect();
    const parentRect = itemEl.parentElement.getBoundingClientRect();

    setUnderlineStyle({
      width: rect.width,
      left: rect.left - parentRect.left,
    });
  }, [activeIndex]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true); // Buka dropdown saat mulai mengetik
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false); // Tutup dropdown setelah memilih
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVD);
    } else {
      setVideoSrc(heroVD);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  return (
    <section className="relative h-dvh w-screen flex flex-col">
      {/* Lapisan Latar Belakang (Video & Overlay) */}
      <div className="absolute video-height overflow-hidden inset-0 z-0 transition-transform duration-500 lg:h-screen">
        <video
          loop
          autoPlay
          muted
          playsInline={true}
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="w-full h-[50%] absolute bottom-0 inset-x-0 bg-gradient-to-t from-white to-transparent lg:h-[0%]"></div>
        <div className="w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-b from-blue-50 to-transparent"></div>
      </div>

      {/* Content hero */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 lg:p-10">
        <div className="w-full flex justify-between items-center text-white"></div>

        {/* Bagian Tengah (Teks & Tombol) */}
        <div className="flex flex-col items-center text-white text-center w-full max-w-[1500px] lg:items-start lg:text-left gap-1">
          <h1 className="hidden text-[28px] inset-0 font-poppins-semibold tracking-[-0.5px] leading-[28px] lg:text-5xl md:text-2xl md:flex">
            iNi ViE <br /> Hospitality
          </h1>
          <p className="hidden text-[18px] text-white opacity-70  mt-0 mb-2 -tracking-[1px] lg:mb-5 md:flex">
            Bali Boutique Resort Experience
          </p>
          {/* Button Desktop */}
          <div className="hidden md:flex gap-4 mt-8 mb-10">
            <div className="">
              <span className="uppercase text-[12px]">Destination</span>
              <button className="hidden md:flex px-4 py-2 mt-2 text-sm italic border border-white bg-transparent items-center text-center gap-4">
                Chose Destination
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
            </div>
            <div className="">
              <span className="uppercase text-[12px]">Check In-Out</span>
              <ReadOnlyCalendar />
            </div>
            <div className="">
              <span className="uppercase text-[12px]">CHECK</span>
              <button className="hidden md:flex px-4 py-2 hover:bg-orange-100 hover:border-transparent transition-colors duration-500 ease-in-out mt-2 text-sm italic border border-white bg-transparent cursor-pointer items-center text-center gap-4">
                Check Availability
                <img className="w-[24px]" src="/assets/img/bag.webp" alt="" />
              </button>
            </div>
          </div>

          {/* Featured Hero Desktop */}
          <div className="hidden md:hidden lg:flex w-full justify-between items-end mb-4 border-t border-gray-400 relative">
            {featuredHero.map((items, index) => (
              <div
                key={index}
                ref={setItemRef(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="flex flex-col py-4 px-4 mt-4  mb-4 items-center text-center cursor-pointer font-medium text-slate-200 hover:text-white hover:-translate-y-1 transition-all duration-500 ease-out uppercase gap-4"
              >
                {items.icon}
                {items.name}
              </div>
            ))}

            {activeIndex !== null && (
              <span
                className="absolute -top-1 w-full h-1.5 bg-white transition-all duration-300 ease-out"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                }}
              ></span>
            )}
          </div>

          {/* Search Bar Mobile */}
          <div className="relative w-full lg:hidden md:hidden mt-2 mb-5">
            <div className="flex items-center justify-between w-full bg-white border border-black border-opacity-10 rounded-md pl-6 pr-4 py-2 shadow-lg">
              <input
                type="text"
                placeholder="Find your type..."
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="w-full h-[42px] italic text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-0 bg-transparent"
              />
              {isOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border text-black text-left border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => (
                      <div
                        key={index}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                        onMouseDown={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-gray-500">No results found.</div>
                  )}
                </div>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
          </div>

          {/* Featured Hero Mobile */}
          <div className="flex flex-col w-full lg:hidden md:hidden">
            <div className="relative z-20 w-full text-center mb-8">
              <div className="grid grid-cols-4 gap-[5px] px-[16px] mx-auto py-2 text-center">
                {/* Ikon Baris 1 */}
                <li className="flex flex-col items-center border-r border-black gap-3 py-2 px-1 text-[12px]">
                  
                  <LiaHelicopterSolid className="w-8 h-8"  />
                  Aviation
                </li>
                <li className="flex flex-col items-center border-r border-black gap-3 py-2 px-1 text-[12px]">
                  <LiaBuildingSolid className="w-8 h-8" />
                  Resorts
                </li>
                <li className="flex flex-col items-center border-r border-black gap-3 py-2 px-1 text-[12px]">
                  <LiaHotelSolid className="w-8 h-8" />
                  Luxury Properties
                </li>
                <li className="flex flex-col items-center gap-3 py-2 px-1 text-[12px]">
                  <MdVilla className="w-8 h-8"/>
                  Premium Properties
                </li>
                {/* ... ikon lainnya */}
              </div>
              <div className="w-full h-[0.5px] bg-black"></div>
              <div className="grid grid-cols-4 gap-[5px] px-[16px] mx-auto py-2 text-center">
                {/* Ikon Baris 2 */}
                <li className="flex flex-col items-center gap-3 py-1 px-1 border-r border-black text-[12px]">
                  <MdVilla className="w-8 h-8"/>
                  Midscale Villas
                </li>
                <li className="flex flex-col items-center gap-3 py-1 px-1 border-r border-black text-[12px]">
                  <MdVilla className="w-8 h-8"/>
                  Spa
                </li>
                <li className="flex flex-col items-center gap-3 py-1 px-1 border-r border-black text-[12px]">
                  <MdVilla className="w-8 h-8"/>
                  Wonder Space
                </li>
                <li className="flex flex-col items-center gap-3 py-1 px-1 text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  More
                </li>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <a href="#featured">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="black"
                className="icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-down"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
