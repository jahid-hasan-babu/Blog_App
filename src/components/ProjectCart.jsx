import React, { useEffect, useState } from 'react'

const ProjectCart = () => {
  
  const [jsonData, setJsonData] = useState([]);

      useEffect(()=>{
          (
              async () => {
                  try {
                    const response = await fetch('../../public/database/data.json'); 
                    const data = await response.json();
                    setJsonData(data.project);
                  } catch (error) {
                    console.error('Error fetching JSON data:', error);
                  }
          })()
      },[])
  return (
    <div className=' pt-20 pb-20'>
      <div className='nav__container'>
        <h4 className='uppercase font-semibold text-green-400 text-xl'>All Project</h4>
        <h1 className='mt-5 font-bold text-4xl leading-relaxed'>Better Agency/SEO Solution At <br /> Your Fingertips</h1>
      </div>

      <div className='nav__container mx-auto my-16'>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-2">
        {jsonData.length > 0 ? (
        jsonData.map((item, id) => (
            <div key={id.toString()} className='card-body items-center text-center mt-20 p-10 ml-5 rounded-xl shadow-lg gap-5'>
             <figure  >
                 <img className='p-5' src={item['image']} alt="car!" />
                 
              </figure>
              <h1 className="card-title  text-3xl pt-5 pb-5 uppercase">{item.title}</h1>
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

export default ProjectCart
