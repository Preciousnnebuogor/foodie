import { BrowserProvider, Contract } from "ethers"

import {
  smartContractAbi,
  smartContractAddress,
} from "../contract/smartContractAbi"

export default async function addOrder(
  address: string,
  orderID: string,
  amoutPaid: number
) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(address)

  const contract = new Contract(smartContractAddress, smartContractAbi, signer)

  try {
    const transaction = await contract.addOrder(orderID, amoutPaid)
    await transaction.wait()
  } catch (err) {
    console.log("sorry an error occured", err)
  }
}
