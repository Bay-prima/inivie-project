import React, { useState, useEffect } from "react";
import Button from "./Animation/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah nilai 100 sesuai kebutuhan Anda
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-50 text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10 md:px-6">
        {/* Logo */}
        <a href="#" className="w-[80px]">
          <img src="/assets/img/logo-inivie-ln.png" alt="" />
        </a>

        {/* Menu Desktop */}
        <div className="hidden text-md md:flex text-center items-center">
          <div className="flex gap-8 group/nav">
            {" "}
            {/* Tambahkan group/nav */}
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              Family
            </a>
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              What's New
            </a>
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              Offers
            </a>
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="nav-link hover:text-orange-100 text-base transition-opacity duration-300"
            >
              Become A Member
            </a>
          </div>
        </div>

        <div className="md:flex gap-4 hidden">
          <button className="uppercase text-sm font-semibold tracking-tight bg-white text-black py-[11px] px-[25px] ">
            Sign Up
          </button>
          <Button className="w-[100px] h-[45px] bg-orange-100" />
          {/* <button className="uppercase text-[12px] font-semibold tracking-tight bg-orange-100 py-[11px] px-[16px]">
            Book Now
          </button> */}
        </div>

        {/* Content kiri navbar Mobile */}
        <div className="flex gap-4 items-center justify-center text-center md:hidden">
          <button className="py-2 px-3 bg-white text-black text-[12px] hover:bg-gray-200">
            Sign Up
          </button>

          <button className="py-2 px-3 bg-orange-100 text-white text-[12px] hover:bg-orange-500 ">
            Book Now
          </button>

          {/* Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-menu"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8l16 0" />
              <path d="M4 16l16 0" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="bg-white text-gray-800 space-y-2 py-4 px-6 md:hidden lg:hidden">
          <a href="#" className="block hover:bg-gray-200 py-2 px-4">
            Home
          </a>
          <a href="#" className="block hover:bg-gray-200 py-2 px-4">
            About
          </a>
          <a href="#" className="block hover:bg-gray-200 py-2 px-4">
            Services
          </a>
          <a href="#" className="block hover:bg-gray-200 py-2 px-4">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
