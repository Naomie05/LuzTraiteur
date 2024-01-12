import React from 'react';
import  { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  price,
  category,
}) => {
  return (
    <div className='card--containers'>
      <div className='card'>
        <div className='card--image'>
          <img className='image' src={imgSrc} alt={imgAlt} />
        </div>
        <div className='card--info'>
          <h3 className='card--title'>{title}</h3>
          <span>${price}</span>
        </div>
        <div className='buttons'>
          <Link>
            <button className='btn btn-primary'><h3>Ajouter</h3></button>
          </Link>
          <Link to={title}>
            <button className='btn btn-secondary'><h3>Voir Details</h3></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

