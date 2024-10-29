import React, { FC, ReactNode } from "react";

interface CourseOverViewInter {
  overView: string |  TrustedHTML;
}

const CourseOverView: FC<CourseOverViewInter> = ({ overView }) => {
  return (
    <>
      <div className="md:text-[16px] text-[#114466] text-[14px] mt-4 overviewpg" dangerouslySetInnerHTML={{__html: overView}} />
    </>
  );
};

export default CourseOverView;
