import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import TopicCovered from "./TopicCovered";
import Link from "next/link";
import Form from "../CertificateCourseForm/Form";
import CertificationContext from "@/Context/Certification";
import { useContext } from "react";
import Heading from "@/components/Heading";
interface ContentSec {}

const ContentSec = () => {
  const { scrollToRef } = useContext(CertificationContext);
  return (
    <>
      <div className="m-auto" ref={scrollToRef}>
        <div className={ContainerWidth + " lg:flex gap-32 lg:py-16 py-5"}>
          {/* Left Sec start */}
          <div className="lg:w-[65%] w-[100%]">
            <h1 className="text-[#FF3654] lg:text-3xl text-xl font-semibold">
              Scrum Master Certified (SMC®){" "}
              <span className="">
                <span className="font-normal lg:textxl text-[#144667]">
                  certification from SCRUMstudy&trade;
                </span>{" "}
              </span>
            </h1>
            <Heading  type={5.1} content="Duration:" hr={"16"} /> 

            <p className="text-[#000] lg:text-md text-sm  mt-5 font-medium">
              Seize international career opportunities in project management by
              obtaining the globally acclaimed Scrum certification. Synergy's
              experienced trainers are here to educate, mentor, and assist you
              in successfully passing the Scrum Preparatory exam and gaining the
              valuable Scrum Master Certified (SMC®) certification from
              SCRUMstudy™. The exam comprises 50 multiple-choice questions,
              requiring a minimum of 37 correct answers within a 60-minute
              timeframe.
            </p>

            <h2 className="lg:text-xl text-md font-bold text-[#114466] mt-10">
              Why Choose Synergy for Your Scrum Certification preparation?
            </h2>

            <div className="lg:flex gap-10 text-sm text-[#000000] font-medium">
              {/* 1 */}
              <div className="lg:w-[50%]">
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    Our training covers the latest Scrum certification exam
                    content in-depth.
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    With a track record of over 95% success in every student
                    batch for the past two decades
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    16 PMI PDUs upon completion of course
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    Case studies for better understanding of concepts
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
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    We offer a variety of preparation methods, including
                    unlimited mock tests to boost your exposure and confidence.
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    Authorised training partner of SCRUMstudy™
                  </p>
                </div>
                <div className="flex items-start mt-5 gap-3">
                  <Image
                    width="22"
                    height="20"
                    src="/assets/images/scrum/tick.png"
                    alt=""
                    title=""
                  />
                  <p className="leading-5">
                    Examination voucher for SMC certification
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
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Agile and Scrum Overview</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Scrum Roles</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Scrum Principle</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Scrum Processes</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Scrum Project Phases</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image
                width="30"
                height="30"
                src="/assets/images/scrum/scrum-icon.png"
                alt=""
                title=""
              />
              <p>Scaling Scrum</p>
            </div>
          </div>
          {/* Left Sec End */}

          {/* Right Sec start */}
          <div className="lg:w-[35%] w-[90%] m-auto md:mt-0 mt-14">
            <Form />
            <div className="bg-[#052550] p-6">
              <Image
                className="absolute mt-[-50px] ml-[-50px]"
                width="50"
                height="50"
                src="/assets/images/scrum/icons/ideabulb.png"
                alt="icons"
                title="icons"
              />
              <p className="font-bold mt-2 text-xl text-[#fff]">Did YouKnow?</p>
              <p className="text-white font-medium text-md">
                In the last two decades, Synergy has helped over 25,000
                professionals worldwide obtain their PMP certification.
              </p>
              <p className="font-light text-xs leading-5 text-white">
                Our commitment to custom-tailored training ensures that your
                unique learning needs and pace are addressed, increasing your
                chances of passing the PMP certification on your first attempt.
              </p>
            </div>

            <div className="border border-pink-300 border-2 p-3 mt-10">
              <Image
                className="absolute mt-[-40px] ml-[-40px]"
                width="40"
                height="50"
                src="/assets/images/scrum/icons/increase.png"
                alt="icons"
                title="icons"
              />
              <p className="text-[#114466] mt-1 text-md text-medium leading-5">
                There are over 9,00,000 professional Scrum certifications held
                globally. <b>Scrum jobs will increase at a rate of 24%</b> every
                year through 2026!
              </p>
            </div>

            <div className="border border-pink-300 border-2 p-3 mt-8">
              <Image
                className="absolute mt-[-30px] ml-[-30px]"
                width="35"
                height="50"
                src="/assets/images/scrum/icons/intrest.png"
                alt="icons"
                title="icons"
              />
              <p className="text-[#114466] mt-1 text-lg w-[100%] font-bold leading-6">
                Scrum Masters Earn an Average Salary of $95,000 per year.
              </p>
              <p className="text-[#114466] text-sm leading-5 mt-1 font-medium md:w-[100%] w-[90%]">
                Global average salary of a Scrum Master is around $95,000 per
                year. Salary can range from $69,000 to $129,000 per year
                depending on the location, experience, and certification.
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
