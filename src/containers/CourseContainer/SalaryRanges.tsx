import Image from "next/image";
import type { FC } from "react";
import { CourseInterface } from "./type";

const SalaryRanges: FC<CourseInterface> = ({ course }: any) => {
  return (
    <>
      <div className="border-[1px]  bg-[#114466] lg:flex items-center lg:mt-16 mt-10 lg:px-10 px-4 py-8">
        <div className="lg:flex lg:gap-14 items-center justify-between">
          <div className={`lg:flex gap-2  ${  course.MinSalary &&
            !course.MinSalary.includes("null") &&
            course.MinSalary &&
            !course.MinSalary.includes("null") &&
            course.MaxSalary &&
            !course.MaxSalary.includes("null") ? "lg:w-[40%]" : " lg:w-[100%]"}`}>
            <div className="lg:w-[30%] lg:mb-0 mb-4">
              <Image
                src={"/assets/icons/save-money.png"}
                alt="save money"
                height={50}
                width={60}
              />
            </div>
            <div>
              <p className="text-[24px] font-semibold text-orange-600 ">
                Salary Range in India
              </p>
              <p className="text-white text-[15px] font-normal lg:text-base text-sm">
                Indicative earning potential for Primavera professionals in
                India, depending on job positions:
              </p>
            </div>
          </div>

          {course.MinSalary &&
            !course.MinSalary.includes("null") &&
            course.MinSalary &&
            !course.MinSalary.includes("null") &&
            course.MaxSalary &&
            !course.MaxSalary.includes("null") && (
              <div className="lg:flex gap-10 items-center">
                <div className="lg:flex gap-12 lg:m-2 items-center lg:mt-0 mt-4">
                  <div className="lg:mt-0 mt-2">
                    {course.MinSalary && !course.MinSalary.includes("null") && (
                      <>
                        <p className="font-bold text-white lg:text-xl">
                          Rs.{course.MinSalary}
                        </p>
                        <p className="text-white font-normal lg:text-[19px] ">
                          Entry-Level
                        </p>
                      </>
                    )}
                  </div>
                  {course.MinSalary && !course.MinSalary.includes("null") && (
                    <div className="bg-orange-600 h-14 p-[0.7px] lg:block hidden"></div>
                  )}

                  <div className="lg:mt-0 mt-2">
                    {course.MidSalary && !course.MidSalary.includes("null") && (
                      <>
                        <p className="font-bold text-white lg:text-xl">
                          Rs.{course.MidSalary} 
                        </p>
                        <p className="text-white font-normal lg:text-[19px]">
                          Mid-Level
                        </p>
                      </>
                    )}
                  </div>
                  {course.MaxSalary && !course.MaxSalary.includes("null") && (
                    <div className="bg-orange-600 h-14 p-[0.7px] lg:block hidden"></div>
                  )}
                  <div className="lg:mt-0 mt-2">
                    {course.MaxSalary && !course.MaxSalary.includes("null") && (
                      <>
                        <p className="font-bold text-white lg:text-xl">
                          Rs.{course.MaxSalary}
                        </p>

                        <p className="text-white font-normal lg:text-[19px]">
                          Senior-Level
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};
export default SalaryRanges;
