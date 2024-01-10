import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { CrafyHubLogo,InstaLogo } from "@/app/assets";
const footer = () => {
  return (
    <div>

        



<footer className="">
    <div className="mx-auto max-w-7xl sm:px-6">
      <div className="grid grid-cols-2 lg:gap-24 gap-12 px-3 lg:px-0 py-6 lg:py-8 md:grid-cols-5">
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">FOR FREELANCERS</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Crafian for freelancers</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">How it works</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Commission free</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Top Designers</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">FOR HIRING</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Crafian for hiring</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">How it works</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Commission free</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Hire for crafyhub</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">WHY CRAFYHUB</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Mission</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Support</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">FAQ</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">COMMUNITY</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Events</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Affiliate's</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Invite a friend</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-medium text-gray-900 uppercase dark:text-white">SOCIAL</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal">
                <li className="mb-4">
                  <Link href="#"><Image src={InstaLogo} alt="Instagram"></Image></Link>
                </li>
            </ul>
        </div>
    </div>
    <div className="py-6 md:flex md:items-center md:justify-between">
    <div className="flex flex-shrink-0 items-center">
                <Image className="h-8 w-auto" src={CrafyHubLogo} alt="logo" />
                <h2 className="px-4 text-2xl font-semibold">Crafyhub</h2>
              </div>
        <span className="text-sm  font-normal sm:text-center">© 2023 <Link href="#">Crafyhub</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link href="#" className="">Terms & Conditions |</Link>
            <Link href="#" className="">Privacy Policy |</Link>
            <Link href="#" className="">Cookie Policy  |</Link>
            <Link href="#" className="">Code of Conduct</Link>
        </div>
      </div>
    </div>
</footer>


    </div>

   
  )
}

export default footer