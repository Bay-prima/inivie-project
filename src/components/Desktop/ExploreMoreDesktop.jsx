import { useEffect, useRef, useState } from "react";
import "../../Style/ExploreMore.css";
import ShinyText from "../Animation/ShinyText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ExploreMoreDesktop = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);


  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 10%",
          end: "bottom 20%",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const aviationData = [
    "/assets/img/fly-rosie-1.webp",
    "/assets/img/fly-rosie-2.webp",
    "/assets/img/fly-rosie-3.webp",
  ];

  const memoryData = [
    "/assets/img/memory-1.jpeg",
    "/assets/img/memory-2.jpeg",
    "/assets/img/memory-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === aviationData.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(nextSlide, 15000);
    return () => clearInterval(intervalId);
  }, [aviationData.length]);

  return (
    <section className="hidden lg:flex flex-col overflow-hidden">
      <div className="flex flex-col items-center title">
        <h3>Explore More With</h3>
        <h3 className="sub-titles">iNi ViE Hospitality</h3>
      </div>

      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="section-trigger relative flex items-center"
        >
          <div className="relative w-full max-w-[1350px] h-[500px] mx-auto group cursor-pointer">
            {aviationData.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
              />
            ))}

            <div className="absolute inset-0">
              <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-r from-black/75 from-1% to-transparent"></div>
              <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-l from-white/25 from-1% to-transparent"></div>

              <div className="absolute w-3/12 flex-col text-start top-[30%] left-10 text-white">
                <h4 className="sub-title italic drop-shadow-lg">Aviation</h4>
                {/* <h2 className="title-more w-64 leading-8 tracking-wider drop-shadow-lg">
                The Skyward Journey
              </h2> */}
                <ShinyText
                  text="The Skyward Journey"
                  className="title-more-2 w-56 leading-8"
                ></ShinyText>
                <p className="desc-text drop-shadow-2xl">
                  Soar above breathtaking landscapes and embrace the boundless
                  freedom of the skies.
                </p>
                <button
                  href="#"
                  className="px-4 py-2 bg-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
            hover:bg-orange-500 focus:outline-none z-20"
                >
                  Discover More{""}
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[1350px] h-[500px] mx-auto group cursor-pointer">
            {memoryData.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
              />
            ))}

            <div className="absolute inset-0">
              <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-r from-black/75 from-1% to-transparent"></div>
              <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-l from-white/25 from-1% to-transparent"></div>

              <div className="absolute w-3/12 flex-col text-start top-[30%] left-10 text-white">
                <h4 className="sub-title italic drop-shadow-lg">
                  Event & Wedding
                </h4>
                {/* <h2 className="title-more-2 w-56 leading-8 drop-shadow-lg">
                The Timeless Celebration
              </h2> */}
                <ShinyText
                  text="The Timeless Celebration"
                  className="title-more-2 w-56 leading-8 drop-shadow-lg"
                ></ShinyText>
                <p className="desc-text drop-shadow-2xl">
                  Celebrate life’s most precious moments in enchanting settings,
                  where every detail is crafted to perfection.
                </p>
                <button
                  href="#"
                  className="px-4 py-2 bg-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
            hover:bg-orange-500 focus:outline-none z-20"
                >
                  Discover More{""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-svh" >
        {/* style={{ minHeight: "100vh"}} */}
      </div>
    </section>
  );
};

export default ExploreMoreDesktop;
