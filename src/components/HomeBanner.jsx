import React from 'react'
import banImg from "../assets/images/banner.png"
import googleLogo from "../assets/images/logos_google.png"
import Trello from "../assets/images/Trello-logo-blue 1.png"
import mondayLogo from "../assets/images/logos_monday.png"
import Notion from "../assets/images/Notion.png"
import Slack from "../assets/images/Slack.png"
import '../assets/css/style.css'



const HomeBanner = () => {
  return (
   <div className='bg-green-200 pt-10 pb-10'>
     <div className="nav__container ">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-lg-cols-1 gap-6">
            <div className='banner__text mt-20'>
            <h1 className='text-6xl font-bold'>Increase Your Customers  Loyalty <br /> and Satisfaction</h1> 
            <p className='mt-10 mb-5 text-2xl font-bold'>We help businesses like yours earn more customers, standout from competitors,  make more money</p>

            <button className='btn btn-success text-transform: capitalize text-cyan-50 text-lg'>Get Started</button>
            </div>
            <div className="banner__img">
                <img src={banImg} alt="banImg" />
            </div>
        </div>
    </div>
   <div className="company__logo mt-8 bg-slate-50">
   <div className="pt-10 pb-10 ml-20 nav__container banner__logo inline-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-lg-cols-2 gap-20">
           <img src={googleLogo} alt="googleLogo" />
            <img src={Trello} alt="Trello" />
            <img src={mondayLogo} alt="mondayLogo" />
            <img src={Notion} alt="Notion" />
            <img src={Slack} alt="Slack" />
        </div>
   </div>
   </div>
  )
}

export default HomeBanner
