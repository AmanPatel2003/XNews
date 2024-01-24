import React from "react";

const Solutions = () => {

  

  return (
    <>
      <div className="">
        <div
          className=" px-[14px] md:px-[25px] xl:px-[0px] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] m-auto py-[100px] "
        >
          <div className="mb-[50px]">
            <img
              className="mb-[19px]"
              src="assets/img/title-square.svg"
              alt="svgicon"
            />
            <h2 className="text-3xl md:text-4xl font-mono mb-[25px]">
              XCheck helps News Publishers
            </h2>
          </div>
          {/* <div className="flex justify-between flex-wrap lg:flex-nowrap "> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="px-[13px] mt-[30px]">
              <article className="">
                <img
                  className="m-auto"
                  src="assets/img/6ic_soluciones_compliance.svg"
                  alt=" Description"
                />
                <div className=" text-center">
                  <h2 className="text-xl my-4 font-monoSpace underline underline-offset-2">
                    Protection
                  </h2>
                  <div className="font-montserrat  leading-7">
                    <div className="">
                      News stay secure until consumed by readers on digital
                      device. Ensuring protection of valuable news assets on
                      internet - driving revenue &amp; brand visibility.
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="px-[13px] mt-[30px]">
              <article className="">
                <img
                  className="m-auto"
                  src="assets/img/7ic_soluciones_contrato.svg"
                  alt="svgicon"
                />
                <div className=" text-center">
                  <h2 className="text-xl my-4 font-monoSpace underline underline-offset-2">
                    Trust
                  </h2>
                  <div className="font-montserrat  leading-7">
                    <div className="">
                      XCheck badge separates news website that are doing
                      reliable journalism from others. Badge empowers readers to
                      further investigate origin and transparency of news
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="px-[13px] mt-[30px]">
              <article className="">
                <img
                  className="m-auto"
                  src="assets/img/10ic_soluciones_banca.svg"
                  alt="Description"
                />
                <div className=" text-center">
                  <h2 className="text-xl my-4 font-monoSpace underline underline-offset-2">
                    Insights
                  </h2>
                  <div className="font-montserrat  leading-7">
                    <div className="">
                      Our monitoring engine keeps an eye on plagiarism, content
                      manipulation and unauthorized distribution. We analyze and
                      build evidence against the repeat offenders
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="masonry-grid row">
            <div className="masonry-grid-sizer col-sm-1" />
          </div>
        </div>
      </div>

      <section className="p-[55px]">
        <div className="">
          <p className="text-center leading-10 text-3xl xl:text-4xl font-monoSpace underline underline-offset-2">
            Protecting Internet Journalism
          </p>
        </div>
      </section>
    </>
  );
};

export default Solutions;
