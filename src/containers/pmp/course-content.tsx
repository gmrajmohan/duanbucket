import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import TopicCovered from "./TopicCovered";
import Link from "next/link";
import CertificateForm from "@/containers/CertificateCourseForm/Form";
// import CourseContext from "@/Context/Course";
import CertificationContext from "@/Context/Certification";
import { useContext } from "react";
import Heading from "@/components/Heading";
interface ContentSec {}

const ContentSec = () => {
  const { scrollToRef } = useContext(CertificationContext);

  return (
    <>
      <div className="m-auto" ref={scrollToRef}>
        <div className={ContainerWidth + " lg:flex gap-20 lg:py-16 py-5"}>
          {/* Left Sec start */}
          <div className="lg:w-[65%] w-[100%]">
            <h1 className="text-[#114466] lg:text-3xl text-xl font-light">
              Are you aspiring to achieve the esteemed{" "}
              <span className="block">
                <span className="font-bold text-[#f58634]">
                  Project Management Professional (PMP)®
                </span>{" "}
                certification?
              </span>
            </h1>
            <Heading  type={5.1} content="Duration:" hr={"40"} /> 
            <p className="text-[#114466] lg:text-[15px] text-sm leading-5 mt-5 font-medium">
              Are you aspiring to achieve the esteemed Project Management
              Professional (PMP)® certification? Join the ranks of the elite!
              Synergy's time-tested training can help you succeed with a
              systematic approach and expert guidance.
            </p>

            <h2 className="lg:text-xl text-md font-bold text-[#114466] mt-10">
              Why Choose Synergy for Your PMP Journey?
            </h2>

            <div className="lg:flex gap-10 text-sm text-[#114466] font-medium">
              {/* 1 */}
              <div className="lg:w-[50%]">
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/pmp/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    Our training covers the latest PMP certification exam
                    content in-depth.
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/pmp/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    We offer a variety of preparation methods, including
                    unlimited mock tests to boost your exposure and confidence.
                  </p>
                </div>
              </div>
              {/* 1 */}

              {/* 2 */}
              <div className="lg:w-[50%]">
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/pmp/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    With a track record of over 95% success in every student
                    batch for the past two decades.
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/pmp/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    We are a Authorized Training Provider recognized by the
                    Project Management Institute (PMI), ensuring the highest
                    educational standards.
                  </p>
                </div>
              </div>
              {/* 2 */}
            </div>

            <h2 className="lg:text-xl text-md font-bold text-[#114466] mt-10">
              Topics Covered
            </h2>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Business Environment</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Start the Project</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Plan the Project</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Lead the Project Team</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Support Project Team Performance</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/pmp/pmp-icon.png"
                alt=""
                title=""
              />
              <p>Close the Project/Phase</p>
            </div>

            {/*  */}
            <div className="lg:flex gap-14 lg:pl-6 lg:mt-4 lg:p-0 p-8">
              <div className="border border-orange-300 border-1 p-3 mt-10">
                <Image
                  className="absolute mt-[-40px] ml-[-40px]"
                  width="50"
                  height="50"
                  src="/assets/images/pmp/icons/bill.png"
                  alt="icons"
                  title="icons"
                />
                <Image
                  className=""
                  width="35"
                  height="50"
                  src="/assets/images/pmp/icons/man.png"
                  alt="icons"
                  title="icons"
                />
                <p className="text-[#114466] mt-2 text-md w-[100%] text-medium leading-6">
                  “The demand for{" "}
                  <span className="font-bold">
                    PMPs is skyrocketing! 33% Job Growth
                  </span>{" "}
                  expected through 2027”
                </p>
              </div>

              <div className="border border-orange-300 border-1 p-3 mt-10">
                <Image
                  className="absolute mt-[-30px] ml-[-50px]"
                  width="50"
                  height="50"
                  src="/assets/images/pmp/icons/bill.png"
                  alt="icons"
                  title="icons"
                />
                <Image
                  className=""
                  width="35"
                  height="50"
                  src="/assets/images/pmp/icons/hand.png"
                  alt="icons"
                  title="icons"
                />
                <p className="text-[#114466] mt-1 text-lg w-[80%] font-bold leading-6">
                  PMPs Earn an Average Salary of $123,000 per Year
                </p>
                <p className="text-[#114466] text-sm leading-5 mt-1 font-medium">
                  Invest in your future! PMPs earn an average salary of $123,000
                  per year, a 32% increase over those who are not certified.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
          {/* Left Sec End */}

          {/* Right Sec start */}
          <div className="lg:w-[35%] w-[90%] m-auto md:mt-0 mt-14">
            <CertificateForm />
            <div className="bg-[#052550] p-6">
              <Image
                className="absolute mt-[-50px] ml-[-50px]"
                width="50"
                height="50"
                src="/assets/images/pmp/icons/ideabulb.png"
                alt="icons"
                title="icons"
              />
              <p className="font-bold mt-2 text-xl text-[#f58634]">
                Did YouKnow?
              </p>
              <p className="text-white font-semibold">
                In the last two decades, Synergy has helped over 25,000
                professionals worldwide obtain their PMP certification.
              </p>
              <p className="font-light text-xs leading-5 text-white">
                Our commitment to custom-tailored training ensures that your
                unique learning needs and pace are addressed, increasing your
                chances of passing the PMP certification on your first attempt.
              </p>
            </div>
          </div>
          {/* Right Sec End */}
        </div>
      </div>
    </>
  );
};
export default ContentSec;
