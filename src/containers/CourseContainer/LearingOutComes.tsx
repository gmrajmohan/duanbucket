import type { FC } from "react";
import Heading from "@/components/Heading";

interface LearningOutcomesProps {
  OutComes : {
    OutcomeTitle : string,
    OutcomeDescription : string
  }[]
}

const LearningOutcomes: FC<LearningOutcomesProps> = ({OutComes}) => {
  const Topics = [
    {
      id: 1,
      topic: "Improved Project Monitoring:",
      content:
        "You can efficiently monitor and track project progress; compare planned versus actual progress; identify delays, and keep the project on track.",
    },
    {
      id: 2,
      topic: "Optimized Resource Allocation:",
      content:
        "You can track resource assignments, workload, and availability, ensuring that the right resources are allocated to tasks at the right time",
    },
    {
      id: 3,
      topic: "Data-Driven Decision Making:",
      content:
        "You can use the module's data and reporting capabilities to generate insightful reports and dashboards.",
    },
  ];

  return (
    <>
      <ul className="mt-10">
        {OutComes.map((values,Index) => (
          <li
            key={Index}
            className="flex mt-5 lg:gap-6 gap-3 px-10 bg-no-repeat lg:rounded-lg"
            style={{ backgroundImage: "url('/assets/tick-2.svg') ", backgroundSize : "22px" }}
          >
            <span>
              <Heading type={5.2} content={values.OutcomeTitle} />
              <p className="text-[#114466] font-medium lg:text-base text-sm">{values.OutcomeDescription}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LearningOutcomes;
