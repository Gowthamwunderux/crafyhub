import React from "react";
import Link from 'next/link'
import Image from "next/image"
import { CrafyLogo, GLogo } from "../assets";

const signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center bg-gradient-to-b from-Pink-700 to-[#fff] px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={CrafyLogo} className="mx-auto h-10 w-auto" alt="Crafy Hub"></Image>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your CrafyHub Profile
          </h2>
        </div>
        <p className="mt-10 text-center text-md font-light text-gray-500">
                Sign up with your email address

              </p>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            
            <div>
            
              <button
                type="submit"
                className="flex w-full justify-center align-middle gap-3 rounded-md bg-White px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                 <span><Image src={GLogo} className="mx-auto h-5 w-auto" alt="Google Sign In"/> </span>
                 <span>Continue with Google</span>
              </button>
            </div>
            <div>
              <p className="mt-5 mb-5 text-center text-md font-light text-gray-500">
                or signup with email address

              </p>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-100 px-3 py-3 text-sm font-semibold leading-6 text-white transition-all shadow-sm hover:text-White hover:bg-Pink-900 hover:shadow-md text-white-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Continue
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already using crafy hub?{' '}
            <a href="#" className= " font-regular leading-6 text-Pink-900 hover:text-indigo-500">
              Sign In Here
            </a>
          </p>
        </div>
      </div>
   
  )
}
    
 

export default signup;
