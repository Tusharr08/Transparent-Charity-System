import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const AllProjects = () => {
  const [isLoading, setIsLoading] = useState(false); 
  

  const { address, contract, getApprovedProjects, approvedProjects } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    getApprovedProjects();
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns 
      title="Charity Projects"
      isLoading={isLoading}
      charityProjects={approvedProjects}
    />
  )
}

export default AllProjects