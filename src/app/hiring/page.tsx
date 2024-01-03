import Image from "next/image"
import { freelancers } from "../assets"
import { payroll } from "../assets"

export default function Hiring() {
    return (

        <>
            <section>
                <div className="px-4 mx-auto h-screen max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-7xl font-bold">Connect with the world's <br />Best <i className="text-pink-700">Designers</i></h1>
                        <div>
                            <div className="relative mt-2 rounded-3xl">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input type="text" name="price" id="price" className="block w-full rounded-3xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/>
                                    
                            </div>
                        </div>
                        <p className="pt-10">OR</p>
                        <h6 className="pt-5">Let us find the perfect Designers or team for your projects</h6>
                        <button type="button" className="text-white mt-5 bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">HIRE DESIGNERS</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="flex mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-lvh">
                        <div className="w-1/2  h-12">
                            <h1 className="text-7xl font-bold">Find the top Designers</h1>
                            <p className="mt-8 text-2xl">Find the perfect fit for your next big project, and hire for free.</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 border border-blue-700 rounded">
                                FIND TALENT DESIGNERS
                            </button>
                        </div>
                        <div className="w-1/2  h-12">
                            <Image src={freelancers} alt="user">

                            </Image>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">
                    <div className="flex mb-4">
                        <div className="w-1/2  h-12">
                            <Image src={payroll} alt="user">

                            </Image>
                        </div>
                        <div className="w-1/2  h-12">
                            <h1 className="text-7xl font-bold">Find the top Designers</h1>
                            <p className="mt-8 text-2xl">Find the perfect fit for your next big project, and hire for free.</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 border border-blue-700 rounded">
                                FIND TALENT DESIGNERS
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}