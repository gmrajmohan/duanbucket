import React, { FC } from "react";
import { ContainerWidth } from "@/utils/width";
import Heading from "@/components/Heading";
import CourseOverView from "./courseOverView";
import KeyTopics from "./KeyTopics";
import SalaryRanges from "./SalaryRanges";
import LearingOutComes from "./LearingOutComes";
import CourseEnqFrom from "./CourseEnqFrom";
import { CourseInterface } from "./type";
import CourseContext from "@/Context/Course";
import { useContext } from "react";
const FormSec: FC<CourseInterface> = ({ course }) => {
  const { scrollToRef } = useContext(CourseContext);

  return (
    <>
      <div className="md:flex gap-24" ref={scrollToRef}>
        <div className="lg:w-[65%]">
          <Heading type={5} Title={course.SubTitle} />

          <h3 className="lg:text-3xl text-2xl text-[#f58634] font-bold mb-1 lg:w-[100%]  md:w-[100%] w-[100%] md:py-2">
            {course.Title}
          </h3>

          <Heading type={5.1} content="Duration:" hr={course.Duration} />
          <Heading type={6} content="Course Overview:" />
          <CourseOverView overView={course.Overview} />
          {course.KeyTopic && (
            <>
              <Heading type={6} content="Key Topics Covered" />
              <KeyTopics course_ideal={course.KeyTopic} />
            </>
          )}

          {course.OutComes && (
            <>
              <Heading
                type={7}
                content="Here are top"
                Title="three learning outcomes"
                subTitle="you can gain with this course"
              />
              <LearingOutComes OutComes={course.OutComes} />
            </>
          )}
        </div>
        <div className="lg:w-[35%] ">
          <CourseEnqFrom
            CourseId={course.CourseId}
            Title={course.Title}
            stream_id={course.stream_id}
          />
        </div>
      </div>
    </>
  );
};

export default FormSec;
