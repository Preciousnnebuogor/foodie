"use client"

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { toast } from "sonner"

import { useProductStore } from "@/lib/store"

import { useMinipay } from "../contract/miniPay"
import { transferCusdTokens } from "../contract/transferCusd"

export default function Cart() {
  const store = useProductStore()
  const { walletAddress } = useMinipay()

  function calcTotal(): number {
    return store.cart.reduce((accum, product) => {
      return accum + product.price * product.quantity
    }, 0)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={
          "flex items-center justify-center text-2xl font-bold mt-[100px] md:mt-[70px]"
        }
      >
        <h1>My Meals</h1>
      </div>

      <div className={`w-full md:w-[80%]`}>
        {store.cart.map((product, inex) => (
          <div
            className={`
            flex items-center gap-x-4 px-3 border-primary
             border-b-2 md:gap-x-6 
            md:px-10 md:flex md:justify-center 
            md:items-center`}
          >
            <img
              src={product.image}
              className={`h-[120px] w-[100px] rounded-[30px] md:h-[150px]
               md:w-[150px]`}
            />

            <div className={`w-full`}>
              <h1 className={`mb-2 mt-10 text-[16px]`}>{product.name}</h1>
              <div
                className={`flex items-center
               justify-between`}
              >
                <p className={`text-xl font-bold`}>₦{product.price}</p>
                <p className="text-[14px] mr-4">
                  x
                  <span className="font-extrabold text-[18px]">
                    {product.quantity}
                  </span>
                </p>
              </div>

              <div className={`gap-x-4 flex justify-between items-center px-4`}>
                <button
                  className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold`}
                  onClick={() => {
                    store.incrementQuantity(product.id)
                    console.log("Remove product:", product.id)
                  }}
                >
                  <IoMdAdd />
                </button>
                <button
                  className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold size-12`}
                  onClick={() => {
                    store.decrementQuantity(product.id)
                    console.log("Remove product:", product.id)
                  }}
                >
                  <IoMdRemove />
                </button>

                <button
                  className={`flex  items-center justify-center 
                rounded-3xl border-2 bg-primary p-4 font-bold`}
                  onClick={() => {
                    store.removeFromCart(product.id)
                    console.log("Remove product:", product.id)
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={"flex flex-col items-center justify-center mt-4"}>
        <p className={"text-2xl font-bold"}>Total:</p>
        <p className={"text-2xl font-bold"}>₦{calcTotal()}</p>
        <button
          className={
            "bg-primary rounded-full to py-4 px-8 uppercase text-xl md:self-start my-5"
          }
          onClick={() => {
            transferCusdTokens({
              env: "CUSD_TESTNET",
              userAddress: walletAddress!,
              to: "0x462E5F272B8431562811126779da6EcaE51A5B40",
              amount: 2,
            })
              .then(() => {
                store.clearCart()
                toast.success("Transfer successful")
              })
              .catch(() => {
                toast.error("Transfer Unsuccessful")
              })
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  )
}
