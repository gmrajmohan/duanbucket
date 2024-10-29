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
      question: "project integration management ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "project integration management ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "project integration management ",
      answer:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];

  return (
    <>
      <Heading content="Topics Covered" type={9} />
      {CentreAndCourseDatas.map((values: FAQ, index: number) => (
        <>
          <div className="w-[75%]">
            <div
              className={`accordion-icon flex items-center p-3 virutal-course-title  ${
               ActiveIndex == index && "active"
              }  rounded-t gap-20 px-8 `}
              onClick={() => ActiveAccordian(index)}
            >
              <div>
                <SlNote
                  size={30}
                  className={`${
                     ActiveIndex == index
                      ? "text-[#f58634] "
                      : "text-[#114466]"
                  }`}
                />
              </div>

              <p className={`text-[24px] font-bold text-[#114466]`}>
                {values.question}
              </p>
            </div>

            <div
              className={`accordion-content-topic-covered mb-4  ${
                ActiveIndex == index && "active"
              }`}
            >
              <p className="px-36 py-4">{values.answer}</p>
            </div>
            <div className="w-content bg-[#f58634] p-[0.1px]"></div>
          </div>
        </>
      ))}
    </>
  );
};
export default TopicCovered;
