import React from "react";
import Link from 'next/link'

const signup = () => {
  return (
 
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh w-dvw bg-red-50 items-center  ">
    <div className="border-2 border-black rounded-lg w-1/4 h-4/6   ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your Crafyhub profile
        </h2>
        <p className="text-center">Sign up with your email address</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <button
              type="submit"
              className="flex w-full justify-center  rounded-md bg-gray-50 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in with google
            </button>
          </div>
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-0-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="button"
            className="flex w-full justify-center  rounded-md bg-gray-300 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:border-b border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {" "}
            Continue
          </button>
          <div>
            <div className=" text-center">
              <h3> or sign in with Email Address</h3>
            </div>
            <div className="mt-2"></div>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-black-500">
         Already using carfyhub ?{" "}
          <Link
            href="./sign-in"
            className="font-semibold leading-6 text-red-400 hover:text-red-600"
          >
           Sign in here
          </Link>
        </p>
      </div>
    </div>
  </div>
   
  )
}
    
 

export default signup;
