import React from 'react';
import ProductCard from '../productCard/ProductCard';
import specialsData from './SpecialData';
import { Link } from 'react-router-dom';

const Special = () => { 
  return (
    <div className='my-5 text-center justify-center items-center'>
        <div className='text-center leading-normal flex-col my-5 mx-5'>
                <h1 className='text-3xl leading-8 text-black font-Akshar md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pretty sm:mb-5'>COMMANDEZ VOS PLATS PREFERE AUJOURD'HUI!</h1>
                <p className='text-black text-lg sm:text-xl'>Notre selection de plats typiquement Congolais!</p>
        </div>
        <div className='gap-4 p-2 flex flex-col items-center text-center sm:grid sm:grid-cols-2 sm:place-content-center lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4'>
            {specialsData.map((item) =>(
                <ProductCard 
                key={item.id}
                imgSrc={item.url}
                title={item.title}
                price={item.price}/> 
            ))}
        </div>
        <div className='text-center my-5 sm:my-7'>
            <Link spy={true} smooth={true} offset={-70} duration={500} to= '/Menu' className='btn btn-primary text-semibold'>
                <h3>VOIR LE MENU</h3> 
            </Link>
        </div>
  </div>
  )
}

export default Special
