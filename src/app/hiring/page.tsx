import Image from "next/image"
import { freelancers } from "../assets"
import { payroll } from "../assets"

export default function Hiring() {
    return (
        <>
            <section className="herobanner">
                <div className="px-4 mx-auto h-screen max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-7xl font-bold">Connect with the world's <br />Best <i className="text-pink-700">Designers</i></h1>
                        <div>
                            <div className="relative mt-2 rounded-3xl flex justify-center pt-6">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">  </div>
                                <input type="text" name="price" id="price" className="block w-1/2  rounded-3xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-9" placeholder="Try UX Designer, Graphic Designer" />
                            </div>
                        </div>
                        <p className="pt-6 text-base font-light">OR</p>
                        <h6 className="pt-5">Let us find the perfect Designers or team for your projects</h6>
                        <button type="button" className="text-white mt-5 bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">HIRE DESIGNERS</button>
                    </div>
                </div>
            </section>

            <div className="flex mb-4">
                <div className="w-1/2">
                    <h3 className="text-5xl font-semibold text-black">Find the top Designers</h3>
                    <p className="pt-6">Find the perfect fit for your next big project, and<br></br> hire for free.</p>
                    <button type="button" className="text-black mt-5 bg-pink-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 border-black me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">FIND TALENT DESIGNERS</button>
                </div>
                <div className="w-1/2">
                    <Image className="" src={freelancers} alt="lancers"></Image>
                </div>
            </div>

            <div className="flex mb-4">
                <div className="w-1/2">
                    <Image className="" src={payroll} alt="roll"></Image>
                </div>
                <div className="w-1/2">
                    <h3 className="text-5xl font-semibold text-black leading-10">Manage your projects &<br></br> payroll</h3>
                    <p className="pt-6">Recruit existing freelancers and onboard them for ongoing<br></br> initiatives. Acquire talent for new projects and oversee project<br></br> management, as well as remuneration, for a diverse global<br></br> workforce.</p>
                    <button type="button" className="text-black mt-5 bg-pink-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 border-black me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">HIRE FOR CRAFYHUB</button>
                </div>
            </div>

            <div className="freelancers bg-black">
                <h3 className="text-white text-5xl font-semibold">Start Hiring Top Freelancers</h3>
                <p className="text-zinc-400 text-2xl font-normal">Get started for free. Plus, Independents on<br></br> Crafyhub keep 100% of what you pay them.</p>

            </div>

        </>




    )
}