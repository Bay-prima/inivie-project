import React from "react";
import BrandLogo from "./Animation/BrandLogo";
import ShinyText from "./Animation/ShinyText";

const Membership = () => {
  return (
    <div className="flex flex-col h-dvh w-full items-center justify-center p-4 bg-blue-50 md:hidden">
      <BrandLogo />
      <div className="flex flex-col items-center text-center justify-center gap-2 text-white mt-28">
        <h1 className="text-2xl font-poppins-medium">
          Join iNi ViE Membership{" "}
        </h1>
        <h4 className="text-sm text-orange-100 font-poppins-medium">
          Turn Bali into yours with WEINIVIE
        </h4>
        <p className="desc-sm ">
          Become a member and enjoy exclusive access to Bali’s most
          unforgettable stay experiences. Enjoy special benefits, personalized
          offers, and more. All made just for you.
        </p>
        <div className="flex flex-col gap-8 mt-12">
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
    </div>
  );
};

export default Membership;
