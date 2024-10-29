import { useState, type FC } from "react";
import Heading from "@/components/Heading";
import { AiOutlinePlus } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
interface TopicCoveredProps {}

interface FAQ {
  question: string;
  answer: string;
}

const TopicCovered: FC<TopicCoveredProps> = ({}) => {
  const [Accordian, setAccordian] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const ActiveAccordian = (index: number) => {
    setAccordian((prev) => !prev);
    setActiveIndex(index);
  };

  const CentreAndCourseDatas = [
    {
      question: "Project integration management ",
      answer:
        "Project management is a complex discipline that requires a holistic approach to ensure successful business outcomes. At the heart of every project lies the need for integration, which involves harmonizing various project elements and aligning them towards a common goal.",
    },
    {
      question: "Project integration management ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
        question: "Project integration management ",
        answer:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      },
      {
        question: "Project integration management ",
        answer:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      },
      {
        question: "Project integration management ",
        answer:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      },
      {
        question: "Project integration management ",
        answer:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      },
      {
        question: "Project integration management ",
        answer:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      },
  ];

  return (
    <>
      <Heading content="Topics Covered" type={9} />
      {CentreAndCourseDatas.map((values: FAQ, index: number) => (
        <>
        <div className="w-[100%] mt-5">
          <div
            className={`accordion-icon flex items-center md:p-3 p-2 virutal-course-title  ${
            ActiveIndex == index && "active"
            }  rounded-t md:gap-5 gap-2 px-8 `}
            onClick={() => ActiveAccordian(index)}
          >
            <div>
              <SlNote size={30} className={`${ActiveIndex == index ? "text-[#f58634] " : "text-[#114466]"}`} />
            </div>

            <p className={`md:text-[20px] text-[16px] cursor-pointer font-bold text-[#114466]`}>{values.question}</p>
        
          </div>
          
          <div
            className={`accordion-content-topic-covered  ${
             ActiveIndex == index && "active"
            }`}
          >
            <p className="px-10 text-sm text-[#114466] font-medium md:ml-10">{values.answer}</p>
          </div>
          <div className="w-content bg-[#f58634] p-[0.1px]"></div>
          </div>
        </>
      ))}
    </>
  );
};
export default TopicCovered;
