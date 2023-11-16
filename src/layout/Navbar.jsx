import React from 'react'
import navImg from '../assets/images/navImg.png'
import "../assets/css/style.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   
     <div className='sticky  top-0 z-100 shadow-lg bg-green-200'>
       <div className='nav__container bg-green-200 z-100'>
        <div className=" navbar bg-green-200">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className='text-lg'><NavLink to="/">Home</NavLink></li>
            <li className='text-lg'><NavLink to="/team">Team</NavLink></li>
            <li className='text-lg'><NavLink to="/service">Service</NavLink></li>
            <li className='text-lg'><NavLink to="/project">Projects</NavLink></li>
            <li className='text-lg'><NavLink to="/testimonials">Testimonials</NavLink></li>

          <div className='mt-2'>
            <button >
            <NavLink to="/login" className="btn btn-outline btn-success text-transform: capitalize" >Login</NavLink>
            </button>
            <button>
            <NavLink to="/register" className="btn ml-4 btn-success text-transform: capitalize  text-cyan-50">Register</NavLink>
            </button>
            </div>
            </ul>
          </div>
          <img src={navImg} alt="navImg"/>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
            <li className='text-lg'><NavLink to="/">Home</NavLink></li>
            <li className='text-lg'><NavLink to="/team">Team</NavLink></li>
            <li className='text-lg'><NavLink to="/service">Service</NavLink></li>
            <li className='text-lg'><NavLink to="/project">Projects</NavLink></li>
            <li className='text-lg'><NavLink to="/testimonials">Testimonials</NavLink></li>
          <div>
          <button>
          <NavLink to="/login" className=" btn ml-2 btn-outline btn-success 	text-transform: capitalize">Login</NavLink>
          </button>
          <button>
          <NavLink to="/register" className="btn ml-4 btn-success text-transform: capitalize  text-cyan-50">Register</NavLink>
          </button>
          </div>
          </ul>

          </div>

        </div>
      </div>
     </div>
  )
}

export default Navbar
