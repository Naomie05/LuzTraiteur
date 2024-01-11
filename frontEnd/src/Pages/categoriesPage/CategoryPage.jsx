import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import productsData from '../../productsData/products';
import { useParams, NavLink } from 'react-router-dom';

import './CategoryPage.css';

const CategoryPage = () => {

    const { slug } = useParams();
    
    const categoryProducts = productsData.filter(product => product.category === slug);

  return (
    <div className='category--page--container'>
        <div className='category--page--title'>
            <div className='direction--links'>
                <h3>
                    <NavLink to='/menu' className='Link'>Menu</NavLink>/{slug}
                </h3>
            </div>
            <div className='category--title'>
                <h1><span>-----------------------</span> {slug} <span>-----------------------</span></h1>
            </div>
            <div className='category--text'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut, ex necessitatibus tempore inventore, at veritatis quod ea laudantium expedita maiores blanditiis aspernatur? Expedita magni quos incidunt dignissimos animi?
                </p>
            </div>
        </div>
        <div className='product--cards'>
            {categoryProducts.map((item) => (
                <ProductCard imgSrc={item.url} price={item.price} title={item.title}/> 
            ))}
        </div>
    </div>
  )
}

export default CategoryPage
