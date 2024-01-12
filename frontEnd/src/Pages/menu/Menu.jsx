import React from 'react';
import Category from '../../components/categoryCard/CategoryCard';
import categoryData from '../../components/categoryData/CategoryData';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu--image'>
        <img src="https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFmcmljYW4lMjBkaXNofGVufDB8MHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className='menu--container'>
        <div className='menu--title'>
          <h1>NOTRE MENU</h1>
        </div>
      </div>
      <div className='cards--container'>
          {categoryData.map((item) =>(
            <Link to={`${item.name.toLowerCase()}`}>
              <Category key = {item.id} imageSrc={item.image} title={item.name}/>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Menu
