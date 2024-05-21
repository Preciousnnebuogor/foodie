"use client"

import { IoMdAdd, IoMdRemove } from "react-icons/io"

import { useProductStore } from "@/lib/store"

export default function Cart() {
  const store = useProductStore()
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
                  className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold size-12`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
