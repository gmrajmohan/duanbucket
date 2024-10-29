import { ContainerWidth } from "@/utils/width";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import type { FC } from "react";
import { useContext } from "react";
import { CourseInterface } from "./type";
import CourseContext from "@/Context/Course";
import Heading from "@/components/Heading";
const Hero: FC<CourseInterface> = ({ course }) => {
  const { scrollToRef, handleScroll } = useContext(CourseContext);

  return (
    <>
      <div className="lg:w-[100%] bg-[#17354a]">
        <Image
          className="lg:relative m-auto lg:block hidden"
          width="1920"
          height="539"
          src={course.banner}
          alt={course.Title}
          title="Course"
        />
        <Image
          className="lg:relative m-auto lg:hidden block"
          width="1920"
          height="539"
          src={course.mobile_banner}
          alt={course.Title}
          title="Course"
        />
        <div className={ContainerWidth + " bg-[#17354a] lg:h-auto "}>
          <div className="absolute left-[100] lg:top-[30%] top-[10%] text-white">
            <h1 className="lg:text-3xl text-2xl text-[#f58634] font-bold mb-1 lg:w-[65%]  md:w-[65%] w-[100%]">
              {course.Title}
            </h1>
            <h2 className="lg:text-2xl text-2xl mt-5 w-[60%]">
              {course.Slogan}
            </h2>
            <Button
              className="  text-white  rounded-sm bg-[#f58634] text-sm mt-5 font-light"
              onClick={() => handleScroll(scrollToRef)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
