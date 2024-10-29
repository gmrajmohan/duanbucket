import React from "react";
import { ContainerWidth } from "@/utils/width";
import Heading from "@/components/Heading";
import Image from "next/image";
function Contentunder() {
  const DistributionOfQuestionsAcrossDomains = [
    {
      content: "Initiating (the project):",
      percentage: "13%",
    },
    {
      content: "Planning (the project):",
      percentage: "24%",
    },
    {
      content: "Executing (the project):",
      percentage: "31%",
    },
    {
      content: "Monitoring and Controlling (the project):",
      percentage: "25%",
    },
    {
      content: "Closing (the project):",
      percentage: "7%",
    },
  ];

  const ProjectManagement = [
    "PM Certifications",
    "PMP® Exam Preparatory Regular",
    "CAPM® Exam Preparatory Training",
    "Project Management Elite",
    "Scrum Certification",
  ];

  const PMTools = [
    "Master Diploma in PPM",
    "Diploma in PPM",
    "Foundation Program",
    "Microsoft Project",
  ];

  const PMOraclePrimaveraEnterprise = [
    "Primavera Complete",
    "Primavera Advanced",
    "Primavera Foundation",
    "Primavera Scheduling Professional",
    "Primavera Tracking Professional",
    " Primavera Application Administration",
    "PMP® Certification!",
  ];
  return (
    <div className={ContainerWidth + ""}>
      <div className="lg:flex gap-10">
        <div className="lg:w-[60%] ">
        <Heading type={11}/>
          <p className="font-medium text-[#114466]">
            Our question bank within Benchmark is meticulously crafted by PMP®
            Certified Professionals, and it's meticulously updated to align with
            the latest standards, including the Project Management Body of
            Knowledge (PMBOK® Guide)—Seventh Edition, Project Management
            Institute, Inc., 2018. This guide sets the industry standards for
            terminology and guidelines in the field.
          </p>
          <Heading type={12} content="Benchmark Highlights" />
          <p className="font-medium text-[#114466]">
            Engaging with Benchmark's online mock tests provides a valuable
            opportunity to assess your readiness for the Project Management
            Professional (PMP)® exam. These tests not only evaluate your
            preparedness but also play a supportive role in your overall study
            and preparation. They offer insights into the certification process,
            helping you build confidence and a deeper understanding of the PMP®
            exam journey.
          </p>
          <Heading
            type={13}
            content="Benchmark's mock tests mirror the precise composition of questions found in the Project Management Professional (PMP)® exam. "
          />
          <Heading
            type={14}
            content="The distribution of questions across domains is as follows:"
          />
          <ul className="">
            {DistributionOfQuestionsAcrossDomains.map((values) => (
              <li className="flex items-center gap-4 p-1 font-medium text-[#255170]">
                <Image
                  src="/assets/tick.png"
                  width={10}
                  height={5}
                  alt="tick"
                  className="w-3 h-3"
                />
                <span>{values.content} <span className="font-bold">{values.percentage}</span></span>
              </li>
            ))}
          </ul>
          <p className="font-medium mt-5 text-[#255170]">
            This accurate representation ensures that your mock test experience
            aligns with the structure of the actual PMP® exam
          </p>
          <Heading type={12} content="Benchmark Pricing " />
          <p className="font-medium text-[#114466]">
            Benchmark's mock tests are complimentary for participants in
            Synergy's Project Management Professional (PMP)® Regular Preparatory
            course for 60 days. Others can access the Benchmark portal by
            choosing from the following subscription plans:
          </p>
        </div>
        <div className="lg:w-[40%] mx-auto lg:mt-0 mt-10">
          <Heading type={15} content="Project Management Courses" />
          <div className="p-[1px] bg-[#f58634] lg:w-[80%] m-auto mt-4 text-center"></div>
          <div className="lg:px-12">
            <Heading type={16} content="Project Management" />
            <ul className="list-disc ml-5 font-medium text-[#255170]">
              {ProjectManagement.map((values) => (
                <li className="text-sm mt-1 font-medium text-[#255170]">
                  {values}
                </li>
              ))}
            </ul>

            <Heading type={16} content="PM Tools" />
            <ul className="list-disc ml-5 font-medium text-[#255170]">
              {PMTools.map((values) => (
                <li className="text-sm mt-1 font-medium text-[#255170]">
                  {values}
                </li>
              ))}
            </ul>

            <Heading type={16} content="PM - Oracle Primavera Enterprise" />
            <ul className="list-disc ml-5 font-medium text-[#255170]">
              {PMOraclePrimaveraEnterprise.map((values) => (
                <li className="text-sm mt-1 font-medium text-[#255170]">
                  {values}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contentunder;
