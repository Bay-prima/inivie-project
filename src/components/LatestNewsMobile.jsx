import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ShinyText from "./Animation/ShinyText";

const LatestNewsMobile = () => {
  return (
    <div className="flex relative h-auto w-full px-4 py-12 md:hidden">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <h1 className="title uppercase leading-tight">WHAT'S HAPPENING NOW</h1>
            <span className="desc ">
              Uncover the stories, tips, and hidden gems currently shaping the
              island's culture.
            </span>
          </div>
          <div className="relative group w-full bg-blue-50 h-[400px] overflow-hidden">
            <img
              src="https://blog.inivie.com/wp-content/uploads/2025/07/Why-is-Canggu-So-Popular.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute text-white bottom-0 p-4 group">
              <ShinyText text="TRENDING" className="text-sm mb-1"></ShinyText>

              <p className="text-2xl font-semibold mb-3 leading-snug">
                Why is Canggu So Popular? Discover All the Reasons Here
              </p>
              <p className="line-clamp-2 desc-sm mb-3">
                If you’ve ever wondered why Canggu is so popular, you’ve come to
                the right page. Canggu has quickly become one of Bali’s top
                destinations, blending tropical living, global creativity, and
                local culture into one vibrant coastal spot. Once a quiet
                fishing village surrounded by rice fields, it has transformed
                into a hotspot for modern lifestyle seekers from around the
                world.
              </p>
              <button
                className="flex items-center w-36 h-8 px-5 gap-2 translate-y-5
                       rounded-full text-sm bg-white text-black opacity-0
                       group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease"
              >
                Read Article <FiArrowUpRight />{" "}
              </button>
            </div>
          </div>
          {/* content 1 */}
          <div className="relative w-full bg-blue-500 h-[250px] group overflow-hidden">
            
            <img
              src="/public/assets/img/latestnews-img/itinerary-bali.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute text-white bottom-0 p-4 group">
              <ShinyText
                text="TIPS & TRICK"
                className="text-sm mb-1"
              ></ShinyText>

              <p className="text-lg font-semibold mb-3 leading-snug">
                First Time in Bali? Don’t Make These 7 Rookie Mistakes
              </p>
              <button
                className="flex items-center w-36 h-8 px-5 gap-2 translate-y-5
                       rounded-full text-sm bg-white text-black opacity-0
                       group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease"
              >
                Read Article <FiArrowUpRight />{" "}
              </button>
            </div>
          </div>
          {/* Content 2 */}
          <div className="relative bg-blue-500 h-[250px] group overflow-hidden">
            <img
              src="https://blog.inivie.com/wp-content/uploads/2025/09/free-entry-beach-club-in-bali.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute text-white bottom-0 p-4 group">
              <ShinyText text="FEATURED" className="text-sm mb-1"></ShinyText>

              <p className="text-lg font-semibold mb-3 leading-snug">
                17 Free Entry Beach Clubs in Bali, Enjoy Sunset with Another
                Level
              </p>
              <button
                className="flex items-center w-36 h-8 px-5 gap-2 translate-y-5
                       rounded-full text-sm bg-white text-black opacity-0
                       group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease"
              >
                Read Article <FiArrowUpRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsMobile;
