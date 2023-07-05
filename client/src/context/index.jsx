import React, { useContext, createContext, useState } from "react";
import { ethers } from "ethers";
import { abi } from "../constants";
import { useMetamask, useAddress } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const contractAddress = "0x2988aEe923608a79B6B73815f8aFE80De1Aeff06";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  //const address = provider.getSigner().getAddress();
  const address = useAddress();
  const connect = useMetamask();

  const [charityOrg, setCharityOrg] = useState(null);
  const [cooperativeStore, setCooperativeStore] = useState(null);
  const [beneficiaryDetails, setBeneficiaryDetails] = useState(null);
  const [donorDetails, setDonorDetails] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [approvedProjects, setApprovedProjects] = useState([]);
  const [donators, setDonators] = useState([]);
  const [donorTransactions, setDonorTransactions] = useState([]);
  const [beneficiaryTransactions, setBeneficiaryTransactions] = useState([]);

  const createCharityProject = async (form) => {
    try {
      const data = await contract.createCharityProject(
        form.title,
        form.description,
        form.image,
        form.goalAmount
      );
      await data.wait();
      console.log("createCharityProject success", data);
    } catch (error) {
      console.log("createCharityProject failure", error);
    }
  };

  const addProduct = async (form) => {
    try {
      const data = await contract.addProduct(
        form.productId,
        form.productName,
        form.price
      );
      await data.wait();
      console.log("addProduct success", data);
    } catch (error) {
      console.log("addProduct failure", error);
    }
  }

  const createBeneficiaryAccount = async (form) => {
    console.log(form);
    try {
      const { name, rescueInformation } = form;
      const transaction = await contract.createBeneficiaryAccount(
        name,
        rescueInformation
      );
      await transaction.wait();

      console.log("createBeneficiaryAccount success");
    } catch (error) {
      console.log("createBeneficiaryAccount failure", error);
    }
  };

  const createDonorAccount = async (form) => {
    console.log(form);
    try {
      const { name } = form;
      const transaction = await contract.createDonorAccount(
        name
      );
      await transaction.wait();

      console.log("createDonorAccount success");
    } catch (error) {
      console.log("createDonorAccount failure", error);
    }
  };

  const createOrganization = async (form) => {
    console.log(form);
    try {
      const { OrgName, Desc } = form;
      const transaction = await contract.createOrganization(OrgName, Desc);
      await transaction.wait();

      console.log("createOrganization success");
    } catch (error) {
      console.log("createOrganization failure", error);
    }
  };

  const createCooperativeStore = async (form) => {
    try {
      const { storeName } = form;
      const transaction = await contract.createCooperativeStore(storeName);
      await transaction.wait();
      console.log("createCooperativeStore success");
    } catch (error) {
      console.log('createCooperativeStore failure', error);
    }
  }

  const approveBeneficiaryProject = async (projectId) => {
    try {
      const transaction = await contract.approveBeneficiaryProject(
        projectId,
        true
      );
      await transaction.wait();
      console.log(`${projectId}th project approved!`);
    } catch (error) {
      console.log("approveBeneficiaryProject failure", error);
    }
  };

  const donateToProject = async (projectId, amount) => {
    try {
      const data = await contract.donateToProject(projectId, { value: ethers.utils.parseEther(amount) });
      console.log('donateToProject success', data);
      return data;
    } catch (error) {
      console.log("donateToProject failure", error);
    }

  }

  const spendTokens = async (productId, amount) => {
    try {
      const transaction = await contract.spendTokens(productId, { value: amount });
      await transaction.wait();
      console.log(`${productId}th product is bought!`);
      return transaction;
    } catch (error) {
      console.log("spendTokens failure", error);
    }
  }

  const getDonorTransactionHistory = async () => {
    try {
      const data = await contract.getDonorTransactionHistory();
      console.log('getDonorTransactionHistory success', data);
      setDonorTransactions(data);

    } catch (error) {
      console.log("getDonorTransactionHistory failure", error);
    }
  }

  const getBeneficiaryTransactionHistory = async () => {
    try {
      const data = await contract.getBeneficiaryTransactionHistory();
      console.log('getBeneficiaryTransactionHistory success', data);
      setBeneficiaryTransactions(data);

    } catch (error) {
      console.log("getBeneficiaryTransactionHistory failure", error);
    }
  }

  const getOrganization = async () => {
    try {
      const accountOrg = await contract.c();
      console.log(accountOrg);
      setCharityOrg(accountOrg);
    } catch (error) {
      console.log(error);
    }
  };

  const getCooperativeStoreDetails = async () => {
    try {
      const accountStore = await contract.cooperativeStore();
      console.log('getCooperativeStoreDetails success', accountStore);
      setCooperativeStore(accountStore);
    } catch (error) {
      console.log('getCooperativeStoreDetails failure', error);
    }
  }

  const getProduct = async (productId) => {
    try {
      const prod = await contract.getProduct(productId);
      console.log('getProduct success', prod);
      setProduct(prod);
    } catch (error) {
      console.log('getProduct failure', error);
    }
  }

  const getAllProducts = async () => {
    try {
      const prod = await contract.getAllProducts();
      console.log('getAllProducts success', prod);

      const productsData = prod.map((projectArray) => ({
        productId: projectArray[0],
        productName: projectArray[1],
        price: projectArray[2],
      }));
      // productsData.push(project);
      setAllProducts(productsData);

    } catch (error) {
      console.log('getAllProducts failure', error);
    }
  }


  const getBeneficiaryDetails = async () => {
    try {
      const data = await contract.getBeneficiaryDetails();
      const [name, rescueInformation, Address, balance] = data;

      console.log("getBeneficiaryDetails success");
      console.log("Name:", name);
      console.log("Rescue Information:", rescueInformation);
      console.log("Address:", Address);
      console.log("Balance:", balance.toString());

      setBeneficiaryDetails({
        name,
        rescueInformation,
        Address,
        balance,
      });
    } catch (error) {
      console.log("getBeneficiaryDetails failure", error);
    }
  };

  const getDonorDetails = async () => {
    try {
      const data = await contract.getDonorDetails();
      const [name, balance, Address] = data;

      console.log("getDonorDetails success");
      console.log("Name:", name);
      console.log("Address:", Address);
      console.log("Balance:", balance.toString());

      setDonorDetails({
        name,
        balance,
        Address
      });
    } catch (error) {
      console.log("getDonorDetails failure", error);
    }
  };

  const getApprovedProjects = async () => {
    try {
      const data = await contract.getApprovedProjects();
      //console.log("Approved Projects:", data);
      const projectsData = data.map((projectArray) => ({
        beneficiary: projectArray[0],
        name: projectArray[1],
        title: projectArray[2],
        desc: projectArray[3],
        image: projectArray[4],
        goalAmount: projectArray[5],
        currentAmount: projectArray[6],
        isActive: projectArray[7],
      }));
      // projectsData.push(project);
      setApprovedProjects(projectsData);
    } catch (error) {
      console.log("getApprovedProjects failure", error);
    }
  };

  const getCharityProjects = async () => {
    try {
      const data = await contract.getCharityProjects();
      // console.log('All Projects:', data);

      const projectsData = data.map((projectArray) => ({
        beneficiary: projectArray[0],
        name: projectArray[1],
        title: projectArray[2],
        desc: projectArray[3],
        image: projectArray[4],
        goalAmount: projectArray[5],
        currentAmount: projectArray[6],
        isActive: projectArray[7],
      }));
      // projectsData.push(project);
      setAllProjects(projectsData);
      // console.log('allProjets', projectsData);
    } catch (error) {
      console.log("getCharityProjects failure", error);
    }
  };

  const getProjectStatus = async (projectId) => {
    try {
      const data = await contract.getProjectStatus();
      console.log('Project Status', data);
    } catch (error) {
      console.log("getProjectStaus failure", error);
    }
  }

  const getProjectDonators = async (projectId) => {
    try {
      const data = await contract.getProjectDonators(projectId);
      console.log('getProjectDonators success', data);
      setDonators(data);
    } catch (error) {
      console.log('getProjectDonators failure', error);
    }
  }



  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCharityProject,
        createBeneficiaryAccount,
        createDonorAccount,
        createOrganization,
        createCooperativeStore,
        donateToProject,
        spendTokens,
        getBeneficiaryDetails,
        getApprovedProjects,
        getCharityProjects,
        getOrganization,
        getCooperativeStoreDetails,
        getDonorDetails,
        getDonorTransactionHistory,
        getBeneficiaryTransactionHistory,
        getProjectStatus,
        getProjectDonators,
        getProduct,
        getAllProducts,
        approveBeneficiaryProject,
        addProduct,
        beneficiaryDetails,
        donorDetails,
        donorTransactions,
        beneficiaryTransactions,
        allProjects,
        approvedProjects,
        charityOrg,
        cooperativeStore,
        donators,
        product,
        allProducts
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
