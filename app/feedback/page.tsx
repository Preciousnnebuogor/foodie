"use client"
import { IoMdStarOutline } from "react-icons/io";
export default function Feedback() {
    return <div className={``}>
        <div className={` mt-28 md:mt-20 flex justify-center items-center`}>
    <h1 className={`text-xl mb-2 font-bold `}>We appreciate your feedback.</h1>  
    </div>
      <div className={`px-5 flex  justify-center items-center`}> 
      <h2>We are always looking for ways to improve your experience.
        Please take a moment to evaluate <br/> and tell us what you think</h2> 
      </div>
      <div className={`flex items-center justify-center mt-4`}>
      <IoMdStarOutline />
      <IoMdStarOutline />
      <IoMdStarOutline />
      <IoMdStarOutline />
      <IoMdStarOutline />
      </div>
      
    </div>
}