"use client"

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"

import { useProductStore } from "@/lib/store"

export default function Cart() {
  const store = useProductStore()

  function calcTotal(): number{
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

      <div className={"w-full md:w-[80%] "}>
        {store.cart.map((product, inex) => (
          <div
            className={`
            flex items-center gap-x-4 
            md:gap-x-6 px-3 
            md:px-10 md:flex md:justify-center 
            md:items-center`}
          >
            <img
              src={product.image}
              className={`h-[100px] w-[100px] md:h-[150px] md:w-[150px]`}
            />

            <div className={``}>
              <h1 className={`text-xl mb-2 mt-10`}>{product.name}</h1>
              <p className={`text-2xl font-bold`}>#{product.price}</p>

              <div
                className={
                  "gap-x-4 flex justify-between items-center px-4"
                }
              >
                <button
                  className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold size-12`}
                >
                  <IoMdAdd />
                </button>
                <button
                  className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold size-12`}
                >
                  <IoMdRemove />
                </button>

                <button
                  className={`flex size-12 items-center justify-center 
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
    </div>
  )
}
