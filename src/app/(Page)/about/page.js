import React from "react";


export const metadata = {
  charset: "utf-8",
  viewport: "device-width, initial-scale=1.0",
  title: "Integrations",
  description: "Brief description of your website or web page",
  keywords: "keyword1, keyword2, keyword3",
  robots: "index, follow",
  openGraph: {
    title: "Aman's Website", // Custom title for Open Graph
    description: "Page Description for WhatsApp",
    url: "Page ka URL for WhatsApp",
    type: "website",
    image: "/xchecklogo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Aman on Twitter", // Custom title for Twitter
    description: "Twitter Description",
    image: "/xchecklogo.png",
  },
};

const About = () => {
  return (
    <>
      <div className="">
        <div className="mt-[75px] h-[80vh] flex justify-center items-center">
          <h1 className="text-6xl text-gray-500">Coming soon!</h1>
        </div>
      </div>
    </>
  );
};

export default About;
