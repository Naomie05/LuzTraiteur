import React from 'react';

const CategoryCard = ({
    imageSrc, 
    title,
}) => {
  return (
    <div className='shadow-xl bg-white rounded-2xl items-center flex flex-col h-lvh w-80 overflow-hidden'>
      <div className=''>
        <div className='border-b-black'>
            <img src={imageSrc} alt="" className='w-screen h-52 object-cover rounded-t-2xl border-b-2 border-b-black'/>
        </div>
        <div className='my-10 text-2xl font-semibold w-72 '>
            <h2 className='whitespace-nowrap text-ellipsis overflow-hidden text-center'>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
