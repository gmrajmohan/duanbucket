import Image from "next/image";
import type { FC } from "react";

interface KeyTopicsProps {
  course_ideal : string[]
}

const KeyTopics: FC<KeyTopicsProps> = ({course_ideal}) => {
  const Topics = [
    {
      id: 1,
      topic: "Budging",
    },
    {
      id: 2,
      topic: "Funding",
    },
    {
      id: 3,
      topic: "Portfolios",
    },
    {
      id: 4,
      topic: "Dashboards",
    },
    {
      id: 5,
      topic: "Time Sheet",
    },
    {
      id: 6,
      topic: "Team Member",
    },
    {
      id: 7,
      topic: "Risk Management",
    },
    {
      id: 8,
      topic: "Issue Management",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 ">
        {course_ideal.map((values : any) => (
            <p
              key={values.id}
              className="flex  gap-[5px] mt-1 font-medium text-[#114466] text-[16px] w-[100%]"
            >
              <span className="w-[8%]">
                <Image
                  src={"/assets/tick.png"}
                  alt="tick"
                  width={12}
                  height={10}
                  className="mt-[6px]"
                />
              </span>
              {values}{" "}
            </p>
        ))}
      </div>
    </>
  );
};
export default KeyTopics;
