import type { FC } from "react";
import { useContext } from "react";
import { CourseCardContext } from "./Context";
import StreamHeading from "./StreamHeading";
import CourseCard from "./CourseCard";
import CourseCardAccordion from "./Accordian";
interface StreamTitleProps {
  StreamTab: {
    id: number;
    StreamName: string;
  }[];
}

const StreamWithCourse: FC<StreamTitleProps> = ({ StreamTab }) => {
  const { Clicked, setClicked } = useContext(CourseCardContext);
  const handleClickedStream = (id: number) => {
    setClicked(id);
  };

  return (
    <>
      <div className={`md:flex justify-between mb-6 hidden`}>
        {StreamTab.map((values) => (
          <>
            <div className="flex flex-col ">
            
              <button
                className={`  group transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-900 text-xl font-semibold smooth-font  ${
                  Clicked == values.id ? "text-blue-900 " : "text-gray-500"
                } `}
                onClick={() => handleClickedStream(values.id)}
              >
                {values.id == 0 && <span>{values.StreamName}</span>}
                {values.id != 0 && (
                  <>
                    <span className={` `}>{values.StreamName}</span>
                  </>
                )}
                <div
                  className={` h-[2px]   bg-left-bottom bg-gradient-to-r from-orange-800 to-orange-800 bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-[#000] font-medium 
                    ${Clicked == values.id ? " bg-orange-800 " : ""}`}
                ></div>
              </button>
            </div>
          </>
        ))}
      </div>
      <CourseCardAccordion StreamTab={StreamTab} Clicked={Clicked} />
      <div className="lg:block hidden">
        <StreamHeading Clicked={Clicked} />
        <CourseCard />
      </div>
    </>
  );
};
export default StreamWithCourse;
