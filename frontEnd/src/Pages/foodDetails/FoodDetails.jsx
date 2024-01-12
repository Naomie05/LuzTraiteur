import React from 'react'
import { useParams, Link } from 'react-router-dom';
import productsData from '../../productsData/products';
import { IoIosArrowBack } from "react-icons/io";

import './FoodDetails.css';

const FoodDetails = () => {

    const { foodName } = useParams();

    const thisProduct = productsData.find(prod => prod.title === foodName);

  return (
    <div className='food--details--container'>
        <div className='link'>
           <Link to={`/menu/${thisProduct.category.toLowerCase()}`}>
                <div className='link--back'>
                    <IoIosArrowBack/><h1>{thisProduct.category}</h1>
                </div>
           </Link> 
        </div>
        <div className='food--info--container'>
            <div className='food--details'>
                <div className='food--info'>
                    <h1>{foodName}</h1>
                    <h2>${thisProduct.price}</h2>
                    <p>{thisProduct.desc}</p>
                </div>
                <div className='buttons'>
                    <Link>
                        <button className='btn btn-secondarys'><h3>- 1 + </h3></button>
                    </Link>
                    <Link>
                        <button className='btn btn-primarys'><h3>AJOUTER AU PANIER | ${thisProduct.price}</h3></button>
                    </Link>
                </div>
            </div>
            <div className='food--image'>
                <img src={thisProduct.url} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FoodDetails
