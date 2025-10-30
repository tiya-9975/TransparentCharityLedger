import Web3 from "web3";

const web3 = new Web3(process.env.ALCHEMY_RPC_URL);
const contractABI = []; // paste ABI here
const contractAddress = process.env.CONTRACT_ADDRESS;

export const contract = new web3.eth.Contract(contractABI, contractAddress);
