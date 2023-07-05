import React, { useState, useEffect } from 'react'


import { DisplayProducts } from '../components';
import { useStateContext } from '../context'

const AllProducts = () => {
  const [isLoading, setIsLoading] = useState(false); 
  

  const { getAllProducts, allProducts } = useStateContext();

  const fetchProducts = async () => {
    setIsLoading(true);
    getAllProducts();
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <DisplayProducts
      title="All Products"
      isLoading={isLoading}
      allProducts={allProducts}
    />
  )
}

export default AllProducts