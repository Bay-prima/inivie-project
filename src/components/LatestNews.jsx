import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight } from "react-icons/fi";
import ShinyText from "./Animation/ShinyText";

const newsData = [
  {
    id: 1,
    title1: "First Time in Bali? Don’t Make These 7 Rookie Mistakes",
    content1:
      "A first trip in Bali should be exciting since this island offers numerous pristine beaches,vibrant culture, and unforgettable adventures. But along with the beauty, there are also a few easy-to-make mistakes that can catch first-time travelers off guard.",
    img1: "/assets/img/latestnews-img/itinerary-bali.jpg",
    title2:
      "17 Free Entry Beach Clubs in Bali, Enjoy Sunset with Another Level",
    content2:
      "Bali has many party venues, including lively spots and popular free entry beach clubs in Bali that sometimes have no minimum spend requirement. As the island is home to world-class clubs, most allow you to walk in, relax, and enjoy the tropical vibe as long as you order from the menu at your convenience.",
    img2: "https://blog.inivie.com/wp-content/uploads/2025/09/free-entry-beach-club-in-bali.jpg",
  },
  //   {
  //     id: 2,
  //     title: "17 Free Entry Beach Clubs in Bali, Enjoy Sunset with Another Level",
  //     content:
  //       "Bali has many party venues, including lively spots and popular free entry beach clubs in Bali that sometimes have no minimum spend requirement. As the island is home to world-class clubs, most allow you to walk in, relax, and enjoy the tropical vibe as long as you order from the menu at your convenience.",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/09/free-entry-beach-club-in-bali.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Top 10 Wedding Venues in Ubud for a Bali Destination Wedding",
  //     content:
  //       "A wedding venue in Ubud is more than just a place to say “I do”,  it’s where nature, culture, and spirituality come together to create unforgettable memories. Planning a wedding here means celebrating love surrounded by lush rice fields, tropical forests, and a serene atmosphere that feels both magical and sacred.",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/09/wedding-venue-in-ubud.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Understanding Bali Earthquakes and a Guide to Staying Safe",
  //     content:
  //       "Bali earthquake is often a concern for travelers, as the island lies in Indonesia’s tectonic zone where three major plates meet. Earthquakes in Bali occasionally make headlines, both locally and internationally, but they shouldn’t stop you from enjoying your holiday. ",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/09/earthquake-in-bali.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Bali’s Most Romantic Cliffside Stay You’ve Probably Never Heard Of",
  //     content:
  //       "Tucked away in the heart of Pecatu, Seascape Uluwatu is a breathtaking escape that invites couples to indulge in an intimate and unforgettable getaway. As a luxury resort in Uluwatu, it blends modern elegance with minimalist charm, all set against the backdrop of sweeping ocean views—perfect for a romantic retreat in Bali.",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/05/48-b-Two-Bedroom-Ocean-View-1-scaled.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "The Jungle Club Ubud: Hidden Paradise in the Heart of Ubud",
  //     content:
  //       "Located amidst the serene hills of Ubud, The Jungle Club offers a tranquil escape that perfectly balances nature, luxury, and cultural immersion. If you’re exploring things to do in Ubud, Bali, this destination deserves a spot on your list.",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/01/GO-19-scaled.jpg",
  //   },
  //   {
  //     id: 7,
  //     title: "Why Bali is the #1 Destination for Romance in 2025",
  //     content:
  //       "Stepping off a plane into warm tropical air, where frangipani flowers greet you and the gentle sound of waves fills your ears. After tying the knot, every couple dreams of escaping to a paradise where love can blossom even further, which brings us to the ultimate question: Why choose Bali for your honeymoon?",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/08/Why-Bali-is-the-no-1-Destination-for-Romance-in-2025.jpg",
  //   },
  //   {
  //     id: 8,
  //     title: "Why is Canggu So Popular? Discover All the Reasons Here",
  //     content:
  //       "If you’ve ever wondered why Canggu is so popular, you’ve come to the right page. Canggu has quickly become one of Bali’s top destinations, blending tropical living, global creativity, and local culture into one vibrant coastal spot. Once a quiet fishing village surrounded by rice fields, it has transformed into a hotspot for modern lifestyle seekers from around the world.",
  //     img: "https://blog.inivie.com/wp-content/uploads/2025/07/Why-is-Canggu-So-Popular.jpg",
  //   },
];

const LatestNews = () => {
  return (
    <section className="hidden md:flex items-center justify-center relative my-28 px-12">
      <div className="flex flex-col py-14 w-full max-w-[1500px]">
        <h1 className="title uppercase">WHAT'S HAPPENING NOW</h1>
        <span className="desc ">
          Uncover the stories, tips, and hidden gems currently shaping the
          island's culture.
        </span>
        <div>
          {newsData.map((card) => (
            <div
              className="grid grid-cols-7 gap-4 w-[100%] max-w-[1500px] h-auto my-10"
              key={card.id}
            >
              <div className="col-span-4">
                <div className="relative w-full h-full group overflow-hidden">
                  <img
                    src="https://blog.inivie.com/wp-content/uploads/2025/07/Why-is-Canggu-So-Popular.jpg"
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white z-40 gap-4 px-8 md:py-10 xl:py-24 ">
                    <ShinyText
                      className="font-poppins-medium md:text-base xl:text-lg"
                      text="TRENDING"
                    />
                    <p className="font-poppins-medium md:text-2xl lg:text-2xl lg:leading-[30px] xl:text-5xl xl:leading-[60px] tracking-wide group-hover:text-orange-100 transition-all duration-500 ease">
                      Why is Canggu So Popular? Discover All the Reasons Here
                    </p>
                    <p className="xl:line-clamp-3 lg:line-clamp-2 md:line-clamp-2 desc-sm">
                      If you’ve ever wondered why Canggu is so popular, you’ve
                      come to the right page. Canggu has quickly become one of
                      Bali’s top destinations, blending tropical living, global
                      creativity, and local culture into one vibrant coastal
                      spot. Once a quiet fishing village surrounded by rice
                      fields, it has transformed into a hotspot for modern
                      lifestyle seekers from around the world.
                    </p>
                    <button className="md:flex opacity-100 items-center justify-center gap-4 border bg-transparent md:text-sm md:w-32 md:h-8 lg:w-40 lg:h-10 rounded-full group-hover:md:flex group-hover:opacity-100 hover:bg-white hover:text-black hover:border-none transition-all duration-500 ease-in-out">
                      Read Article <FiArrowUpRight />{" "}
                    </button>
                  </div>
                  <div className="w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-t from-black/75 from-5% to-transparent"></div>
                </div>
              </div>
              <div className="grid grid-rows-2 col-span-3 gap-4">
                <div className="relative group cursor-pointer overflow-hidden">
                  <img
                    src={card.img1}
                    alt={card.title1}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white gap-2 z-40 px-4 md:py-4 xl:py-8 ">
                    <ShinyText
                      className="font-poppins-medium text-sm md:group-hover:-translate-y-1 lg:group-hover:-translate-y-5 transition-all duration-300 ease"
                      text="TIPS & TRICK"
                    />
                    <p className="font-poppins-medium lg:text-xl xl:text-3xl tracking-wide md:group-hover:-translate-y-2 lg:group-hover:-translate-y-5 group-hover:text-orange-100 transition-all duration-300 ease">
                      {card.title1}
                    </p>
                    <button className="text-sm md:flex opacity-0 translate-y-10 items-center justify-center gap-4 border bg-transparent md:w-32 md:h-8 lg:w-36 lg:h-9 rounded-full group-hover:md:flex group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-black hover:border-none transition-all duration-500 ease-in-out">
                      Read Article <FiArrowUpRight />{" "}
                    </button>
                  </div>
                  <div className="w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-t from-black/75 from-40% to-transparent group-hover:from-black/50 transition-all duration-500 ease"></div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden">
                  <img
                    src={card.img2}
                    alt={card.title2}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white z-40 gap-2 px-4 md:py-4 xl:py-8">
                    <ShinyText
                      className="font-poppins-medium text-sm md:group-hover:-translate-y-1 lg:group-hover:-translate-y-5 transition-all duration-300 ease"
                      text="FEATURED"
                    />
                    <p className="font-poppins-medium lg:text-xl xl:text-3xl tracking-wide md:group-hover:-translate-y-2 lg:group-hover:-translate-y-5 group-hover:text-orange-100 transition-all duration-300 ease">
                      {card.title2}
                    </p>
                    <button className="text-sm md:flex opacity-0 translate-y-10 items-center justify-center gap-4 border bg-transparent md:w-32 md:h-8 lg:w-36 lg:h-9 rounded-full group-hover:md:flex group-hover:opacity-100 group-hover:-translate-y-0 hover:bg-white hover:text-black hover:border-none transition-all duration-500 ease-in-out">
                      Read Article <FiArrowUpRight />{" "}
                    </button>
                  </div>
                  <div className="w-full h-[100%] absolute top-0 inset-x-0 bg-gradient-to-t from-black/75 from-40% to-transparent group-hover:from-black/50 transition-all duration-500 ease"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
