"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter1 = () => {
    setDropdownOpen1(true);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
  };
  const handleMouseEnter2 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(true);
    setDropdownOpen3(false);
  };
  const handleMouseEnter3 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(true);
  };

  const handleMouseLeave1 = (e) => {
    setDropdownOpen1(false);
  };
  const handleMouseLeave2 = (e) => {
    setDropdownOpen2(false);
  };
  const handleMouseLeave3 = (e) => {
    setDropdownOpen3(false);
  };
  const handleMouseLeave11 = () => {
    setDropdownOpen1(false);
  };
  const handleMouseLeave22 = () => {
    setDropdownOpen1(false);
  };
  const handleMouseLeave33 = () => {
    setDropdownOpen1(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 box-border left-0 w-full transition-all duration-300 bg-white shadow-md font-monoSpace z-10">
        <div
          className={`flex justify-between items-center px-[14px] sm:px-0  xl:px-[0px]  xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto  ${
            scrolling ? "py-[10px]" : "py-[20px]"
          }`}
        >
          <a href="/" className="">
            <img src="/images/xcheck.png" alt="" className="h-[35px]" />
          </a>
          <div className="text-[13px] font-light">
            <div className=" hidden lg:block">
              <ul className="flex h-[25px] ">
                <li
                  className=" flex items-center px-[25px w-[150px] "
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <span className="hover:text-[#4df715] ml-4"> HOW IT WORKS?</span>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen1 && (
                    <ul
                      ref={dropdownRef}
                      className="absolute bg-white  p-4 shadow-md mt-[165px] w-[150px] "
                      onMouseLeave={handleMouseLeave11}
                    >
                      <li className="">
                        <a
                          href="/"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          WHY TRUST ?
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="/xchecklabel"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          XCHECK LABEL
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          F&Q
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className=" flex items-center px-[25px w-[150px] justify-center"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <p className="hover:text-[#4df715]  "> ABOUT</p>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen2 && (
                    <ul
                      ref={dropdownRef}
                      className="absolute bg-white  p-4 shadow-md mt-[125px] w-[150px]"
                      onMouseLeave={handleMouseLeave22}
                    >
                      <li className="">
                        <a
                          href="/mission"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen2(false);
                          }}
                        >
                          MISSION
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="/team"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen2(false);
                          }}
                        >
                          PEOPLE
                        </a>
                      </li>
                      {/* <li className="">
                        <a
                          href="#"
                          className="block py-2"
                          onClick={(e) => {
                            setDropdownOpen2(false);
                          }}
                        >
                          Option 3
                        </a>
                      </li> */}
                    </ul>
                  )}
                </li>
                <li
                  className=" flex items-center px-[25px w-[150px] justify-center "
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <p className="hover:text-[#4df715] text-center"> PARTNERS</p>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen3 && (
                    <ul
                      ref={dropdownRef}
                      className="absolute bg-white  p-4 shadow-md  mt-[125px] w-[150px]"
                      onMouseLeave={handleMouseLeave33}
                    >
                      <li className="">
                        <a
                          href="/news-publisher"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen3(false);
                          }}
                        >
                          PUBLISHER
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="/news-agency"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen3(false);
                          }}
                        >
                          NEWS AGENCY
                        </a>
                      </li>
                      {/* <li className="">
                        <a
                          href="#"
                          className="block py-2"
                          onClick={(e) => {
                            setDropdownOpen3(false);
                          }}
                        >
                          Option 3
                        </a>
                      </li> */}
                    </ul>
                  )}
                </li>

                <li className="">
                  <a
                    href=""
                    className="px-[20px] hover:bg-black hover:text-white border border-black p-[16px]"
                  >
                    SCHEDULE DEMO
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button className="text-4xl flex items-center ">
                <RxHamburgerMenu />
              </button>
            </div>
            <div className=""></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
