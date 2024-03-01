import React from 'react';
import  { Link } from 'react-router-dom';

const ProductCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  price, 
}) => {
  return (
    <div className='shadow-xl bg-white rounded-2xl items-center flex flex-col h-lvh w-80 overflow-hidden'>
        <div className=''>
          <img className='w-screen h-52 object-cover border-b-2 border-b-black' src={imgSrc} alt={imgAlt} />
        </div>
        {/*Card information*/}
        <div className='flex flex-col text-justify p-2 my-5 w-72'>
            <h3 className='text-3xl whitespace-nowrap text-ellipsis overflow-hidden'>{title}</h3>
            <span>${price}</span>
          <div className='grid grid-cols-2 mx-0 gap-2 mb-2 mt-2' >
            <Link>
              <button className='btn btn-primary'><h3>Ajouter</h3></button>
            </Link>
            <Link to={title}>
              <button className='btn btn-secondary'><h3>Details</h3></button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ProductCard

