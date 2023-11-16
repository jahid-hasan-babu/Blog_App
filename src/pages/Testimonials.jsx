import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import TestimonialMenu from '../components/TestimonialMenu'
import TestimonialList from '../components/TestimonialList'

const Testimonials = () => {
  return (
    <div>
      <Navbar/>
      <TestimonialMenu/>
      <TestimonialList/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Testimonials
