import { parseEther } from "viem"
import {BrowserProvider, Contract} from "ethers"

export const externalCall = async (props: {
    // _signerAddress: `0x${string}` | undefined
    _seller: `0x${string}` | undefined
  }) => {
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
  
      let userAddress = accounts[0]
  
      const provider = new BrowserProvider(window.ethereum)
  
      const signer = await provider.getSigner(userAddress)
  
      console.log("Reached testCall", "props:", props)
  
      //   Txn
      const tx = {
        to: props._seller,
        value: parseEther("1.0"),
      }
  
      // signer.sendTransaction(tx)
      //   Contract call
      const contract = new Contract(
        "0x5976D626609c69f986EC7e375eE1168DE54BdF20",
        exContractABI,
        signer
      )
  
      try {
        const txn = await contract.addContributorToDirectory(
          "a username",
          userAddress
        )
  
        await txn.wait()
      } catch (error) {
        console.log("An error occurred", error)
      }
    }
  }
  