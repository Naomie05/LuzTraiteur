import React from 'react';
import Category from '../../components/categoryCard/CategoryCard';
import categoryData from '../../components/categoryData/CategoryData';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div >
      {/*Category page landing image*/}
      <div >
        <img className='h-lvh w-screen object-cover' src="https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFmcmljYW4lMjBkaXNofGVufDB8MHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className='my-5 mx-5 sm:mx-10 md:mx-10 text-center justify-center items-center'>
    
        {/*Temporary title, will be replaced with a search bar*/}
        <div className='text-center leading-normal flex-col my-5 mx-5'>
          <h1 className='text-3xl leading-8 text-black font-Akshar md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pretty sm:mb-5'>NOTRE MENU</h1>
        </div> 

        {/*Category cards*/}
        <div className='gap-4 p-2 flex flex-col items-center text-center justify-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
            {categoryData.map((item) =>(
              <Link to={`${item.name.toLowerCase()}`}>
                <Category key = {item.id} imageSrc={item.image} title={item.name}/>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
