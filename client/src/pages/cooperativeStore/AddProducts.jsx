import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../../context";
import { money } from "../../assets";
import { CustomButton, FormField, Loader } from "../../components";
import { checkIfImage } from "../../utils";

const AddProducts = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { addProduct } =
    useStateContext();
  const [form, setForm] = useState({
    productId: "",
    productName: "",
    price: 0,
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await addProduct({
      ...form,
      price: ethers.utils.parseUnits(form.price, 18),
    });
    setIsLoading(false);
    navigate("/store-dashboard/products");
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Add a Product
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
        <FormField
            labelName="Give an product ID *"
            placeholder="product id"
            inputType="text"
            value={form.productId}
            handleChange={(e) => handleFormFieldChange("productId", e)}
          />
          <FormField 
            labelName="Product Name *"
            placeholder="Class 12th Books"
            inputType="text"
            value={form.productName}
            handleChange={(e) => handleFormFieldChange('productName', e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Price *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.price}
            handleChange={(e) => handleFormFieldChange("price", e)}
          />
        </div>

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Add a Product"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
