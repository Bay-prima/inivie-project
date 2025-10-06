import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const logoData = [
    { logo: "/public/assets/img/brand-asset/exquisite-media.webp" },
    { logo: "/public/assets/img/brand-asset/cnt.webp" },
    { logo: "/public/assets/img/brand-asset/bali_buddies_logo.webp" },
    { logo: "/public/assets/img/brand-asset/bali-guidline.webp" },
    { logo: "/public/assets/img/brand-asset/bali-livin.webp" },
    { logo: "/public/assets/img/brand-asset/baligasm.webp" },
    { logo: "/public/assets/img/brand-asset/balihoneymoonguide.webp" },
    { logo: "/public/assets/img/brand-asset/daman_header_logo.webp" },
    { logo: "/public/assets/img/brand-asset/destinasian.webp" },
    { logo: "/public/assets/img/brand-asset/indonesia-expat.webp" },
    { logo: "/public/assets/img/brand-asset/logo-nibble.webp" },
    { logo: "/public/assets/img/brand-asset/now-bali-logo.webp" },
    { logo: "/public/assets/img/brand-asset/threesixtyguides.webp" },
    { logo: "/public/assets/img/brand-asset/whatsnews.webp" },
  ];

const Testing = () => {
  const scrollSectionRef = useRef(null);
  const verticalTriggerRef = useRef(null);


  useLayoutEffect(() => {
    const section = scrollSectionRef.current;
    const scrollVertical = verticalTriggerRef.current

    const scrollHeight = scrollVertical.scrollHeight - scrollVertical.offsetHeight;

    const verticalTween = gsap.to(scrollVertical, {
        translateY: -scrollHeight,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top 35%",
            markers: true,
            end: "+=300",
        },
    });

    return () => {
        verticalTween.scrollTrigger.kill();
    };

  }, []);

  
 
  const leftContent = (
    <div className="flex flex-col gap-10">
      <div className="text-6xl font-bold">
        <h2 className="mb-4">THE EXPERIENCE WE</h2>
        <span className="text-orange-100">DELIVER AND TRUST</span>{" "}
      </div>
      <ul className="key-points-list text-xl">
        <li>14+ years of successful property management</li>
        <li>550K+ good reviews from our guest</li>
        <li>520+ Comfortable Rooms</li>
      </ul>
      <p className="text-2xl">
        Throughout our careers, we've been fortunate to work with some
        incredible brands and teams across a variety of industries. Here are
        some of the companies we've partnered with successfully and enjoyed our
        services.
      </p>
    </div>
  );

  const rightContent = (
    <div
      ref={verticalTriggerRef}
      className="grid grid-cols-3 items-center gap-24"
    >
      {logoData.map((items, index) => (
        <img
          key={index}
          src={items.logo}
          className="w-40 h-20 object-contain filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer"
        />
      ))}
    </div>
  );

  return (
    <section
      className="w-full relative bg-white text-black"
    >
      <div className="grid grid-cols-2 mx-20 my-10 gap-16">
        <div ref={scrollSectionRef}  className="top-0 h-auto items-center w-full">
          {leftContent}
        </div>

        <div className="w-full place-items-center">{rightContent}</div>
      </div>
    </section>
  );
};

export default Testing;
