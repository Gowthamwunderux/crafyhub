import Image from "next/image";
import React from 'react'
import { CrafyHubLogo } from "@/app/assets";
const footer = () => {
  return (
    <div>

        



<footer className="">
    <div className="mx-auto max-w-7xl px-2 sm:px-6">
      <div className="grid grid-cols-2 gap-24 px-4 py-6 lg:py-8 md:grid-cols-5">
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">FOR FREELANCERS</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Crafian for freelancers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">How it works</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Commission free</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Top Designers</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">FOR HIRING</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Crafian for hiring</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">How it works</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Commission free</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Hire for crafyhub</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">WHY CRAFYHUB</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Mission</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Support</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">FAQ</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">COMMUNITY</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Events</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Affiliate's</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Invite a friend</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">SOCIAL</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal">
                <li className="mb-4">
                    <a href="#" className=""><img src="" alt="" /></a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100  md:flex md:items-center md:justify-between">
    <div className="flex flex-shrink-0 items-center">
                <Image className="h-8 w-auto" src={CrafyHubLogo} alt="logo" />
                <h2 className="px-4 text-2xl font-semibold">Crafyhub</h2>
              </div>
        <span className="text-sm  font-normal sm:text-center">© 2023 <a href="#">Crafyhub</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-sm font-normal">Terms & Conditions |</a>
            <a href="#" className="text-sm font-normal">Privacy Policy |</a>
            <a href="#" className="text-sm font-normal">Cookie Policy  |</a>
            <a href="#" className="text-sm font-normal">Code of Conduct</a>
        </div>
      </div>
    </div>
</footer>


    </div>

   
  )
}

export default footer