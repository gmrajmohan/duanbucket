import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import Link from "next/link";
import { useState } from "react";

interface ProgramSec {}

const OtherPrograms = () => {
  const [isReady, setIsReady] = useState(false);
  const onLoadCallback = () => {
    setIsReady(true);
  };
  return (
    <>
      <div className="bg-[#f0f0f0] lg:py-10 py-10">
        <div className={ContainerWidth}>
          <h2 className="text-3xl text-[#0990bb] mb-5 lg:text-left text-center font-semibold mt-5">
          Leading Certification Preparation Programs
          </h2>
          <div className="lg:flex">
            <div className="lg:flex  justify-between m-auto lg:gap-x-5 lg:gap-10 gap-5 mt-10">
              <div className="m-auto md:w-[320px] mb-10  courseCardBoxShadow rounded">
                <Image
                  src={
                    "/assets/course/thumb/camp.jpg"
                  }
                  width={350}
                  height={200}
                  alt={"Course-on-Primavera-Project-Management"}
                  className={`bg-gray-400 transition md:rounded-t-lg  duration-1000 w-[100%]  ${
                    isReady
                      ? "scale-100 bg-gray-400 blur-0"
                      : "scale-120 blur-xl "
                  }`}
                  onLoad={onLoadCallback}
                  priority
                />

                <div className=" px-4 pt-5 pb-1">
                  <div className="min-h-[50px]">
                    <Link
                      className="text-[20px] font-bold text-[#114466] leading-[22px] "
                      href={"/capm/"}
                    >
                      CAPM® Certification Training
                    </Link>
                  </div>
                  <p className="text-[15px] leading-[20px] text-gray-700 min-h-[30px]" >
                        Certification program
                  </p>

                  
                  <p className="text-[17px] text-gray-900 font-semibold">Duration: 24 Hrs</p>
                  <ul className="text-[15px]">
                    <li>World-class courseware</li>
                    <li>Project Based Assessment</li>
                    <li>Industry recognized certificate</li>
                  </ul>

                  <div className="flex justify-between items-center mt-3 ">
                    <Link className="bg-[#f58634] block w-[120px] text-white font-normal text-xs text-center p-3 px-4 mt-2 mb-2 hover:bg-orange-900 rounded-md" href="/capm/">VIEW COURSE</Link>
                    <Image width={120} height={40} src="/assets/strip-icon/pro01a.jpg" alt="pmi" title="pmi"/>
                  </div>


                </div>
              </div>
            </div>

            <div className="lg:flex justify-between m-auto lg:gap-x-5 lg:gap-10 gap-5 mt-10">
              <div className="m-auto md:w-[320px] mb-10  courseCardBoxShadow rounded">
                <Image
                  src={
                    "/assets/course/thumb/pmp.jpg"
                  }
                  width={350}
                  height={200}
                  alt={"Course-on-Primavera-Project-Management"}
                  className={`bg-gray-400 transition md:rounded-t-lg  duration-1000 w-[100%]  ${
                    isReady
                      ? "scale-100 bg-gray-400 blur-0"
                      : "scale-120 blur-xl "
                  }`}
                  onLoad={onLoadCallback}
                  priority
                />

                <div className=" px-4 pt-5 pb-1">
                  <div className="min-h-[50px]">
                    <Link
                      className="text-[20px] font-bold text-[#114466] leading-[22px] "
                      href={"/pmp/"}
                    >
                      PMP® Certification Training
                    </Link>
                  </div>
                  <p className="text-[15px] leading-[20px] text-gray-700 min-h-[30px]" >
                  Certification program
                      </p>
                  
                  <p className="text-[17px] text-gray-900 font-semibold">Duration: 40 Hrs</p>
                  <ul className="text-[15px]">
                    <li>World-class courseware</li>
                    <li>Project Based Assessment</li>
                    <li>Industry recognized certificate</li>
                  </ul>

                  <div className="flex justify-between items-center mt-3 ">
                  <Link className="bg-[#f58634] block w-[120px] text-white font-normal text-xs text-center p-3 px-4 mt-2 mb-2 hover:bg-orange-900 rounded-md" href="/pmp/">VIEW COURSE</Link>
                  <Image width={120} height={40} src="/assets/strip-icon/pro01a.jpg" alt="pmi" title="pmi"/>
                  </div>

                </div>
              </div>
            </div>

            <div className="lg:flex justify-between m-auto lg:gap-x-5 lg:gap-10 gap-5 mt-10">
              <div className="m-auto md:w-[320px] mb-10  courseCardBoxShadow rounded">
                <Image
                  src={
                    " /assets/course/thumb/scrum.jpg"
                  }
                  width={350}
                  height={200}
                  alt={"Course-on-Primavera-Project-Management"}
                  className={`bg-gray-400 transition md:rounded-t-lg  duration-1000 w-[100%]  ${
                    isReady
                      ? "scale-100 bg-gray-400 blur-0"
                      : "scale-120 blur-xl "
                  }`}
                  onLoad={onLoadCallback}
                  priority
                />

                <div className=" px-4 pt-5 pb-1">
                  <div className="min-h-[50px]">
                    <Link
                      className="text-[20px] font-bold text-[#114466] leading-[22px] "
                      href={"courses/"}
                    >
                      Scrum Certification Training
                    </Link>
                  </div>
                  <p className="text-[15px] leading-[20px] text-gray-700 min-h-[30px]" >
                  Certification program
                      </p>
                  <p className="text-[17px] text-gray-900 font-semibold">Duration: 16 Hrs</p>
                  <ul className="text-[15px]">
                    <li>World-class courseware</li>
                    <li>Project Based Assessment</li>
                    <li>Industry recognized certificate</li>
                  </ul>

                  
                  <div className="flex justify-between items-center mt-3 ">
                  <Link className="bg-[#f58634] block w-[120px] text-white font-normal text-xs text-center p-3 px-4 mt-2 mb-2 hover:bg-orange-900 rounded-md" href="/scrum/">VIEW COURSE</Link>
                  <Image width={120} height={40} src="/assets/strip-icon/pro01a.jpg" alt="pmi" title="pmi"/>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherPrograms;
