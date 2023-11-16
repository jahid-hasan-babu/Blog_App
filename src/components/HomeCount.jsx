import React, { useEffect, useState } from 'react'

const HomeCount = () => {
    
    const [jsonData, setJsonData] = useState([]);

    useEffect(()=>{
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setJsonData(data.count);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
    },[])
  return (
    <div className='nav__container mx-auto my-16 '>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4">
            {jsonData.length > 0 ? (
                jsonData.map((data, id) => (
                    <div key={id.toString()} className='card-body items-center text-center p-10 ml-5  rounded-xl shadow-lg'>
                    <div className='gap-x-10'>
                    <figure>
                        <img className='bg-green-200 rounded-xl p-8' src={data['image']} alt="car!" />
                    </figure>
                    <h1 className=" font-bold text-3xl pt-8 pb-5">{data.point}</h1>
                    <p className='text-xl pb-10 font-bold'>{data.description}</p>
                    </div>
                  
                    </div>
            ))
        ) : (
        <p>Loading...</p>
    )}
    </div>
   </div>
  )
}

export default HomeCount
