import Image from "next/image";
import type { FC } from "react";
interface HeadingProps {
  content?: string;
  type?: [number, string] | number;
  subcotent?: string;
  Title?: string;
  subTitle?: string;
  hr?: string;
}
const HeadingType = [
  "text-3xl text-[#0990bb] text-center font-semibold antialiased mb-14", //0
  "text-3xl text-white text-center font-normal antialiased mb-10", //1
  "text-2xl text-white text-center font-normal antialiased mt-10 mb-10", //2
  "text-3xl text-cyan-700 font-medium antialiased mb-4", //3
  "text-3xl text-[#0990bb] text-center font-bold mt-10 mb-4", //4
  "text-3xl text-[#114466] font-bold mt-14 mb-4", //5
  "text-xl text-[#114466] font-bold lg:mt-8 mt-4 mb-2", //6
  "text-xl text-blue-900 font-bold mt-4 mb-4", //7
  "text-3xl text-blue-900 font-light mt-16 mb-4", //8
  "text-3xl text-blue-900 font-light mt-16 mb-4", //9
  "text-3xl text-[#114466] lg:mt-14 mt-10 mb-1", //10
  "", //11
  "text-[18px] text-[#114466] lg:mt-10 mt-10 mb-1 font-bold", //12
  "text-xl text-[#f58634] lg:mt-14 mt-10 mb-1 font-medium", //13
  "text-md text-[#255170] lg:mt-14 mt-10 mb-1 font-bold", //14
  "lg:text-3xl text-2xl text-[#255170] text-center mb-1 font-semibold mt-10", //15
  "text-md text-[#255170]  mt-8 mb-1 font-bold", //16
  "text-xl text-white  mt-8 mb-1 ", //17
  "mt-10 lg:px-0 px-10 mb-10 lg:w-[60%] m-auto text-center text-[18px]", //18
  "mt-4 mb-4 lg:w-[60%] m-auto text-white text-center lg:text-3xl text-xl font-semibold", //19
  "mt-4 mb-4 text-[#1A3F59] m-auto  text-2xl font-semibold", //20
  "mt-4 mb-4 text-white text-center m-auto  text-2xl font-semibold", //21
  "mt-4 mb-4 text-black text-center m-auto  text-lg lg:w-[30%] lg:p-0 p-4", //22
  "mt-10 mb-4 font-bold text-3xl lg:p-0 p-4 text-[#0990bb] ", //23
  "mt-10 mb-4 text-[#f58634] font-semibold text-2xl lg:p-0 p-4", //24

  


];


const Heading: FC<HeadingProps> = ({
  content,
  type,
  subcotent,
  Title,
  subTitle,
  hr,
}) => {
  return (
    <>
      {type == 0 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 1 && (
        <h2 className={HeadingType[type]}>
        
          <span className="text-orange-500 font-bold">   Synergy  </span> 
          - Your Pathway to Professional Achievement
        </h2>
      )}
      {type == 2 && (
        <h2 className={HeadingType[type]}>
          Listen from{" "}
          <span className="text-orange-500 font-bold">Mr.Nihar Nimbarkar </span>{" "}
          Student Stynergy (Thane, Mumbai centre)
        </h2>
      )}
      {type == 3 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 4 && <h2 className={HeadingType[type]}>{content}</h2>}

      {/* course title */}
      {type == 5 && (
        <>
          <h2 className="lg:text-2xl text-xl text-[#114466] font-bold lg:mt-14 mt-10 mb-1">
            {Title}
          </h2>
          <h2 className="lg:text-3xl text-2xl text-[#f58634] font-bold mb-1">
            {subTitle}
          </h2>
        </>
      )}

      {type == 5.1 && (
        <>
          <div className="flex lg:gap-5 gap-2 items-center  md:mb-8 mb-2">
            <Image src={"/assets/time.png"} width={25} height={30} alt="time" />{" "}
            <span className="lg:text-2xl text-xl font-medium text-[#114466] mt-2">
              {" "}
              {content} {hr}
            </span>
          </div>
        </>
      )}

      {type == 5.2 && (
        <>
          <h2 className="lg:text-xl text-[#114466] lg:font-bold font-semibold  mb-1">
            {content}
          </h2>
        </>
      )}

      {type == 5.3 && (
        <>
          <h2 className="text-3xl text-[#114466]">
            {" "}
            A <span className="text-[#f58634] font-bold">
              Must-to-Have{" "}
            </span>{" "}
            Skill for{" "}
          </h2>
        </>
      )}
      {type == 5.4 && (
        <>
          <h2 className="text-3xl lg:mb-14 lg:mt-0 mt-10 text-[#114466]">
            {" "}
            Frequently asked{" "}
            <span className="text-[#f58634] font-bold">questions</span>{" "}
          </h2>
        </>
      )}

      {type == 7 && (
        <>
          <div className="lg:text-3xl text-2xl text-[#114466] lg:mt-14 mt-10 lg:mb-1">
            {content} <span className="text-[#f58634] font-bold"> {Title}</span>{" "}
            <br />
            {subTitle}
          </div>
        </>
      )}
      {/* course title */}

      {type == 6 && <h2 className={HeadingType[type]}>{content}</h2>}

      {type == 8 && (
        <h2 className={HeadingType[type]}>
          Here are{" "}
          <span className="text-[#f58634] font-bold">Three Key abilities </span>
          you gain with this course
        </h2>
      )}
      {type == 9 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 10 && (
        <h2 className={HeadingType[type]}>
          What drives this
          <span className="font-bold text-[#f58634]"> career path? </span>
        </h2>
      )}
      {type == 11 && (
        <h2 className="lg:w-[100%] lg:mt-10 mt-4 mb-6">
          <span className="text-[#f58634] lg:text-2xl font-bold">
            {" "}
            Synergy's Benchmark is a dynamic web-based mock test portal designed
            exclusively for PMP® exam aspirants.
          </span>{" "}
          <span className="text-[#1f4f6f] lg:text-xl font-semibold">
            This platform has already served thousands of project management
            professionals in India and beyond.
          </span>
        </h2>
      )}
      {type == 12 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 13 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 14 && <h2 className={HeadingType[type]}>{content}</h2>}

      {type == 15 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 16 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 17 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 18 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 19 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 20 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 21 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 22 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 23 && <h2 className={HeadingType[type]}>{content}</h2>}
      {type == 24 && <h2 className={HeadingType[type]}>{content}</h2>}


    </>
  );
};
export default Heading;
