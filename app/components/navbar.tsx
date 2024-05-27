"use client"
import { ThemeToggle } from "@/comps"
import { ImageApp } from "@/lib/appImages";
import { useProductStore } from "@/lib/store";
import Link from "next/link";

export default function Navbar() {
  const store = useProductStore()
  return (
    <div className={"bg-primary border-b-2 fixed top-0 w-screen"}>
      <div className={"mx-auto md:px-6 px-4 py-2 "}>
        <div className="md:flex md:flex-row md:justify-between text-center">
          <div className="flex flex-row justify-center items-center">
            <img src={ImageApp.logo} className={"h-8 w-8"} />
            <p className="text-xs font-bold">Foodie</p>
          </div>
          <div className={"mt-2 md:mt-0"}>
            <Link
              href={"/"}
              className={" hover:text-gray-50 p-4 mt-20 md:mt-0"}
            >
              Home
            </Link>
            <Link href={"/product"} className={" hover:text-gray-50 p-4"}>
              Meal
            </Link>
      
            <Link
              href={"/cart"}
              className={
                "  hover:text-gray-50 p-3 px-5 "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {store.cart.length}
            </Link>
            <Link href={"/login"} className={" hover:text-gray-50 p-4"}>
              Login
            </Link>
            <ThemeToggle/>

            </div>
        </div>
      </div>
    </div>
  )
}
