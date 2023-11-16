import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import ProjectMenu from '../components/ProjectMenu'
import ProjectCart from '../components/ProjectCart'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <ProjectMenu/>
      <ProjectCart/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Projects
