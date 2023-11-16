import React, { useEffect, useState } from 'react'

const TestimonialList = () => {

    const [jsonData, setJsonData] = useState([]);

      useEffect(()=>{
          (
              async () => {
                  try {
                    const response = await fetch('../../public/database/data.json'); 
                    const data = await response.json();
                    setJsonData(data.testimonial);
                  } catch (error) {
                    console.error('Error fetching JSON data:', error);
                  }
          })()
      },[])
  return (
    <div className=' pt-20 pb-20'>
      <div className='nav__container'>
        <h4 className='uppercase font-semibold text-green-400 text-xl'>Testimonial List</h4>
        <h1 className='mt-5 font-bold text-4xl leading-relaxed'>Better Agency/SEO Solution At <br /> Your Fingertips</h1>
      </div>

      <div className='nav__container mx-auto my-16 '>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3">
            {jsonData.length > 0 ? (
                jsonData.map((data, id) => (
                    <div key={id.toString()} className='card-body items-center text-center p-10 w-[90%] mt-10 rounded-xl shadow-lg'>
                    <figure>
                        <img className=' rounded-xl' src={data['image']} alt="car!" />
                    </figure>
                   
                    <p className='pb-10 mt-10 text-gray-400'>{data.desc}</p>
                    <h1 className=" font-bold sm:text-2xl md:text-4xl ">{data.title}</h1>
                    <p className='text-lg font-semibold'>{data.position}</p>
                  
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

export default TestimonialList
