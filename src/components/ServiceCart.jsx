import React, { useEffect, useState } from 'react'

const ServiceCart = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(()=>{
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setJsonData(data.service);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
    },[])
    
  return (
    <div className=' pt-20 pb-20'>
      <div className='nav__container'>
        <h4 className='uppercase font-semibold text-green-400 text-xl'>Our All Services</h4>
        <h1 className='mt-5 font-bold text-4xl leading-relaxed'>We Provide BestWeb design <br /> services</h1>
      </div>

      <div className='nav__container mx-auto my-16'>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {jsonData.length > 0 ? (
        jsonData.map((item, id) => (
            <div key={id.toString()} className='rounded-xl p-5 shadow-lg '>
                 <h1 className="card-title font-bold text-3xl pt-5 pb-5">{item.title}</h1>
                <p className='text-xl pb-10 text-gray-400'>{item.desc}</p>
             <figure  >
                <div className="flex flex-wrap">
                <img  src={item['image1']} alt="car!" />
                <img src={item['image2']} alt="car!" />
                </div>
               <div className="flex flex-wrap">
                 <img  src={item['image3']} alt="car!" />
                 <img  src={item['image4']} alt="car!" />
               </div>
              </figure>
           
            
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

export default ServiceCart
