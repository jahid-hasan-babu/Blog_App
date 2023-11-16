import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";

const TeamBanner = () => {
  return (
    <div className='bg-gray-200  pt-20 pb-11'>
     <div className="nav__container">
        <h1 className='mt-10 text-4xl font-semibold'>Team</h1>
       <div className='text-lg font-semibold flex items-center gap-3 pt-10 pb-10'>
            <NavLink to="/">Home</NavLink>
            <MdArrowForwardIos />
            <p className='text-green-400'>Team</p>
       </div>
     </div>
    </div>
  )
}

export default TeamBanner
