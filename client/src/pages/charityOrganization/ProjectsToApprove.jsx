import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../../components';
import { useStateContext } from '../../context'

const AllProjects = () => {
  const [isLoading, setIsLoading] = useState(false); 
  //const [charityProjects, setCharityProjects] = useState([]);

  const { address, contract, allProjects, getCharityProjects } = useStateContext();

  
  useEffect(() => {
    if(contract) getCharityProjects();
  }, [address, contract]);
  //console.log('projects to approve',allProjects);
  return (
    <DisplayCampaigns 
      title="Unapproved Charity Projects"
      isLoading={isLoading}
      charityProjects={allProjects}
    />
  )
}

export default AllProjects