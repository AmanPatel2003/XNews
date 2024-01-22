import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" bg-[#f6f6f6] px-[14px]">
        <div className="l mt-[75px] pt-[75px] px-[10px] xl:w-[1140px] m-auto  ">
          <div className="mb-[50px]">
            <h1 className="text-4xl font-monoSpace">Advisory</h1>
          </div>
          <section className="md:px-[15px]">
            <div className="md:flex  items-center">
              <div className="md:w-[45%]">
                <Image
                  src="https://xcheck.org/assets/img/compliance/dummy.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="px-[30px] pt-[50px] md:pt-[0px]">
                <h1 className="mb-[40px] font-monoSpace text-[28px]">We are looking for Advisor</h1>
                <p className=" mb-[14px] font-montserrat text-[#7d7d7d]">
                  Love what we do? If you're interested in helping us protect
                  journalism then please, express your interest at
                  gawrav@xcheck.org
                </p>
                <p className="mb-[20px]">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
