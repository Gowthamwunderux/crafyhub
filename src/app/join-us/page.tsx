import React from "react";
import Link from 'next/link'
import Image from "next/image"
import { CrafyLogo, GLogo } from "../assets";

export default function JoinUs(){
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center bg-gradient-to-b from-Pink-700 to-[#fff]  px-6 py-24 lg:px-8">
            <div className=" mx-auto max-w-7xl flex justify-center item-center border ">
          <div className="max-full">
          <Image src={CrafyLogo} className="mx-auto h-10 w-auto" alt="Crafy Hub"></Image>
          <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-normal text-gray-900">
          Join as a client or designer’s
          </h2>
          </div>
        </div>
        
       
        </div>
    )
}
