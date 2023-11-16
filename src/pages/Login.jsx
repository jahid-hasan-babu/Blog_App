import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import LoginFrom from '../components/LoginFrom'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <LoginFrom/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Login
