import React, { useEffect, useState } from 'react'
import "../assets/css/style.css"

const TeamMember = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(()=>{
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setJsonData(data.team);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
    },[])

  return (
    <div className='nav__container pt-20 pb-20'>
      <div>
        <h4 className='uppercase font-semibold text-green-400 text-xl'>Our Team Member</h4>
        <h1 className='mt-5 font-bold text-4xl leading-relaxed'>Check our awesome team <br /> members</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
           {jsonData.length > 0 ? (
                jsonData.map((item, id) => (
                    <div key={id.toString()} className='pt-10 card-body rounded-sm'>
                    <figure>
                        <img className='w-100' src={item['image']}  alt="card!" />
                       
                    </figure>
                    <figure>
                    <div className=' mt-[-120px]  text-gray-400 card-text team__icon'>
                          <img className='text-center' src={item['img']} alt="card!" />
                        </div>
                    </figure>
                    <h1 className='font-bold sm:text-2xl lg:text-4xl text-center pt-5 pb-10 shadow-lg '>{item.name}</h1>
                    </div>
            ))
            ) : (
            <p>Loading...</p>
         )}
           </div>
    </div>
  )
}

export default TeamMember
