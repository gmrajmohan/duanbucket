import { useState, type FC } from "react";
import TopicCovered from "./TopicCovered";
import Heading from "@/components/Heading";
// import { SlNote } from 'react-icons/sl';
import { IoChevronDown } from "react-icons/io5";
import { CourseInterface } from "./type";

interface FAQType {
  question: string;
  answer: string;
}
interface FAQProps {}

const FAQ: FC<CourseInterface> = ({course}) => {
  const [Accordian, setAccordian] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const ActiveAccordian = (index: number) => {
    setAccordian((prev) => !prev);
    setActiveIndex(index);
  };

  const CentreAndCourseDatas = [
    {
      question: "Q1. Common questions title or topic here ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "Q2. Common questions title or topic here ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "Q3. Common questions title or topic here",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "Q4. Common questions title or topic here",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];

  return (
    <>
    <div className={`${course.CareerPath.length == 1 && "lg:mt-20 mt-10"  }`} >{ }</div>
      <Heading type={5.4} />
      <div className="mb-20">
      {CentreAndCourseDatas.map((values: FAQType, index: number) => (
        <>
          <div
            className={`lg:w-[75%] w-[100%] m-auto mt-6 ${
              ActiveIndex == index && "bg-[#05234f] "
            }  px-10 py-1 rounded-xl shadow-lg mb-0 faqbox`}
          >
            <div
              className={`flex items-center justify-between  virutal-course-title py-1 ${
                ActiveIndex == index && "active"
              }  rounded-t lg:gap-20 `}
              onClick={() => ActiveAccordian(index)}
            >
              <p
                className={`lg:text-[22px] text-[20px] ${
                  ActiveIndex == index ? "text-white font-normal" : " text-[#05234f] font-normal cursor-pointer"
                }`}
              >
                {values.question}
              </p>
              <div>
                <IoChevronDown
                  size={30}
                  className={`${
                    ActiveIndex == index ? "text-white " : "text-[#114466]"
                  }`}
                />
              </div>
            </div>

            <div
              className={`accordion-content-topic-covered  text-white  ${
                ActiveIndex == index && "active mb-4"
              }`}
            >
              <p className="py-1">{values.answer}</p>
            </div>
          </div>
        </>
      ))}
      </div>
    </>
  );
};
export default FAQ;
