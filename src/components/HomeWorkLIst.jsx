import React, { useEffect, useState } from 'react'
import "../assets/css/style.css"
import { FaArrowRight } from "react-icons/fa6";

const HomeWorkLIst = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(()=>{
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setJsonData(data.work);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
    },[])


  return (
   <div>
    <div className="nav__container pt-10">
        <h3 className='text-green-600 uppercase text-xl font-bold'>Work List</h3>
        <h1 className='pt-5 lg:text-5xl sm:text-3xl font-bold w-69'>We provide the Perfect Solution <br /> to your business growth</h1>
    </div>
     <div className='nav__container mx-auto my-16'>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 ">
        {jsonData.length > 0 ? (
        jsonData.map((data, id) => (
            <div key={id.toString()} className='p-10 rounded-xl hover:shadow-lg work__card'>
          <figure  >
                <img className='bg-green-200 rounded-xl p-8 ' src={data['image']} alt="car!" />
              </figure>
            <h1 className="card-title font-bold text-3xl pt-5 pb-5">{data.headline}</h1>
            <p className='text-xl pb-10'>{data.description}</p>
            <button className='p-5 rounded-xl font-bold flex items-center gap-5' >{data.btn} <FaArrowRight /></button>
            </div>
        ))
        ) : (
        <p>Loading...</p>
        )}
        </div>
  </div>
   </div>
  )
}

export default HomeWorkLIst
