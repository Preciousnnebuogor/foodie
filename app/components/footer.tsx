"use client"

import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";



export default function Footer(){
    return <div className={"flex justify-center items-center"}>
        <div className={"flex items-center justify-between mx-auto p-4"}>
        <Link
              href={"https://www.facebook.com/precious.osemeke?mibextid=ZbWKwL"}
              className={"text-blue-600 p-4"}>
              <FaFacebook />
            </Link>

            <Link
              href={"https://x.com/Precious24147291?t=JRMRhs3-zb0OaT9LyhTIPA&s=09"}
              className={"text-blue-600 p-4"}>
              <IoLogoDiscord />
            </Link>

            <Link
              href={"/"}
              className={"text-green-600 p-4"}>
              <IoLogoWhatsapp />
            </Link>

            <Link
              href={"http://www.instagram.com/preciousperfection1?utm_source=qr&igsh=eXZkMDJnOHhvZHho"}
              className={"text-pink-600 p-4"}>
              <FaInstagram />
            </Link>

            <Link
              href={"https://github.com/Preciousnnebuogor"}
              className={"text-black p-4"}>
              <FaGithub />

            </Link>
        
        
        </div>
    </div>
}