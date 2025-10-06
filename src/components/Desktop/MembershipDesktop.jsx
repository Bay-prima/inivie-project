import React from "react";
import ShinyText from "../Animation/ShinyText";
import WebDiagram from "../Animation/WebDiagram";
const MembershipDesktop = () => {
  return (
    <div className="hidden lg:flex w-full h-full relative items-center justify-center mb-16">
      <div className="flex w-[1400px] text-white max-h-[600px] bg-blue-50">
        <div className="flex flex-col w-[600px] h-auto my-40 justify-center px-10 gap-4">
          <h2 className="text-3xl font-poppins-medium">Join iNi ViE Membership </h2>
          <h4 className="text-orange-100 font-poppins-medium">Turn Bali into yours with WEINIVIE</h4>
          <p className="desc-sm">
            Become a member and enjoy exclusive access to Bali’s most
            unforgettable stay experiences. Enjoy special benefits, personalized
            offers, and more. All made just for you.
          </p>
          <div className="flex gap-8 mt-12">
          <button className="flex items-center justify-between gap-6 px-6 py-3 border">
            <ShinyText text="Discover More"></ShinyText>
            <ShinyText text="->"></ShinyText>
          </button>
          <button className="flex items-center justify-between gap-6 px-6 py-3 border">
            <ShinyText text="Become Member"></ShinyText>
            <ShinyText text="->"></ShinyText>
          </button>
        </div>
        </div>
       <div className="vertical-line"></div>
       <WebDiagram />

      </div>
    </div>
  );
};

export default MembershipDesktop;
