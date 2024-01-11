import React from 'react';

import './CategoryCard.css';

const CategoryCard = ({
    imageSrc,
    title,
}) => {
  return (
    <div className='category--container'>
      <div className='category--card'>
        <div className='category--image'>
            <img src={imageSrc} alt="" className='image'/>
        </div>
        <div className='category--name'>
            <h2>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
