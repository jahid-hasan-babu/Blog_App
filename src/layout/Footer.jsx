import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn   } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import "../assets/css/style.css"
const Footer = () => {
  return (
   <div className="bg-neutral">
     <div className='nav__container'>
      <footer className=" footer pt-10 pb-10 text-neutral-content ml-10 ">
        <nav>
            <h1 className='footer__text'>WEB LOGO</h1> 
            <p>Some footer text about the <br />  Agency. Just a little description to <br /> help people understand you better</p>
            <div className="icons__design">
               <div className="icons">
               <FaFacebookF/>
               </div>
               <div className="icons"> <FaTwitter/></div>
               
               <div className="icons">
               <FaLinkedinIn />
               </div>
               <div className="icons">
               <CiInstagram/>
               </div>
            </div>
        </nav> 
            <nav className='text-lg'>
            <h1 className="footer-title">Quick Links</h1> 
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Portfolio</a>
            <a className="link link-hover">About Us </a>
            <a className="link link-hover">Contact Us</a>
          </nav> 
       
      
       <nav className='text-lg'>
            <header className="footer-title">Address</header> 
        <p>Design Agency Head Office. <br />
            Airport Road <br />
            United Arab Emirate</p>
        </nav>
        </footer>
        <div className="text-gray-50 ml-8 text-lg pb-14">
            <p>Copyright Design Agency 2022</p>
        </div>

    </div>
   </div>
  )
}

export default Footer
