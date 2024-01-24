import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" bg-[#f6f6f6] px-[14px]">
        <div
          className=" mt-[75px] pt-[75px] xl:w-[1140px]
lg:w-[960px]
md:w-[720px]
sm:w-[540px] m-auto  "
        >
          <div className="mb-[50px]">
            <h1 className="text-4xl font-monoSpace">Advisory</h1>
          </div>
          <section className="lg:px-[15px]">
            <div className="lg:flex  items-center">
              <div className="lg:w-[45%] ">
                <Image
                  src="https://xcheck.org/assets/img/compliance/dummy.png"
                  alt=""
                  className="m-auto"
                  width={400}
                  height={400}
                />
              </div>
              <div className="px-[30px] pt-[50px] lg:pt-[0px] lg:w-[55%]">
                <h1 className="mb-[40px] font-monoSpace text-[28px]">
                  We are looking for Advisor
                </h1>
                <p className="pb-[100px] lg:mb-[14px] font-montserrat text-[#7d7d7d]">
                  Love what we do? If you &apos; are interested in helping us
                  protect journalism then please express your interest at
                  gawrav@xcheck.org
                </p>
                <p className="hidden lg:block mb-[20px]">
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
