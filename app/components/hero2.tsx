"use client"
import { ImageApp } from "@/lib/appImages"
import {animate, motion} from "framer-motion"
export default function Hero2(){
    return <div className={`flex overflow-x-hidden items-center justify-between`}>
       <motion.section
       className={"h-20 w-20"}
       animate={{
        scale:[1,2,2,1],
        rotate:[0,90,90,0],
        borderRadius:["10%", "10%", "50%", "10%"],
       }}
       transition={{duration: 5, ease:"easeInOut", repeat:Infinity,repeatDelay:1}}
       >
       <img src={ImageApp.logo} />
       <img src={ImageApp.logo} />
       

        
        </motion.section> 
    </div>
}