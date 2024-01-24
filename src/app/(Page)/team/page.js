"use client";

import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const page = () => {
  const [Team1, setTeam1] = useState(false);
  const [Team2, setTeam2] = useState(false);
  const [Team3, setTeam3] = useState(false);
  const [Team4, setTeam4] = useState(false);
  const [Team5, setTeam5] = useState(false);

  const handleMouseEnter1 = () => {
    setTeam1(true);
  };
  const handleMouseLeave1 = () => {
    setTeam1(false);
  };
  const handleMouseEnter2 = () => {
    setTeam2(true);
  };
  const handleMouseLeave2 = () => {
    setTeam2(false);
  };
  const handleMouseEnter3 = () => {
    setTeam3(true);
  };
  const handleMouseLeave3 = () => {
    setTeam3(false);
  };
  const handleMouseEnter4 = () => {
    setTeam4(true);
  };
  const handleMouseLeave4 = () => {
    setTeam4(false);
  };
  const handleMouseEnter5 = () => {
    setTeam5(true);
  };
  const handleMouseLeave5 = () => {
    setTeam5(false);
  };

  return (
    <>
      <main>
        <div className="bg-[#f6f6f6]">
          <section
            className="mt-[75px] pt-[75px] px-[20px] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto"
          >
            <div className="mb-[50px]">
              <h2 className="text-4xl font-monoSpace">Team</h2>
            </div>
            <section className=" pb-[50px]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
                <div
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                  className=""
                >
                  <div className="h-full bg-white">
                    <figure className="relative">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/xcheck/image/upload/v1610891137/team/gawrav.jpg"
                        alt="Image Description"
                      />
                      {Team1 && (
                        <figcaption className="  bg-black opacity-80 absolute top-0 flex flex-col justify-center items-center  w-full h-full ">
                          <div className="">
                            <ul className=" flex justify-center list-inline text-center g-flex-middle-item">
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.linkedin.com/in/gawravmehta/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn className="text-[#6be31f]" />
                                </a>
                              </li>
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.twitter.com/gewgawrav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitter className="text-[#6be31f]" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                    <div className="bg-white py-[25px] px-[15px] ">
                      <div className="mb-[15px]  ">
                        <h4 className="font-monoSpace mb-[5px]">
                          Gaurav Mehta
                        </h4>
                        <h4 className="font-monoSpace text-[#70c6ff]">
                          Co-founder
                        </h4>
                      </div>
                      <div
                        className={` transition-width duration-500 ease-in-out border-b-2 border-[#70c6ff] ${
                          Team1 ? "w-full" : " w-[30px]"
                        } mb-[10px]`}
                      ></div>
                      <p className="font-montserrat mb-[14px] text-[#313131] text-[13px] leading-[22px]">
                        8+ years of information technology industry experience.
                        B.Tech, Metallurgy, Masters in Startup. TEDx speaker,
                        blockchain enthusiast and startup practitioner.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                  className=""
                >
                  <div className="h-full bg-white">
                    <figure className="relative">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/xcheck/image/upload/v1610891137/team/kewal.jpg"
                        alt="Image Description"
                      />
                      {Team2 && (
                        <figcaption className="bg-black opacity-80 absolute top-0 flex flex-col justify-center items-center  w-full h-full ">
                          <div className="">
                            <ul className=" flex justify-center list-inline text-center g-flex-middle-item">
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.linkedin.com/in/gawravmehta/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn className="text-[#6be31f]" />
                                </a>
                              </li>
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.twitter.com/gewgawrav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitter className="text-[#6be31f]" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                    <div className="bg-white py-[25px] px-[15px]">
                      <div className="mb-[15px]">
                        <h4 className="font-monoSpace mb-[5px]">
                          Kewal Krishna Bhoi
                        </h4>
                        <h4 className="font-monoSpace text-[#70c6ff]">
                          Co-founder
                        </h4>
                      </div>
                      <div
                        className={`transition-width duration-500 ease-in-out  border-b-2 border-[#70c6ff] ${
                          Team2 ? "w-full" : " w-[30px]"
                        } mb-[10px]`}
                      ></div>
                      <p className="font-montserrat mb-[14px] text-[#313131] text-[13px] leading-[22px]">
                        7+ years of industry experience ranging from HPCL to
                        BNY-Mellon. Expert in product management, finance and
                        planning. MBA in Finance &amp; Operations from IIM-R
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                  className=""
                >
                  <div className="h-full bg-white">
                    <figure className="relative">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/xcheck/image/upload/v1610891137/team/shaurya.jpg"
                        alt="Image Description"
                      />
                      {Team3 && (
                        <figcaption className="   bg-black opacity-80 absolute top-0 flex flex-col justify-center items-center  w-full h-full ">
                          <div className="">
                            <ul className=" flex justify-center list-inline text-center g-flex-middle-item">
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.linkedin.com/in/gawravmehta/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn className="text-[#6be31f]" />
                                </a>
                              </li>
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.twitter.com/gewgawrav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitter className="text-[#6be31f]" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                    <div className="bg-white py-[25px] px-[15px]">
                      <div className="mb-[15px]">
                        <h4 className="font-monoSpace mb-[5px]">
                          Shauryaditya Singh
                        </h4>
                        <h4 className="font-monoSpace text-[#70c6ff] ">
                          Co-founder
                        </h4>
                      </div>
                      <div
                        className={`transition-width duration-500 ease-in-out  border-b-2 border-[#70c6ff] ${
                          Team3 ? "w-full" : " w-[30px]"
                        } mb-[10px]`}
                      ></div>
                      <p className="font-montserrat mb-[14px] text-[#313131] text-[13px] leading-[22px]">
                        4+ years of business experience in information
                        technology with knack of people management, logics and
                        operations. Computer Science graduate &amp; MBA from
                        MATS University domain.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                  className=""
                >
                  <div className="h-full bg-white">
                    <figure className="relative z-0 ">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/xcheck/image/upload/v1610891137/team/manish.jpg"
                        alt="Image Description"
                      />
                      {Team4 && (
                        <figcaption
                          className={`bg-black opacity-80 absolute 
                           top-0  flex flex-col justify-center items-center w-full h-full`}
                        >
                          <div className="">
                            <ul className=" flex justify-center list-inline text-center g-flex-middle-item">
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.linkedin.com/in/gawravmehta/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn className="text-[#6be31f]" />
                                </a>
                              </li>
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.twitter.com/gewgawrav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitter className="text-[#6be31f]" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                    <div className="bg-white py-[25px] px-[15px]">
                      <div className="mb-[15px]">
                        <h4 className="font-monoSpace mb-[5px]">Manish Sahu</h4>
                        <h4 className="font-monoSpace text-[#70c6ff]">
                          Development Intern
                        </h4>
                      </div>
                      <div
                        className={` transition-width duration-500 ease-in-out border-b-2 border-[#70c6ff] ${
                          Team4 ? "w-full" : " w-[30px]"
                        } mb-[10px]`}
                      ></div>
                      <p className="font-montserratmb-[14px]  text-[#313131] text-[13px] leading-[22px]">
                        Full stack development intern with interest and
                        development knowledge of React, Javascript, Node.Js,
                        GraphQL, ELK, Docker and Cloud Services.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                  className=""
                >
                  <div className="h-full bg-white">
                    <figure className="relative">
                      <img
                        className="w-100"
                        src="https://res.cloudinary.com/xcheck/image/upload/v1610891137/team/dhairya.jpg"
                        alt="Image Description"
                      />
                      {Team5 && (
                        <figcaption className="bg-black opacity-80 absolute top-0 flex flex-col justify-center items-center  w-full h-full ">
                          <div className="">
                            <ul className=" flex justify-center list-inline text-center g-flex-middle-item">
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.linkedin.com/in/gawravmehta/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn className="text-[#6be31f]" />
                                </a>
                              </li>
                              <li className="rounded-full bg-white border-2 p-[8px] border-[#6be31f] mx-[4px]">
                                <a
                                  className=""
                                  href="https://www.twitter.com/gewgawrav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitter className="text-[#6be31f]" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                    <div className="bg-white py-[25px] px-[15px]">
                      <div className="mb-[15px]">
                        <h4 className="font-monoSpace mb-[5px]">
                          Dhairya Mehta
                        </h4>
                        <h4 className="font-monoSpace text-[#70c6ff]">
                          Marketing Intern
                        </h4>
                      </div>
                      <div
                        className={` transition-width duration-500 ease-in-out border-b-2 border-[#70c6ff] ${
                          Team5 ? "w-full" : " w-[30px]"
                        } mb-[10px]`}
                      ></div>
                      <p className="font-montserrat mb-[14px]  text-[#313131] text-[13px] leading-[22px]">
                        Young, passionate and active learner of Digital
                        Marketing tactics. Winner of Google Digital Marketing
                        Challenge. College student and intern completing degree
                        in electronics from IIIT-B
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
