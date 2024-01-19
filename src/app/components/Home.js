import React from 'react'
import Banner from '../sections/Banner'
import Others from "../sections/Others"
import Products from '../sections/Products'
import Solutions from '../sections/Solutions'

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Others />
      <Solutions />
    </div>
  );
}

export default Home