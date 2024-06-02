import { BrowserProvider, Contract } from "ethers"

import {
  smartContractAbi,
  smartContractAddress,
} from "../contract/smartContractAbi"

export default async function changeAdmin(
  address: string,
  
  
) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(address)

  const contract = new Contract(smartContractAddress, smartContractAbi, signer)

  try {
    const transaction = await contract.changeAdmin()
    await transaction.wait()
  } catch (err) {
    console.log("sorry an error occured", err)
  }
}

