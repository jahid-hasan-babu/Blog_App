import React from 'react'
import "../assets/css/style.css"

const Subscribe = () => {
  return (
   <div className="nav__container">
     <div className=" pt-20 pb-20 text-center">
        <h4 className="text-green-600 text-2xl">
        SUBSCRIBE
        </h4>
        <h1 className="text-4xl font-bold	mt-5">
        Subscribe to get the latest <br /> news about us
        </h1>
        <div className="text-slate-400 text-xl mt-5">
            <p>Please drop your email below to get daily update about what we do</p>
        </div>
        <div className="join mt-20 subscribe__input">
            <input className="input input-bordered join-item pr-60" placeholder="Enter Your Email Address"/>
            <button className="btn btn-error join-item ">Subscribe</button>
        </div>
    </div>
   </div>
  )
}

export default Subscribe
