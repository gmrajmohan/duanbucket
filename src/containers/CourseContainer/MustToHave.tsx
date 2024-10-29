import { ContainerWidth } from "@/utils/width";
import type { FC } from "react";
import Heading from "@/components/Heading";
import Image from "next/image";
import { CourseInterface } from "./type";

const MustToHave: FC<CourseInterface> = ({ course }) => {
 
  return (
    <>
      <div className="lg:mt-16 mt-10">
        <div className={ContainerWidth}>
          {course.Skill.length != 0 && (
            <>
              <Heading type={5.3} />
              <div className="lg:flex items-center gap-24">
                <div className="grid lg:grid-cols-2 gap-2 mt-4 lg:w-[90%]">
                  {course.Skill.map((values, index) => (
                    <>
                      <div
                        className="bg-white rounded-xl flex items-center gap-[5px] "
                        key={index}
                      >
                        <span className="w-[5%]">
                          <Image
                            src={"/assets/tick.png"}
                            alt="tick"
                            className="mt-2"
                            width={12}
                            height={10}
                          />
                        </span>
                        <p className="text-[#114466] font-semibold mt-1 w-[100%] lg:text-base text-sm ">
                          {values}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default MustToHave;
