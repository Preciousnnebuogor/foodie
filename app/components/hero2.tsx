"use client"
import { ImageApp } from "@/lib/appImages"
import {animate, motion} from "framer-motion"
export default function Hero2(){
    return <div className={`overflow-x-hidden flex items-center justify-between p-6`}>
       <motion.section
       className={"h-10 w-10 flex items-center justify-between gap-x-6 "}
       animate={{
        scale:[1,2,2,1],
        rotate:[0,90,90,0],
        borderRadius:["10%", "10%", "50%", "10%"],
       }}
       transition={{duration: 5, ease:"easeInOut", repeat:Infinity,repeatDelay:1}}
       >
       <img src={ImageApp.food14} />
        </motion.section> 

        <motion.section
       className={"h-10 w-10 flex items-center justify-between gap-x-6 "}
       animate={{
        scale:[1,2,2,1],
        rotate:[0,90,90,0],
        borderRadius:["10%", "10%", "50%", "10%"],
       }}
       transition={{duration: 5, ease:"easeInOut", repeat:Infinity,repeatDelay:1}}
       >
       <img src={ImageApp.food1} />
        </motion.section> 

        <motion.section
       className={"h-10 w-10 flex items-center justify-between gap-x-6 "}
       animate={{
        scale:[1,2,2,1],
        rotate:[0,90,90,0],
        borderRadius:["10%", "10%", "50%", "10%"],
       }}
       transition={{duration: 5, ease:"easeInOut", repeat:Infinity,repeatDelay:1}}
       >
       <img src={ImageApp.food21} />
        </motion.section> 

        <motion.section
       className={"h-10 w-10 flex items-center justify-between gap-x-6 "}
       animate={{
        scale:[1,2,2,1],
        rotate:[0,90,90,0],
        borderRadius:["10%", "10%", "50%", "10%"],
       }}
       transition={{duration: 5, ease:"easeInOut", repeat:Infinity,repeatDelay:1}}
       >
       <img src={ImageApp.food10} />
        </motion.section> 
    </div>
}