import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => (
  <>
    <div className="">
      <div className="bg-[#000000E6]  w-full py-16  px-[40px]  md:px-[0px] ">
        <div className="md:flex justify-between  md:px-[25px] xl:px-[0px] xl:w-[1140px] m-auto ">
          <div className=" md:w-[33%] pr-[25px] text-justify ">
            <div className="">
              <a href="/" className="">
                <img src="/xcheck-white.png" alt="" className="h-6" />
              </a>
            </div>
            <p className="text-[#919191] text-sm  pt-10 pb-4 font-montserrat">
              Cross Check manages Public News Register™ of media industry to
              protect news supply chain, valuable assets, enable cross
              verification and further digital journalism
            </p>
            <div className="flex items-center  text-white ">
              <a href="" className="text-xl px-2">
                <ImLinkedin2 />
              </a>
              <a href="" className="text-xl px-2">
                <IoLogoTwitter />
              </a>
              <a href="" className="text-xl px-2">
                <FaFacebookF />
              </a>
              <a href="" className="text-xl px-2">
                <FaInstagram />
              </a>
              <a href="" className="text-xl px-2">
                <FaAngellist />
              </a>
              <a href="" className="text-xl px-2">
                <FaQuestion />
              </a>
              <a href="" className="text-xl px-2">
                <IoMdMail />
              </a>
            </div>
          </div>
          <div className="md:w-[65%] text-sm sm:flex justify-between mt-[40px] md:mt-[0px] font-monoSpace">
            <div className="sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="/about" className="py-2">
                    About
                  </a>
                  <a href="/mission" className="py-2">
                    Mission & vision
                  </a>
                  <a href="/leadership" className="py-2">
                    Leadership
                  </a>
                  <a href="/ethics" className="py-2">
                    Ethics
                  </a>
                  <a href="/join" className="py-2">
                    Become Member
                  </a>
                  <a href="/contact-us" className="py-2">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="w-[45%]">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="/journalist" className="py-2">
                    For Journalist
                  </a>
                  <a href="/news-agency" className="py-2">
                    For News Agency
                  </a>
                  <a href="/news-publisher" className="py-2">
                    For News Publisher
                  </a>
                  <a href="/fact-checkers" className="py-2">
                    For Fact Checkers
                  </a>
                  <a href="/government" className="py-2">
                    For Government
                  </a>
                  <a href="/pr-agency" className="py-2">
                    For PR Agency
                  </a>
                  <a href="/brands" className="py-2">
                    For Brands
                  </a>
                  <a href="/research" className="py-2">
                    For Academics
                  </a>
                  <a href="/developers" className="py-2">
                    For Developers
                  </a>
                </div>
              </div>
            </div>
            <div className=" mt-[20px] sm:mt-[0px] sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="/technology" className="py-2">
                    Technology
                  </a>
                  <a href="/whitepaper" className="py-2">
                    Whitepaper
                  </a>
                  <a href="https://google.com" className="py-2">
                    Open Source
                  </a>
                  <a href="https://google.com" className="py-2">
                    Documentation
                  </a>
                  <a href="https://google.com" className="py-2">
                    API
                  </a>
                </div>
              </div>
              <div className="w-[45%]  ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="/privacy-policy" className="py-2">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="py-2">
                    Terms of Service
                  </a>
                  <a href="/support" className="py-2">
                    Support
                  </a>
                  <a href="/training" className="py-2">
                    Training
                  </a>
                  <a href="/career" className="py-2">
                    Career
                  </a>
                  <a href="/media" className="py-2">
                    Media
                  </a>
                  <a href="/contact-us" className="py-2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000] h-16"></div>
    </div>
  </>
);

export default Footer;
