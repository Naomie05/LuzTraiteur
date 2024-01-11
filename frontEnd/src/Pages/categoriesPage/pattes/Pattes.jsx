import React from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import productData from '../../../productsData/products';
import { useParams } from 'react-router-dom';

const Pattes = () => {

  const { category } = useParams();
    
  const categoryProducts = productData.filter(product => product.category === category);

  return (
    <div>
      <h1>Pattes</h1>
    </div>
  )
}

export default Pattes
