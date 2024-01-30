import React from "react";
import TeamPage from "../../components/Team_page";

export const metadata = {
  title: "Team page",
  description: " description",
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
  return <TeamPage />;
};

export default page;
