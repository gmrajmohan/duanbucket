import React from "react";
import { ContainerWidth } from "@/utils/width";
import { useState } from "react";
interface TabArrInterFace {
  id: number;
  name: string;
}
[];

export interface ContactNameTabProps {
  HandleActiveIndex: (data: number) => void;
}

export default function ContactNameTab({
  HandleActiveIndex,
}: ContactNameTabProps) {
  const [ActiveForm, setActiveForm] = useState(1);

  const TabArr = [
    {
      id: 1,
      name: "Customer Support",
    },
    {
      id: 2,
      name: "General Contact",
    },
  ];

  const HandIndex = (data: number) => {
    HandleActiveIndex(data);
    setActiveForm(data);
  };
  return (
    <div className={ContainerWidth + " mt-10"}>
      <div className="grid grid-cols-2 border p-4 gap-4 justify-center items-center">
        {TabArr.map((values: TabArrInterFace) => (
          <div
            className={`lg:text-[20px] text-[15px] m-auto lg:w-[60%] font-medium -mb-[9px] text-center cursor-pointer ${
              ActiveForm == values.id ? "text-[#F48632]" : "text-black"
            }`}
            key={values.id}
            onClick={() => HandIndex(values.id)}
          >
            {values.name}
          </div>
        ))}
      </div>
    </div>
  );
}
