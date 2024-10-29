import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import HomeEnqFrom from "./home/EnqForm";
import HomeContext from "@/Context/home";
import { useContext } from "react";
interface FormSec {}

const FormSection = () => {
  const {scrollToRef} = useContext(HomeContext)
  return (
    <>
      <div className="splittedbg" ref={scrollToRef}>
        <div className={ContainerWidth + " lg:flex "}>
          <div className="lg:w-[70%]">
            <h2 className="text-white text-500 lg:text-[40px] text-3xl font-light lg:leading-[55px] lg:mt-4 mt-10 lg:w-[80%] w-[100%]">
            A unique opportunity for learning, networking, and professional growth.
            </h2>
            <h2 className="text-white text-500 lg:text-xl text-md font-light mt-6 lg:w-[85%] w-[100%]">
              A division of CADD Centre, Synergy School of Business Skills is the
              India’s largest network of management training institute.
            </h2>

            {/* <div className="lg:gap-x-2 lg:gap-y-10 lg:gap-5 gap-5 lg:flex-wrap lg:mt-12 mt-5 block grid lg:grid-cols-3 grid-cols-2"> */}
            <div className="grid lg:grid-cols-3 gap-2 lg:gap-y-16 lg:mt-16 lg:w-[85%] w-[100%]">
              <div className="text-white lg:mt-0 mt-5">
                {" "}
                <p className="font-bold text-6xl font-[Arial]">70+</p>{" "}
                <p className="text-md">Locations across India</p>{" "}
              </div>

              <div className="text-white lg:mt-0 mt-5">
                {" "}
                <p className="font-bold text-6xl font-[Arial]">30+</p>{" "}
                <p className="text-md">Professional Courses</p>{" "}
              </div>

              <div className="text-white lg:mt-0 mt-5">
                {" "}
                <p className="font-bold text-6xl font-[Arial]">50K+</p>{" "}
                <p className="text-md">Alumni are former students</p>{" "}
              </div>

              <div className="text-white lg:mt-0 mt-5">
                {" "}
                <p className="font-bold text-6xl font-[Arial]">3000+</p>{" "}
                <p className="text-md">PMP Trained Students</p>{" "}
              </div>

              <div className="text-white lg:mt-0 mt-5">
                {" "}
                <p className="font-bold text-6xl font-[Arial]">PMI</p>{" "}
                <p className="text-md">Authorised Training Partner</p>{" "}
              </div>
            </div>
          </div>

          <div className=" lg:w-[30%] lg:mt-0 mt-12 lg:bg-none bg-[#193f58]">
            {/* <HomeEnqFrom /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSection;
