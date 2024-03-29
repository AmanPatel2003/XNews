"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef(null);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleMouseEnter1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
  };
  const handleMouseEnter2 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(!isDropdownOpen2);
    setDropdownOpen3(false);
  };
  const handleMouseEnter3 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(!isDropdownOpen3);
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

  const closeAll = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setHamburgerMenu(false);
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

  const showSidebar = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <nav className="fixed top-0 box-border left-0 w-full transition-all duration-300 bg-white shadow-md font-monoSpace z-10">
        <div
          className={`flex justify-between items-center px-[14px] sm:px-0  xl:px-[0px]  xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto  ${
            scrolling ? "py-[10px]" : "py-[20px]"
          }`}
        >
          <Link href="/" className="">
            <Image src="/images/xcheck.png" alt="" height={100} width={190} />
          </Link>
          <div className="text-[13px] font-light  ">
            <div className=" hidden lg:block">
              <ul className="flex h-[25px] w-[600px] justify-between ">
                <li
                  className=" flex items-center  w-[150px "
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseEnter1}
                >
                  <span className="hover:text-[#4df715] ml-4 p-4">
                    HOW IT WORKS?
                  </span>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen1 && (
                    <ul
                      ref={dropdownRef}
                      className={`absolute bg-white ml-[20px]  p-4 shadow-md mt-[190px] w-[150px ${
                        isDropdownOpen1
                          ? "hover:border-t-2 border-[#4df715]"
                          : ""
                      } `}
                      onMouseLeave={handleMouseLeave11}
                    >
                      <li className="">
                        <Link
                          href="/"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          WHY TRUST ?
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/xchecklabel"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          XCHECK LABEL
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="#"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen1(false);
                          }}
                        >
                          F&Q
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className=" flex items-center px-[25px w-[150px justify-cente"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseEnter2}
                >
                  <p className="hover:text-[#4df715] ml-4  py-4"> ABOUT</p>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen2 && (
                    <ul
                      ref={dropdownRef}
                      className={`absolute bg-white  p-4 shadow-md mt-[145px] w-[150px ${
                        isDropdownOpen2
                          ? "hover:border-t-2 border-[#4df715]"
                          : ""
                      }`}
                      onMouseLeave={handleMouseLeave22}
                    >
                      <li className="">
                        <Link
                          href="/mission"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen2(false);
                          }}
                        >
                          MISSION
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/team"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen2(false);
                          }}
                        >
                          PEOPLE
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className=" flex items-center px-[25px w-[150px justify-cente "
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseEnter3}
                >
                  <p className="hover:text-[#4df715] text-center ml-4 py-4">
                    PARTNERS
                  </p>
                  <IoIosArrowDown className="ml-2" />
                  {isDropdownOpen3 && (
                    <ul
                      ref={dropdownRef}
                      className={`absolute bg-white  p-4 shadow-md  mt-[150px] w-[150px ${
                        isDropdownOpen3
                          ? "hover:border-t-2 border-[#4df715]"
                          : ""
                      }`}
                      onMouseLeave={handleMouseLeave33}
                    >
                      <li className="">
                        <Link
                          href="/news-publisher"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen3(false);
                          }}
                        >
                          PUBLISHER
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/news-agency"
                          className="block py-2 hover:text-[#4df715]"
                          onClick={(e) => {
                            setDropdownOpen3(false);
                          }}
                        >
                          NEWS AGENCY
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mt-[3px] ml-[">
                  <Link
                    href=""
                    className="px-[20px] hover:bg-black hover:text-white border border-black py-[16px]"
                  >
                    SCHEDULE DEMO
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button
                className="text-4xl flex items-center text-[#4df715] "
                onClick={showSidebar}
              >
                <RxHamburgerMenu />
              </button>
            </div>
            {hamburgerMenu && (
              <div className="flex absolute  lg:hidden w-[100vw]  left-0 top-0">
                <div className="relative h-[100vh] p-5 w-[70%] sm:w-[60%] md:w-[40%] bg-white">
                  <button
                    className="absolute right-5 top-5 text-3xl   text-[#4df715]"
                    onClick={closeAll}
                  >
                    <RxCross2 className="font-bold " />
                  </button>
                  <ul className="mt-[50px] w-[200px] ">
                    <li
                      className=" flex items-center justify-between  w-[150px "
                      onClick={handleMouseEnter1}
                    >
                      <p className="w-full hover:text-[#4df715] ml-4 p-4">
                        HOW IT WORKS?
                      </p>
                      <IoIosArrowDown className="ml-2" />
                      {isDropdownOpen1 && (
                        <ul
                          ref={dropdownRef}
                          className={`absolute bg-white ml-[20px]  p-4 shadow-md mt-[190px] w-[150px ${
                            isDropdownOpen1
                              ? "hover:border-t-2 border-[#4df715]"
                              : ""
                          } `}
                        >
                          <li className="">
                            <Link
                              href="/"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              WHY TRUST ?
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              href="/xchecklabel"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              XCHECK LABEL
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              href="#"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              F&Q
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className=" flex items-center px-[25px w-[150px justify-between"
                      onClick={handleMouseEnter2}
                    >
                      <p className="w-full hover:text-[#4df715] ml-4  p-4">
                        {" "}
                        ABOUT
                      </p>
                      <IoIosArrowDown className="ml-2" />
                      {isDropdownOpen2 && (
                        <ul
                          ref={dropdownRef}
                          className={`absolute bg-white  ml-[20px]  p-4 shadow-md mt-[145px] w-[150px ${
                            isDropdownOpen2
                              ? "hover:border-t-2 border-[#4df715]"
                              : ""
                          }`}
                        >
                          <li className="">
                            <Link
                              href="/mission"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              MISSION
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              href="/team"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              PEOPLE
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className=" flex items-center px-[25px w-[150px justify-between "
                      onClick={handleMouseEnter3}
                    >
                      <p className="w-full hover:text-[#4df715]  ml-4 p-4">
                        PARTNERS
                      </p>
                      <IoIosArrowDown className="ml-2" />
                      {isDropdownOpen3 && (
                        <ul
                          ref={dropdownRef}
                          className={`absolute bg-white  ml-[20px]  p-4 shadow-md  mt-[150px] w-[150px ${
                            isDropdownOpen3
                              ? "hover:border-t-2 border-[#4df715]"
                              : ""
                          }`}
                        >
                          <li className="">
                            <Link
                              href="/news-publisher"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              PUBLISHER
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              href="/news-agency"
                              className="block py-2 hover:text-[#4df715]"
                              onClick={showSidebar}
                            >
                              NEWS AGENCY
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="mt-[30px] p-4">
                      <Link
                        href=""
                        className="px-[20px] bg-black text-white border border-black py-[16px]"
                      >
                        SCHEDULE DEMO
                      </Link>
                    </li>
                    {/* <li className="mt-[30px] p-4">
                      <Link
                        href=""
                        className="px-[20px] bg-black text-white border-2 border-[#4df715] py-[16px]"
                      >
                        SCHEDULE DEMO
                      </Link>
                    </li>
                    <li className="mt-[30px] p-4">
                      <Link
                        href=""
                        className="px-[20px] bg-black text-[#4df715] border-2 border-[#4df715] py-[16px]"
                      >
                        SCHEDULE DEMO
                      </Link>
                    </li>
                    <li className="mt-[30px] p-4">
                      <Link
                        href=""
                        className="px-[20px] text-sm  border-2 border-[#4df715] font-semibold text-[#4df715] py-[16px]"
                      >
                        SCHEDULE DEMO
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div
                  className=" w-[30%] sm:w-[40%] md:w-[60%] bg-gray-600 opacity-70"
                  onClick={closeAll}
                ></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
