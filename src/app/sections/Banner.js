import React from "react";

const Banner = () => (
  <>
    <section className="box-border">
      <div className="">
        <div className="bg-banner_image bg-cover bg-center flex   h-screen align-middle items-center w-full mt-[75px]">
          <div className="h-[229px] md:px-[25px] xl:px-[0px] xl:w-[1140px] m-auto">
            <h1 className="w-[700px] leading-[60px] mt-[-50px] text-5xl font-monoSpace mb-[5px]">
              Protect News from bad actors on Internet
            </h1>
            <div className="summary">
              <h2
                className="w-[600px] text-xl font-light leading-8 font-montserrat "
              
              >
                In few minutes, news published on internet is plagiarized,
                manipulated and distributed by unauthorized websites hurting
                trust &amp; revenue. We protect both.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Banner;
