import React from 'react'
import TeamPage from '../../components/Team_page'

export const metadata = {
  title: "Team page",
  description: " description",
  keywords: "team, members, collaboration, company",
  ogTitle: "Team Page - Your Website",
  ogDescription: "Explore our amazing team and their contributions.",
  ogImage: "https://example.com/path/to/og-image.jpg",
};


const page = () => {
  return (
    <>
    
  <TeamPage/>
    </>
  )
}

export default page