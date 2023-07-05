import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import avatar from "../../assets/avatars/avatar_21.jpg";

import { useStateContext } from "../../context";

import { CustomButton, FormField, Loader } from "../../components";

const CreateDonorAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  //const [donorDetails, setBeneficiaryDetails] = useState(null);
  const {
    createDonorAccount,
    getDonorDetails,
    donorDetails,
    getDonorTransactionHistory,
    donorTransactions,
  } = useStateContext();

  const [form, setForm] = useState({
    name: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await createDonorAccount({ ...form });
    setIsLoading(false);
    navigate("/donor-dashboard/projects");
  };

  useEffect(() => {
    getDonorDetails();
    getDonorTransactionHistory();
  }, []);

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Donor Profile
        </h1>
      </div>

      {donorDetails ? (
        <div>
          <div className="beneficiary-container m-5">
            <div className="card mb-3 bg-[#1c1c24] border-0">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src={avatar}
                    className="rounded-full h-max w-max mx-auto"
                    alt="..."
                  />
                </div>
                <div className="w-2/3">
                  <div className="card-body text-[#808191] m-1 ">
                    <h4 className="card-title m-1 ">
                      <b className="text-[#1dc071] mr-1">Name :</b>
                      {donorDetails.name.toString()}
                    </h4>
                    <p className="card-text2 m-1">
                      <b className="text-[#1dc071]">Address :</b>{" "}
                      {donorDetails.Address.toString()}
                    </p>
                    <h3 className="card-text3 m-1">
                      <b className="text-[#1dc071]">Balance :</b>{" "}
                      {donorDetails.balance.toString()}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-5 justify-center">
                <h4 className="font-epilogue font-semibold text-[18px] text-[#1dc071] uppercase">
                  Transaction History
                </h4>

                <div className="mt-1 flex flex-row gap-4">
                  {donorTransactions.length > 0 ? (
                    donorTransactions.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="flex justify-between items-center gap-4"
                      >
                        <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                          {index + 1}. {ethers.utils.formatUnits(item)} Eth
                        </p>
                        {/* <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p> */}
                      </div>
                    ))
                  ) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                      No donorTransactions yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full mt-[65px] flex flex-col gap-[30px]"
        >
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Your Name *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
          </div>

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Create Profile"
              styles="bg-[#1dc071]"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateDonorAccount;
