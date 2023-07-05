# Transparent-Charity-System
 

<br />
<p align="center">
       <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nbyUyMGZvciUyMGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Click to view" width="120" height="120">


       <h1 align="center">Transparent Charity System</h1>
    <br><br>
  </p>
</p>


## 🤔 About Project

The Transparent Charity System is a blockchain-based charity foundation platform that facilitates the trustful network's formation and is accountable for collecting donation funds. 

## STATUS

* THIS PROJECT IS COMPLETE AND SHOULD ONLY BE USED FOR LOGICAL AND FUNDAMENTAL UNDERSTANDING PURPOSE.
* THE SOLIDITY CODE IS WRITTEN IN NEW VERSION AND ADDRESS OF SMART CONTRACT IS THERE IN WEB3 FOLDER.
* THE FRONTEND IS READY AND BUILT WITH REACT + VITE BUT HAS FEW UI FEAUTRES.
* THE SMART CONTRACT WORKS COMPLETELY.

## 🙏 Mentors
* CHATGPT ;) 

## 🔗The Design of Charity System Based on Blockchain
The charity system mode proposed is shown in the Figure below. There are four roles: donors, beneficiaries, 
charity organizations and cooperative stores. The charity organizations get the information of seek help and 
approve charity projects through the platform. Donors learn about charity projects on the platform, 
then donate to beneficiaries. Beneficiaries upload their information to the platform for help, 
they can get and spend tokens in cooperative stores. The transactions occurred in the stores will be uploaded to the charity platform. 
The cooperative stores supply services or goods to the beneficiaries to obtain tokens.The flow of funds has been fully recorded on 
the blockchain, which allows transactions to be tracked and funds prevented from being abused.

 ![Click to view](https://drive.google.com/uc?export=view&id=1_GP1C0p2MAvsaK7_0flETjMNcNtefVZH)

### Platform Usage Process
1. Donor
After successful login, the donor browses the charity projects and select one project to be donated. 
The system will check the balance of donor account. If the balance is insufficient, the user will be 
reminded to deposit.Donation can be completed only the balance is sufficient.
2. People in need
The people who need help should fill in the rescue information which will be uploaded to the 
charity organization,then create their own charity project with all it's details and wait for approval.
The approved projects will be posted on the charity platform. The beneficiary can check the account balance
to know the project status, and then use the tokens in cooperative shops to obtain services or products.
4. Cooperative shop
The shop provides the corresponding services or goods such as medicines or books to the 
beneficiaries to obtain tokens.they can exchange tokens for real money by charity organizations.
5. Charity organization
The organization can verify the charity projects and approve them once verified.

 ![Click to view](https://drive.google.com/uc?export=view&id=1BtCU-MM3FrOciYrY9_4uqP6C47Db50w0)

### Dapp Model
Following functions have been met:
1. Beneficiary initiates a charity project in the DApp.
2. Beneficiary requests funds from the charity project initiated by himself.
3. The charity project is visible on Organization's dashboard, where they can be approved.
4. Once approved, Donors can see them in their own dashboard and donate to any project they like.
5. Cooperative Store Owner can add their product or service on the store.
6. Beneficiaries, once they get the tokens(here eth) from any Donor can spend that in store and buy any product or service.
   

 ![Click to view](https://drive.google.com/uc?export=view&id=16A1Cf693mqt2Uh7Xy3XIfik7wojh3Der)

## 📃 Description

* We have created a Solidity Smart Contract for this cause and we have used ethers.js, Hardhat and ThirdWeb.

* In the contracts folder, you will find a complete solidity contract where the functions related to each role is handled.

* On the Frontend Part we have 4 dashboards for each of 4 roles built with React and Vite.js and Tailwind css.

*There is backend folder which contains code regarding login and signup using Node.js and MySQl, which is not functional now.

* Included code to compile the contract and to deploy the contract on the Sepolia Test Network using the Thirdweb.

* The website and the test modules are not yet connected and the code is placed in seperate folders.

* Frontend and Web3 Reference Youtube Link: [Link to Youtube](https://youtu.be/BDCT6TYLYdI)
* GitHub repo link: [Link to repository](https://github.com/Tusharr08/Transparent-Charity-System)
* Drive Link to Screenshots: [Link to Drive](https://drive.google.com/drive/folders/1JG7aD2TmP9FSBXPF-jJFiInl-Y5zNzs9)
* Drive Link to Research Paper on Genuine Charity using Ethereum Contracts - [Link to Drive](https://drive.google.com/file/d/10AxpsmR_w7ERMPqgAfuE619U6sVTv5gn/view?usp=sharing)
* EthFiddle Link to Test the Contract - [Link to EthFiddle](https://ethfiddle.com/ytIjaR2m9t)


## 🛠Technology stack

Tools and technologies that we learnt and used in the project.

1. Solidity
2. HTML,CSS,JS,React
3. Node JS
4. web3, hardhat, ThirdWeb

## 🚀 Instructions to run the application (DEVELOPMENT)

1. Clone the Repository

```bash
git clone https://github.com/Tusharr08/Transparent-Charity-System.git
```

2. install dependencies by running

```terminal of client, backend, and web3
npm i
```
after following the steps run 
```
npm run dev      (client)
npm run start    (backend)
```

3. Refer to the package.json file for full details on the installed packages.

4. To run the Contract online, refer to the EthFiddle Link above.
 
7. To deploy the contract on the Sepolia Test Network using ThirdWeb, follow the steps - 
* ```Run this onterminal of web3 directory
 npm run deploy
* Then you'll get a link to thirdweb dashboard,navigate to it and sign the two transactions for complete deployment.
* Install the MetaMask Browser extension - [Link to MetaMask Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
* After that you'll see a dashboard -
 ![Click to view](https://drive.google.com/uc?export=view&id=1w8vioZQUxLInTexHPJsrR1xQVx9a0Vb1)

* Now you can see all your functions.

## 📝Applications
> Many fake charity organizations pose as genuine and loot money from innocent people in the name of charity. Most people want to donate money to a good cause of charity, but they are unsure if the money is going to reach the right hands of the destitute.  The blockchain system can bring transparency to online charity trusts. Contributors can see the journey of the donation in realtime and confirm if it’s reaching the deserving hands or not.

## 👨‍🎓What did I learn from this project

It was awesome working as a leader in this project. I learnt how Blockchains work giving me a clear understanding of the various moving pieces and concepts regarding Blockchain. I was able to contribute to a solidity contract and write tests for the same. I gained many useful skills related to management, leadership, team-work and also got to know a lot about my co-workers and mentors. It was fun working with them on this project. So, overall it was a huge success.

## 🔮Future scope
* Verification for Beneficiaries can be more detailed.
* Make the UI/UX even better.
* Make an Andriod app for this idea.

## 🎨Screenshots
 ![Click to view](https://drive.google.com/uc?export=view&id=12TAfrme-NDTBkhtnWFr3TsyEOdtMP4Jl)
 ![Click to view](https://drive.google.com/uc?export=view&id=1vK4JK8lPMLAarbBzuHBsdPWO5ypKhU1S)
 ![Click to view](https://drive.google.com/uc?export=view&id=1YcszBNbehBJ_l639gY1zPWC-IDkClrq5)
 ![Click to view](https://drive.google.com/uc?export=view&id=1CZUn1mj9NRQlItvdrmk28IiZLIG4QVZ9)
 ![Click to view](https://drive.google.com/uc?export=view&id=1ZtbV-GH0r1XLZtSrGpfCVZGDVONUhZc6)
 ![Click to view](https://drive.google.com/uc?export=view&id=12xJ4IyhTOcyuqcB5VJ__Qx0oRosAS9M4)
 ![Click to view](https://drive.google.com/uc?export=view&id=1dp_Q8c1b0pzpoiwW18sP1ioYb5jKzRes)
 ![Click to view](https://drive.google.com/uc?export=view&id=1jsvI2qNV5XfWeUTMfaGMupVOlBxufukY)
 ![Click to view](https://drive.google.com/uc?export=view&id=1rwQZdVSvsD39PS-p6UKssF1Gn_gIbcWC)
