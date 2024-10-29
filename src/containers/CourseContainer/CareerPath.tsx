import Image from "next/image";
import type { FC } from "react";
import Heading from "@/components/Heading";
import { ImDiamonds } from "react-icons/im";
import { CourseInterface } from "./type";

const CareerPath: FC<CourseInterface> = ({ course }) => {
  return (
    <>
  
    {
      course.CareerPath.length != 1 &&
      <div className="lg:mt-20 mt-10 lg:mb-20 mb-10">
        <Heading type={10} />
    
        <div className="lg:grid grid-cols-2 gap-2 mt-4">
          {course.CareerPath &&
            course.CareerPath.map((values) => (
              <>
                <div className="flex items-start gap-[10px] mt-3">
                  <div className="">
                    <ImDiamonds className="text-[#f58634]" size={17} />
                  </div>
                  <p className="text-[15px] font-medium text-[#114466]">
                    {values}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
    }
      
    </>
  );
};
export default CareerPath;
