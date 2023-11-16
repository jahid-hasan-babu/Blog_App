import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import HomeBanner from '../components/HomeBanner'
import HomeWorkLIst from '../components/HomeWorkLIst'
import HomeCount from '../components/HomeCount'
import HomeFeatured from '../components/HomeFeatured'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <HomeWorkLIst/>
      <HomeCount/>
      <HomeFeatured/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Home
