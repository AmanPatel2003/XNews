import React from 'react'

export const metadata = {
  title: "Fact Checker page",
  description: "Fact Checker page description",
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
   <>
     <div className="">
       <div className="mt-[75px] h-[80vh] flex justify-center items-center">
         <h1 className="text-6xl text-gray-500">Coming soon!</h1>
       </div>
     </div>
   </>
 );
}

export default page