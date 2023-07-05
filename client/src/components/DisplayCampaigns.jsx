import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, charityProjects }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dashboardPath = location.pathname.split('/')[1];

  const handleNavigate = (projectId, charityProject, dashboardPath) => {
    navigate(`${dashboardPath}/charityproject-details/${projectId}`, {
      state: { projectId, charityProject }
    });
  };
  
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({charityProjects.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && charityProjects.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any charity projects yet
          </p>
        )}

        {!isLoading && charityProjects.length > 0 && charityProjects.map((charityProject, id) => <FundCard 
          key={id}
          {...charityProject}
          projectId={id}
          handleClick={() => handleNavigate(id, charityProject, `/${dashboardPath}`)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns