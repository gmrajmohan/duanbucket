import Image from "next/image";
import { ContainerWidth } from "@/utils/width";
import TopicCovered from "./TopicCovered";
import Link from "next/link";
import CertificateForm from "../CertificateCourseForm/Form";
import CertificationContext from "@/Context/Certification";
import { useContext } from "react";
import Heading from "@/components/Heading";
interface ContentSec {}

const ContentSec = () => {
const {scrollToRef} = useContext(CertificationContext)

  return (
    <>
      <div className="m-auto" ref={scrollToRef}>
        <div className={ContainerWidth + " lg:flex gap-32 lg:py-16 py-5"}>
          {/* Left Sec start */}
          <div className="lg:w-[65%] w-[100%]">
            <h1 className="text-[#012237] lg:text-3xl text-xl font-semibold">
              Synergizing Success with {" "}
              <span className="">
                <span className="font-normal lg:textxl text-[#006AB0] block">
                  CAPM Certification
                </span>{" "}
              </span>
            </h1>
            <Heading  type={5.1} content="Duration:" hr={"24"} /> 

            <p className="text-[#000] lg:text-md text-sm  mt-5 font-medium">
              The Certified Associate in Project Management (CAPM)® certification opens the door to opportunities at every career stage in the field of project management. Join forces with Synergy and secure your certification on your first attempt. Our proven training and expert guidance ensure a straightforward and successful path to CAPM® certification.
            </p>

            <h2 className="lg:text-xl text-md font-bold text-[#114466] mt-10">
              Why Choose Synergy for Your CAPM Journey?
            </h2>

            <div className="lg:flex gap-10 text-sm text-[#000000] font-medium">
              {/* 1 */}
              <div className='lg:w-[50%]'>
                                    <div className='flex items-start mt-5 gap-3'>
                                        <Image width="22" height="20" src="/assets/images/capm/tick.png" alt='' title=''/>
                                        <p className='leading-5'>Our training covers the latest CAPM certification exam content in-depth.</p>
                                    </div>
                                    <div className='flex items-start mt-5 gap-3'>
                                        <Image width="22" height="20" src="/assets/images/capm/tick.png" alt='' title=''/>
                                        <p className='leading-5'>We are a Authorized Training Provider recognized by the Project Management Institute (PMI), ensuring the highest educational standards.</p>
                                    </div>
                                </div>
              {/* 1 */}

              {/* 2 */}
              <div className='lg:w-[50%]'>
                                    <div className='flex items-start mt-5 gap-3'>
                                        <Image width="22" height="20" src="/assets/images/capm/tick.png" alt='' title=''/>
                                        <p className='leading-5'>We offer a variety of preparation methods, including unlimited mock tests, to boost your exposure and confidence.</p>
                                    </div>
                                    <div className='flex items-start mt-5 gap-3'>
                                        <Image width="22" height="20" src="/assets/images/capm/tick.png" alt='' title=''/>
                                        <p className='leading-5'>With a track record of over 95% success in every student batch for the past two decades.</p>
                                    </div>
                                </div>
              {/* 2 */}
            </div>


            <h2 className="lg:text-xl text-md font-bold text-[#114466] mt-10">
              Topics Covered
            </h2>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Introduction to Project Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Environment</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Recognise the hierarchy of projects, programs and portfolios</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Role of the Project Manager</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Integration Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Schedule Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Cost Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Quality Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Resource Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Communication Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Risk Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Procurement Management</p>
            </div>

            <div className="flex gap-5 items-center border p-2 shadow-xs mt-2">
              <Image width="30" height="30" src="/assets/images/capm/capm-icon.png" alt="" title=""/>
              <p>Project Stakeholder Management</p>
            </div>


          </div>
          {/* Left Sec End */}

          

                        {/* Right Sec start */}
                        <div className='lg:w-[35%] w-[90%] m-auto md:mt-0 mt-14'>
                          <CertificateForm/>
                            <div className='bg-[#006AB0] p-6'>
                                <Image className='absolute mt-[-50px] ml-[-50px]' width="50" height="50" src="/assets/images/capm/icons/ideabulb.png" alt='icons' title='icons'/>
                                <p className='font-bold mt-2 text-xl text-[#fff]'>Did YouKnow?</p>
                                <p className='text-white font-medium text-md'>The CAPM® certification can significantly boost your earning potential</p>
                                <p className='font-light text-xs leading-5 text-white'> According to recent statistics, certified project management professionals, including those with CAPM, earn up to 25% more than their non-certified counterparts. So, not only does CAPM enhance your skills, but it also has a substantial impact on your income!</p>
                            </div>

                            <div className='border border-[#0E4468] border-2 p-3 mt-12'>
                                <Image className='absolute mt-[-40px] ml-[-30px]' width="40" height="50" src="/assets/images/capm/icons/increase.png" alt='icons' title='icons'/>
                                <p className='text-[#114466] mt-2 text-md text-medium leading-6'>The global economy will need 250 lakh new project professionals by 2030; in India alone, a total of <span className="text">210 lakh new professionals by 2027</span> - PMI.</p>
                            </div>

                            <div className='border border-[#0E4468] border-2 p-3 mt-12'>
                                <Image className='absolute mt-[-40px] ml-[-30px]' width="40" height="50" src="/assets/images/capm/icons/intrest.png" alt='icons' title='icons'/>
                                <p className='text-[#114466] mt-1 text-lg w-[100%] font-bold leading-6'>Scrum Masters Earn an Average Salary of $95,000 per year.</p>
                                <p className='text-[#114466] text-sm leading-5 mt-1 font-medium md:w-[100%] w-[90%]'>Global average salary of a Scrum Master is around $95,000 per year. Salary can range from $69,000 to $129,000 per year depending on the location, experience, and certification.</p>
                            </div>

                        </div>
                        {/* Right Sec End */}

                    </div>
                </div>
            </>
        );
}
export default ContentSec;
