import Image from "next/image";
import { freelancers } from "../assets";
import { payroll } from "../assets";
import { LargeButton } from "../components/buttons/page";
import AutocompleteInput from "../components/autoComplete/page";

export default function Hiring() {
  interface DesignerType {
    id: number;
    name: string;
  }
  const Designer: DesignerType[] = [
    { id: 1, name: "User Interface (UI) Designer" },
    { id: 2, name: "Web Designer" },
    { id: 3, name: "Game Designer" },
    { id: 4, name: "Interaction Designer (IxD)" },
    { id: 5, name: "Experiential Designer" },
    { id: 6, name: "Information Designer" },
    { id: 7, name: "Graphic Designer" },
    { id: 8, name: "User Experience (UX) Designer" },
  ];
  return (
    <>
        <section className="herobanner bg-gradient-to-b from-Pink-700 to-[#fff]">
          <div className="grid grid-cols-1 container mx-auto lg:min-h-screen lg:py-0 py-24 lg:px-24 px-8 place-items-center">
            <div className="text-center">
              <h1 className="text-4xl sm:text-7xl font-bold">
                Connect with the world's <br />
                Best <i className="text-Pink-900 not-italic">Designers</i>
              </h1>
              <div>
                <div className="relative mt-2 rounded-3xl flex justify-center pt-6">
                  <AutocompleteInput
                    suggestions={Designer}
                    className=" border m-5 lg:min-w-[800px] py-4 rounded-[50px] px-4"
                    placeHolder="Graphic Designer, Product Designer"
                  />
                </div>
              </div>
              <p className="py-3.5 text-base font-light">OR</p>
              <h6 className="py-3.5">
                Let us find the perfect Designers or team for your projects
              </h6>
              <button
                type="button"
                className="mt-5 bg-Pink-900 text-White-900  font-medium rounded-lg  px-7 py-3.5 me-2 mb-2 transition-all  shadow hover:shadow-[0_6px_0px_0px_rgba(0,0,0)]"
              >
                HIRE DESIGNERS
              </button>
            </div>
          </div>
        </section>

        <section className="crafy_designers bg-gradient-to-t from-Pink-700 to-[#fff]">
          <div className="grid items-center container mx-auto lg:min-h-screen lg:py-0 py-24 lg:px-24 px-8">
            <div className="grid-cols-1 md:grid md:grid-cols-2 items-center gap-5">
              <div className="freelance_content">
                <h3 className=" text-2xl  sm:text-5xl font-semibold text-black">
                  Find the top Designers
                </h3>
                <p className="py-6">
                  Find the perfect fit for your next big project, and hire for
                  free.
                </p>
                <button
                  type="button"
                  className="bg-Pink-700 border-solid border border-indigo-600  text-black font-medium rounded-lg text-base px-5 py-5 border-black me-2 mb-2 shadow hover:shadow-[0_6px_0px_0px_rgba(0,0,0)]"
                >
                  FIND TALENT DESIGNERS
                </button>
              </div>
              <div className="freelance_Image py-5 lg:py-0">
                <Image className="" src={freelancers} alt="lancers"></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="crafy_designers bg-gradient-to-t from-Pink-700 to-[#fff]">
          <div className="grid items-center container mx-auto lg:min-h-screen lg:py-0 py-24 lg:px-24 px-8">
            <div className="grid-cols-1 md:grid md:grid-cols-2 items-center gap-5">
              <div className="freelance_Image">
                <Image className="" src={payroll} alt="roll"></Image>
              </div>
              <div className="freelance_content py-5 lg:py-0">
                <h3 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                  Manage your projects &<br></br> payroll
                </h3>
                <p className="py-6">
                  Recruit existing freelancers and onboard them for ongoing
                  initiatives. Acquire talent for new projects and oversee
                  project management, as well as remuneration, for a diverse
                  global workforce.
                </p>
                <button
                  type="button"
                  className="bg-Pink-700 border-solid border border-indigo-600  text-black  font-medium rounded-lg text-base px-5 py-5 border-black me-2 mb-2 shadow hover:shadow-[0_6px_0px_0px_rgba(0,0,0)] "
                >
                  HIRE FOR CRAFYHUB
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="crafy_freelancers bg-gradient-to-t from-black-100 to-black-700">
          <div className="grid grid-cols-1 container mx-auto min-h-96 pt-16 lg:px-24">
            <div className="w-full bg-black h-12">
              <h3 className="text-5xl font-semibold text-White-900">
                Start Hiring Top Freelancers
              </h3>
              <p className="py-6 text-gray-100">
                Get started for free. Plus, Independents on Crafyhub keep 100%
                of what you pay them.
              </p>
              <button
                type="button"
                className="bg-White-900  text-black  font-medium rounded-lg text-base px-5 py-5  me-2 mb-2 "
              >
                GET STARTED
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
