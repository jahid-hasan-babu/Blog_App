import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import ServiceMenu from '../components/ServiceMenu'
import ServiceCart from '../components/ServiceCart'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <ServiceMenu/>
      <ServiceCart/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Services
