const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'close dove disease surprise burden fury remain weapon catalog baby pave rabbit', // this mnemonic may point to one or many accounts
  'https://goerli.infura.io/v3/42cc5c3b45894e2da3a635e6ff42766f'
);

const web3 = new Web3(provider);

const deploy = async() => {

  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account => ",accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode })
  .send({ from:accounts[0], gas:5000000 });

  console.log("Contract has been Deployed to - ",result.options.address);
};

deploy();
