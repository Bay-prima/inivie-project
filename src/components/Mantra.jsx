import React from "react";

const Mantra = () => {
  return (
    <section className="w-full relative px-12 my-28 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 w-full gap-8 lg:gap-0 items-center max-w-[1500px] ">
        <div className="w-full lg:w-10/12 ">
          <h2 className="title mb-2">Our Mantras</h2>
          <span className="desc-sm">
            Ini Vie is guided by eight mantras that honor people, culture, and
            nature while crafting deeply personalized and meaningful guest
            experiences. With sustainability at our core and a pioneering spirit
            that dares to create the unseen, we transform every moment into a
            story of purpose, beauty, and lasting impact.
          </span>
        </div>
        <div className="grid md:grid-cols-5 w-[100%] h-auto gap-4">
          <div className="md:col-span-3">
          <img src="/assets/img/experiences.webp" alt="" className="w-full h-full object-cover" />
          </div>  
        <div className="grid md:col-span-2 gap-4 md:grid-rows-2">
          <img src="/assets/img/experiences1.webp" alt="" className="w-full h-full object-cover" />
          <img src="/assets/img/experiences2.webp" alt="" className="w-full h-full object-cover" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Mantra;
