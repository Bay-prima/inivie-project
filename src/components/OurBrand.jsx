import React from "react";
import ScrollVelocity from './Animation/ScrollVelocity';
const OurBrand = () => {

    const logoData = [
        {logo: "/assets/img/brand-asset/exquisite-media.webp"},
        {logo: "/assets/img/brand-asset/cnt.webp"},
        {logo: "/assets/img/brand-asset/bali_buddies_logo.webp"},
        {logo: "/assets/img/brand-asset/bali-guidline.webp"},
        {logo: "/assets/img/brand-asset/bali-livin.webp"},
        {logo: "/assets/img/brand-asset/baligasm.webp"},
        {logo: "/assets/img/brand-asset/balihoneymoonguide.webp"},
        {logo: "/assets/img/brand-asset/daman_header_logo.webp"},
        {logo: "/assets/img/brand-asset/destinasian.webp"},
        {logo: "/assets/img/brand-asset/indonesia-expat.webp"},
        {logo: "/assets/img/brand-asset/logo-nibble.webp"},
        {logo: "/assets/img/brand-asset/now-bali-logo.webp"},
        {logo: "/assets/img/brand-asset/threesixtyguides.webp"},
        {logo: "/assets/img/brand-asset/whatsnews.webp"},
    ];


  return (
    <section className="flex flex-col items-center justify-center w-full my-28">
      <div className="w-full flex flex-col items-center justify-center max-w-[1500px]">
      <div className="flex w-8/12 items-center text-center justify-center mb-16">
        <div className="line-text"></div>
        <h2 className="title w-3/5 mx-4 md:w-1/5">As You Seen</h2>
        <div className="line-text"></div>
    </div>
      <div className="relative w-full  md:w-10/12">
      
      <ScrollVelocity 
        logoData={logoData}
        velocity={75}
        numCopies={8}
        className="flex items-center gap-2 mb-10 md:mb-16"   
      />
      <div className="w-40 h-full absolute bottom-0 inset-x-0 bg-gradient-to-r from-white/100 from-10% to-transparent"></div>
      <div className="w-40 h-full absolute bottom-0 right-0 bg-gradient-to-l from-white/100 from-10% to-transparent"></div>
      </div>
      </div>
    </section>
  );
};

export default OurBrand;
