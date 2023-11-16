import React, { useEffect, useState } from 'react'

const HomeFeatured = () => {

    const [jsonData, setJsonData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setJsonData(data.featured_cart);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
    },[])

      useEffect(() => {
        (
            async () => {
                try {
                  const response = await fetch('../../public/database/data.json'); 
                  const data = await response.json();
                  setData(data.featured);
                } catch (error) {
                  console.error('Error fetching JSON data:', error);
                }
        })()
      }, []);

  return (
    <div className='bg-green-100'>
      <div className="nav__container pt-12 pb-12 ">
        <h3 className='uppercase  text-green-500 sm:text-xl lg:text-2xl'>Featured Project</h3>
        <h1 className='font-bold mt-5 mb-10 lg:text-4xl  sm:text-xl'>We provide the Perfect Solution <br /> to your business growth</h1>
      </div>

      <div className="nav__container">
        <div className="grid grid-cols-1 mt-2 pb-16 md:grid-cols-2 lg:grid-cols-2">
        {jsonData.length > 0 ? (
                jsonData.map((data, id) => (
                    <div key={id.toString()}>
                    <figure className='pt-8'>
                        <img src={data['image']} alt="car!" />
                    </figure>
                    <p className='pt-5'>{data.date}</p>
                    <h1 className='font-bold text-2xl pt-5'>{data.identity}</h1>
                    </div>
            ))
            ) : (
            <p>Loading...</p>
         )}

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
           {data.length > 0 ? (
                data.map((item, id) => (
                    <div key={id.toString()} className='card-body'>
                    <figure>
                        <img src={item['image']} alt="car!" />
                    </figure>
                    <p className='pt-2'>{item.date}</p>
                    <h1 className='font-bold text-xl'>{item.identity}</h1>
                    </div>
            ))
            ) : (
            <p>Loading...</p>
         )}
           </div>

        </div>
      </div>



    </div>
  )
}

export default HomeFeatured
