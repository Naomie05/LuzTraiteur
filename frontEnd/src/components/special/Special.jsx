import React from 'react';
//import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
//import HomeSectionCarousel from '../homeSectionCarousel/HomeSectionCarousel';
import ProductCard from '../productCard/ProductCard';
import specialsData from './SpecialData';
import { Link } from 'react-router-dom';
import './Special.css';

const Special = () => {
  return (
    <div className='special'>
    <div className='special--container'>
        <div className='special--title'>
            <h1>COMMANDEZ VOTRE PLAT PREFERE AUJOURD'HUI!</h1>
            <p>Notre selection de plats typiquement Congolais.</p>
        </div>
    </div>
     <div className='cards--container'>
        {specialsData.map((item) =>(
            <ProductCard 
            key={item.id}
            imgSrc={item.url}
            title={item.title}
            price={item.price}/> 
        ))}
    </div>
    <br />
    <div className='btn-container'>
        <Link spy={true} smooth={true} offset={-70} duration={500} to= '/Menu' className='btn btn-primary'>
            <h3>VOIR LE MENU</h3>
        </Link>
    </div>
  </div>
  )
}

export default Special
