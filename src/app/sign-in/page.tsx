import React from "react";
import Link from "next/link";

const signin: React.FC = () => {
  return (
    <>
      <div className="flex min-h-full  justify-center  h-dvh w-dvw   bg-myGradient items-center  bg">
        <div className="mt-1 border-2 border-black sm:w-full md::w-3/12 xl:w-3/12 2xl:w-3/12 ">
          <form
            className="space-y-6  grid-cols-12 grid-rows-12"
            action="#"
            method="POST"
          >
            <h1 className="mt-10 text-center  text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
              Welcome black to Crafyhub
            </h1>
            <p className="text-center  grid-cols-12 grid-rows-12">
              Sign up with your email address
            </p>

            <button
              type="submit"
              className=" flex w-full justify-center  rounded-md bg-gray-50 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue with Google
            </button>

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
                  className="block w-5/6 rounded-md border-0 ml-8 px-10 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-0-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="button"
              className=" flex w-5/6 ml-8 justify-center  rounded-md bg-gray-300 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:border-b border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        </div>
      </div>
    </>
  );
};

export default signin;
