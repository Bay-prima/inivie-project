import React from "react";
import RollingButton from "./Animation/RollingButton";
import {
  BsArrowDown,
  BsArrowUpRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const FooterMobile = () => {
  return (
    <div className="w-full flex flex-col h-auto bg-black px-4 py-10 md:hidden">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 mb-10 items-center text-center">
          <h1 className="title text-white">THE iNi ViE HOSPITALITY STORY</h1>
          <p className="desc-sm text-white">
            Ini Vie Hospitality is a creative and passionate team to hospitality
            industry and design. The company specializes in full resort, beach
            club management, complex villa management, restaurant management,
            spa management, concept consultation and architect & interior design
            with focusing on high rate of guest satisfaction, return on
            investment, branding and property maintenance. Our team are
            designated to market the resort, maintenance the entire property and
            transparency within financial or report.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <RollingButton
            text="Discover Our Story"
            bgColor="bg-white"
          ></RollingButton>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col gap-14 w-full">
          <div className="flex w-full items-center justify-center">
            <img
              src="/assets/img/logo-inivie-ln.png"
              alt="logo-ini-vie"
              loading="lazy"
              className="w-40 h-full"
            />
          </div>

          <div className="flex flex-col gap-8 items-start">
            <div className="">
              <h1 className="title text-white mb-4">Head Office</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                Jl. Gn. Tangkuban Perahu No.88A, Kerobokan Kelod, Kuta Utara,
                Badung Regency, Bali 80361
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                info@inivie.com
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                View on map
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Marketing</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                Receive latest offers and promos <br /> without spam
              </p>
              <br />
              <RollingButton
                text="Subscribe Now"
                bgColor="bg-white"
                className=""
              ></RollingButton>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-8">
            <div className="">
              <h1 className="title text-white mb-4">Marketing</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                info@inivie.com
              </p>
              <p className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                Submit your proposal
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Media Inquary</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                pr@inivie.com
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Human Resource</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                hire@inivie.com
              </p>
              <p className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                View open jobs
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Reservation</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                reservation@inivie.com
              </p>
              <p className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                Submit your inquary
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Travel Agents Inquary</h1>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                +62 361 9346082
              </p>
              <p className="footer-desc hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                sales@inivie.com
              </p>
              <p className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                Submit your inquary
              </p>
            </div>
            <div className="">
              <h1 className="title text-white mb-4">Owners</h1>
              <p className="footer-desc-cus hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                About Us
              </p>
            </div>
            {/* end content footer */}
          </div>
        </div>
        <div className="flex w-full justify-between mt-8">
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
        <hr />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
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
              <span className="text-white opacity-50">
                iNi ViE Hospitality.
              </span>{" "}
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
