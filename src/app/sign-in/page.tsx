import React from "react";
import Link from "next/link";
import { LargeButton } from "../components/Buttons/Buttons";



const signin : React.FC = () => {
  return (
    <>
    <div className="flex min-h-full  justify-center px-6  h-dvh w-dvw bg-red-50 items-center  ">
      <div className="border-2 border-black rounded-lg w-1/4 h-4/6 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm   grid-cols-12 grid-rows-12">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900  grid-cols-12 grid-rows-12">
            Welcome black to Crafyhub
          </h2>
          <p className="text-center  grid-cols-12 grid-rows-12">
            Sign up with your email address
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm max-w-md mx-auto">
          <form
            className="space-y-6  grid-cols-12 grid-rows-12"
            action="#"
            method="POST"
          >
            <div>
              <button
                type="submit"
                className=" flex w-full justify-center  rounded-md bg-gray-50 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue with Google
              </button>
            </div>
            <div className="text-center  grid-cols-12 grid-rows-12">or</div>
            <div>
              <div className="mt-2  grid-cols-12 grid-rows-12">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-0-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="button"
              className=" flex w-full justify-center  rounded-md bg-gray-300 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:border-b border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {" "}
              Continue
            </button>
            <div>
              <div className=" text-center  grid-cols-12 grid-rows-12">
                <h3> or sign in with Email Address</h3>
              </div>
              <div className="mt-2  grid-cols-12 grid-rows-12"></div>
          
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-black-500  grid-cols-12 grid-rows-12">
            new to Crafyhub?{" "}
            <Link
              href="./sign-up"
              className="font-semibold leading-6 text-red-400 hover:text-red-600"
            >
              Sign up here
            </Link>
         
          </p>
 <LargeButton label="continue"/>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default signin;
