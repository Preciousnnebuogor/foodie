"use client"

import Link from "next/link"

import { ProductList } from "./data"

export default function ProductPage() {
  return (
    <>
      <div
        className={`flex items-center justify-center text-xl md:mt-20 mt-28 px-4`}
      >
        <p>
          The way to a Kings heart is through delicious delicacy, get the
          essential nutrient your body needs today. <br />
          Each of the delicacy below are all available for you order.
          <br />
          Home delivery is also available for all location within Nigeria.
        </p>
      </div>
      <div className={" items-center flex justify-center"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-3 md:p-4 p-2 md:gap-x-4 w-[90%] md:w-[70%]"
          }
        >
          {ProductList.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between 
          rounded-3xl mt-4 bg-primary  
           border-primary`}
            >
              <Link href={`/product/${index}`}>
                <img src={value.image} className={"h-full w-full"} />
              </Link>
              <p>{value.name}</p>
              <p> #{value.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
