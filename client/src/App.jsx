import React from "react";
import { Route, Routes } from "react-router-dom";

import { CampaignDetails } from "./pages";
import CreateCharityProject from './pages/beneficiary/CreateCharityProject';
import AllProjects from './pages/AllProjects';
import AllProducts from "./pages/AllProducts";
import ProjectsToApprove from './pages/charityOrganization/ProjectsToApprove';

import BenDashLayout from './pages/beneficiary/BenDashLayout';
import DonorDashLayout from './pages/donor/DonorDashLayout';
import StoreDashLayout from './pages/cooperativeStore/StoreDashLayout';
import OrgDashLayout from './pages/charityOrganization/OrgDashLayout';

import BenProfile from "./pages/beneficiary/BenProfile";
import DonorProfile from './pages/donor/DonorProfile';
import OrgProfile from './pages/charityOrganization/OrgProfile';
import StoreProfile from './pages/cooperativeStore/StoreProfile';
import AddProducts from "./pages/cooperativeStore/AddProducts";

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import LandingPage from './LandingPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
      
      <Route path="/beneficiary-dashboard/*" element={<BenDashLayout />}>
        <Route path="projects" element={<AllProjects />} />
        <Route path="create-charity-project" element={<CreateCharityProject />} />
        <Route path="charityproject-details/:id" element={<CampaignDetails />} />
        {/* <Route path="product-details/:id" element={<ProductDetails />} /> */}
        <Route path="products" element={<AllProducts />} />
        <Route path="profile" element={<BenProfile />} />
      </Route>

      <Route path="/donor-dashboard/*" element={<DonorDashLayout />}>
        <Route path="projects" element={<AllProjects />} />
        <Route path="charityproject-details/:id" element={<CampaignDetails />} />
        {/* <Route path="product-details/:id" element={<ProductDetails />} /> */}
        <Route path="products" element={<AllProducts />} />
        <Route path="profile" element={<DonorProfile />} />
      </Route>

      <Route path="/store-dashboard/*" element={<StoreDashLayout />}>
        <Route path="projects" element={<AllProjects />} />
        <Route path="charityproject-details/:id" element={<CampaignDetails />} />
        <Route path="add-product" element={<AddProducts />} />
        {/* <Route path="product-details/:id" element={<ProductDetails />} /> */}
        <Route path="products" element={<AllProducts />} />
        <Route path="profile" element={<StoreProfile />} />
      </Route>

      <Route path="/charityorg-dashboard/*" element={<OrgDashLayout />}>
        <Route path="projects" element={<AllProjects />} />
        <Route path="charityproject-details/:id" element={<CampaignDetails />} />
        {/* <Route path="product-details/:id" element={<ProductDetails />} /> */}
        <Route path="products" element={<AllProducts />} />
        <Route path="projects-to-approve" element={<ProjectsToApprove />} />
        <Route path="profile" element={<OrgProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
