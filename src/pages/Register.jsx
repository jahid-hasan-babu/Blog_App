import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import RegistrationForm from '../components/RegistrationFrom'

const Register = () => {
  return (
    <div>
      <Navbar/>
      <RegistrationForm/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Register
