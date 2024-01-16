import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { CrafyHubLogo } from "@/app/assets";
import { SmallButton } from "../buttons/page";

const navigation = [
  { name: "Freelancers", href: "#", current: false },
  { name: "For Clients", href: "#", current: false },
  { name: "Why Crafy Hub", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      <>
        <div className="container lg:px-24 px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-16 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />

                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image className="h-8 w-auto" src={CrafyHubLogo} alt="logo" />
                <h2 className="px-4 text-2xl font-semibold">Crafyhub</h2>
              </div>
              <div className="hidden ml-16 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "rounded-md px-3 py-2 text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-self-end">
              <SmallButton label='SIGN UP' className='bg-Pink-700 text-black text-base rounded font-medium border-solid border border-indigo-600 px-3.5 py-1'></SmallButton>
              <SmallButton label='LOG IN' className='bg-Pink-900 text-White-900 text-base rounded font-medium border-solid border border-Pink-900 ml-2 px-3.5 py-1 shadow hover:shadow-[0_6px_0px_0px_rgba(0,0,0)]'></SmallButton>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-3.5">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
}
