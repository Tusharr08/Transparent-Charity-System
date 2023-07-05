import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import thirdweb from "../assets/thirdweb.png";
import { tagType, tick } from "../assets";
import CustomButton from "./CustomButton";

import { useStateContext } from "../context";

const FundCard = ({
  beneficiary,
  name,
  title,
  desc,
  image,
  goalAmount,
  currentAmount,
  isActive,
  projectId,
  handleClick,
}) => {
  const { approveBeneficiaryProject } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const navigate = useNavigate();

  const approveProject = async () => {
    setIsLoading(true);
    try {
      await approveBeneficiaryProject(projectId);
      setIsApproved(true);
      navigate("/charityorg-dashboard/projects-to-approve");
    } catch (error) {
      console.log("Approval failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  //console.log(isApproved,isActive);
  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
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
            Project ID : {projectId.toString()}
          </p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {title.toString()}
          </h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
            {desc.toString()}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              {currentAmount.toString()}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              Raised of {goalAmount.toString()}
            </p>
          </div>
          {/* <div className="flex flex-col">
              <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
              <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
            </div> */}
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={thirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by <span className="text-[#b2b3bd]">{beneficiary.toString()}</span>
          </p>
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {name.toString()}
          </h3>
        </div>

        {isActive && ( // Show "Approved" text instead of button when approved
          <div className="flex justify-center items-center mt-[40px]">
            <p className="font-epilogue font-semibold text-[16px] text-white mr-2">
              Approved
            </p>
            <img src={tick} alt='tick' className='h-7 w-7'/>
          </div>
        )}

        {!isApproved && !isActive && (
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="button"
              title="Approve"
              styles="bg-[#1dc071]"
              handleClick={approveProject}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FundCard;
