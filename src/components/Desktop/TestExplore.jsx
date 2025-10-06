import React, { useEffect, useState, useMemo } from "react";
// Anda mungkin perlu memastikan komponen ini ada di proyek Anda
// import ShinyText from "../Animation/ShinyText";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- Data Gambar ---
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

// --- Data Konten Statis ---
// Data ini digunakan untuk menentukan judul, deskripsi, dan array gambar yang akan ditampilkan.
const contentMap = {
  aviation: {
    id: "aviation",
    title: "Aviation",
    subTitle: "The Skyward Journey",
    description:
      "Soar above breathtaking landscapes and embrace the boundless freedom of the skies.",
    images: aviationData,
    nextCategory: "memory", // Kategori yang akan diaktifkan setelah klik
  },
  memory: {
    id: "memory",
    title: "Event & Wedding",
    subTitle: "The Timeless Celebration",
    description:
      "Celebrate life’s most precious moments in enchanting settings where every detail is crafted to perfection.",
    images: memoryData,
    nextCategory: "aviation", // Kategori yang akan diaktifkan setelah klik
  },
};

const TestExplore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeCategory, setActiveCategory] = useState("aviation");

  const currentContent = useMemo(
    () => contentMap[activeCategory],
    [activeCategory]
  );

  const handleCategoryToggle = () => {
    setActiveCategory(currentContent.nextCategory);
    setCurrentIndex(0);
  };

  //   const changeSlide = (direction) => {
  //     const images = currentContent.images;
  //     if (direction === "prev") {
  //       setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  //     } else {
  //       setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //     }
  //   };

  useEffect(() => {
    const images = currentContent.images;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Restart interval setiap kali kategori berganti
    const intervalId = setInterval(nextSlide, 15000);

    // Cleanup: interval harus dibersihkan
    return () => clearInterval(intervalId);
  }, [currentContent]); // Dependensi pada currentContent (array gambar)

  // Ambil data untuk preview (kategori yang TIDAK aktif)
  const previewContent = contentMap[currentContent.nextCategory];

  // Asumsi ShinyText adalah komponen valid atau dihapus
  const ShinyText = ({ text, className }) => (
    <span className={className}>{text}</span>
  );

  return (
    <div className="hidden h-dvh lg:flex flex-col px-12 overflow-hidden">
      <div className="flex flex-col items-center title">
        <h3>Explore More With</h3>
        <h3 className="sub-titles">iNi ViE Hospitality</h3>
      </div>

      <div className="flex flex-col relative mt-10">
        <div className="relative w-full max-w-[1400px] h-[550px] mx-auto group cursor-pointer rounded-xl overflow-hidden shadow-2xl">
          {/* SLIDER GAMBAR UTAMA */}
          {currentContent.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${currentContent.title} slide ${index + 1}`}
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}

          <div className="absolute inset-0 z-10">
            {/* <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-r from-black/75 from-1% to-transparent group-hover:from-black/75 group-hover:from-20% transition-all duration-500 ease"></div> */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="w-full h-full absolute bottom-0 inset-x-0 bg-gradient-to-l from-white/25 from-1% to-transparent"></div>

            <div className="absolute w-4/12 flex-col text-start top-[40%] left-10 text-white">
              <h4 className="sub-title italic drop-shadow-lg text-lg">
                {currentContent.title}
              </h4>

              <h2 className="title-more-2 w-56 leading-8 text-4xl font-bold">
                {currentContent.subTitle}
              </h2>

              <p className="desc-text drop-shadow-2xl mt-2 text-base">
                {currentContent.description}
              </p>

              <button
                href="#"
                className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out 
                           hover:bg-white hover:text-orange-500 focus:outline-none z-20 shadow-md"
              >
                Discover More
              </button>
            </div>
          </div>

          {/* TOMBOL NAVIGASI MANUAL */}
          {/* <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
            <button
              onClick={() => changeSlide("prev")}
              className="p-3 rounded-full bg-black/30 hover:bg-black/70 text-white transition-colors duration-200"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => changeSlide("next")}
              className="p-3 rounded-full bg-black/30 hover:bg-black/70 text-white transition-colors duration-200"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div> */}

          {/* CARD PREVIEW UNTUK MENGGANTI KATEGORI */}
          <div className="absolute right-[10%] bottom-[10%] z-20">
            <div className="flex items-center gap-4">
              <div className="text-white text-right">
                <p className="text-sm opacity-70">Next Category:</p>
                <p className="text-xl font-bold">{previewContent.title}</p>
              </div>

              <div
                className="w-40 h-24 overflow-hidden rounded-lg shadow-xl border-2 border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer"
                onClick={handleCategoryToggle} // <-- KLIK HANDLER PENTING
              >
                {/* Tampilkan gambar pertama dari kategori berikutnya */}
                <img
                  src={previewContent.images[0]}
                  alt={previewContent.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestExplore;
