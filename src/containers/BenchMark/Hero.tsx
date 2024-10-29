import { ContainerWidth } from "@/utils/width";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import CourseEnqFrom from "../CourseContainer/CourseEnqFrom";
import BenchEnqFrom from "./BenchMark";
const Hero = () => {
  return (
    <>
    <div >
      <div className={`bg-no-repeat bg-cover bg-center md:flex justify-between lg:px-24 lg:py-32 p-10 lg:relative ${ContainerWidth}`} style={{ backgroundImage: "url('/assets/benchmark/benchmark-banner.jpg')" }}>
        <div className="">
          <p className="lg:text-3xl text-xl  text-white">
            Discover Your PMP® Exam Readiness <br /> with Confidence
          </p>
          <a  target='_blank' href="https://mock.synergysbs.com/register.php">
          <Button className="bg-[#f58533] rounded mt-8 font-medium text-[15px] normal-case">
            Register for a Mock Exam
          </Button>
          </a>
        </div>
        <div className="lg:mt-8 md:absolute lg:right-0 lg:top-0 bottom-10">
            <BenchEnqFrom/>
        </div>
      </div>
      </div>
    </>
  );
};
export default Hero;
