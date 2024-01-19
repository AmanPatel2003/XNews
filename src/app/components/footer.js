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
          <div className=" md:w-[40%]  ">
            <div className="">
              <a href="" className="">
                <img src="/xcheck-white.png" alt="" className="h-6" />
              </a>
            </div>
            <p className="text-[#919191] pt-10 pb-4 font-montserrat">
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
          <div className="md:w-[58%] sm:flex justify-between mt-[40px] md:mt-[0px] font-monoSpace">
            <div className="sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="about" className="py-2">
                    About
                  </a>
                  <a href="/xchecklabel" className="py-2">
                    Xcheck
                  </a>
                  <a href="/about" className="py-2">
                    People
                  </a>
                  <a href="/" className="py-2">
                    Advisory
                  </a>
                </div>
              </div>
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="about" className="py-2">
                    Publisher
                  </a>
                  <a href="/xchecklabel" className="py-2">
                    News Agency
                  </a>
                  <a href="/about" className="py-2">
                    Q&A
                  </a>
                </div>
              </div>
            </div>
            <div className=" mt-[20px] sm:mt-[0px] sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="about" className="py-2">
                    Terms of Service
                  </a>
                  <a href="/xchecklabel" className="py-2">
                    Privacy
                  </a>
                  <a href="/about" className="py-2">
                    Documentation
                  </a>
                </div>
              </div>
              <div className="w-[45%]  ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <a href="/" className="py-2">
                    Career
                  </a>
                  <a href="/" className="py-2">
                    Contact
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
