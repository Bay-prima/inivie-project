import React from "react";

const Promotion = () => {
  return (
    <div className="w-full h-ful px-4 lg:px-10 lg:items-center lg:justify-center md:flex md:flex-col md:gap-8">
      <hr className="md:hidden" />
      <br />
      <div className="relative h-[600px] lg:h-[400px] lg:w-[1200px]">
        <img
          src="/assets/img/promotion-banner-new-fix.jpeg"
          alt=""
          className="hidden md:flex h-full w-full object-cover"
        />
        <img
          src="/assets/img/promotion-banner-new.jpeg"
          alt=""
          className=" md:hidden h-full w-full object-cover"
        />
        <div className="hidden md:flex w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-r from-blue-50 to-transparent "></div>
        <div className="md:hidden w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-b from-blue-50 from-25% to-transparent "></div>
        <div className="absolute max-w-[400px] flex flex-col items-center text-center justify-center md:items-start md:text-left md:justify-center inset-x-0 top-0 pt-[50px] mx-[30px] md:pt-0 md:inset-0 md:ml-24">
          <h2 className="text-md text-white mb-2 italic font-medium">
            iNi ViE Hospitality
          </h2>
          <h3 className="text-[18px] mb-2 text-white tracking-[2px] font-poppins-medium uppercase">
            When Your Journey Finds Meaning
          </h3>
          <p className="text-[16px] leading-[20px] w-auto text-white mb-6">
            More than a destination, it's an experience crafted for how you
            live, feel, & explore.
          </p>

          <button className="bg-white border font-semibold border-black text-[12px] uppercase tracking-widest px-4 py-3 transition-colors duration-500 cursor-pointer ease-in-out hover:bg-black hover:border-white hover:text-white">
            Book Now
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Promotion;
