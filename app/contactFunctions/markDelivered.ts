import { BrowserProvider, Contract } from "ethers"

import {
  smartContractAbi,
  smartContractAddress,
} from "../contract/smartContractAbi"

export default async function markOrderAsDelivered(
  address: string,
  orderID: string
) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(address)

  const contract = new Contract(smartContractAddress, smartContractAbi, signer)

  try {
    const transaction = await contract.markOrderAsDelivered(orderID)
    await transaction.wait()
  } catch (err) {
    console.log("sorry an error occured", err)
  }
}
