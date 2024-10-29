import { useState, type FC } from "react";
import Heading from "@/components/Heading";
import StreamWithCourse from "./StreamTitle";
import {StreamTabValues} from "@/utils/responses/index"
import { ContainerWidth } from "@/utils/width";
import { CourseCardContext } from "./Context";

interface MainProps {}

const CourseCardTab: FC<MainProps> = ({}) => {
  const [Clicked,setClicked] = useState(1);
  return (
    <>
    <div className={ContainerWidth + ' lg:py-20 py-10'}>
      <CourseCardContext.Provider value={{Clicked,setClicked}}>
      <Heading content="Explore Our Professional Courses" type={0} />
      <StreamWithCourse StreamTab={StreamTabValues}/>
      </CourseCardContext.Provider>
    </div>
    </>
  );
};
export default CourseCardTab;
