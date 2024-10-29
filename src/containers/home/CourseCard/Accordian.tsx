import { CourseCardSource } from "@/utils/responses";
import Link from "next/link";
import Image from "next/image";
import StreamHeading from "./StreamHeading";
import { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";


 const CourseCardAccordion = ({ StreamTab, Clicked }: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isClicked, setisClicked] = useState(1);
  
    const toggleAccordion = (id: number) => {
      setIsOpen(!isOpen);
      setisClicked(id);
    };

  
    return StreamTab.map((values: any ,index : number) => (
      <div className={`accordion ${isOpen ? "open" : ""} lg:hidden block`} key={index}>
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(values.id)}
        >
          <div className="flex flex-col ">
            <button
              className={`text-xl font-semibold smooth-font flex justify-between ${
                isClicked == values.id ? "text-blue-900 " : "text-gray-500"
              } `}
            >
              {values.StreamName}
              <div
                style={{ transition: "transform 0.5s ease-in-out" }}
                className="lg:hidden block"
              >
                {isClicked == values.id && isOpen ? (
                  <HiOutlinePlusSm />
                ) : (
                  <HiOutlineMinusSm />
                )}
              </div>
            </button>
            <span
              className={` h-[2px] mt-4 mb-4 ${
                isClicked == values.id ? "bg-orange-800 " : ""
              }`}
            ></span>
          </div>
        </div>
        <div className="accordion-content">
          {isClicked == values.id && (
            <>
              <div className="lg:hidden block mt-4">
                <StreamHeading Clicked={isClicked} />
                <div className="md:grid md:grid-cols-3 gap-24 mt-10 p-4">
                  {CourseCardSource.map(
                    (values: any) =>
                      isClicked == values.id && (
                        <>
                          {values.course.map((val: any,index : number) => (
                            <div
                              key={index}
                              className="m-auto md:w-[320px] mb-10  courseCardBoxShadow rounded"
                            >
                              <Image
                                src={val.thump_nail}
                                width={350}
                                height={200}
                                alt={val.title}
                                className="md:rounded-none rounded-t-md"
                              />
  
                              <div className=" px-4 pt-5 pb-1">
                                <p className="text-[24px] font-bold text-[#20416e]">
                                  {val.title}
                                </p>
                                <p className="text-[15px]  text-gray-700">
                                  {val.content}
                                </p>
                                <p className="text-[17px]  text-gray-900 font-semibold mt-2">
                                  Duration: {val.duration}
                                </p>
                                <ul className="mt-1 text-[15px]">
                                  {val.spacial.map((i: any, index: any) => (
                                    <li key={index}> + {i}</li>
                                  ))}
                                </ul>


                                <div className="flex justify-between items-center mt-3 mb-2">

                                <Link className="bg-[#f58634] text-white font-normal text-xs text-center p-3 px-4 hover:bg-orange-900 rounded-md" href={"courses/"+val.slug}>VIEW COURSE</Link>

                                <div className={`flex justify-end ${  Clicked ==1  ?  "mb-0" :  "mb-4" }`}>
                                  {
                                  Clicked ==1 &&
                                  <Image
                                    src={"/assets/strip-icon/pro01a.jpg"}
                                    width={120}
                                    alt="pmi"
                                    height={40}
                                  />
                                }
                                </div>
                                </div>


        </div>
                            </div>
                          ))}
                        </>
                      )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    ));
  };

  export default CourseCardAccordion