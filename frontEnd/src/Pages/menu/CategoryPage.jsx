import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import productsData from '../../productsData/products';

const CategoryPage = () => {
    const { category } = useParams();
    
    const categoryProducts = productsData.filter(product => product.category === category);
  return (
    <div>
      <h1>{category.toUpperCase()} Category</h1>
      {categoryProducts.map(product => (
        <ProductCard
          key={product.id}
          imgSrc={product.imgSrc}
          imgAlt={product.imgAlt}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  )
}

export default CategoryPage
