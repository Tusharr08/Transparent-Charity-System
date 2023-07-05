import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ProductCard from './ProductCard';
import { loader } from '../assets';

const DisplayProducts = ({ title, isLoading, allProducts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dashboardPath = location.pathname.split('/')[1];

  
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({allProducts.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && allProducts.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not added any products yet
          </p>
        )}

        {!isLoading && allProducts.length > 0 && allProducts.map((product, id) => <ProductCard 
          key={id}
          {...product}
          
        />)}
      </div>
    </div>
  )
}

export default DisplayProducts