import type { FC } from "react";
import { ContainerWidthSub, ContainerWidth } from "@/utils/width";
import { LuIndianRupee } from "react-icons/lu";
import Heading from "@/components/Heading";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
interface PlanTabProps {}

const PlanTab: FC<PlanTabProps> = ({}) => {
  const [Active, setActive] = useState(1);

  const PlanArr = [
    {
      id: 1,
      planName: "Gold Plan",
      price: "4900",
      description: "Complete access for 90 days",
    },
    {
      id: 2,
      planName: "Silver Plan",
      price: "3900",
      description: "Complete access for 60 days",
    },
    {
      id: 3,
      planName: "Bronze Plan",
      price: "2000",
      description: "Complete access for 30 days",
    },
  ];

  const PlanDef = [
    {
      id: 1,
      content:
        "These plans offer flexibility and affordability for anyone seeking to enhance their PMP® exam readiness, regardless of their course enrollment status.",
      subtitle: "Benchmark Your Career. Get Certified",
    },
    {
      id: 2,
      content:
        "These plans offer flexibility and affordability for anyone seeking to enhance their PMP® exam readiness, regardless of their course enrollment status.",
      subtitle: "Benchmark Your Career. Get Certified",
    },
    {
      id: 3,
      content:
        "These plans offer flexibility and affordability for anyone seeking to enhance their PMP® exam readiness, regardless of their course enrollment status.",
      subtitle: "Benchmark Your Career. Get Certified",
    },
  ];
  return (
    <>
      <div className={ContainerWidthSub + " mt-10 mb-16"}>
        <div className="border rounded shadow-lg px-2 lg:py-14 py-2">
          <div className="lg:flex lg:px-12 items-center lg:gap-10 justify-center">
            <div className="lg:w-[45%]">
              {PlanArr.map((values) => (
                <div
                  className={`flex justify-between cursor-pointer items-center lg:p-4 p-2 font-medium lg:mb-4 mb-2 ${Active == values.id && "border-2 border-[#f58634]  tab-banchmark"}`}
                  key={values.id}
                  onClick={() => setActive(values.id)}
                >
                  <p className={`lg:text-[18px] text-sm font-medium text-[#255170] ${Active == values.id && "text-[#f58634] font-semibold"}`}>
                    {values.planName}
                  </p>
                  <p className={`flex items-center lg:text-xl  ${Active == values.id ? "text-[#f58634]" : "text-[#255170]" }`}>
                    <LuIndianRupee />
                    {values.price}
                  </p>
                  <p className="text-sm text-[#255170]">{values.description}</p>
                  {Active == values.id ? (
                    <div className="border-2 border-white rounded-[50%] lg:p-[6px] p-[2px] content-banchmark">
                      <div className="lg:p-[6px] p-[2px] bg-[#255170] rounded-[50%] "></div>
                    </div>
                  ) : (
                    <div className="lg:p-[7px] p-[2px]">
                      <div className="lg:p-[7px] p-[2px]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:w-[55%] bg-[#052550] lg:p-10 p-4 block h-[230px]">
              {PlanDef.map((values) => (
                <>
                  <div>
                    {Active == values.id && (
                      <>
                        <p className="text-white" key={values.id}>
                          {values.content}
                        </p>
                        <Heading content={values.subtitle} type={17} />
                        {/* <Button className="bg-[#f58634] rounded text-[12px] font-normal mt-4">
                          Buy Plan Now
                        </Button> */}
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanTab;
