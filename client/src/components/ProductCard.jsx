import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import thirdweb from "../assets/thirdweb.png";
import { tagType, tick } from "../assets";
import CustomButton from "./CustomButton";
import Loader from "./Loader";

import { useStateContext } from "../context";
import imagee from '../assets/products/product_0.jpg'

const ProductCard = ({ productId, productName, price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  // const image = `${imagee}_${productId}.jpg`;
  const navigate= useNavigate();
  const { spendTokens } = useStateContext();

  const location = useLocation();
  const dashboardPath = location.pathname.split("/")[1];
  console.log(dashboardPath);
  //console.log(isApproved,isActive);

  const handleSpendTokens = async () => {
    setIsLoading(true);
    await spendTokens(productId, price);
    setSuccess(true);
    navigate("/beneficiary-dashboard/products");
    setIsLoading(false);
  };

  useEffect(() => {
    // Dynamically import image
    import(`../assets/products/product_${productId}.jpg`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (!imageSrc) {
    return "product";
  }

  return (
    <>
      {isLoading && <Loader />}
      <div
        className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] "
        // onClick={handleClick}
      >
        <img
           src={imageSrc}
          //src='../assets/products/product_0.jpg'
          alt="product"
          // alt="React Image"
          className="w-full h-[158px] object-cover rounded-[15px]"
        />

        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center mb-[18px]">
            <img
              src={tagType}
              alt="tag"
              className="w-[17px] h-[17px] object-contain"
            />
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
              Product ID : {productId.toString()}
            </p>
          </div>

          <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-row gap-2">
              <h4 className="font-epilogue font-semibold text-[16px] text-[#b2b3bd] leading-[22px]">
                Price :
              </h4>
              <p className="mt-[3px] font-epilogue font-normal text-[14px] leading-[18px] text-[#808191] sm:max-w-[120px] ">
                {ethers.utils.formatUnits(price)} Eth
              </p>
            </div>
          </div>

          <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
              <img
                src={thirdweb}
                alt="user"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            <span className="text-[#b2b3bd]">{productName.toString()}</span>
          </p> */}
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] ">
              {productName.toString()}
            </h3>
          </div>

          {dashboardPath == "beneficiary-dashboard" && !success && (
            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton
                btnType="button"
                title="Buy"
                styles="bg-[#1dc071] "
                handleClick={handleSpendTokens}
              />
            </div>
          )}

          {success && ( // Show "Approved" text instead of button when approved
            <div className="flex justify-center items-center mt-[40px]">
              <p className="font-epilogue font-semibold text-[16px] text-white mr-2">
                Thank You for Buying
              </p>
              <img src={tick} alt="tick" className="h-7 w-7" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
