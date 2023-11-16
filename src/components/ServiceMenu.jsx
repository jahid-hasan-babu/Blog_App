import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";

const ServiceMenu = () => {
  return (
    <div className='bg-gray-200  pt-20 pb-11'>
     <div className="nav__container">
        <h1 className='mt-10 text-4xl font-semibold'>Our Services</h1>
       <div className='text-lg font-semibold flex items-center gap-3 pt-10 pb-10'>
            <NavLink to="/">Home</NavLink>
            <MdArrowForwardIos />
            <p className='text-green-400'>Our Services</p>
       </div>
     </div>
    </div>
  )
}

export default ServiceMenu
