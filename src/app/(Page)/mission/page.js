import React from "react";


export const metadata = {
  title: "Mission page",
  description: "Mission page description",
  keywords: "team, members, collaboration, company",
  ogTitle: "Team Page - Your Website",
  ogDescription: "Explore our amazing team and their contributions.",
  ogImage: "https://example.com/path/to/og-image.jpg",
  ogProperties: {
    ogTitle: "Add a Shopping Cart to Any Website in Minutes - Snipcart",
    ogDescription:
      "Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!",
    ogUrl: "https://snipcart.com/",
    ogType: "website",
  },
};

const page = () => {
  return (
    <div>
      <div className="mt-[75px]   ">
        <section className="flex items-center px-[20px] md:px-0 py-[50px] sm:py-[100px] lg:py-[150px] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto ">
          <div className="hero-container pageBannerPadding">
            <div className="lg:flex h-full ">
              <div className="lg:w-[55%] px-[15px]">
                <h1 className="text-[32px] text-[#555555] font-semibold">
                  On mission
                </h1>
                <h2 className="font-monoSpace text-[28px] leading-10 text-[#555555]">
                  To build technology, tools and standards that enable authentic
                  journalism to grow, reach and impact everyday lives.
                </h2>
              </div>
              <div className="  mt-[40px] lg:mt-0 lg:w-[45%] px-[15px] ">
                <img
                  src="../assets/img/mission.png"
                  alt="badge"
                  className="w-[50%] lg:w-[70%] m-auto lg:m-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f6f6] px-[20px] md:px-0">
          <div className=" py-[100px] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto px-[15px]">
            <div className="mb-[50px] col-lg-12 without">
              <h2 className="text-4xl font-monoSpace text-center mb-[7px] text-[#313131] leading-10 ">
                Our Values
              </h2>
              <p className="text-center mb-[14px] mt-[15px] text-[#7b7b7b] leading-6 ">
                Work we do is mere reflection of our philosophy, believes and
                values. <br />
                At XCheck, values inform our behaviour and choices we make
                everyday. <br />
                As a result, our culture is a model of the world we’re trying to
                build.
              </p>
            </div>
            <div className="mt-[50px] mb-[21px] lg:flex justify-around ">
              <div className="lg:w-[50%] sm:flex justify-around">
                <div className="sm:w-[40%]">
                  <img
                    src="../assets/img/1ic_autoria.png"
                    alt="svg_icon"
                    className="m-auto w-[69px] h-[69px]"
                  />
                  <div className="">
                    <div className="h-[65px] flex items-center justify-center font-monoSpace text-lg">
                      Bold
                    </div>
                    <p className="text-center g-font-size-18 mx-auto text-[#7b7b7b]">
                      We are confident, courageous, and directed.
                    </p>
                  </div>
                </div>
                <div className="sm:w-[40%] ">
                  <img
                    src="../assets/img/4ic_transparencia.svg"
                    alt=" Description"
                    className="m-auto w-[69px] h-[69px]"
                  />
                  <div className="img-text">
                    <div className="h-[65px] flex items-center justify-center font-monoSpace text-lg">
                      Responsible
                    </div>
                    <p className="text-center g-font-size-18 mx-auto text-[#7b7b7b]">
                      Our intuitive and empathic thinking have made us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="  mt-[40px] lg:mt-0 lg:w-[50%] sm:flex justify-around">
                <div className="sm:w-[40%]">
                  <img
                    src="../assets/img/2ic_fecha.svg"
                    alt=" Description"
                    className="m-auto w-[69px] h-[69px]"
                  />
                  <div className="img-text">
                    <div className="h-[65px] flex items-center justify-center font-monoSpace text-lg">
                      Creative
                    </div>
                  </div>
                  <p className="text-center g-font-size-18 mx-auto text-[#7b7b7b] ">
                    World is sandbox of life and experiments. We play!
                  </p>
                </div>
                <div className="sm:w-[40%]">
                  <img
                    src="../assets/img/3ic_integridad.svg"
                    alt=" Description"
                    className="m-auto w-[69px] h-[69px]"
                  />
                  <div className="img-text">
                    <div className="h-[65px] flex items-center justify-center font-monoSpace text-lg">
                      Lead
                    </div>
                    <p className="text-center g-font-size-18 mx-auto text-[#7b7b7b]">
                      By default as we walk down road less travelled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-industries g-pt-70 g-pb-50--lg px-[20px] md:px-0">
          <div
            className="xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto pt-[70px] pb-[50px]"
          >
            <div className="lg:flex items-center">
              <div className="lg:w-[50%] px-[15px] lg:px-0 mb-[50px]  lg:pr-[60px]">
                <img
                  className="w-[83%] m-auto lg:m-0"
                  src="../assets/img/mission-1.png"
                  alt=" Description"
                />
              </div>
              <div className="lg:w-[50%] px-[15px]">
                <div className="text-mobile-finance g-ml-20 g-ml-0--sm">
                  <div className="mb-[20px]">
                    <div className="mb-[40px]">
                      <h2 className="text-4xl font-monoSpace">
                        Working at XCheck
                      </h2>
                    </div>
                    <p className="text-[#7b7b7b] font-montserrat mb-[14px] ">
                      We’ve taken a huge challenge and made it into our mission:
                      To protect digital journalism from abuse. To achieve this,
                      we are building a team of smart, creative, passionate
                      optimists, the kind of people who see opportunity where
                      others see roadblocks. If this sounds like you, we are
                      waiting to talk with you.
                    </p>
                    <br />
                    <a className="border-2 p-[12px]" href="\">
                      &nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join Us
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
