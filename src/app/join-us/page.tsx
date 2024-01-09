import React from "react";
import Link from "next/link";
import Image from "next/image";
import { freeLancerLogo, clientLogo } from "../assets";
export default function JoinUs() {
  interface DesignerType {
    url: string;
    alt: string;
    content: string;
  }
  const freeLancer: DesignerType = {
    url: freeLancerLogo,
    alt: "DesignerLogo",
    content: "I m a designerlooking for work",
  };
  const client: DesignerType = {
    url: clientLogo,
    alt: "clientLogo",
    content: "I m a client, hiring  for project",
  };
  const joinUs = [freeLancer, client];
  return (
    <>
      <div className=" w-screen h-screen bg-gradient-to-t from- bg-myGradient to-white flex justify-center items-center ">
        <div className=" border 2xl:w-3/4 2xl:h-3/4 rounded-2xl xl: w-3/4 xl:h-3/4 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4">
          <div className="grid place-items-center 2xl:my-40 2xl:mx-96 sm:grid-cols-1  2xl:grid-cols-2 md:grid-cols-2 ">
            {joinUs.map((item) => (
              <>
                {" "}
                <div className=" shadow  hover:border-Pink-900  cursor-pointer 2xl: py-8  rounded-2xl">
                  <Image src={item.url} alt={item.alt}></Image>
                  <h1 className="font-bold text-center">{item.content}</h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
