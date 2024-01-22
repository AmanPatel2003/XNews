"use client";

import React, { useState, useEffect } from "react";

const Products = () => {


  return (
    <>
      <section className="box-border leading-4">
        <div className=" md:min-w-[768px] m-auto px-[35px] md:px-[25px] xl:px-[0px] xl:w-[1140px] py-[100px]">
          <div className="mb-[50px] without">
            <img
              className="mb-[19px]"
              src="assets/img/title-square.svg"
              alt="icon"
            />
            <h2 className="text-4xl  mb-[15px] font-monoSpace ">
              Stakeholders
            </h2>
          </div>

          <div className=" md:flex justify-between">
            <div className=" md:mr-[20px] mb-[60px] md:mb-[0px] ">
              <div className="p-[20px] h-[330px  shadow-xl shadow-[#00000033]">
                <div className="my-[30px] ml-[20px]  ">
                  <h2 className="text-2xl lg:text-4xl mb-[30px] font-monoSpace ">
                    Publishers
                  </h2>
                  <p className="text-lg lg:text-xl font-montserrat  mb-[35px]  text-[#7b7b7b]">
                    Protect your work from unsolicited manipulation, replication
                    and distribution over internet. Get recognized for your
                    work.
                  </p>
                  <a
                    className="p-[10px] text-lg lg:text-xl border-2 border-black"
                    href="\publishers"
                  >
                    Start For Free
                  </a>
                </div>
              </div>
            </div>

            <div className="  ">
              <div className="p-[20px] shadow-xl h-[330px  shadow-[#00000033]">
                <div className="my-[30px] ml-[20px]">
                  <h2 className="text-2xl lg:text-4xl mb-[30px] font-monoSpace">
                    New Agency
                  </h2>
                  <p className="text-lg lg:text-xl font-montserrat   mb-[35px]  text-[#7b7b7b] font-Montserrat ">
                    Protect news distribution pipeline, empower partners and
                    grow revenue with effective price discovery of news. Get
                    Iris360&trade;
                  </p>
                  <a
                    className="p-[10px] text-xl border-2 border-black"
                    href="\newsagency"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6  pt-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
