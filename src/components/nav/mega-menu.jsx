import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { TestLinksTwo } from "@/utils/links";
const MegaMenu = ({
  megaMenuLinks,
  isMegaMenuShown,
  setIsMegaMenuShown,
  HandleNavShowParent,
  Show,
}) => {
  const [TitleIndex, getTitleIndex] = useState(1);
  const [StreamIndex, getStreamIndex] = useState(0);
  const [HoverBg, setHoverBg] = useState(false);
  const [HoverStreamId, setHoverStreamId] = useState();
  const [HoverCourseId, setHoverCourseId] = useState();
  const [ShowMobileCourseList, setShowMobileCourseList] = useState(false);
  const [HandleCouresBoxBg, setHandleCouresBoxBg] = useState(false);
  const [Hide, setHide] = useState(false);
  const [Title, setTitle] = useState("Courses");
  const [windowWidth, setWindowWidth] = useState(null);
  const [position, setPosition] = useState(null);
  const [MenuWidth, setMenuWidth] = useState();
  const [Gap, setGap] = useState();

  const handleCourseIndex = (data, streamid) => {
    setHoverBg(true);
    setHoverCourseId(data);
    setHoverStreamId(streamid);
  };

  const handleMobileCourseIndex = (data, streamid) => {
    setHandleCouresBoxBg(true);
    setHoverCourseId(data);
    setHoverStreamId(streamid);
  };

  const handleShow = () => {
    setShowMobileCourseList((prev) => !prev);
  };

  const hanldeMenushow = () => {
    HandleNavShowParent(false);
  };

  const ProjectArr = [
    {
      id: 1,
      streamId: 1,
      course: "Course on Project Management Concepts",
      courseId: 1,
      url: "course-on-project-management-concepts-training-course",
    },
    {
      id: 2,
      streamId: 1,
      course: "Course on MS Project",
      courseId: 2,
      url: "course-on-microsoft-project-training-course",
    },
    {
      id: 3,
      streamId: 1,
      course: "Course on Primavera Project Management",
      courseId: 3,
      url: "course-on-primavera-project-management-training-course",
    },
    {
      id: 4,
      streamId: 1,
      course: "Course on Primavera Application Administration",
      courseId: 4,
      url: "course-on-primavera-application-administration-training-course",
    },
    {
      id: 5,
      streamId: 1,
      course: "Course on Primavera Scheduling Professional",
      courseId: 5,
      url: "course-on-primavera-scheduling-professional-training-course",
    },
    {
      id: 6,
      streamId: 1,
      course: "Course on Primavera Tracking Professional",
      courseId: 6,
      url: "course-on-primavera-tracking-professional-training-course",
    },
    {
      id: 7,
      streamId: 1,
      course: "Course on Agile with Jira",
      courseId: 7,
      url: "agile-with-jira-training-course",
    },
    {
      id: 8,
      streamId: 1,
      course: "Course on Scrum Master",
      courseId: 8,
      url: "course-on-scrum-master-training-course",
    },
  ];

  const BusinessAccountingandTaxationstartArrOne = [
    {
      id: 1,
      streamId: 2,
      course: "Master Certificate in Business Accounting and Taxation",
      courseId: 1,
      url: "masters-certificate-in-business-accounting-taxation-course-training-course/",
    },
    {
      id: 2,
      streamId: 2,
      course: "Essential in Business Accounting and Taxation",
      courseId: 2,
      url: "essential-in-business-accounting-and-taxation-training-course",
    },
    {
      id: 3,
      streamId: 2,
      course: "Professional in Business Accounting and Taxation",
      courseId: 3,
      url: "professional-in-business-accounting-and-taxation-training-course",
    },
    {
      id: 4,
      streamId: 2,
      course: "Expert in TallyPrime",
      courseId: 4,
      url: "expert-in-tally-prime-training-course",
    },
    {
      id: 5,
      streamId: 2,
      course: "  Expert Certificate in Power BI",
      courseId: 5,
      url: "expert-certificate-in-power-bi-training-course",
    },
  ];
  const ERPTrainingSolutionArr = [
    {
      id: 1,
      streamId: 6,
      course: "SAP S/4HANA Certification program",
      courseId: 1,
      url: "sap-s-4hana-certification-program",
    },
  ];
  const DigitalMarketingArr = [
    {
      id: 1,
      streamId: 3,
      course: " Essential in Digital Marketing",
      courseId: 1,
      url: "essential-in-digital-marketing-training-course",
    },
    {
      id: 2,
      streamId: 3,
      course: "Essential in GMB Listing Masters",
      courseId: 2,
      url: "essential-in-gmb-listing-masters-training-course",
    },
    {
      id: 3,
      streamId: 3,
      course: "Essential in Facebook & Insta pro",
      courseId: 3,
      url: "essential-in-facebook-insta-pro-training-course",
    },
  ];

  const OfficeAutomationArr = [
    {
      id: 1,
      streamId: 4,
      course: "Essential in MS Word",
      courseId: 1,
      url: "significance-of-ms-word",
    },
    {
      id: 2,
      streamId: 4,
      course: "Essential in MS Excel",
      courseId: 2,
      url: "certificate-course-on-ms-excel-training-course",
    },
    {
      id: 3,
      streamId: 4,
      course: "Essential in MS Powerpoint",
      courseId: 3,
      url: "certificate-course-on-ms-powerpoint-training-course",
    },
    {
      id: 4,
      streamId: 4,
      course: "Proficient in Advanced Excel",
      courseId: 4,
      url: "proficient-in-advanced-excel-training-course",
    },
  ];

  const CertificationPrograms = [
    {
      id: 1,
      streamId: 5,
      course: "PMP® Certification Training",
      courseId: 1,
      url: "/pmp/",
    },
    {
      id: 2,
      streamId: 5,
      course: "Scrum Certification Training",
      courseId: 2,
      url: "/scrum/",
    },
    {
      id: 3,
      streamId: 5,
      course: "CAPM® Certification Training",
      courseId: 3,
      url: "/capm/",
    },
  ];


  const MasterProgram = [
    {
      id: 1,
      streamId: 7,
      course: "Master Trainer Certification Program",
      courseId: 1,
      url: "/gl/trainer-program/",
    },
  ]
  const hanldeShow = () => {
    setHide(false);
    Show(false);
  };

  const HandleMobileMenu = (data) => {
    getTitleIndex(data.id);
    setTitle(data.Title);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setPosition(
        newWidth < 1400
          ? "lg:left-[6%]"
          : newWidth < 1500
          ? "lg:left-[5%]"
          : newWidth < 1600
          ? "lg:left-[10%]"
          : "lg:left-[16%]"
      );

      setMenuWidth(
        newWidth < 1400
          ? "lg:w-[90%]"
          : newWidth < 1500
          ? "lg:w-[90%]"
          : newWidth < 1600
          ? "lg:w-[80%]"
          : "lg:w-[70%]"
      );

      setGap(
        newWidth < 1400
          ? "gap-[30px]"
          : newWidth < 1500
          ? "gap-[40px]"
          : newWidth < 1600
          ? "gap-[30px]"
          : "gap-[25px]"
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" container mx-auto w-full lg:mt-0 mt-3 bg-white py-2">
        {/* mobile menu */}

        <div className={`lg:hidden block`}>
          {megaMenuLinks.map((values, index) => (
            <>
              <div className="" key={index}>
                <p
                  className=" group transition-all duration-300 ease-in-out cursor-pointer text-[#1E1E1E] hover:text-black text-[15px] font-normal p-2 flex justify-between"
                  onMouseEnter={() => HandleMobileMenu(values)}
                  onClick={() => handleShow()}
                >
                  <Link
                    className={`bg-left-bottom bg-gradient-to-r from-[#ED1C24] to-[#ED1C24] bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-[#000] font-medium`}
                    href={values.href}
                  >
                    {values.Title}
                  </Link>
                  {values.id == 0 && (
                    <MdKeyboardArrowDown
                      size={25}
                      className={`${
                        ShowMobileCourseList &&
                        `transform rotate-0  hover:rotate-180 cursor-pointer `
                      }`}
                    />
                  )}
                </p>
                {values.id == 0 && Title == "Courses" && (
                  <>
                    <div
                      className={`mobilemenu-wrapper ${
                        ShowMobileCourseList && "active"
                      }`}
                    >
                      {/* Project Management */}
                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(1)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center p-[2px] ${
                            StreamIndex == 1 &&
                            "bg-[#F48632] rounded text-white "
                          }`}
                        >
                          <Image
                            src={"/assets/menu/ProjectManagement.svg"}
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 1 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">
                            Project Management
                          </span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 1 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer`
                            }`}
                          />
                        </div>

                        <ul
                          className={`ProjectManagement   ${
                            StreamIndex == 1 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {ProjectArr.map((values) => (
                            <li
                              className={`flex gap-2 px-6 py-2  items-center text-[13px]  ${
                                HandleCouresBoxBg &&
                                HoverStreamId == values.streamId &&
                                HoverCourseId == values.courseId &&
                                "bg-[#F48632] text-white rounded"
                              }`}
                              key={values.id}
                              onClick={() => {
                                handleMobileCourseIndex(
                                  values.id,
                                  values.streamId
                                );
                              }}
                            >
                              <span>
                                <Image
                                  src={"/assets/menu/arrow.svg"}
                                  width={6}
                                  height={8}
                                  alt={"arr"}
                                />
                              </span>
                              <Link
                                className="font-medium"
                                href={"/courses/" + values.url}
                              >
                                {values.course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Management */}

                      {/* Business Accounting and Taxation */}

                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(2)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center p-[2px] ${
                            StreamIndex == 2 &&
                            "bg-[#F48632] text-white rounded"
                          }`}
                        >
                          <Image
                            src={
                              "/assets/menu/BusinessAccountingandTaxation.svg"
                            }
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 2 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">
                            Business Accounting and Taxation
                          </span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 2 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer `
                            }`}
                          />
                        </div>
                        <ul
                          className={`ProjectManagement ${
                            StreamIndex == 2 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {BusinessAccountingandTaxationstartArrOne.map(
                            (values, index) => (
                              <>
                                <li
                                  className={`flex gap-2 px-6 py-2 items-center text-[13px]  ${
                                    HandleCouresBoxBg &&
                                    HoverStreamId == values.streamId &&
                                    HoverCourseId == values.courseId &&
                                    "bg-[#F48632] text-white rounded"
                                  }`}
                                  key={values.id}
                                  onMouseEnter={() =>
                                    handleMobileCourseIndex(
                                      values.id,
                                      values.streamId
                                    )
                                  }
                                >
                                  <span>
                                    <Image
                                      src={"/assets/menu/arrow.svg"}
                                      width={6}
                                      height={8}
                                      alt="arr"
                                    />
                                  </span>
                                  <Link
                                    className="font-medium"
                                    href={"/courses/" + values.url}
                                  >
                                    {values.course}
                                  </Link>
                                </li>
                              </>
                            )
                          )}
                        </ul>
                      </div>

                      {/*   ERP Solutions Start */}

                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(2)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center  p-[2px] ${
                            StreamIndex == 2 &&
                            "bg-[#F48632] text-white rounded"
                          }`}
                        >
                          <Image
                            src={
                              "/assets/menu/BusinessAccountingandTaxation.svg"
                            }
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 2 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">
                            ERP Solutions
                          </span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 2 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer `
                            }`}
                          />
                        </div>
                        <ul
                          className={`ProjectManagement ${
                            StreamIndex == 2 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {ERPTrainingSolutionArr.map((values, index) => (
                            <>
                              <li
                                className={`flex gap-2 px-6 py-2 items-center text-[13px]  ${
                                  HandleCouresBoxBg &&
                                  HoverStreamId == values.streamId &&
                                  HoverCourseId == values.courseId &&
                                  "bg-[#F48632] text-white rounded"
                                }`}
                                key={values.id}
                                onMouseEnter={() =>
                                  handleMobileCourseIndex(
                                    values.id,
                                    values.streamId
                                  )
                                }
                              >
                                <span>
                                  <Image
                                    src={"/assets/menu/arrow.svg"}
                                    width={6}
                                    height={8}
                                    alt="arr"
                                  />
                                </span>
                                <Link
                                  className="font-medium"
                                  href={"/courses/" + values.url}
                                >
                                  {values.course}
                                </Link>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                      {/*   ERP Solutions End */}

                      {/*   Digital Marketing start */}

                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(3)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center  p-[2px] ${
                            StreamIndex == 3 &&
                            "bg-[#F48632] text-white rounded"
                          }`}
                        >
                          <Image
                            src={"/assets/menu/DigitalMarketing.svg"}
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 3 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">Digital Marketing</span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 3 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer `
                            }`}
                          />
                        </div>
                        <ul
                          className={`ProjectManagement ${
                            StreamIndex == 3 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {DigitalMarketingArr.map((values) => (
                            <li
                              className={`flex gap-2 px-6 py-2 items-center text-[13px]  ${
                                HandleCouresBoxBg &&
                                HoverStreamId == values.streamId &&
                                HoverCourseId == values.courseId &&
                                "bg-[#F48632] text-white rounded"
                              }`}
                              key={values.id}
                              onMouseEnter={() =>
                                handleMobileCourseIndex(
                                  values.id,
                                  values.streamId
                                )
                              }
                            >
                              <span>
                                <Image
                                  src={"/assets/menu/arrow.svg"}
                                  width={6}
                                  height={8}
                                  alt="arrow"
                                />
                              </span>
                              <Link
                                className="font-medium"
                                href={"/courses/" + values.url}
                              >
                                {values.course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/*   Digital Marketing end */}
                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(4)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center  p-[2px] ${
                            StreamIndex == 4 &&
                            "bg-[#F48632] text-white rounded"
                          }`}
                        >
                          <Image
                            src={"/assets/menu/OfficeAutomation.svg"}
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 4 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">Office Automation</span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 4 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer `
                            }`}
                          />
                        </div>
                        <ul
                          className={`ProjectManagement ${
                            StreamIndex == 4 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {OfficeAutomationArr.map((values) => (
                            <li
                              className={`flex gap-2 px-6 py-2 items-center text-[13px]  ${
                                HandleCouresBoxBg &&
                                HoverStreamId == values.streamId &&
                                HoverCourseId == values.courseId &&
                                "bg-[#F48632] text-white rounded"
                              }`}
                              key={values.id}
                              onMouseEnter={() =>
                                handleMobileCourseIndex(
                                  values.id,
                                  values.streamId
                                )
                              }
                            >
                              <span>
                                <Image
                                  src={"/assets/menu/arrow.svg"}
                                  width={6}
                                  height={8}
                                  alt="arrow"
                                />
                              </span>
                              <Link
                                className="font-medium"
                                href={"/courses/" + values.url}
                              >
                                {values.course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Office Automation end */}

                      <div
                        className={`border menu-stream-shadow px-2 py-1   w-[95%] mt-4 mb-4 m-auto box ${
                          ShowMobileCourseList && "box-active"
                        }`}
                        onClick={() => getStreamIndex(5)}
                      >
                        <div
                          className={`flex justify-between gap-5 items-center  p-[2px] ${
                            StreamIndex == 5 &&
                            "bg-[#F48632] text-white rounded"
                          }`}
                        >
                          <Image
                            src={"/assets/menu/CertificationPrograms.svg"}
                            width={35}
                            height={35}
                            className={`p-1 border rounded-[50%] ${
                              StreamIndex == 5 && "bg-white "
                            }`}
                            alt="ProjectManagement"
                          />
                          <span className="text-[14px]">
                            Certification Programs
                          </span>
                          <MdKeyboardArrowDown
                            size={25}
                            className={`${
                              StreamIndex == 5 &&
                              `transform rotate-0  hover:rotate-180 cursor-pointer `
                            }`}
                          />
                        </div>
                        <ul
                          className={`ProjectManagement ${
                            StreamIndex == 5 && "active"
                          }`}
                          onClick={hanldeShow}
                        >
                          {CertificationPrograms.map((values) => (
                            <li
                              className={`flex gap-2 px-6 py-2 items-center text-[13px]  ${
                                HandleCouresBoxBg &&
                                HoverStreamId == values.streamId &&
                                HoverCourseId == values.courseId &&
                                "bg-[#F48632] text-white rounded"
                              }`}
                              key={values.id}
                              onMouseEnter={() =>
                                handleCourseIndex(values.id, values.streamId)
                              }
                            >
                              <span>
                                <Image
                                  src={"/assets/menu/arrow.svg"}
                                  width={6}
                                  height={8}
                                  alt="arr"
                                />
                              </span>
                              <Link
                                className="font-medium"
                                href={"/courses/" + values.url}
                              >
                                {values.course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
        </div>

        {/* mobile menu */}

        {/* desktop menu */}
        <div className="flex justify-center items-center gap-10 ">
          {TestLinksTwo.map((values, index) => (
            <>
              <div className="lg:block hidden" key={index}>
                <p
                  className=" group transition-all duration-300 ease-in-out cursor-pointer text-[#1E1E1E] hover:text-black text-[16px] font-normal"
                  onMouseEnter={() => getTitleIndex(values.id)}
                >
                  {values.id == 0 && (
                    <span
                      className={` 
                    text-[#000] hover:text-[#F48632] font-medium pb-20 pl-20
                    
                    `}
                    >
                      {values.Title} <br />
                      <span className="flex justify-end  bg-left-bottom bg-gradient-to-r from-[#134364] to-[#134364] bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out p-1 w-[60px] float-right -mt-2 -mr-1"></span>
                    </span>
                  )}
                  {values.id != 0 && (
                    <a
                      href={values.href}
                      className={`bg-left-bottom bg-gradient-to-r from-[#134364] to-[#134364] bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-[#000] 
                       hover:text-[#F48632] font-medium`}
                    >
                      {values.Title}
                    </a>
                  )}
                </p>
              </div>
            </>
          ))}
        </div>

        {isMegaMenuShown && TitleIndex == 0 && (
          <div
            className={`lg:py-4 px-6 mt-2 absolute bg-white ${position} ${MenuWidth} lg:flex justify-between  top-[83px] hidden shadow-lg `}
          >
            <>
              <div
                className={`font-medium text-[15px] flex justify-center w-[100%] ${Gap} py-2 mx-0`}
              >
                <div>
                  {/* Project Management start */}
                  <div className="px-0 flex gap-3 items-center w-[100%]">
                    <Image
                      src={"/assets/menu/icons/ProjectManagement.svg"}
                      width={50}
                      height={50}
                      className=""
                      alt="ProjectManagement"
                    />
                    <span className="text-[#012237] font-semibold text-[16px]">
                      Project Management
                    </span>
                  </div>
                  <ul className="mt-1">
                    {ProjectArr.map((values, index) => (
                      <Link
                        className={`flex gap-2 px-2 py-1  items-center text-[14px] font-normal  ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId &&
                          "bg-[#F48632] text-white "
                        }`}
                        key={values.id}
                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        
                        href={"/courses/" + values.url}
                        onClick={hanldeMenushow}
                      >
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <li
                         
                        >
                          {values.course}
                        </li>
                      </Link>
                    ))}

                    {/* Project Management end*/}

                    {/* Digital Marketing start */}
                    <li className="flex gap-2  py-1 items-center text-[15px]">
                      <div className="px-0 flex gap-3 items-center w-[100%]">
                        <Image
                          src={"/assets/menu/icons/ProjectManagement.svg"}
                          width={50}
                          height={50}
                          className=""
                          alt="ProjectManagement"
                        />
                        <span className="text-[#012237] font-semibold text-[16px]">
                          Digital Marketing
                        </span>
                      </div>
                    </li>
                    {DigitalMarketingArr.map((values) => (
                      <Link
                        className={`flex gap-2 px-2 py-1 items-center text-[14px] w-[100%] m-auto font-normal ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId &&
                          "bg-[#F48632] text-white "
                        }`}
                        // className="font-normal"
                          href={"/courses/" + values.url}
                        key={values.id}
                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        onClick={hanldeMenushow}
                      >
                        {/* professional-in-business-accounting-and-taxation-training-course */}
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <Link
                          className="font-normal"
                          href={"/courses/" + values.url}
                        >
                          {values.course}
                        </Link>
                      </Link>
                    ))}

                    {/* Digital Marketing end */}
                  </ul>
                </div>
                <span className="h-auto p-[1px] bg-gray-200"></span>

                <div>
                  <ul>
                    {/* Business Accounting and Taxation start*/}

                    <li className="flex gap-2 py-0 items-center text-[15px]">
                      <div className="px-0 py-0 flex gap-3 items-center w-[100%] mt-1">
                        <Image
                          src={
                            "/assets/menu/icons/BusinessAccountingandTaxation.svg"
                          }
                          width={50}
                          height={50}
                          className=""
                          alt="BusinessAccountingandTaxation"
                        />
                        <span className="text-[#012237] font-semibold text-[16px]">
                          Business Accounting and Taxation
                        </span>
                      </div>
                    </li>
                    {BusinessAccountingandTaxationstartArrOne.map(
                      (values, index) => (
                        <>
                          {values.id <= 5 && (
                            <Link
                            
                              className={`flex gap-2 px-2 mx-[4px] py-1 items-center text-[14px] font-normal  ${
                                HoverBg &&
                                HoverStreamId == values.streamId &&
                                HoverCourseId == values.courseId &&
                                "bg-[#F48632] text-white "
                              } ${index == 0 && ""}`}
                              key={values.id}
                              href={"/courses/" + values.url}
                              onMouseEnter={() =>
                                handleCourseIndex(values.id, values.streamId)
                              }
                              onClick={hanldeMenushow}
                            >
                              <span>
                                <BiSolidRightArrow
                                  key={values.id}
                                  className={`w-[9px] h-[9px] border-none  ${
                                    HoverBg &&
                                    HoverStreamId == values.streamId &&
                                    HoverCourseId == values.courseId
                                      ? " text-white"
                                      : "text-gray-400"
                                  }`}
                                />
                              </span>
                              <Link
                                 href={"/courses/" + values.url}
                              >
                                {values.course}
                              </Link>
                            </Link>
                          )}
                        </>
                      )
                    )}

                    {/* ERP Training Solutions start */}
                    <li className="flex gap-2 px-1 py-1 items-center text-[15px]">
                      <div className="px-0 py-0 flex gap-3 items-center w-[100%]">
                        <Image
                          src={"/assets/menu/icons/ERP.svg"}
                          width={50}
                          height={50}
                          className=""
                          alt="DigitalMarketing"
                        />
                        <span className="text-[#012237] font-semibold text-[16px]">
                          ERP Solutions
                        </span>
                      </div>
                    </li>
                    {ERPTrainingSolutionArr.map((values) => (
                      <Link
                        className={`flex gap-2 px-2 py-1 items-center text-[14px] w-[100%] m-auto font-normal ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId &&
                          "bg-[#F48632] text-white "
                        }`}
                        key={values.id}
                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        href={"/courses/" + values.url}

                        onClick={hanldeMenushow}
                      >
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <Link
                          className="font-normal"
                          href={"/courses/" + values.url}
                        >
                          {values.course}
                        </Link>
                      </Link>
                    ))}

                    {/* ERP Training Solutions start */}

                    {/* Business Accounting and Taxation end*/}

                    {/* Office Automation start */}
                    <li className="flex gap-2 py-1 items-center text-[15px]">
                      <div className="px-0 py-0 flex gap-3 items-center w-[100%] ">
                        <Image
                          src={"/assets/menu/icons/OfficeAutomation.svg"}
                          width={50}
                          height={50}
                          className=""
                          alt="OfficeAutomation"
                        />
                        <span className="text-[#012237] font-semibold text-[16px]">
                          Office Automation
                        </span>
                      </div>
                    </li>
                    {OfficeAutomationArr.map((values) => (
                      <Link
                        className={`flex gap-2 px-2 py-1 items-center text-[14px] w-[100%] m-auto font-normal ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId &&
                          "bg-[#F48632] text-white "
                        }`}
                        key={values.id}
                        href={"/courses/" + values.url}

                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        onClick={hanldeMenushow}
                      >
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <Link
                          href={"/courses/" + values.url}
                          className="font-normal"
                        >
                          {values.course}
                        </Link>
                      </Link>
                    ))}
                  </ul>
                </div>
                <span className="h-auto p-[1px] bg-gray-200"></span>

                <div>

                    {/* Trainer Program */}
                    <li className="flex gap-2 py-1 items-center text-[15px]">
                      <div className="py-0 flex gap-3 items-center w-[100%]">
                        <Image
                          src={"/assets/menu/Indian-Academy-of-Training-Development.svg"}
                          width={50}
                          height={50}
                          className=""
                          alt="Master Training"
                        />
                        <span className="text-[#012237] font-semibold text-[16px]">
                          Indian Academy of Training & Development
                        </span>
                      </div>
                    </li>
                    {MasterProgram.map((values) => (
                      <Link
                        className={`flex gap-2 px-2 py-1 items-center text-[14px] w-[100%] m-auto font-normal mb-3 ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId &&
                          "bg-[#F48632] text-white "
                        }`}
                        key={values.id}
                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        href={values.url}
                        onClick={hanldeMenushow}
                      >
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <Link
                          className="font-normal"
                          href={values.url}
                        >
                          {values.course}
                        </Link>
                      </Link>
                    ))}

                    {/* Trainer Program */}

                <div className="bg-[#082E45] mx-2 w-[380px]">
                  <ul className="py-6 px-4">
                    <li className="flex gap-2  items-center text-[16px]  ">
                      <div className="  px-4 py-1 flex gap-5 items-center w-full  text-white">
                        <Image
                          src={"/assets/menu/icons/CertificationPrograms.svg"}
                          width={40}
                          height={40}
                          className=""
                          alt="CertificationPrograms"
                        />
                        <span>Certification Programs</span>
                      </div>
                    </li>

                    {CertificationPrograms.map((values) => (
                      <Link
                        className={`flex gap-2 px-2 py-1  mx-5 items-center text-[14px] font-normal ${
                          HoverBg &&
                          HoverStreamId == values.streamId &&
                          HoverCourseId == values.courseId
                            ? "bg-[#F48632]  text-white"
                            : "text-white"
                        } ${values.id == 1 && ""}`}
                        key={values.id}
                        onMouseEnter={() =>
                          handleCourseIndex(values.id, values.streamId)
                        }
                        href={values.url}
                        onClick={hanldeMenushow}
                      >
                        <span>
                          <BiSolidRightArrow
                            key={values.id}
                            className={`w-[9px] h-[9px] border-none  ${
                              HoverBg &&
                              HoverStreamId == values.streamId &&
                              HoverCourseId == values.courseId
                                ? " text-white"
                                : "text-gray-400"
                            }`}
                          />
                        </span>
                        <Link className="font-normal" href={values.url}>
                          {values.course}
                        </Link>
                      </Link>
                    ))}

                    <li className="bg-[#F48632] mt-5 p-[1px] w-[30%] m-auto"></li>
                    <li className=" mt-4 text-[19px] text-white text-center">
                      <span>Our Courses are Certified by</span>
                    </li>
                    <li className=" mt-4 px-2">
                      <span className="flex gap-4 justify-center">
                        <Image
                          src={"/assets/menu/PMP.svg"}
                          width={110}
                          height={70}
                          alt="pmp"
                        />
                        <Image
                          src={"/assets/menu/oracle.svg"}
                          width={110}
                          height={70}
                          alt="oracle"
                        />
                      </span>
                      <span className="flex justify-center mt-4">
                        <Image
                          src={"/assets/menu/Scrum.svg"}
                          width={110}
                          height={70}
                          alt="Scrum"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default MegaMenu;
