import React from "react";
import {
  BsArrowDown,
  BsArrowUpRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import RollingButton from "./Animation/RollingButton";
import { BiChevronDown } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="relative hidden md:flex flex-col md:px-14 lg:px-28 py-10 gap-0 items-center bg-black">
      <div className="flex flex-col lg:w-[800px] h-auto justify-between items-center text-center gap-8 mb-10 px-4 py-4 md:w-full">
        <h2 className="text-3xl tracking-tight text-white font-poppins-medium">
          THE iNi ViE HOSPITALITY STORY
        </h2>
        <p className="desc text-white leading-[1.4] tracking-tight">
          Ini Vie Hospitality is a creative and passionate team to hospitality
          industry and design. The company specializes in full resort, beach
          club management, complex villa management, restaurant management, spa
          management, concept consultation and architect & interior design with
          focusing on high rate of guest satisfaction, return on investment,
          branding and property maintenance. Our team are designated to market
          the resort, maintenance the entire property and transparency within
          financial or report.
        </p>
        <RollingButton
          text="Discover Our Story"
          bgColor="bg-white"
          className="flex items-center text-sm px-4 py-2 gap-2 bg-white"
        ></RollingButton>
      </div>

      <div className="flex w-full lg:max-w-[1500px] flex-col justify-center items-center ">
        <div className="flex items-center justify-center w-full">
          <a href="#" className="flex w-[170px] mb-32">
            <img
              className="w-full h-full object-cover"
              src="/assets/img/logo-inivie-ln.png"
              alt="logo-inivie"
              loading="lazy"
            />
          </a>
        </div>

        <div className="flex w-full justify-between md:gap-20 lg:gap-40">
          <div className="flex flex-col justify-between items-start gap-12">
            <div className="flex flex-col lg:max-w-[330px] h-auto gap-1 items-start">
              <h1 className="footer-title">Head Office</h1>
              <p className="footer-desc">
                Jl. Gn. Tangkuban Perahu No.88A, Kerobokan Kelod, Kuta Utara,
                Badung Regency, Bali 80361
              </p>
              <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                info@inivie.com
              </span>
              <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </span>
              <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                View on map
              </span>
            </div>
            <div className="flex flex-col max-w-[330px] h-auto gap-1 items-start ">
              <h1 className="footer-title">Subscribe</h1>
              <span className="footer-desc">
                Receive latest offers and <br /> promos without spam
              </span>
              <RollingButton
                text="Subscribe Now"
                bgColor="bg-white"
                className="flex items-center text-sm px-4 py-2 gap-2 mt-4 bg-white"
              ></RollingButton>
            </div>
          </div>

          <div className="flex md:gap-10 lg:gap-40 ">
            <div className="flex flex-col md:w-40 lg:w-auto h-auto gap-12">
              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Marketing</h1>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  +62 361 9346082
                </span>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  info@inivie.com
                </span>
                <span className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Submit your proposal
                </span>
              </div>

              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Human Resource</h1>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  +62 361 9346082
                </span>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  hire@inivie.com
                </span>
                <span className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  View open jobs
                </span>
              </div>

              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Media Inquary</h1>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  pr@inivie.com
                </span>
              </div>
            </div>

            <div className="flex flex-col h-auto gap-12">
              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Reservation</h1>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  +62 361 9346082
                </span>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  reservation@inivie.com
                </span>
                <span className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Submit your inquary
                </span>
              </div>
              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Travel Agents Inquary</h1>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  +62 361 9346082
                </span>
                <span className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  sales@inivie.com
                </span>
                <span className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Submit your inquary
                </span>
              </div>
              <div className="flex flex-col h-auto justify-between items-start ">
                <h1 className="footer-title">Owners</h1>
                <span className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between mt-16">
          <div className="flex gap-4 text-white py-2">
            <a href="#">
              <BsFacebook className="w-5 h-auto" />
            </a>
            <a href="#">
              <BsLinkedin className="w-5 h-auto" />
            </a>
            <a href="#">
              <BsInstagram className="w-5 h-auto" />
            </a>
            <a href="#">
              <BsYoutube className="w-5 h-auto" />
            </a>
            <a href="#">
              <BsTiktok className="w-5 h-auto" />
            </a>
          </div>
          <button className="flex text-sm items-center text-white px-6 py-2 border gap-4">
            English
            <BiChevronDown />
          </button>
        </div>
        <div className="w-full h-px bg-white mt-8"></div>
        <div className="flex w-full gap-4 mt-4 justify-between">
          <span className="footer-desc hover:text-white transition-colors duration-500 cursor-pointer">
            Meet Alexa
          </span>
          <span className="footer-desc hover:text-white transition-colors duration-500 cursor-pointer">
            General Policity
          </span>
        </div>
        <div className="flex w-full items-center justify-center mt-4">
          <span className="footer-desc">
            2025{" "}
            <span className="text-white opacity-50">iNi ViE Hospitality.</span>{" "}
            All Rights Reserved
          </span>
        </div>
      </div>

      {/* Footer-last content */}
    </div>
  );
};

export default Footer;
