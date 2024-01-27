import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => (
  <>
    <div className="">
      <div className="bg-[#000000E6]  w-full py-16  px-[14px]  lg:px-[0px] ">
        <div
          className="lg:flex justify-between  lg:px-[25px] xl:px-[0px] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto "
        >
          <div className=" lg:w-[33%] pr-[25px] text-justify ">
            <div className="">
              <Link href="/" className="">
                <img src="/xcheck-white.png" alt="" className="h-6" />
              </Link>
            </div>
            <p className="text-[#919191] text-sm  pt-10 pb-4 font-montserrat">
              Cross Check manages Public News Register™ of media industry to
              protect news supply chain, valuable assets, enable cross
              verification and further digital journalism
            </p>
            <div className="flex items-center  text-white ">
              <Link href="" className="text-xl px-2">
                <ImLinkedin2 />
              </Link>
              <Link href="" className="text-xl px-2">
                <IoLogoTwitter />
              </Link>
              <Link href="" className="text-xl px-2">
                <FaFacebookF />
              </Link>
              <Link href="" className="text-xl px-2">
                <FaInstagram />
              </Link>
              <Link href="" className="text-xl px-2">
                <FaAngellist />
              </Link>
              <Link href="" className="text-xl px-2">
                <FaQuestion />
              </Link>
              <Link href="" className="text-xl px-2">
                <IoMdMail />
              </Link>
            </div>
          </div>
          <div className="lg:w-[65%] text-sm sm:flex justify-between mt-[40px] lg:mt-[0px] font-monoSpace">
            <div className="sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <Link href="/about" className="py-2">
                    About
                  </Link>
                  <Link href="/mission" className="py-2">
                    Mission & vision
                  </Link>
                  <Link href="/leadership" className="py-2">
                    Leadership
                  </Link>
                  <Link href="/ethics" className="py-2">
                    Ethics
                  </Link>
                  <Link href="/join" className="py-2">
                    Become Member
                  </Link>
                  <Link href="/contact-us" className="py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="w-[45%]">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <Link href="/journalist" className="py-2">
                    For Journalist
                  </Link>
                  <Link href="/news-agency" className="py-2">
                    For News Agency
                  </Link>
                  <Link href="/news-publisher" className="py-2">
                    For News Publisher
                  </Link>
                  <Link href="/fact-checkers" className="py-2">
                    For Fact Checkers
                  </Link>
                  <Link href="/government" className="py-2">
                    For Government
                  </Link>
                  <Link href="/pr-agency" className="py-2">
                    For PR Agency
                  </Link>
                  <Link href="/brands" className="py-2">
                    For Brands
                  </Link>
                  <Link href="/research" className="py-2">
                    For Academics
                  </Link>
                  <Link href="/developers" className="py-2">
                    For Developers
                  </Link>
                </div>
              </div>
            </div>
            <div className=" mt-[20px] sm:mt-[0px] sm:w-[50%] flex justify-around">
              <div className="w-[45%]   ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <Link href="/technology" className="py-2">
                    Technology
                  </Link>
                  <Link href="/whitepaper" className="py-2">
                    Whitepaper
                  </Link>
                  <Link href="https://google.com" className="py-2">
                    Open Source
                  </Link>
                  <Link href="https://google.com" className="py-2">
                    Documentation
                  </Link>
                  <Link href="https://google.com" className="py-2">
                    API
                  </Link>
                </div>
              </div>
              <div className="w-[45%]  ">
                <div className="text-[#FFFFFFCC] flex flex-col">
                  <Link href="/privacy-policy" className="py-2">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="py-2">
                    Terms of Service
                  </Link>
                  <Link href="/support" className="py-2">
                    Support
                  </Link>
                  <Link href="/training" className="py-2">
                    Training
                  </Link>
                  <Link href="/career" className="py-2">
                    Career
                  </Link>
                  <Link href="/media" className="py-2">
                    Media
                  </Link>
                  <Link href="/contact-us" className="py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </>
);

export default Footer;
