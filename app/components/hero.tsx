"use client"

import { ImageApp } from "@/lib/appImages"
import Link from "next/link"


export default function Hero() {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={" mx-auto p-5 h-full w-[80%]"}>
        <div className={"mt-5 md:mt-20 md:flex md:flex-row "}>
          <div
            className={
              "md:w-2/5 flex flex-col justify-center mb-4 items-center "
            }>
           <h2
              className={
                "text-4xl md:text-5xl text-center md:text-left md:self-start mt-20 md:mt-0"
              }
            >
              Special delicacy for more
            </h2>
            <p
              className={
                "uppercase trackin-wide text-center md:text-left md:self-start "
              }
            >
              Order Now, Eat Now
            </p>
            <p
              className={
                "uppercase trackin-wide text-center md:text-left md:self-start"
              }
            >
               Eat Healthy, Stay Healthy 
            </p>
            <Link
              href={"/product"}
              className={
                "rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 uppercase text-xl md:self-start mt-4"
              }
            >
              Meal Time
            </Link>
          </div>
          <div className={"md:w-3/5 mt-5 md:mt-0"}>
            <img src={ImageApp.hero} className={""} />
          </div>
        </div>
      </div>
      
    </div>
  )
}
