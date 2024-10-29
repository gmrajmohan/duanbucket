import type { FC } from "react";
import { StreamTabValues } from "@/utils/responses";
interface StreamHeadingProps {
  Clicked : number
}
interface StreamTitleProps {
  StreamTab: {
    id: number;
    StreamName: string;
  }[];
}



const StreamHeading: FC<StreamHeadingProps> = ({Clicked}) => {




  const StreamHeadingArr = [
    {
      id : 1,
      Heading : "Explore Rewarding Careers:",
      subHeading : "in Project Management.",
      color :"Highly sought-after skills "
    },
    {
      id : 2,
      Heading : "Explore Lucrative Careers:",
      subHeading : "in Office Automation.",
      color : "In-Demand Skills "
    },
    {
      id : 3,
      Heading : "Exciting Career Avenues:",
      subHeading : "Digital Marketing Skills.",
      color :"Mastering "
    },
    {
      id : 4,
      Heading : "Thriving Professional Path:",
      subHeading : "in Business Accounting.",
      color : "Mastery "
    },
    {
      id : 5,
      Heading : "Embark on an ERP Solutions Career:",
      subHeading : " SAP Professional.",
      color :"Become a "
    }
  ]
  return (
    <>
      <p className="md:text-[40px] text-2xl text-[#114466] font-normal tracking-wide lg:leading-[55px]">
      {/* Explore Rewarding Careers:<br />
        <span className="text-orange-500 font-semibold leading-9">
          High-Demand Skills
        </span>{" "}
        in {StreamTabValues.map((values)=>(Clicked == values.id && values.StreamName))} */}
        {StreamHeadingArr.map((values)=>(
         values.id == Clicked && 
         <>
         <span>{values.Heading}</span> 
          <br />
          <span className="text-orange-500 font-semibold leading-9">{values.color } </span>
         <span>{values.subHeading }</span>

         </>
        ))}
      </p>
    </>
  );
};
export default StreamHeading;
