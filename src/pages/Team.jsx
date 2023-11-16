import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'
import TeamBanner from '../components/TeamBanner'
import TeamMember from '../components/TeamMember'

const Team = () => {
  return (
    <div>
      <Navbar/>
     <TeamBanner/>
     <TeamMember/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Team
