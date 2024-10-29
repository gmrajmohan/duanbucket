import { ContainerWidth } from "@/utils/width";
import type { FC } from "react";
import Heading from "@/components/Heading";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

interface CorporateTrainingProps {}

const CorporateTrainingConotent: FC<CorporateTrainingProps> = ({}) => {
  return (
    <>
      <div className={`m-auto ${ContainerWidth} lg:p-20 py-10`}>
        <div className="md:flex justify-between gap-20">
          <div className="md:w-[50%]">
            <Heading content="Corporate Training" type={3} />
            <p className="font-normal text-[#505050]">
              Develop A Cutting Edge WorkforceMeet your organizational training
              needs and excel in today’s competitive environment Managing people
              and material resources - what we call project management - can
              make or break a business. Today, project management is largely
              driven by software. Hence, the selection of software,
              customization, and effective implementation can go a long way in
              the success of projects, and thus businesses..
            </p>
            <div className="flex lg:gap-5 gap-5 lg:justify-start  items-center py-10">
              <span>Register Now:</span>

              <Link
                href="/corporate"
                className=" md:px-6 px-2 py-1 md:py-3 rounded bg-orange-700 lg:text-md text-sm text-white font-light"
              >
                For Corporate
              </Link>

              {/* <Link href="/corporate" className="md:px-6 px-2 md:py-3 lg:text-md text-sm py-1 rounded bg-orange-700 text-white font-light">
                For Employees
              </Link> */}
            </div>
          </div>
          <div className="md:flex items-center md:w-[50%] lg:mt-0 mt-10">
            <Image
              src="/assets/corporateTraining/rg-vector.png"
              width={500}
              height={400}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CorporateTrainingConotent;
