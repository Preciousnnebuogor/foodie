"use client"
import { ImageApp } from "@/lib/appImages"
import {animate, motion} from "framer-motion"
export default function Hero2(){
    return <div className={`flex overflow-x-hidden items-center justify-between`}>
       <motion.section
       className={"flex items-center justify-between"}
       initial={{ y: 100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeout", duration: 1, delay:0.2 }}
       >
       <img src={ImageApp.logo} className={"h-8 w-8"} />
       <img src={ImageApp.logo} className={"h-8 w-8"} />
       

        
        </motion.section> 
    </div>
}